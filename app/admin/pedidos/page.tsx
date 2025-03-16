import { OrdersTable } from "@/components/admin/orders-table"
import { OrderFilters } from "@/components/admin/order-filters"
import { ordersData } from "@/data/orders"

export default function PedidosPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pedidos</h1>
      </div>
      
      <OrderFilters />
      
      <OrdersTable 
        orders={ordersData}
      />
    </div>
  )
}

