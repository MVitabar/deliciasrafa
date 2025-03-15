"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { basketsData } from "@/data/baskets"

export function ProductsReportTable() {
  // Transformar os dados das cestas em dados para o relatório
  const products = basketsData.map((basket, index) => {
    // Simular dados de vendas para cada cesta
    const quantity = Math.floor(Math.random() * 30) + 5
    const revenue = basket.price * quantity

    return {
      id: basket.id.toString(),
      name: basket.name,
      sku: `CESTA-${basket.id.toString().padStart(3, "0")}`,
      price: basket.price,
      quantity,
      revenue,
      status: "Em estoque",
    }
  })

  // Ordenar por receita (do maior para o menor)
  const sortedProducts = [...products].sort((a, b) => b.revenue - a.revenue)

  // Calcular a receita total para as porcentagens
  const totalRevenue = sortedProducts.reduce((sum, product) => sum + product.revenue, 0)

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Produto</TableHead>
            <TableHead>SKU</TableHead>
            <TableHead className="text-right">Preço</TableHead>
            <TableHead className="text-right">Qtd. Vendida</TableHead>
            <TableHead className="text-right">Receita</TableHead>
            <TableHead>% do Total</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell>{product.sku}</TableCell>
              <TableCell className="text-right">R$ {product.price.toFixed(2)}</TableCell>
              <TableCell className="text-right">{product.quantity}</TableCell>
              <TableCell className="text-right">R$ {product.revenue.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Progress value={(product.revenue / totalRevenue) * 100} className="h-2" />
                  <span className="text-xs">{((product.revenue / totalRevenue) * 100).toFixed(1)}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge variant="outline" className="border-rose-200 text-rose-700">
                  {product.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

