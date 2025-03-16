"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { formatPrice } from "@/lib/utils"
import { Order } from "@/types/order"

interface OrderDetailsProps {
  order: Order | null
  isOpen: boolean
  onClose: () => void
}

export function OrderDetails({ order, isOpen, onClose }: OrderDetailsProps) {
  if (!order) return null

  const getStatusColor = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      processing: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    }
    return colors[status as keyof typeof colors] || colors.pending
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Pedido #{order.id}</DialogTitle>
          <DialogDescription>
            Detalhes do pedido realizado em{" "}
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "long",
              timeStyle: "short",
            }).format(new Date(order.date))}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Status do Pedido */}
          <div>
            <h3 className="font-medium mb-2">Status</h3>
            <Badge className={getStatusColor(order.status)}>
              {order.status === "pending" && "Pendente"}
              {order.status === "processing" && "Em Processamento"}
              {order.status === "completed" && "Concluído"}
              {order.status === "cancelled" && "Cancelado"}
            </Badge>
          </div>

          {/* Informações do Cliente */}
          <div>
            <h3 className="font-medium mb-2">Cliente</h3>
            <div className="space-y-1 text-sm">
              <p className="font-medium">{order.customer.name}</p>
              <p className="text-muted-foreground">{order.customer.email}</p>
              <p className="text-muted-foreground">{order.customer.phone}</p>
              <p className="text-muted-foreground">{order.customer.address}</p>
            </div>
          </div>

          {/* Cesta */}
          <div>
            <h3 className="font-medium mb-2">Cesta</h3>
            <div className="rounded-lg border p-4">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{order.basketName}</p>
                  {order.notes && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Observações: {order.notes}
                    </p>
                  )}
                </div>
                <p className="font-medium">{formatPrice(order.total)}</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}