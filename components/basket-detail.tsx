"use client"

import { useState } from "react"
import type { Basket } from "@/types/basket"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check, ShoppingCart } from "lucide-react"
import Image from "next/image"
import { OrderForm } from "@/components/order-form"

interface BasketDetailProps {
  basket: Basket
  onBack: () => void
}

export function BasketDetail({ basket, onBack }: BasketDetailProps) {
  const [showOrderForm, setShowOrderForm] = useState(false)
  const [ordered, setOrdered] = useState(false)

  const handleOrder = () => {
    setOrdered(true)
    setTimeout(() => {
      setShowOrderForm(false)
      onBack()
    }, 3000)
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 border border-rose-100">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-3 sm:mb-4 text-rose-700 hover:text-rose-900 hover:bg-rose-50"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Voltar
      </Button>

      {ordered ? (
        <div className="flex flex-col items-center justify-center py-8 sm:py-12">
          <div className="bg-green-100 rounded-full p-3 mb-4">
            <Check className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-green-700 mb-2 text-center">Pedido Realizado!</h2>
          <p className="text-center text-green-600">
            Obrigado pelo seu pedido. Entraremos em contato em breve para confirmar os detalhes.
          </p>
        </div>
      ) : showOrderForm ? (
        <OrderForm basket={basket} onSubmit={handleOrder} onCancel={() => setShowOrderForm(false)} />
      ) : (
        <div className="space-y-8">
          <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden">
            <Image 
              src={basket.image} 
              alt={basket.name} 
              fill 
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
              quality={85}
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
              placeholder="blur"
            />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-rose-800 mt-3 sm:mt-0 mb-2">{basket.name}</h1>
            <p className="text-xl sm:text-2xl font-bold text-rose-700 mb-3 sm:mb-4">R$ {basket.price.toFixed(2)}</p>
            <p className="text-sm sm:text-base text-rose-600 mb-4 sm:mb-6">{basket.description}</p>

            <div className="mb-4 sm:mb-6">
              <h3 className="font-semibold text-rose-800 mb-2">Conteúdo da Cesta:</h3>
              <ul className="space-y-1 text-sm sm:text-base">
                {basket.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-rose-500 mr-2">•</span>
                    <span className="text-rose-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button
              onClick={() => setShowOrderForm(true)}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white sticky bottom-0 py-3 sm:py-2"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Fazer Pedido
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

