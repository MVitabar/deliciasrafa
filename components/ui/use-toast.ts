"use client"

import { useState, useCallback } from "react"

type ToastProps = {
  title: string
  description?: string
  variant?: "default" | "destructive"
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = useCallback(({ title, description, variant = "default", duration = 3000 }: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, title, description, variant, duration }

    setToasts((prevToasts) => [...prevToasts, newToast])

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }, duration)

    return id
  }, [])

  return { toast, toasts }
}

// Exportar una versión simplificada para uso directo
export const toast = (props: ToastProps) => {
  // Mostrar toast usando alert para simplificar
  alert(`${props.title}\n${props.description || ""}`)
}

