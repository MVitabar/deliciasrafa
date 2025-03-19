"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
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
        {baskets.map((basket) => (
          <Card key={basket.id} className="w-full">
            <CardContent className="flex items-center p-4 space-x-4">
              <div className="relative h-16 w-16 rounded-md overflow-hidden flex-shrink-0">
                <Image src={basket.image || "/placeholder.svg"} alt={basket.name} fill className="object-cover" />
              </div>
              <div className="flex-1 flex  justify-between">
                <div>
                  <h3 className="font-medium text-base">{basket.name}</h3>
                  <p className="font-semibold mt-1">R$ {basket.price.toFixed(2)}</p>
                </div>
                <div className="flex flex-col gap-2 mt-4 self-end">
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
      </div>
    )
  }

  // Vista escritorio - tabla
  return (
    <div>
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
          {baskets.map((basket) => (
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
    </div>
  )
}
