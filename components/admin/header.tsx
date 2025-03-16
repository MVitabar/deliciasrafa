"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Bell, HelpCircle, LogOut, Moon, Settings, Sun, User } from "lucide-react"
import Image from "next/image"

export function AdminHeader() {
  return (
    <header className="border-b bg-white">
      <div className="flex items-center gap-2 p-4">
        <div className="relative h-8 w-8 overflow-hidden rounded-full">
          <Image
            src="/delicias-logo.jpg"
            alt="Logo Delicias da Rafa"
            fill
            sizes="(max-width: 768px) 32px, 32px"
            className="object-cover"
            priority
          />
        </div>
        <span className="font-semibold">Delicias da Rafa</span>
      </div>
    </header>
  )
}

