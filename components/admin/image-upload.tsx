"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

interface ImageUploadProps {
  currentImage?: string
  onChange: (imageUrl: string) => void
}

export function ImageUpload({ currentImage = "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80", onChange }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState("")

  const handleUpload = () => {
    setIsUploading(true)

    // Simulación de carga de imagen
    setTimeout(() => {
      setIsUploading(false)
      if (imageUrl) {
        onChange(imageUrl)
        toast({
          title: "Imagem atualizada",
          description: "A imagem foi atualizada com sucesso.",
        })
      }
    }, 1500)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      // En un entorno real, aquí subiríamos el archivo a un servidor
      // Para esta demo, simplemente simularemos la carga
      const reader = new FileReader()
      reader.onload = (event) => {
        if (event.target?.result) {
          // Actualizar directamente con la imagen cargada
          onChange(event.target.result as string)
          toast({
            title: "Imagem carregada",
            description: "A imagem foi carregada com sucesso.",
          })
        }
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="space-y-4">
      <div className="border rounded-md p-4 flex flex-col items-center">
        <div className="relative w-full h-64 mb-4 rounded-md overflow-hidden">
          <Image src={currentImage || "/placeholder.svg"} alt="Imagem da cesta" fill className="object-cover" />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="flex-1">
            <Label htmlFor="file-upload" className="block mb-2">
              Carregar nova imagem
            </Label>
            <Input id="file-upload" type="file" accept="image/*" onChange={handleFileChange} />
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-2">ou</p>
            <p className="text-sm text-muted-foreground">Usar URL da imagem</p>
          </div>

          <div className="flex-1">
            <Label htmlFor="image-url" className="block mb-2">
              URL da imagem
            </Label>
            <div className="flex gap-2">
              <Input
                id="image-url"
                placeholder="https://exemplo.com/imagem.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <Button onClick={handleUpload} disabled={!imageUrl || isUploading} className="shrink-0">
                {isUploading ? "Carregando..." : "Usar URL"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        <p>Dica: Para melhores resultados, use imagens com proporção 3:2 e tamanho mínimo de 600x400 pixels.</p>
      </div>
    </div>
  )
}

