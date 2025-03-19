"use client"

import { useState, useMemo } from "react"
import { Order } from "../../types/order"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface OrdersTableProps {
  orders: Order[]
}

export function OrdersTable({ orders }: OrdersTableProps) {
  const [filters, setFilters] = useState({
    searchTerm: "",
    status: "all",
    paymentMethod: "all",
    startDate: "",
    endDate: ""
  })

  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      // Search term filter
      const matchesSearch = 
        filters.searchTerm === "" || 
        order.id.toString().includes(filters.searchTerm) ||
        order.customer.name.toLowerCase().includes(filters.searchTerm.toLowerCase())

      // Status filter
      const matchesStatus = 
        filters.status === "all" || 
        order.status === filters.status

      // Payment method filter
      const matchesPaymentMethod = 
        filters.paymentMethod === "all" || 
        order.paymentMethod === filters.paymentMethod

      // Date range filter
      const orderDate = new Date(order.date)
      const matchesDateRange = 
        (!filters.startDate || orderDate >= new Date(filters.startDate)) &&
        (!filters.endDate || orderDate <= new Date(filters.endDate))

      return matchesSearch && matchesStatus && matchesPaymentMethod && matchesDateRange
    })
  }, [orders, filters])

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Pedidos Recentes</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Pedido</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data</TableHead>
                <TableHead>Valor</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.customer.name}</TableCell>
                  <TableCell>{order.status}</TableCell>
                  <TableCell>
                    {new Intl.DateTimeFormat('pt-BR').format(new Date(order.date))}
                  </TableCell>
                  <TableCell>
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(order.total)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
