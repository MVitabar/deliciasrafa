"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Save, User } from "lucide-react"
import { toast } from "@/components/ui/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export default function ConfiguracoesPage() {
  const [isLoading, setIsLoading] = useState(false)

  // Dados da loja
  const [storeData, setStoreData] = useState({
    name: "Delicias da Rafa",
    email: "contato@deliciasdarafa.com.br",
    phone: "(71) 99214-3541",
    address: "Rua Rubem Berta 166, Edf. Rubem Bertha, 202. Pituba, Salvador - BA",
    instagram: "@deliciasdarafapastore",
    logo: "/delicias-logo.jpg"  // Actualizado para usar el logo local
  })

  // Configurações de notificações
  const [notifications, setNotifications] = useState({
    emailNewOrder: true,
    emailOrderStatus: true,
    smsNewOrder: false,
    smsOrderStatus: false,
    whatsappNewOrder: true,
    whatsappOrderStatus: true,
    dailySummary: true,
    weeklySummary: true,
  })

  // Usuários do sistema
  const [users] = useState([
    {
      id: "1",
      name: "Administrador",
      email: "admin@exemplo.com",
      role: "admin",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80", // Admin avatar
    },
    {
      id: "2",
      name: "Rafaela Pastore",
      email: "rafa@deliciasdarafa.com.br",
      role: "admin",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80", // Female avatar
    },
    {
      id: "3",
      name: "Atendente",
      email: "atendimento@deliciasdarafa.com.br",
      role: "staff",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80", // Staff avatar
    },
  ])

  // Configurações gerais
  const [generalSettings, setGeneralSettings] = useState({
    currency: "BRL",
    timezone: "America/Bahia",
    dateFormat: "DD/MM/YYYY",
    language: "pt-BR",
    orderPrefix: "PED",
    taxRate: 0,
    enableTax: false,
    enableDeliveryFee: true,
    defaultDeliveryFee: 15,
  })

  const handleSaveSettings = () => {
    setIsLoading(true)

    // Simulação de salvamento
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Configurações salvas",
        description: "Suas configurações foram atualizadas com sucesso.",
      })
    }, 1000)
  }

  const handleStoreDataChange = (field: string, value: string) => {
    setStoreData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleNotificationChange = (field: string, value: boolean) => {
    setNotifications((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleGeneralSettingChange = (field: string, value: any) => {
    setGeneralSettings((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Configurações</h1>
        <Button onClick={handleSaveSettings} className="gap-2 bg-rose-600 hover:bg-rose-700" disabled={isLoading}>
          <Save className="h-4 w-4" />
          {isLoading ? "Salvando..." : "Salvar Configurações"}
        </Button>
      </div>

      <Tabs defaultValue="store" className="space-y-4">
        <TabsList className="grid grid-cols-1 md:grid-cols-4 w-full">
          <TabsTrigger value="store">Informações da Loja</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="users">Usuários</TabsTrigger>
          <TabsTrigger value="general">Configurações Gerais</TabsTrigger>
        </TabsList>

        {/* Informações da Loja */}
        <TabsContent value="store" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Loja</CardTitle>
              <CardDescription>
                Configure as informações básicas da sua loja que serão exibidas para os clientes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="store-name">Nome da Loja</Label>
                  <Input
                    id="store-name"
                    value={storeData.name}
                    onChange={(e) => handleStoreDataChange("name", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="store-email">Email de Contato</Label>
                  <Input
                    id="store-email"
                    type="email"
                    value={storeData.email}
                    onChange={(e) => handleStoreDataChange("email", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="store-phone">Telefone</Label>
                  <Input
                    id="store-phone"
                    value={storeData.phone}
                    onChange={(e) => handleStoreDataChange("phone", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="store-instagram">Instagram</Label>
                  <Input
                    id="store-instagram"
                    value={storeData.instagram}
                    onChange={(e) => handleStoreDataChange("instagram", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="store-address">Endereço</Label>
                <Textarea
                  id="store-address"
                  value={storeData.address}
                  onChange={(e) => handleStoreDataChange("address", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label>Logo da Loja</Label>
                <div className="flex items-center gap-4">
                  <div className="relative h-20 w-20 rounded-full overflow-hidden border">
                    <Image
                      src="/delicias-logo.jpg"
                      alt="Logo Delicias da Rafa"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                  <Button variant="outline">Alterar Logo</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horário de Funcionamento</CardTitle>
              <CardDescription>Configure os horários em que sua loja está aberta para receber pedidos.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Segunda a Sexta</Label>
                  <div className="flex gap-2">
                    <Input placeholder="08:00" defaultValue="08:00" />
                    <span className="flex items-center">às</span>
                    <Input placeholder="19:00" defaultValue="19:00" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Sábados e Domingos</Label>
                  <div className="flex gap-2">
                    <Input placeholder="09:00" defaultValue="09:00" />
                    <span className="flex items-center">às</span>
                    <Input placeholder="17:00" defaultValue="17:00" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notificações */}
        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Notificações</CardTitle>
              <CardDescription>
                Gerencie como e quando você recebe notificações sobre atividades da loja.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notificações por Email</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-new-order">Novos Pedidos</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba um email quando um novo pedido for realizado.
                      </p>
                    </div>
                    <Switch
                      id="email-new-order"
                      checked={notifications.emailNewOrder}
                      onCheckedChange={(checked) => handleNotificationChange("emailNewOrder", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="email-order-status">Atualizações de Status</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba um email quando o status de um pedido for alterado.
                      </p>
                    </div>
                    <Switch
                      id="email-order-status"
                      checked={notifications.emailOrderStatus}
                      onCheckedChange={(checked) => handleNotificationChange("emailOrderStatus", checked)}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notificações por SMS</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-new-order">Novos Pedidos</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba um SMS quando um novo pedido for realizado.
                      </p>
                    </div>
                    <Switch
                      id="sms-new-order"
                      checked={notifications.smsNewOrder}
                      onCheckedChange={(checked) => handleNotificationChange("smsNewOrder", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="sms-order-status">Atualizações de Status</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba um SMS quando o status de um pedido for alterado.
                      </p>
                    </div>
                    <Switch
                      id="sms-order-status"
                      checked={notifications.smsOrderStatus}
                      onCheckedChange={(checked) => handleNotificationChange("smsOrderStatus", checked)}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notificações por WhatsApp</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="whatsapp-new-order">Novos Pedidos</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba uma mensagem no WhatsApp quando um novo pedido for realizado.
                      </p>
                    </div>
                    <Switch
                      id="whatsapp-new-order"
                      checked={notifications.whatsappNewOrder}
                      onCheckedChange={(checked) => handleNotificationChange("whatsappNewOrder", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="whatsapp-order-status">Atualizações de Status</Label>
                      <p className="text-sm text-muted-foreground">
                        Receba uma mensagem no WhatsApp quando o status de um pedido for alterado.
                      </p>
                    </div>
                    <Switch
                      id="whatsapp-order-status"
                      checked={notifications.whatsappOrderStatus}
                      onCheckedChange={(checked) => handleNotificationChange("whatsappOrderStatus", checked)}
                    />
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Relatórios Automáticos</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="daily-summary">Resumo Diário</Label>
                      <p className="text-sm text-muted-foreground">Receba um resumo diário das atividades da loja.</p>
                    </div>
                    <Switch
                      id="daily-summary"
                      checked={notifications.dailySummary}
                      onCheckedChange={(checked) => handleNotificationChange("dailySummary", checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label htmlFor="weekly-summary">Resumo Semanal</Label>
                      <p className="text-sm text-muted-foreground">Receba um resumo semanal das atividades da loja.</p>
                    </div>
                    <Switch
                      id="weekly-summary"
                      checked={notifications.weeklySummary}
                      onCheckedChange={(checked) => handleNotificationChange("weeklySummary", checked)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Usuários */}
        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="space-y-1">
                <CardTitle>Usuários do Sistema</CardTitle>
                <CardDescription>Gerencie os usuários que têm acesso ao painel administrativo.</CardDescription>
              </div>
              <Button className="bg-rose-600 hover:bg-rose-700">
                <User className="mr-2 h-4 w-4" />
                Novo Usuário
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {users.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-md">
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium">{user.name}</p>
                        <p className="text-sm text-muted-foreground">{user.email}</p>
                        <div className="mt-1">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              user.role === "admin" ? "bg-rose-100 text-rose-800" : "bg-blue-100 text-blue-800"
                            }`}
                          >
                            {user.role === "admin" ? "Administrador" : "Atendente"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                      {user.id !== "1" && (
                        <Button variant="outline" size="sm" className="text-red-600 border-red-200 hover:bg-red-50">
                          Remover
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Funções e Permissões</CardTitle>
              <CardDescription>Configure as permissões para cada tipo de usuário do sistema.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium">Administrador</h3>
                    <span className="bg-rose-100 text-rose-800 text-xs px-2 py-1 rounded-full">Acesso Total</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Usuários com função de administrador têm acesso completo a todas as funcionalidades do sistema,
                    incluindo configurações, relatórios financeiros e gerenciamento de usuários.
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium">Atendente</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Acesso Limitado</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Usuários com função de atendente podem gerenciar pedidos, clientes e produtos, mas não têm acesso a
                    configurações avançadas, relatórios financeiros ou gerenciamento de usuários.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div className="space-y-2">
                      <Label className="text-base">Permissões de Atendente</Label>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch id="staff-orders" defaultChecked />
                          <Label htmlFor="staff-orders">Gerenciar Pedidos</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="staff-customers" defaultChecked />
                          <Label htmlFor="staff-customers">Gerenciar Clientes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="staff-products" defaultChecked />
                          <Label htmlFor="staff-products">Gerenciar Produtos</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Switch id="staff-reports" />
                          <Label htmlFor="staff-reports">Ver Relatórios</Label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Configurações Gerais */}
        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configurações Gerais</CardTitle>
              <CardDescription>Configure as preferências gerais do sistema.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currency">Moeda</Label>
                  <Select
                    value={generalSettings.currency}
                    onValueChange={(value) => handleGeneralSettingChange("currency", value)}
                  >
                    <SelectTrigger id="currency">
                      <SelectValue placeholder="Selecione a moeda" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="BRL">Real Brasileiro (R$)</SelectItem>
                      <SelectItem value="USD">Dólar Americano ($)</SelectItem>
                      <SelectItem value="EUR">Euro (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <Select
                    value={generalSettings.timezone}
                    onValueChange={(value) => handleGeneralSettingChange("timezone", value)}
                  >
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Selecione o fuso horário" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/Bahia">Salvador (GMT-3)</SelectItem>
                      <SelectItem value="America/Sao_Paulo">São Paulo (GMT-3)</SelectItem>
                      <SelectItem value="America/Manaus">Manaus (GMT-4)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="date-format">Formato de Data</Label>
                  <Select
                    value={generalSettings.dateFormat}
                    onValueChange={(value) => handleGeneralSettingChange("dateFormat", value)}
                  >
                    <SelectTrigger id="date-format">
                      <SelectValue placeholder="Selecione o formato de data" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="DD/MM/YYYY">DD/MM/AAAA (31/12/2023)</SelectItem>
                      <SelectItem value="MM/DD/YYYY">MM/DD/AAAA (12/31/2023)</SelectItem>
                      <SelectItem value="YYYY-MM-DD">AAAA-MM-DD (2023-12-31)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="language">Idioma</Label>
                  <Select
                    value={generalSettings.language}
                    onValueChange={(value) => handleGeneralSettingChange("language", value)}
                  >
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Selecione o idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pt-BR">Português (Brasil)</SelectItem>
                      <SelectItem value="en-US">Inglês (EUA)</SelectItem>
                      <SelectItem value="es">Espanhol</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Configurações de Pedidos</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="order-prefix">Prefixo de Pedidos</Label>
                    <Input
                      id="order-prefix"
                      value={generalSettings.orderPrefix}
                      onChange={(e) => handleGeneralSettingChange("orderPrefix", e.target.value)}
                      placeholder="PED"
                    />
                    <p className="text-xs text-muted-foreground">Exemplo: PED12345</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="enable-tax">Habilitar Impostos</Label>
                      <Switch
                        id="enable-tax"
                        checked={generalSettings.enableTax}
                        onCheckedChange={(checked) => handleGeneralSettingChange("enableTax", checked)}
                      />
                    </div>
                    {generalSettings.enableTax && (
                      <div className="pt-2">
                        <Label htmlFor="tax-rate">Taxa de Imposto (%)</Label>
                        <Input
                          id="tax-rate"
                          type="number"
                          value={generalSettings.taxRate}
                          onChange={(e) => handleGeneralSettingChange("taxRate", Number(e.target.value))}
                          min="0"
                          max="100"
                          step="0.01"
                        />
                      </div>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="enable-delivery-fee">Habilitar Taxa de Entrega</Label>
                      <Switch
                        id="enable-delivery-fee"
                        checked={generalSettings.enableDeliveryFee}
                        onCheckedChange={(checked) => handleGeneralSettingChange("enableDeliveryFee", checked)}
                      />
                    </div>
                    {generalSettings.enableDeliveryFee && (
                      <div className="pt-2">
                        <Label htmlFor="default-delivery-fee">Taxa de Entrega Padrão (R$)</Label>
                        <Input
                          id="default-delivery-fee"
                          type="number"
                          value={generalSettings.defaultDeliveryFee}
                          onChange={(e) => handleGeneralSettingChange("defaultDeliveryFee", Number(e.target.value))}
                          min="0"
                          step="0.01"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Backup e Restauração</CardTitle>
              <CardDescription>Faça backup dos seus dados ou restaure a partir de um backup anterior.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="outline" className="flex-1">
                    Fazer Backup Completo
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Exportar Dados
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Restaurar Backup
                  </Button>
                </div>

                <div className="text-sm text-muted-foreground">
                  <p>
                    Último backup realizado: <strong>Nunca</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

