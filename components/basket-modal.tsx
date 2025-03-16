'use client'

import { useState } from "react"
import { Basket } from "@/types/basket"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle,
  DialogDescription 
} from "./ui/dialog"
import { ScrollArea } from "./ui/scroll-area"
import { Button } from "./ui/button"
import { OrderForm } from "./order-form"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"

interface BasketModalProps {
  basket: Basket | null
  isOpen: boolean
  onClose: () => void
}

export function BasketModal({ basket, isOpen, onClose }: BasketModalProps) {
  const [showOrderForm, setShowOrderForm] = useState(false)

  if (!basket) return null

  const handleOrderSuccess = () => {
    setShowOrderForm(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">{basket.name}</DialogTitle>
          <DialogDescription>
            {basket.shortDescription}
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-full">
          {!showOrderForm ? (
            <div className="space-y-6">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                <Image
                  src={basket.image}
                  alt={basket.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                />
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-xl text-rose-600">
                    {formatPrice(basket.price)}
                  </h3>
                  <p className="text-muted-foreground">{basket.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Itens inclusos:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {basket.items.map((item, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button 
                  className="w-full mt-6"
                  onClick={() => setShowOrderForm(true)}
                >
                  Fazer Pedido
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <OrderForm
                basketId={basket.id}
                basketName={basket.name}
                price={basket.price}
                onSuccess={handleOrderSuccess}
              />
            </div>
          )}
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}