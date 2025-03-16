'use client'

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const orderSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(11, "Telefone inválido"),
  address: z.string().min(10, "Endereço deve ser completo"),
  notes: z.string().optional(),
})

type OrderFormData = z.infer<typeof orderSchema>

interface OrderFormProps {
  basketId: number
  basketName: string
  price: number
  onSuccess: () => void
}

export function OrderForm({ basketId, basketName, price, onSuccess }: OrderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema)
  })

  const onSubmit = async (data: OrderFormData) => {
    try {
      setIsSubmitting(true)
      // Here you would integrate with your backend API
      // For now, we'll simulate an API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      toast.success("Pedido realizado com sucesso!", {
        description: "Entraremos em contato em breve para confirmar seu pedido."
      })
      onSuccess()
    } catch (error) {
      toast.error("Erro ao realizar pedido", {
        description: "Por favor, tente novamente mais tarde."
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <Input
          placeholder="Nome completo"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <Input
          placeholder="Email"
          type="email"
          {...register("email")}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Input
          placeholder="Telefone (WhatsApp)"
          {...register("phone")}
        />
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
      </div>
      <div>
        <Textarea
          placeholder="Endereço completo para entrega"
          {...register("address")}
        />
        {errors.address && <p className="text-red-500">{errors.address.message}</p>}
      </div>
      <div>
        <Textarea
          placeholder="Observações (opcional)"
          {...register("notes")}
        />
      </div>
      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : `Fazer pedido - ${new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(price)}`}
      </Button>
    </form>
  )
}

