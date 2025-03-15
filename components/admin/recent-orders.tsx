"use client"

import Link from "next/link"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getRecentOrders } from "@/lib/data"

export function RecentOrders() {
  const recentOrders = getRecentOrders()

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Pedido</TableHead>
            <TableHead className="w-[180px]">Data</TableHead>
            <TableHead>Cliente</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[120px]">Total</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentOrders.map((order) => (
            <TableRow key={order.id}>
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
              <TableCell className="text-right">
                <Link href={`/admin/pedidos/${order.id}`}>
                  <Button variant="outline" size="sm">
                    Ver
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

