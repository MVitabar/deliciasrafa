"use client"

import type { Basket } from "@/types/basket"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface BasketCardProps {
  basket: Basket
  onClick: () => void
}

export function BasketCard({ basket, onClick }: BasketCardProps) {
  return (
    <Card 
      className="overflow-hidden transition-all duration-300 hover:shadow-md bg-white border-rose-100 h-full flex flex-col"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] w-full">
        <Image 
          src={basket.image} 
          alt={basket.name}
          fill 
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          quality={75}
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
          placeholder="blur"
        />
      </div>
      <CardContent className="p-3 sm:p-4 flex-grow">
        <h2 className="text-lg sm:text-xl font-semibold text-rose-800 mb-1">{basket.name}</h2>
        <p className="text-xl sm:text-2xl font-bold text-rose-700 mb-1 sm:mb-2">R$ {basket.price.toFixed(2)}</p>
        <p className="text-sm sm:text-base text-rose-600 line-clamp-2">{basket.shortDescription}</p>
      </CardContent>
      <CardFooter className="p-3 sm:p-4 pt-0">
        <Button onClick={onClick} className="w-full bg-rose-600 hover:bg-rose-700 text-white text-sm sm:text-base">
          Ver Detalhes
        </Button>
      </CardFooter>
    </Card>
  )
}

