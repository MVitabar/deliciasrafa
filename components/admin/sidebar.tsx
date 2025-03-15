"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  BarChart,
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Menu,
  Package,
  Settings,
  ShoppingCart,
  Users,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

export function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)

  // Detectar si estamos en móvil
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth < 768) {
        setCollapsed(true)
      }
    }

    // Inicializar
    checkIfMobile()

    // Actualizar en cambios de tamaño
    window.addEventListener("resize", checkIfMobile)
    return () => window.removeEventListener("resize", checkIfMobile)
  }, [])

  const navItems = [
    {
      title: "Dashboard",
      href: "/admin/dashboard",
      icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
      title: "Pedidos",
      href: "/admin/pedidos",
      icon: <ShoppingCart className="h-5 w-5" />,
    },
    {
      title: "Clientes",
      href: "/admin/clientes",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "Cestas",
      href: "/admin/produtos",
      icon: <Package className="h-5 w-5" />,
    },
    {
      title: "Relatórios",
      href: "/admin/relatorios",
      icon: <BarChart className="h-5 w-5" />,
    },
    {
      title: "Configurações",
      href: "/admin/configuracoes",
      icon: <Settings className="h-5 w-5" />,
    },
  ]

  // Toggle para menú móvil
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Contenido del menú de navegación
  const renderNavItems = () => (
    <nav className="grid gap-1 px-2">
      {navItems.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          className={cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium hover:bg-rose-50 hover:text-rose-700 transition-colors",
            pathname === item.href ? "bg-rose-50 text-rose-700" : "text-muted-foreground",
            collapsed && !isMobile && "justify-center px-2",
          )}
          onClick={() => isMobile && setIsMobileMenuOpen(false)}
        >
          {item.icon}
          {(!collapsed || isMobile) && <span>{item.title}</span>}
        </Link>
      ))}
    </nav>
  )

  // Para dispositivos móviles, muestra un botón que abre un menú desplegable
  if (isMobile) {
    return (
      <>
        <Button variant="ghost" size="icon" className="md:hidden absolute left-4 top-4 z-20" onClick={toggleMobileMenu}>
          <Menu className="h-6 w-6" />
        </Button>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <ShoppingCart className="h-6 w-6 text-rose-600" />
                <span className="font-bold text-lg text-rose-800">Admin</span>
              </div>
              <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <ScrollArea className="flex-1 p-4">{renderNavItems()}</ScrollArea>
          </div>
        )}
      </>
    )
  }

  // Para dispositivos de escritorio, usa el sidebar normal
  return (
    <div
      className={cn(
        "border-r bg-white h-screen relative group transition-all duration-300 hidden md:block",
        collapsed ? "w-[70px]" : "w-[250px]",
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        <div className={cn("flex items-center gap-2", collapsed && "hidden")}>
          <ShoppingCart className="h-6 w-6 text-rose-600" />
          <span className="font-bold text-lg text-rose-800">Admin</span>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className={cn("absolute right-2 top-4", collapsed && "right-[-12px] bg-background border shadow-sm")}
        >
          {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </Button>
      </div>

      <ScrollArea className="h-[calc(100vh-65px)]">
        <div className="py-4">{renderNavItems()}</div>
      </ScrollArea>
    </div>
  )
}

