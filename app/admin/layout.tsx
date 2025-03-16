import type { ReactNode } from "react"
import { AdminHeader } from "@/components/admin/header"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <AdminHeader />
      <main className="flex-1 container py-8">
        {children}
      </main>
    </div>
  )
}

