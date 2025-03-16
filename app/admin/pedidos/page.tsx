import { OrdersTable } from "@/components/admin/orders-table"
import { OrderFilters } from "@/components/admin/order-filters"

export default function PedidosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pedidos</h1>
      </div>
      
      <OrderFilters />
      
      <OrdersTable 
        orders={[]} // Replace with your actual orders data
      />
    </div>
  )
}

