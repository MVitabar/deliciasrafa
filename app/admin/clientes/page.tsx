import { CustomersTable } from "@/components/admin/customers-table"
import { CustomerFilters } from "@/components/admin/customer-filters"
import { Button } from "@/components/ui/button"
import { Download, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ClientesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-3xl font-bold">Gerenciamento de Clientes</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Novo Cliente
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 items-end">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar clientes..." className="pl-8" />
        </div>
        <CustomerFilters />
      </div>

      <CustomersTable />
    </div>
  )
}

