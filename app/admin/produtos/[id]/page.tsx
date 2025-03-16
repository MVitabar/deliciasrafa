"use client"

import { use, useEffect, useState } from "react"
import { notFound, useRouter } from "next/navigation"
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
import { EditBasketForm } from "@/components/admin/edit-basket-form"

interface EditBasketPageProps {
  params: Promise<{ id: string }>
}

export default function EditBasketPage({ params }: EditBasketPageProps) {
  const { id } = use(params)
  
  const basket = basketsData.find((b) => b.id === parseInt(id))

  if (!basket) {
    notFound()
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Editar Cesta</h1>
      </div>

      <EditBasketForm basket={basket} />
    </div>
  )
}

