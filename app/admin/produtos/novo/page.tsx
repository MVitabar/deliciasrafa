import { redirect } from "next/navigation"

export default function NewBasketPage() {
  redirect("/admin/produtos/novo")
  return null
}

