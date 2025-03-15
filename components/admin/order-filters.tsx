"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, X } from "lucide-react"

export function OrderFilters() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-end">
      <div className="relative w-full sm:w-96">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Buscar pedidos..." className="pl-8" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 w-full">
        <Select defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os status</SelectItem>
            <SelectItem value="pending">Pendente</SelectItem>
            <SelectItem value="processing">Em processamento</SelectItem>
            <SelectItem value="completed">Concluído</SelectItem>
            <SelectItem value="cancelled">Cancelado</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger>
            <SelectValue placeholder="Pagamento" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Todos os métodos</SelectItem>
            <SelectItem value="credit">Cartão de Crédito</SelectItem>
            <SelectItem value="pix">PIX</SelectItem>
            <SelectItem value="boleto">Boleto</SelectItem>
            <SelectItem value="transfer">Transferência</SelectItem>
          </SelectContent>
        </Select>

        <Input type="date" placeholder="Data inicial" />
        <Input type="date" placeholder="Data final" />
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="icon">
          <X className="h-4 w-4" />
        </Button>
        <Button className="bg-rose-600 hover:bg-rose-700 text-white">Filtrar</Button>
      </div>
    </div>
  )
}

