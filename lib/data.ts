// Dados simulados para a aplicação
import { basketsData } from "@/data/baskets"

// Tipos
export interface Customer {
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
  createdAt: string
  orderCount: number
  totalSpent: number
}

export interface OrderItem {
  id: string
  name: string
  sku: string
  price: number
  quantity: number
}

export interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  status: string
}

export interface Order {
  id: string
  number: string
  date: string
  customer: Customer
  items: OrderItem[]
  status: string
  paymentMethod: string
  paymentStatus: string
  paymentDate?: string
  shippingMethod: string
  shippingAddress: {
    street: string
    number: string
    complement?: string
    neighborhood: string
    city: string
    state: string
    zipCode: string
  }
  trackingCode?: string
  subtotal: number
  shippingFee: number
  discount: number
  total: number
  notes?: string
  timeline: TimelineEvent[]
}

// Dados simulados de clientes
const customers: Customer[] = [
  {
    id: "1",
    name: "João Silva",
    email: "joao.silva@exemplo.com",
    phone: "(11) 98765-4321",
    address: {
      street: "Rua das Flores",
      number: "123",
      neighborhood: "Jardim Primavera",
      city: "São Paulo",
      state: "SP",
      zipCode: "01234-567",
    },
    createdAt: "2023-01-15T10:30:00Z",
    orderCount: 8,
    totalSpent: 1967.9,
  },
  {
    id: "2",
    name: "Maria Oliveira",
    email: "maria.oliveira@exemplo.com",
    phone: "(21) 98765-1234",
    address: {
      street: "Avenida Brasil",
      number: "456",
      complement: "Apto 303",
      neighborhood: "Centro",
      city: "Rio de Janeiro",
      state: "RJ",
      zipCode: "20010-974",
    },
    createdAt: "2023-02-20T14:45:00Z",
    orderCount: 5,
    totalSpent: 1390.5,
  },
  {
    id: "3",
    name: "Pedro Santos",
    email: "pedro.santos@exemplo.com",
    phone: "(31) 99876-5432",
    address: {
      street: "Rua dos Ipês",
      number: "789",
      neighborhood: "Savassi",
      city: "Belo Horizonte",
      state: "MG",
      zipCode: "30130-170",
    },
    createdAt: "2023-03-10T09:15:00Z",
    orderCount: 3,
    totalSpent: 850.75,
  },
  {
    id: "4",
    name: "Ana Souza",
    email: "ana.souza@exemplo.com",
    phone: "(41) 98765-8765",
    address: {
      street: "Rua XV de Novembro",
      number: "1010",
      complement: "Sala 505",
      neighborhood: "Centro",
      city: "Curitiba",
      state: "PR",
      zipCode: "80020-310",
    },
    createdAt: "2023-04-05T16:20:00Z",
    orderCount: 6,
    totalSpent: 1645.3,
  },
  {
    id: "5",
    name: "Carlos Ferreira",
    email: "carlos.ferreira@exemplo.com",
    phone: "(51) 99876-4321",
    address: {
      street: "Avenida Independência",
      number: "234",
      neighborhood: "Moinhos de Vento",
      city: "Porto Alegre",
      state: "RS",
      zipCode: "90035-072",
    },
    createdAt: "2023-05-12T11:30:00Z",
    orderCount: 4,
    totalSpent: 1100.0,
  },
]

// Criar itens de pedido baseados nas cestas
const createOrderItems = (basketIds: number[]): OrderItem[] => {
  return basketIds.map((basketId) => {
    const basket = basketsData.find((b) => b.id === basketId)
    if (!basket) throw new Error(`Cesta com ID ${basketId} não encontrada`)

    return {
      id: `item-${basketId}`,
      name: basket.name,
      sku: `CESTA-${basketId.toString().padStart(3, "0")}`,
      price: basket.price,
      quantity: 1,
    }
  })
}

// Dados simulados de pedidos
const orders: Order[] = [
  {
    id: "1",
    number: "10001",
    date: "2023-06-15T14:30:00Z",
    customer: customers[0],
    items: createOrderItems([1, 6]),
    status: "Concluído",
    paymentMethod: "Cartão de Crédito",
    paymentStatus: "Pago",
    paymentDate: "2023-06-15T14:35:00Z",
    shippingMethod: "Entrega Expressa",
    shippingAddress: {
      street: "Rua das Flores",
      number: "123",
      neighborhood: "Jardim Primavera",
      city: "São Paulo",
      state: "SP",
      zipCode: "01234-567",
    },
    trackingCode: "BR1234567890",
    subtotal: 499.8,
    shippingFee: 25.0,
    discount: 0.0,
    total: 524.8,
    timeline: [
      {
        id: "event1",
        date: "2023-06-15T14:30:00Z",
        title: "Pedido Realizado",
        description: "O pedido foi realizado pelo cliente.",
        status: "Pendente",
      },
      {
        id: "event2",
        date: "2023-06-15T14:35:00Z",
        title: "Pagamento Aprovado",
        description: "O pagamento foi aprovado pela operadora do cartão.",
        status: "Em processamento",
      },
      {
        id: "event3",
        date: "2023-06-16T10:15:00Z",
        title: "Pedido Enviado",
        description: "O pedido foi enviado para entrega.",
        status: "Enviado",
      },
      {
        id: "event4",
        date: "2023-06-18T15:40:00Z",
        title: "Pedido Entregue",
        description: "O pedido foi entregue com sucesso.",
        status: "Concluído",
      },
    ],
  },
  {
    id: "2",
    number: "10002",
    date: "2023-06-16T09:45:00Z",
    customer: customers[1],
    items: createOrderItems([2]),
    status: "Em processamento",
    paymentMethod: "PIX",
    paymentStatus: "Pago",
    paymentDate: "2023-06-16T09:50:00Z",
    shippingMethod: "Entrega Padrão",
    shippingAddress: {
      street: "Avenida Brasil",
      number: "456",
      complement: "Apto 303",
      neighborhood: "Centro",
      city: "Rio de Janeiro",
      state: "RJ",
      zipCode: "20010-974",
    },
    subtotal: 279.9,
    shippingFee: 0.0,
    discount: 0.0,
    total: 279.9,
    timeline: [
      {
        id: "event5",
        date: "2023-06-16T09:45:00Z",
        title: "Pedido Realizado",
        description: "O pedido foi realizado pelo cliente.",
        status: "Pendente",
      },
      {
        id: "event6",
        date: "2023-06-16T09:50:00Z",
        title: "Pagamento Aprovado",
        description: "O pagamento via PIX foi confirmado.",
        status: "Em processamento",
      },
    ],
  },
  {
    id: "3",
    number: "10003",
    date: "2023-06-17T16:20:00Z",
    customer: customers[2],
    items: createOrderItems([3, 7]),
    status: "Pendente",
    paymentMethod: "Boleto",
    paymentStatus: "Aguardando Pagamento",
    shippingMethod: "Entrega Padrão",
    shippingAddress: {
      street: "Rua dos Ipês",
      number: "789",
      neighborhood: "Savassi",
      city: "Belo Horizonte",
      state: "MG",
      zipCode: "30130-170",
    },
    subtotal: 529.8,
    shippingFee: 35.0,
    discount: 0.0,
    total: 564.8,
    timeline: [
      {
        id: "event7",
        date: "2023-06-17T16:20:00Z",
        title: "Pedido Realizado",
        description: "O pedido foi realizado pelo cliente.",
        status: "Pendente",
      },
    ],
  },
  {
    id: "4",
    number: "10004",
    date: "2023-06-18T11:10:00Z",
    customer: customers[3],
    items: createOrderItems([4, 5, 8]),
    status: "Cancelado",
    paymentMethod: "Cartão de Crédito",
    paymentStatus: "Estornado",
    paymentDate: "2023-06-18T11:15:00Z",
    shippingMethod: "Entrega Expressa",
    shippingAddress: {
      street: "Rua XV de Novembro",
      number: "1010",
      complement: "Sala 505",
      neighborhood: "Centro",
      city: "Curitiba",
      state: "PR",
      zipCode: "80020-310",
    },
    subtotal: 829.7,
    shippingFee: 25.0,
    discount: 0.0,
    total: 854.7,
    notes: "Pedido cancelado a pedido do cliente. Produto indisponível no estoque.",
    timeline: [
      {
        id: "event8",
        date: "2023-06-18T11:10:00Z",
        title: "Pedido Realizado",
        description: "O pedido foi realizado pelo cliente.",
        status: "Pendente",
      },
      {
        id: "event9",
        date: "2023-06-18T11:15:00Z",
        title: "Pagamento Aprovado",
        description: "O pagamento foi aprovado pela operadora do cartão.",
        status: "Em processamento",
      },
      {
        id: "event10",
        date: "2023-06-19T09:30:00Z",
        title: "Pedido Cancelado",
        description: "O pedido foi cancelado devido à indisponibilidade do produto.",
        status: "Cancelado",
      },
      {
        id: "event11",
        date: "2023-06-20T14:25:00Z",
        title: "Reembolso Processado",
        description: "O valor foi estornado para o cartão do cliente.",
        status: "Cancelado",
      },
    ],
  },
  {
    id: "5",
    number: "10005",
    date: "2023-06-19T15:40:00Z",
    customer: customers[4],
    items: createOrderItems([9]),
    status: "Concluído",
    paymentMethod: "PIX",
    paymentStatus: "Pago",
    paymentDate: "2023-06-19T15:45:00Z",
    shippingMethod: "Entrega Padrão",
    shippingAddress: {
      street: "Avenida Independência",
      number: "234",
      neighborhood: "Moinhos de Vento",
      city: "Porto Alegre",
      state: "RS",
      zipCode: "90035-072",
    },
    trackingCode: "BR0987654321",
    subtotal: 319.9,
    shippingFee: 15.0,
    discount: 20.0,
    total: 314.9,
    timeline: [
      {
        id: "event12",
        date: "2023-06-19T15:40:00Z",
        title: "Pedido Realizado",
        description: "O pedido foi realizado pelo cliente.",
        status: "Pendente",
      },
      {
        id: "event13",
        date: "2023-06-19T15:45:00Z",
        title: "Pagamento Aprovado",
        description: "O pagamento via PIX foi confirmado.",
        status: "Em processamento",
      },
      {
        id: "event14",
        date: "2023-06-20T10:30:00Z",
        title: "Pedido Enviado",
        description: "O pedido foi enviado para entrega.",
        status: "Enviado",
      },
      {
        id: "event15",
        date: "2023-06-22T14:15:00Z",
        title: "Pedido Entregue",
        description: "O pedido foi entregue com sucesso.",
        status: "Concluído",
      },
    ],
  },
]

// Funções para acessar os dados
export function getOrders(): Order[] {
  return orders
}

export function getOrderById(id: string): Order | undefined {
  return orders.find((order) => order.id === id)
}

export function getRecentOrders(): Order[] {
  // Retorna os pedidos mais recentes (até 5)
  return [...orders].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 5)
}

export function getCustomers(): Customer[] {
  return customers
}

export function getCustomerById(id: string): Customer | undefined {
  return customers.find((customer) => customer.id === id)
}

