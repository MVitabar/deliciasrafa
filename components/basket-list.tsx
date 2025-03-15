"use client"

import { useState } from "react"
import { BasketCard } from "@/components/basket-card"
import { BasketDetail } from "@/components/basket-detail"
import { basketsData } from "@/data/baskets"

export function BasketList() {
  const [selectedBasket, setSelectedBasket] = useState(null)

  return (
    <div>
      {selectedBasket ? (
        <BasketDetail basket={selectedBasket} onBack={() => setSelectedBasket(null)} />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {basketsData.map((basket) => (
            <BasketCard key={basket.id} basket={basket} onClick={() => setSelectedBasket(basket)} />
          ))}
        </div>
      )}
    </div>
  )
}

