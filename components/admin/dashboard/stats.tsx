'use client'

import { useEffect, useState } from 'react'

export function DashboardStats() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {isClient && (
        // ...stats content...
      )}
    </div>
  )
}