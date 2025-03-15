"use client"

import { useState } from "react"
import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
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
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { getOrders } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"

export function OrdersTable() {
  const [page, setPage] = useState(1)
  const [selectedOrders, setSelectedOrders] = useState<string[]>([])
  const [isMobile, setIsMobile] = useState(false)

  // Comprobar si estamos en móvil en componentes cliente
  if (typeof window !== "undefined" && !isMobile !== window.innerWidth >= 768) {
    setIsMobile(window.innerWidth < 768)
  }

  const orders = getOrders()

  const toggleOrderSelection = (orderId: string) => {
    setSelectedOrders((prev) => (prev.includes(orderId) ? prev.filter((id) => id !== orderId) : [...prev, orderId]))
  }

  const toggleAllOrders = () => {
    if (selectedOrders.length === orders.length) {
      setSelectedOrders([])
    } else {
      setSelectedOrders(orders.map((order) => order.id))
    }
  }

  // Vista móvil - usar tarjetas en lugar de tabla
  if (isMobile) {
    return (
      <div className="space-y-4">
        <div className="space-y-2">
          {orders.map((order) => (
            <Card key={order.id} className="mb-3">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <Link href={`/admin/pedidos/${order.id}`} className="hover:underline font-medium">
                      #{order.number}
                    </Link>
                    <p className="text-xs text-muted-foreground">{new Date(order.date).toLocaleDateString("pt-BR")}</p>
                  </div>
                  <Badge
                    className={
                      order.status === "Concluído"
                        ? "bg-green-500"
                        : order.status === "Pendente"
                          ? "bg-yellow-500"
                          : order.status === "Em processamento"
                            ? "bg-blue-500"
                            : order.status === "Cancelado"
                              ? "bg-red-500"
                              : ""
                    }
                  >
                    {order.status}
                  </Badge>
                </div>
                <div className="mb-2">
                  <p className="font-semibold text-sm">{order.customer.name}</p>
                  <p className="text-xs text-muted-foreground">{order.customer.email}</p>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-medium">R$ {order.total.toFixed(2)}</p>
                    <Badge variant="outline" className="text-xs">
                      {order.paymentMethod}
                    </Badge>
                  </div>
                  <Link href={`/admin/pedidos/${order.id}`}>
                    <Button variant="outline" size="sm">
                      Ver detalhes
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">
            Mostrando <strong>1-10</strong> de <strong>100</strong> pedidos
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => setPage(page - 1)} disabled={page === 1}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="min-w-8">
              {page}
            </Button>
            <Button variant="outline" size="icon" onClick={() => setPage(page + 1)}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
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
                  checked={selectedOrders.length === orders.length && orders.length > 0}
                  onCheckedChange={toggleAllOrders}
                  aria-label="Selecionar todos os pedidos"
                />
              </TableHead>
              <TableHead className="w-[100px]">Pedido</TableHead>
              <TableHead className="w-[180px]">Data</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="w-[120px]">Total</TableHead>
              <TableHead className="w-[100px]">Pagamento</TableHead>
              <TableHead className="w-[70px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>
                  <Checkbox
                    checked={selectedOrders.includes(order.id)}
                    onCheckedChange={() => toggleOrderSelection(order.id)}
                    aria-label={`Selecionar pedido ${order.number}`}
                  />
                </TableCell>
                <TableCell className="font-medium">
                  <Link href={`/admin/pedidos/${order.id}`} className="hover:underline">
                    #{order.number}
                  </Link>
                </TableCell>
                <TableCell>{new Date(order.date).toLocaleDateString("pt-BR")}</TableCell>
                <TableCell>
                  <div className="flex flex-col">
                    <span>{order.customer.name}</span>
                    <span className="text-xs text-muted-foreground">{order.customer.email}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge
                    className={
                      order.status === "Concluído"
                        ? "bg-green-500"
                        : order.status === "Pendente"
                          ? "bg-yellow-500"
                          : order.status === "Em processamento"
                            ? "bg-blue-500"
                            : order.status === "Cancelado"
                              ? "bg-red-500"
                              : ""
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>R$ {order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant="outline">{order.paymentMethod}</Badge>
                </TableCell>
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
                      <DropdownMenuItem>
                        <Link href={`/admin/pedidos/${order.id}`} className="w-full">
                          Ver detalhes
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Editar pedido</DropdownMenuItem>
                      <DropdownMenuItem>Enviar e-mail</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">Cancelar pedido</DropdownMenuItem>
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
          Mostrando <strong>1-10</strong> de <strong>100</strong> pedidos
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={() => setPage(page - 1)} disabled={page === 1}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" className="min-w-8">
            {page}
          </Button>
          <Button variant="outline" size="icon" onClick={() => setPage(page + 1)}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

