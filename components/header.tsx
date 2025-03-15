"use client"

import { Menu, ShoppingBasket, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src="/delicias-logo.jpg"
              alt="Logo Delicias da Rafa"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="font-bold text-xl text-rose-800">Delicias da Rafa</span>
        </Link>

        {/* Menú de navegación móvil */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-6 w-6 text-rose-700" />
          <span className="sr-only">Abrir menú</span>
        </Button>

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
                @deliciasdarafapastore
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

