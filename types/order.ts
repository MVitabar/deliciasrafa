export type OrderStatus = "pending" | "processing" | "completed" | "cancelled"
export type PaymentMethod = "credit" | "debit" | "pix" | "boleto" | "transfer"

export interface Customer {
  id: string
  name: string
  email: string
  phone: string
  address: string
}

export interface Order {
  id: string
  customer: Customer
  basketId: string
  basketName: string
  status: OrderStatus
  date: string
  total: number
  paymentMethod: PaymentMethod
  notes?: string
}