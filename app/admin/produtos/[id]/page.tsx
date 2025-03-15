"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Save } from "lucide-react"
import { basketsData } from "@/data/baskets"
import { BasketItemsList } from "@/components/admin/basket-items-list"
import { ImageUpload } from "@/components/admin/image-upload"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Basket } from "@/types/basket"

export default function EditBasketPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [basket, setBasket] = useState<Basket | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  // Cargar datos de la canasta
  useEffect(() => {
    if (params.id === "novo") {
      // Crear una nueva canasta
      setBasket({
        id: Math.max(...basketsData.map((b) => b.id)) + 1,
        name: "",
        price: 0,
        image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80", // Imagen por defecto para nueva cesta
        shortDescription: "",
        description: "",
        items: [],
      })
    } else {
      // Buscar canasta existente
      const foundBasket = basketsData.find((b) => b.id.toString() === params.id)
      if (foundBasket) {
        setBasket({ ...foundBasket })
      }
    }
  }, [params.id])

  // Si no se encuentra la canasta
  if (!basket && params.id !== "novo") {
    return (
      <div className="flex flex-col items-center justify-center h-[50vh]">
        <h2 className="text-2xl font-bold mb-2">Cesta não encontrada</h2>
        <p className="text-muted-foreground mb-4">A cesta que você está procurando não existe ou foi removida.</p>
        <Link href="/admin/produtos">
          <Button>Voltar para lista de cestas</Button>
        </Link>
      </div>
    )
  }

  const handleSave = async () => {
    if (!basket) return

    setIsLoading(true)

    // Simulación de guardado
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Cesta salva com sucesso!",
        description: "As alterações foram salvas.",
      })
      router.push("/admin/produtos")
    }, 1000)
  }

  const handleChange = (field: keyof Basket, value: any) => {
    if (!basket) return
    setBasket({ ...basket, [field]: value })
  }

  const handleItemsChange = (newItems: string[]) => {
    if (!basket) return
    setBasket({ ...basket, items: newItems })
  }

  const handleImageChange = (newImageUrl: string) => {
    if (!basket) return
    setBasket({ ...basket, image: newImageUrl })
  }

  if (!basket) return null

  const isNewBasket = params.id === "novo"

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <Link
            href="/admin/produtos"
            className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para lista de cestas
          </Link>
          <h1 className="text-3xl font-bold">{isNewBasket ? "Nova Cesta" : `Editar Cesta: ${basket.name}`}</h1>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2" onClick={() => router.push("/admin/produtos")}>
            <ArrowLeft className="h-4 w-4" />
            Cancelar
          </Button>
          <Button className="gap-2 bg-rose-600 hover:bg-rose-700" onClick={handleSave} disabled={isLoading}>
            <Save className="h-4 w-4" />
            {isLoading ? "Salvando..." : "Salvar Cesta"}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="basic" className="space-y-4">
        <TabsList>
          <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
          <TabsTrigger value="items">Itens da Cesta</TabsTrigger>
          <TabsTrigger value="image">Imagem</TabsTrigger>
        </TabsList>

        <TabsContent value="basic">
          <Card>
            <CardHeader>
              <CardTitle>Informações da Cesta</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nome da Cesta</Label>
                  <Input
                    id="name"
                    value={basket.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Ex: Cesta Café da Manhã Especial"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Preço (R$)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={basket.price}
                    onChange={(e) => handleChange("price", Number.parseFloat(e.target.value))}
                    placeholder="0.00"
                    step="0.01"
                    min="0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="shortDescription">Descrição Curta</Label>
                <Input
                  id="shortDescription"
                  value={basket.shortDescription}
                  onChange={(e) => handleChange("shortDescription", e.target.value)}
                  placeholder="Breve descrição para exibição na lista de produtos"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descrição Completa</Label>
                <Textarea
                  id="description"
                  value={basket.description}
                  onChange={(e) => handleChange("description", e.target.value)}
                  placeholder="Descrição detalhada do produto"
                  rows={5}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="items">
          <Card>
            <CardHeader>
              <CardTitle>Itens da Cesta</CardTitle>
            </CardHeader>
            <CardContent>
              <BasketItemsList items={basket.items} onChange={handleItemsChange} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="image">
          <Card>
            <CardHeader>
              <CardTitle>Imagem da Cesta</CardTitle>
            </CardHeader>
            <CardContent>
              <ImageUpload currentImage={basket.image} onChange={handleImageChange} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

