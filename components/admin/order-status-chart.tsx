"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

export function OrderStatusChart() {
  const data = [
    { name: "Pendente", value: 18, color: "#eab308" },
    { name: "Em processamento", value: 12, color: "#3b82f6" },
    { name: "Concluído", value: 86, color: "#22c55e" },
    { name: "Cancelado", value: 8, color: "#ef4444" },
  ]

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => [`${value} pedidos`, "Quantidade"]} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

