import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

interface Customer {
  id: string
  name: string
  email: string
  phone: string
  address?: {
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
}

interface OrderCustomerInfoProps {
  customer: Customer
}

export function OrderCustomerInfo({ customer }: OrderCustomerInfoProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-1">
        <h4 className="font-medium text-rose-800">{customer.name}</h4>
        <div className="flex items-center gap-2 text-sm text-rose-600">
          <Mail className="h-4 w-4" />
          <span>{customer.email}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-rose-600">
          <Phone className="h-4 w-4" />
          <span>{customer.phone}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Button variant="outline" size="sm" className="justify-start border-rose-200 text-rose-700 hover:bg-rose-50">
          <Mail className="mr-2 h-4 w-4" />
          Enviar e-mail
        </Button>
        <Button variant="outline" size="sm" className="justify-start border-rose-200 text-rose-700 hover:bg-rose-50">
          Ver histórico de pedidos
        </Button>
      </div>
    </div>
  )
}

