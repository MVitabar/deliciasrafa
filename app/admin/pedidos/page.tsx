import { OrdersTable } from "@/components/admin/orders-table"
import { OrderFilters } from "@/components/admin/order-filters"
import { Button } from "@/components/ui/button"
import { Download, Plus } from "lucide-react"

export default function PedidosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-2xl font-bold">Gerenciamento de Pedidos</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Pedido
          </Button>
        </div>
      </div>

      <OrderFilters />

      <OrdersTable />
    </div>
  )
}

