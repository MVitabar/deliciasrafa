import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecentOrders } from "@/components/admin/recent-orders"
import { OrderStatusChart } from "@/components/admin/order-status-chart"
import { RevenueChart } from "@/components/admin/revenue-chart"
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react"
import { ordersData } from "@/data/orders"
import { Overview } from "@/components/admin/overview"
import { CalendarDateRangePicker } from "@/components/admin/date-range-picker"

export default function DashboardPage() {
  // Get only the 5 most recent orders
  const recentOrders = [...ordersData]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="w-full sm:w-auto">
          <CalendarDateRangePicker />
        </div>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="overview" className="flex-1 sm:flex-none">Visão Geral</TabsTrigger>
          <TabsTrigger value="analytics" className="flex-1 sm:flex-none">Análise</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          {/* Stats Cards Grid */}
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
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

          {/* Charts Grid */}
          <div className="grid gap-4 grid-cols-1 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Visão Geral de Vendas</CardTitle>
              </CardHeader>
              <CardContent className="p-0 sm:p-6">
                <Overview />
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Pedidos Recentes</CardTitle>
              </CardHeader>
              <CardContent className="p-0 sm:p-6">
                <RecentOrders orders={recentOrders} />
              </CardContent>
            </Card>
          </div>
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
      </Tabs>
    </div>
  )
}

