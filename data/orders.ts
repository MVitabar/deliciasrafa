import { Order } from "@/types/order"
import { basketsData } from "./baskets"

export const ordersData: Order[] = [
  {
    id: "1",
    customer: {
      id: "cust1",
      name: "Maria Silva",
      email: "maria.silva@email.com",
      phone: "(71) 98765-4321",
      address: "Rua das Flores, 123 - Salvador, BA"
    },
    basketId: "1",
    basketName: basketsData[0].name,
    status: "completed",
    date: "2024-03-15T09:30:00",
    total: basketsData[0].price,
    notes: "Entregar pela manhã"
  },
  {
    id: "2",
    customer: {
      id: "cust2",
      name: "João Santos",
      email: "joao.santos@email.com",
      phone: "(71) 99876-5432",
      address: "Avenida do Mar, 456 - Salvador, BA"
    },
    basketId: "3",
    basketName: basketsData[2].name,
    status: "pending",
    date: "2024-03-16T10:00:00",
    total: basketsData[2].price,
    notes: "Presente para aniversário"
  },
  {
    id: "3",
    customer: {
      id: "cust3",
      name: "Ana Oliveira",
      email: "ana.oliveira@email.com",
      phone: "(71) 97654-3210",
      address: "Rua dos Pássaros, 789 - Salvador, BA"
    },
    basketId: "2",
    basketName: basketsData[1].name,
    status: "processing",
    date: "2024-03-16T11:15:00",
    total: basketsData[1].price
  },
  {
    id: "4",
    customer: {
      id: "cust4",
      name: "Carlos Lima",
      email: "carlos.lima@email.com",
      phone: "(71) 98877-6655",
      address: "Avenida Principal, 321 - Salvador, BA"
    },
    basketId: "4",
    basketName: basketsData[3].name,
    status: "pending",
    date: "2024-03-16T14:00:00",
    total: basketsData[3].price,
    notes: "Sem lactose conforme solicitado"
  },
  {
    id: "5",
    customer: {
      id: "cust5",
      name: "Patricia Costa",
      email: "patricia.costa@email.com",
      phone: "(71) 99988-7766",
      address: "Rua das Palmeiras, 654 - Salvador, BA"
    },
    basketId: "6",
    basketName: basketsData[5].name,
    status: "cancelled",
    date: "2024-03-14T16:30:00",
    total: basketsData[5].price
  }
]