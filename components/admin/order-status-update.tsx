"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Clock, RefreshCw, CheckCircle, XCircle, ChevronDown } from "lucide-react"

type OrderStatus = 'pending' | 'processing' | 'completed' | 'cancelled'

const statusConfig = {
  pending: {
    label: 'Pendente',
    icon: Clock,
    className: 'text-yellow-500'
  },
  processing: {
    label: 'Em Processamento',
    icon: RefreshCw,
    className: 'text-blue-500'
  },
  completed: {
    label: 'Concluído',
    icon: CheckCircle,
    className: 'text-green-500'
  },
  cancelled: {
    label: 'Cancelado',
    icon: XCircle,
    className: 'text-red-500'
  }
}

interface OrderStatusUpdateProps {
  currentStatus: OrderStatus
  orderId: string
}

export function OrderStatusUpdate({ currentStatus, orderId }: OrderStatusUpdateProps) {
  const [status, setStatus] = useState(currentStatus)
  const [notes, setNotes] = useState("")
  const [notifyCustomer, setNotifyCustomer] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui seria implementada a lógica para atualizar o status do pedido
    console.log("Atualizando status do pedido", { orderId, status, notes, notifyCustomer })
    // Resetar o formulário
    setNotes("")
  }

  const StatusIcon = statusConfig[status].icon

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="status" className="text-rose-700">
          Status do Pedido
        </Label>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger id="status" className="border-rose-200 focus:border-rose-400 focus:ring-rose-400">
            <SelectValue>
              <div className="flex items-center gap-2">
                <StatusIcon className={`h-4 w-4 ${statusConfig[status].className}`} />
                {statusConfig[status].label}
              </div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {Object.entries(statusConfig).map(([status, config]) => {
              const Icon = config.icon
              return (
                <SelectItem key={status} value={status}>
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${config.className}`} />
                    {config.label}
                  </div>
                </SelectItem>
              )
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="notes" className="text-rose-700">
          Observações (opcional)
        </Label>
        <Textarea
          id="notes"
          placeholder="Adicione observações sobre a atualização de status"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="border-rose-200 focus:border-rose-400 focus:ring-rose-400"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="notify"
          checked={notifyCustomer}
          onCheckedChange={(checked) => setNotifyCustomer(checked as boolean)}
          className="text-rose-600"
        />
        <Label htmlFor="notify" className="text-rose-700">
          Notificar cliente por e-mail
        </Label>
      </div>

      <Button type="submit" className="w-full bg-rose-600 hover:bg-rose-700 text-white">
        Atualizar Status
      </Button>
    </form>
  )
}

