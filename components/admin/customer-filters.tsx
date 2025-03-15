"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function CustomerFilters() {
  return (
    <div className="flex flex-wrap gap-4">
      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos os clientes</SelectItem>
          <SelectItem value="active">Ativos</SelectItem>
          <SelectItem value="inactive">Inativos</SelectItem>
          <SelectItem value="new">Novos (30 dias)</SelectItem>
        </SelectContent>
      </Select>

      <Select defaultValue="all">
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Mais recentes</SelectItem>
          <SelectItem value="name">Nome (A-Z)</SelectItem>
          <SelectItem value="orders">Mais pedidos</SelectItem>
          <SelectItem value="spent">Maior gasto</SelectItem>
        </SelectContent>
      </Select>

      <Button className="bg-rose-600 hover:bg-rose-700 text-white">Aplicar</Button>
    </div>
  )
}

