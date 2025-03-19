"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
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
import { Card, CardContent } from "../ui/card"

export function BasketsTable() {
  const [page, setPage] = useState(1)
  const [selectedBaskets, setSelectedBaskets] = useState<number[]>([])
  const [isMobile, setIsMobile] = useState(false)
  const [basketToDelete, setBasketToDelete] = useState<number | null>(null)

  // Filtering states
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Check on mount
    checkMobile()

    // Add event listener
    window.addEventListener('resize', checkMobile)

    // Cleanup
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Filtering and sorting logic
  const filteredBaskets = useMemo(() => {
    return basketsData.filter(basket => 
      basket.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      basket.price.toString().includes(searchTerm)
    )
  }, [searchTerm])

  // Pagination
  const itemsPerPage = 10
  const totalPages = Math.ceil(filteredBaskets.length / itemsPerPage)
  const paginatedBaskets = filteredBaskets.slice(
    (page - 1) * itemsPerPage, 
    page * itemsPerPage
  )

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

  // Desktop view
  if (!isMobile) {
    return (
      <div>
        <div className="flex flex-col sm:flex-row gap-4 items-end mb-4">
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Buscar cestas por nome ou preço..." 
              className="pl-8" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Imagem</TableHead>
              <TableHead>Nome</TableHead>
              <TableHead>Preço</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedBaskets.map((basket) => (
              <TableRow key={basket.id}>
                <TableCell>
                  <div className="relative h-12 w-12 rounded-md overflow-hidden">
                    <Image 
                      src={basket.image || "/placeholder.svg"} 
                      alt={basket.name} 
                      fill 
                      className="object-cover" 
                    />
                  </div>
                </TableCell>
                <TableCell className="font-medium">{basket.name}</TableCell>
                <TableCell>R$ {basket.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => setBasketToDelete(basket.id)}>
                      <Trash className="h-4 w-4 text-red-500" />
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/admin/produtos/${basket.id}`}>
                        <Edit className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-muted-foreground">
            Mostrando <strong>{paginatedBaskets.length}</strong> de <strong>{filteredBaskets.length}</strong> cestas
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setPage(Math.max(1, page - 1))} 
              disabled={page === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="min-w-8">
              {page}
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => setPage(Math.min(totalPages, page + 1))} 
              disabled={page === totalPages}
            >
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

  // Mobile view
  return (
    <div className="space-y-4">
      <div className="relative w-full sm:w-96">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Buscar cestas por nome ou preço..." 
          className="pl-8" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {paginatedBaskets.map((basket) => (
        <Card key={basket.id} className="w-full">
          <CardContent className="flex items-center p-4 space-x-4">
            <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
              <Image src={basket.image || "/placeholder.svg"} alt={basket.name} fill className="object-cover" />
            </div>
            <div className="flex-1 flex justify-between">
              <div>
                <h3 className="font-medium text-base">{basket.name}</h3>
                <p className="font-semibold mt-1">R$ {basket.price.toFixed(2)}</p>
              </div>
              <div className="flex flex-col gap-2 self-end">
                <Button variant="outline" size="sm" onClick={() => setBasketToDelete(basket.id)}>
                  <Trash className="h-4 w-4 text-red-500" />
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/admin/produtos/${basket.id}`}>
                    <Edit className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">
          Mostrando <strong>{paginatedBaskets.length}</strong> de <strong>{filteredBaskets.length}</strong> cestas
        </div>
        <div className="flex items-center space-x-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setPage(Math.max(1, page - 1))} 
            disabled={page === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="min-w-8">
            {page}
          </Button>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => setPage(Math.min(totalPages, page + 1))} 
            disabled={page === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
