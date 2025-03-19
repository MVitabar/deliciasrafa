import { Button } from "@/components/ui/button"
import { Download, Plus } from "lucide-react"
import { BasketsTable } from "@/components/admin/baskets-table"

export default function ProdutosPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between items-center">
        <h1 className="text-3xl font-bold">Gerenciamento de Cestas</h1>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="h-4 w-4" />
            Exportar
          </Button>
          <Button className="gap-2" asChild>
            <a href="/admin/produtos/novo">
              <Plus className="h-4 w-4" />
              Nova Cesta
            </a>
          </Button>
        </div>
      </div>

      

      <BasketsTable />
    </div>
  )
}