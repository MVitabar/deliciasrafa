"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function RevenueChart() {
  const data = [
    { name: "Jan", revenue: 4500 },
    { name: "Fev", revenue: 5350 },
    { name: "Mar", revenue: 4800 },
    { name: "Abr", revenue: 5500 },
    { name: "Mai", revenue: 5900 },
    { name: "Jun", revenue: 6450 },
  ]

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `R$ ${value.toLocaleString("pt-BR")}`} />
          <Tooltip formatter={(value) => [`R$ ${Number(value).toLocaleString("pt-BR")}`, "Receita"]} />
          <Area type="monotone" dataKey="revenue" stroke="#e11d48" fill="#e11d48" fillOpacity={0.2} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

