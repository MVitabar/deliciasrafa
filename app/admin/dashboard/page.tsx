import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentOrders } from "@/components/admin/recent-orders"
import { OrderStatusChart } from "@/components/admin/order-status-chart"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Painel de Controle</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pedidos Totais</p>
              <h3 className="text-2xl font-bold">124</h3>
              <p className="text-xs text-muted-foreground mt-1">+12% em relação ao mês anterior</p>
            </div>
            <div className="p-2 bg-rose-100 rounded-full">
              <ShoppingCart className="h-6 w-6 text-rose-600" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pedidos Pendentes</p>
              <h3 className="text-2xl font-bold">18</h3>
              <p className="text-xs text-muted-foreground mt-1">-5% em relação ao mês anterior</p>
            </div>
            <div className="p-2 bg-orange-100 rounded-full">
              <Package className="h-6 w-6 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Clientes</p>
              <h3 className="text-2xl font-bold">86</h3>
              <p className="text-xs text-muted-foreground mt-1">+8% em relação ao mês anterior</p>
            </div>
            <div className="p-2 bg-blue-100 rounded-full">
              <Users className="h-6 w-6 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Receita Total</p>
              <h3 className="text-2xl font-bold">R$ 32.485,00</h3>
              <p className="text-xs text-muted-foreground mt-1">+18% em relação ao mês anterior</p>
            </div>
            <div className="p-2 bg-green-100 rounded-full">
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="analytics">Análises</TabsTrigger>
          <TabsTrigger value="reports">Relatórios</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Receita Mensal</CardTitle>
                <CardDescription>Visualização da receita nos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <RevenueChart />
              </CardContent>
            </Card>

            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Status dos Pedidos</CardTitle>
                <CardDescription>Distribuição atual dos pedidos por status</CardDescription>
              </CardHeader>
              <CardContent>
                <OrderStatusChart />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Pedidos Recentes</CardTitle>
              <CardDescription>Lista dos últimos pedidos recebidos</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentOrders />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análises Detalhadas</CardTitle>
              <CardDescription>Métricas avançadas e análises de desempenho</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Conteúdo de análises detalhadas será exibido aqui</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Produtos Mais Vendidos</CardTitle>
                <CardDescription>Top 5 cestas mais populares</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Cesta Café da Manhã Especial", sales: 45 },
                    { name: "Cesta Gourmet Premium", sales: 38 },
                    { name: "Cesta Delícias Matinais", sales: 32 },
                    { name: "Cesta Momentos Especiais", sales: 28 },
                    { name: "Cesta Café Colonial", sales: 25 },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm text-muted-foreground">{item.sales} vendas</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Desempenho de Vendas</CardTitle>
                <CardDescription>Comparativo mensal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { month: "Janeiro", growth: "+12%" },
                    { month: "Fevereiro", growth: "+8%" },
                    { month: "Março", growth: "+15%" },
                    { month: "Abril", growth: "+10%" },
                    { month: "Maio", growth: "+18%" }
                  ].map((item) => (
                    <div key={item.month} className="flex items-center justify-between">
                      <span className="text-sm font-medium">{item.month}</span>
                      <span className="text-sm text-green-600 font-medium">{item.growth}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Relatórios</CardTitle>
              <CardDescription>Gere e visualize relatórios personalizados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Conteúdo de relatórios será exibido aqui</p>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
              <CardHeader>
                <CardTitle>Relatório de Vendas</CardTitle>
                <CardDescription>Exportar relatório mensal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-4">
                  <svg
                    className="h-12 w-12 text-rose-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
              <CardHeader>
                <CardTitle>Análise de Clientes</CardTitle>
                <CardDescription>Perfil e comportamento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-4">
                  <svg
                    className="h-12 w-12 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:bg-slate-50 cursor-pointer transition-colors">
              <CardHeader>
                <CardTitle>Desempenho Financeiro</CardTitle>
                <CardDescription>Receitas e despesas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-center p-4">
                  <svg
                    className="h-12 w-12 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

