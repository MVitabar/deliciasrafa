import { Button } from "@/components/ui/button"
import { Download, Plus, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { BasketsTable } from "@/components/admin/baskets-table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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

      <div className="flex flex-col sm:flex-row gap-4 items-end">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar cestas..." className="pl-8" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Mais recentes</SelectItem>
              <SelectItem value="name">Nome (A-Z)</SelectItem>
              <SelectItem value="price-asc">Preço (menor para maior)</SelectItem>
              <SelectItem value="price-desc">Preço (maior para menor)</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as categorias</SelectItem>
              <SelectItem value="breakfast">Café da manhã</SelectItem>
              <SelectItem value="special">Especiais</SelectItem>
              <SelectItem value="diet">Diet/Fit</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <BasketsTable />
    </div>
  )
}

