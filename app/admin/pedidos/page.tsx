"use client"

import { OrdersTable } from "@/components/admin/orders-table"
import { OrderFilters } from "@/components/admin/order-filters"
import { ordersData } from "@/data/orders"
import { useState } from "react"
import { Order } from "@/types/order"

export default function PedidosPage() {
  const [filteredOrders, setFilteredOrders] = useState<Order[]>(ordersData)

  const handleFilterChange = (filters: {
    searchTerm: string,
    status: string,
    paymentMethod: string,
    startDate: string,
    endDate: string
  }) => {
    const filtered = ordersData.filter(order => {
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

    setFilteredOrders(filtered)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pedidos</h1>
      </div>
      
      <OrderFilters onFilterChange={handleFilterChange} />
      
      <OrdersTable 
        orders={filteredOrders}
      />
    </div>
  )
}
