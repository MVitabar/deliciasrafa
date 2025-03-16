'use client'

import { useState } from "react"
import { Basket } from "@/types/basket"
import { Card } from "./ui/card"
import { BasketModal } from "./basket-modal"
import Image from "next/image"
import { formatPrice } from "@/lib/utils"

interface BasketCardProps {
  basket: Basket
}

export function BasketCard({ basket }: BasketCardProps) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Card 
        onClick={() => setShowModal(true)}
        className="overflow-hidden transition-all hover:shadow-lg cursor-pointer group"
      >
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={basket.image}
            alt={basket.name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{basket.name}</h3>
          <p className="text-sm text-muted-foreground mt-1">
            {basket.shortDescription}
          </p>
          <p className="text-lg font-bold text-rose-600 mt-2">
            {formatPrice(basket.price)}
          </p>
        </div>
      </Card>

      <BasketModal 
        basket={basket}
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  )
}

