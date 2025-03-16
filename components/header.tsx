"use client"

import { Menu, ShoppingBasket, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b">
      <div className="container flex items-center justify-between py-4 relative px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/delicias-logo.jpg"
              alt="Logo Delicias da Rafa"
              fill
              sizes="40px"
              className="object-cover"
              priority
            />
          </div>
          <span className="text-xl font-bold">Delicias da Rafa</span>
        </Link>

        {/* Enlaces para escritorio */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="tel:+5571992143541" className="text-rose-700 hover:text-rose-900">
            (71) 99214-3541
          </Link>
          <Link
            href="https://www.instagram.com/deliciasdarafapastore"
            className="text-rose-700 hover:text-rose-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            @deliciasdarafapastore
          </Link>
        </div>

        {/* Botón del menú móvil */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden fixed right-4 top-4 z-50" 
          onClick={() => setIsMenuOpen(true)}
        >
          <Menu className="h-6 w-6 text-rose-700" />
          <span className="sr-only">Abrir menu</span>
        </Button>

        {/* Menú móvil expandible */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 flex flex-col">
            <div className="p-4 flex justify-between items-center border-b">
              <Link href="/" className="flex items-center gap-2">
                <ShoppingBasket className="h-6 w-6 text-rose-600" />
                <span className="font-bold text-xl text-rose-800">Delicias da Rafa</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6 text-rose-700" />
                <span className="sr-only">Cerrar menú</span>
              </Button>
            </div>
            <nav className="p-4 flex flex-col gap-4">
              <Link
                href="tel:+5571992143541"
                className="text-rose-700 hover:text-rose-900 text-lg py-2 border-b border-rose-100"
                onClick={() => setIsMenuOpen(false)}
              >
                (71) 99214-3541
              </Link>
              <Link
                href="https://www.instagram.com/deliciasdarafapastore"
                className="text-rose-700 hover:text-rose-900 text-lg py-2 border-b border-rose-100"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                @deliciasdarafastore
              </Link>
              <Link
                href="/login"
                className="text-rose-700 hover:text-rose-900 text-lg py-2 border-b border-rose-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Área Administrativa
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

