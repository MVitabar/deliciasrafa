import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { OrderStatusUpdate } from "@/components/admin/order-status-update"
import { OrderItems } from "@/components/admin/order-items"
import { OrderTimeline } from "@/components/admin/order-timeline"
import { OrderCustomerInfo } from "@/components/admin/order-customer-info"
import { ArrowLeft, Printer } from "lucide-react"
import { getOrderById } from "@/lib/data"

export default function OrderDetailPage({ params }: { params: { id: string } }) {
  const order = getOrderById(params.id)

  if (!order) {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">Pedido não encontrado</h2>
        <p className="text-sm sm:text-base text-muted-foreground mb-4 text-center px-4">
          O pedido que você está procurando não existe ou foi removido.
        </p>
        <Link href="/admin/pedidos">
          <Button>Voltar para lista de pedidos</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <Link
            href="/admin/pedidos"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-1 sm:mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para lista de pedidos
          </Link>
          <h1 className="text-xl sm:text-3xl font-bold flex items-center gap-2 flex-wrap">
            Pedido #{order.number}
            <Badge
              className={
                order.status === "Concluído"
                  ? "bg-green-500"
                  : order.status === "Pendente"
                    ? "bg-yellow-500"
                    : order.status === "Em processamento"
                      ? "bg-blue-500"
                      : order.status === "Cancelado"
                        ? "bg-red-500"
                        : ""
              }
            >
              {order.status}
            </Badge>
          </h1>
        </div>
        <div className="mt-2 sm:mt-0">
          <Button variant="outline" className="gap-2" size="sm">
            <Printer className="h-4 w-4" />
            Imprimir
          </Button>
        </div>
      </div>

      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        <Card className="md:col-span-2">
          <CardHeader className="p-4 sm:p-6">
            <CardTitle className="text-lg sm:text-xl">Detalhes do Pedido</CardTitle>
            <CardDescription className="text-sm">Informações completas sobre o pedido #{order.number}</CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-6 pt-0">
            <Tabs defaultValue="items" className="space-y-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="items" className="text-xs sm:text-sm">
                  Itens
                </TabsTrigger>
                <TabsTrigger value="timeline" className="text-xs sm:text-sm">
                  Histórico
                </TabsTrigger>
                <TabsTrigger value="notes" className="text-xs sm:text-sm">
                  Observações
                </TabsTrigger>
              </TabsList>

              <TabsContent value="items">
                <OrderItems items={order.items} />

                <div className="mt-6 border-t pt-4">
                  <div className="space-y-2 text-sm sm:text-base">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal:</span>
                      <span>R$ {order.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Taxa de entrega:</span>
                      <span>R$ {order.shippingFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Desconto:</span>
                      <span>-R$ {order.discount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-base sm:text-lg">
                      <span>Total:</span>
                      <span>R$ {order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="timeline">
                <OrderTimeline events={order.timeline} />
              </TabsContent>

              <TabsContent value="notes">
                <div className="border rounded-md p-4">
                  <p className="text-sm">{order.notes || "Nenhuma observação para este pedido."}</p>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="space-y-4 sm:space-y-6">
          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg">Atualizar Status</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <OrderStatusUpdate currentStatus={order.status} orderId={order.id} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg">Informações do Cliente</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <OrderCustomerInfo customer={order.customer} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg">Informações de Entrega</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Endereço:</span> {order.shippingAddress.street},{" "}
                  {order.shippingAddress.number}
                </p>
                {order.shippingAddress.complement && (
                  <p>
                    <span className="font-medium">Complemento:</span> {order.shippingAddress.complement}
                  </p>
                )}
                <p>
                  <span className="font-medium">Bairro:</span> {order.shippingAddress.neighborhood}
                </p>
                <p>
                  <span className="font-medium">Cidade/UF:</span> {order.shippingAddress.city}/
                  {order.shippingAddress.state}
                </p>
                <p>
                  <span className="font-medium">CEP:</span> {order.shippingAddress.zipCode}
                </p>
                <p>
                  <span className="font-medium">Método de Entrega:</span> {order.shippingMethod}
                </p>
                {order.trackingCode && (
                  <p>
                    <span className="font-medium">Código de Rastreio:</span> {order.trackingCode}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="p-4 sm:p-6">
              <CardTitle className="text-lg">Pagamento</CardTitle>
            </CardHeader>
            <CardContent className="p-4 sm:p-6 pt-0">
              <div className="space-y-2 text-sm">
                <p>
                  <span className="font-medium">Método:</span> {order.paymentMethod}
                </p>
                <p>
                  <span className="font-medium">Status:</span> {order.paymentStatus}
                </p>
                {order.paymentDate && (
                  <p>
                    <span className="font-medium">Data:</span> {new Date(order.paymentDate).toLocaleDateString("pt-BR")}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

