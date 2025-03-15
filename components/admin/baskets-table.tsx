"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Copy, Edit, MoreHorizontal, Trash } from "lucide-react"
import { basketsData } from "@/data/baskets"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { toast } from "@/components/ui/use-toast"

export function BasketsTable() {
  const [page, setPage] = useState(1)
  const [selectedBaskets, setSelectedBaskets] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [basketToDelete, setBasketToDelete] = useState<number | null>(null)

  // Comprobar si estamos en móvil en componentes cliente
  if (typeof window !== "undefined" && !isMobile !== window.innerWidth >= 768) {
    setIsMobile(window.innerWidth < 768)
  }

  const baskets = basketsData

  const toggleBasketSelection = (basketId: number) => {
    setSelectedBaskets((prev) => (prev.includes(basketId) ? prev.filter((id) => id !== basketId) : [...prev, basketId]))
  }

  const toggleAllBaskets = () => {
    if (selectedBaskets.length === baskets.length) {
      setSelectedBaskets([])
    } else {
      setSelectedBaskets(baskets.map((basket) => basket.id))
    }
  }

  const handleDeleteConfirm = () => {
    if (basketToDelete !== null) {
      // Simulación de eliminación
      toast({
        title: "Cesta excluída",
        description: "A cesta foi excluída com sucesso.",
      })
      setBasketToDelete(null)
    }
  }

  const handleDuplicate = (basketId: number) => {
    toast({
      title: "Cesta duplicada",
      description: "Uma cópia da cesta foi criada.",
    })
  }

  // Vista móvil - usar tarjetas en lugar de tabla
  if (isMobile) {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          {baskets.map((basket) => (
            <Card key={basket.id} className="mb-3">
              <CardContent className="p-4">
                <div className="flex gap-3">
                  <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                    <Image src={basket.image || "/placeholder.svg"} alt={basket.name} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-base">{basket.name}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-1">{basket.shortDescription}</p>
                    <p className="font-semibold mt-1">R$ {basket.price.toFixed(2)}</p>
                  </div>
                </div>

                <div className="flex justify-end gap-2 mt-3">
                  <Button variant="outline" size="sm" onClick={() => setBasketToDelete(basket.id)}>
                    <Trash className="h-4 w-4 text-red-500" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => handleDuplicate(basket.id)}>
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/admin/produtos/${basket.id}`}>
                      <Edit className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            Mostrando <strong>1-{baskets.length}</strong> de <strong>{baskets.length}</strong> cestas
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => setPage(page - 1)} disabled={page === 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="min-w-8">
              {page}
            </Button>
            <Button variant="outline" size="icon" onClick={() => setPage(page + 1)} disabled={true}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <AlertDialog open={basketToDelete !== null} onOpenChange={(open) => !open && setBasketToDelete(null)}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta ação não pode ser desfeita. Isso excluirá permanentemente a cesta.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteConfirm} className="bg-red-600 hover:bg-red-700">
                Excluir
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    )
  }

  // Vista escritorio - tabla normal
  return (
    <div className="space-y-4">
      <div className="rounded-md border overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox
                  checked={selectedBaskets.length === baskets.length && baskets.length > 0}
                  onCheckedChange={toggleAllBaskets}
                  aria-label="Selecionar todas as cestas"
                />
              </TableHead>
              <TableHead className="w-[80px]">Imagem</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Descrição</TableHead>
              <TableHead className="w-[100px] text-right">Preço</TableHead>
              <TableHead className="w-[100px] text-right">Itens</TableHead>
              <TableHead className="w-[100px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {baskets.map((basket) => (
              <TableRow key={basket.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedBaskets.includes(basket.id)}
                    onCheckedChange={() => toggleBasketSelection(basket.id)}
                    aria-label={`Selecionar cesta ${basket.name}`}
                  />
                </TableCell>
                <TableCell>
                  <div className="relative h-10 w-10 rounded-md overflow-hidden">
                    <Image src={basket.image || "/placeholder.svg"} alt={basket.name} fill className="object-cover" />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{basket.name}</TableCell>
                <TableCell className="max-w-[300px]">
                  <p className="truncate">{basket.shortDescription}</p>
                </TableCell>
                <TableCell className="text-right">R$ {basket.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">{basket.items.length}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Abrir menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Ações</DropdownMenuLabel>
                      <DropdownMenuItem asChild>
                        <Link href={`/admin/produtos/${basket.id}`}>
                          <Edit className="mr-2 h-4 w-4" />
                          Editar
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleDuplicate(basket.id)}>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicar
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600" onClick={() => setBasketToDelete(basket.id)}>
                        <Trash className="mr-2 h-4 w-4" />
                        Excluir
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          Mostrando <strong>1-{baskets.length}</strong> de <strong>{baskets.length}</strong> cestas
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => setPage(page - 1)} disabled={page === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="min-w-8">
            {page}
          </Button>
          <Button variant="outline" size="icon" onClick={() => setPage(page + 1)} disabled={true}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <AlertDialog open={basketToDelete !== null} onOpenChange={(open) => !open && setBasketToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
            <AlertDialogDescription>
              Esta ação não pode ser desfeita. Isso excluirá permanentemente a cesta.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancelar</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteConfirm} className="bg-red-600 hover:bg-red-700">
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

