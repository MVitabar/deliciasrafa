"use client"

import type React from "react"

import { useState } from "react"
import type { Basket } from "@/types/basket"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface OrderFormProps {
  basket: Basket
  onSubmit: () => void
  onCancel: () => void
}

export function OrderForm({ basket, onSubmit, onCancel }: OrderFormProps) {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [deliveryOption, setDeliveryOption] = useState("delivery")
  const [deliveryDate, setDeliveryDate] = useState("")
  const [notes, setNotes] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el pedido
    onSubmit()
  }

  return (
    <div className="space-y-2 sm:space-y-4">
      <h2 className="text-xl sm:text-2xl font-bold text-rose-800 mb-2 sm:mb-4">Fazer Pedido</h2>
      <p className="text-sm sm:text-base text-rose-700 mb-4 sm:mb-6">
        Preencha o formulário para fazer seu pedido de {basket.name} (R$ {basket.price.toFixed(2)})
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-rose-700 text-sm sm:text-base">
              Nome Completo
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border-rose-200 focus:border-rose-400 focus:ring-rose-400 h-10 sm:h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-rose-700 text-sm sm:text-base">
              Telefone
            </Label>
            <Input
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border-rose-200 focus:border-rose-400 focus:ring-rose-400 h-10 sm:h-11"
              inputMode="tel"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="deliveryDate" className="text-rose-700 text-sm sm:text-base">
            Data de Entrega
          </Label>
          <Input
            id="deliveryDate"
            type="date"
            value={deliveryDate}
            onChange={(e) => setDeliveryDate(e.target.value)}
            required
            className="border-rose-200 focus:border-rose-400 focus:ring-rose-400 h-10 sm:h-11"
          />
        </div>

        <div className="space-y-2">
          <Label className="text-rose-700 text-sm sm:text-base">Opção de Entrega</Label>
          <RadioGroup value={deliveryOption} onValueChange={setDeliveryOption} className="flex flex-col space-y-3">
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="delivery" id="delivery" className="text-rose-600 mt-0.5" />
              <Label htmlFor="delivery" className="text-rose-700 text-sm sm:text-base font-normal">
                Entrega em Domicílio (Consultar Taxa)
              </Label>
            </div>
            <div className="flex items-start space-x-2">
              <RadioGroupItem value="pickup" id="pickup" className="text-rose-600 mt-0.5" />
              <Label htmlFor="pickup" className="text-rose-700 text-sm sm:text-base font-normal">
                Retirar na Loja (Rua Rubem Berta 166, Edf. Rubem Bertha, 202. Pituba)
              </Label>
            </div>
          </RadioGroup>
        </div>

        {deliveryOption === "delivery" && (
          <div className="space-y-2">
            <Label htmlFor="address" className="text-rose-700 text-sm sm:text-base">
              Endereço de Entrega
            </Label>
            <Textarea
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required={deliveryOption === "delivery"}
              className="border-rose-200 focus:border-rose-400 focus:ring-rose-400 min-h-[80px]"
            />
          </div>
        )}

        <div className="space-y-2">
          <Label htmlFor="notes" className="text-rose-700 text-sm sm:text-base">
            Observações Adicionais
          </Label>
          <Textarea
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Instruções especiais, preferências, etc."
            className="border-rose-200 focus:border-rose-400 focus:ring-rose-400 min-h-[80px]"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
          <Button type="submit" className="bg-rose-600 hover:bg-rose-700 text-white order-1 py-3 sm:py-2 sm:flex-1">
            Confirmar Pedido
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={onCancel}
            className="border-rose-300 text-rose-700 hover:bg-rose-50 order-2 sm:order-0 py-3 sm:py-2 sm:flex-1"
          >
            Cancelar
          </Button>
        </div>
      </form>
    </div>
  )
}

