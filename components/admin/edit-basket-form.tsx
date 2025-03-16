"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BasketItemsList } from "./basket-items-list"
import { ImageUpload } from "./image-upload"
import type { Basket } from "@/types/basket"

interface EditBasketFormProps {
  basket: Basket
}

interface ImageUploadProps {
  currentImage: string;
  onImageChange: (image: string) => void;
}

export function EditBasketForm({ basket }: EditBasketFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: basket.name,
    shortDescription: basket.shortDescription,
    description: basket.description,
    price: basket.price,
    image: basket.image,
    items: basket.items
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Here you would update the basket data
      // For now we'll just show a success message
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: "Cesta atualizada",
        description: "As alterações foram salvas com sucesso."
      })
      
      router.push("/admin/produtos")
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível salvar as alterações.",
        variant: "destructive"
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4">
        <Card>
          <Tabs defaultValue="basic" className="p-4">
            <TabsList>
              <TabsTrigger value="basic">Informações Básicas</TabsTrigger>
              <TabsTrigger value="items">Itens</TabsTrigger>
              <TabsTrigger value="image">Imagem</TabsTrigger>
            </TabsList>
            
            <TabsContent value="basic" className="space-y-4 mt-4">
              <div>
                <Label htmlFor="name">Nome da Cesta</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="shortDescription">Descrição Curta</Label>
                <Input
                  id="shortDescription"
                  value={formData.shortDescription}
                  onChange={e => setFormData(prev => ({ ...prev, shortDescription: e.target.value }))}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="description">Descrição Completa</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={e => setFormData(prev => ({ ...prev, description: e.target.value }))}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="price">Preço</Label>
                <Input
                  id="price"
                  type="number"
                  step="0.01"
                  value={formData.price}
                  onChange={e => setFormData(prev => ({ ...prev, price: parseFloat(e.target.value) }))}
                  required
                />
              </div>
            </TabsContent>
            
            <TabsContent value="items">
              <BasketItemsList
                items={formData.items}
                onChange={items => setFormData(prev => ({ ...prev, items }))}
              />
            </TabsContent>
            
            <TabsContent value="image">
              <LocalImageUpload
                currentImage={formData.image}
                onImageChange={image => setFormData(prev => ({ ...prev, image }))}
              />
            </TabsContent>
          </Tabs>
        </Card>

        <div className="flex items-center gap-4">
          <Button asChild variant="outline">
            <Link href="/admin/produtos">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar
            </Link>
          </Button>
          
          <Button type="submit" disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Salvando..." : "Salvar Alterações"}
          </Button>
        </div>
      </div>
    </form>
  )
}

export function LocalImageUpload({ currentImage, onImageChange }: ImageUploadProps) {
  return (
    <div>
      <Label htmlFor="imageUpload">Upload de Imagem</Label>
      <Input
        id="imageUpload"
        type="file"
        onChange={e => {
          if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
              if (event.target && typeof event.target.result === 'string') {
                onImageChange(event.target.result);
              }
            };
            reader.readAsDataURL(e.target.files[0]);
          }
        }}
      />
      {currentImage && <img src={currentImage} alt="Current Image" />}
    </div>
  );
}