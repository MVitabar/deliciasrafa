"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export function SalesReportChart() {
  const data = [
    { name: "Jan", vendas: 15, receita: 4500 },
    { name: "Fev", vendas: 18, receita: 5350 },
    { name: "Mar", vendas: 16, receita: 4800 },
    { name: "Abr", vendas: 22, receita: 5500 },
    { name: "Mai", vendas: 24, receita: 5900 },
    { name: "Jun", vendas: 29, receita: 6450 },
  ]

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#3b82f6" />
          <YAxis
            yAxisId="right"
            orientation="right"
            stroke="#e11d48"
            tickFormatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`}
          />
          <Tooltip
            formatter={(value, name) => {
              if (name === "vendas") return [`${value} pedidos`, "Vendas"]
              if (name === "receita") return [`R$ ${Number(value).toLocaleString("pt-BR")}`, "Receita"]
              return [value, name]
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="vendas" name="Vendas" fill="#3b82f6" />
          <Bar yAxisId="right" dataKey="receita" name="Receita" fill="#e11d48" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

