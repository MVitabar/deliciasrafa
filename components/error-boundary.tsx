'use client'

import { useEffect } from 'react'

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h2 className="text-lg font-semibold">Algo deu errado!</h2>
        <button
          onClick={reset}
          className="mt-4 rounded-md bg-rose-500 px-4 py-2 text-sm text-white"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  )
}