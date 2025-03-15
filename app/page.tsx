import { BasketList } from "@/components/basket-list"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-rose-50">
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 sm:mb-8 text-rose-800">
          Cestas de Café da Manhã e Lanche
        </h1>
        <p className="text-center mb-6 sm:mb-10 text-rose-700 max-w-2xl mx-auto text-sm sm:text-base">
          Selecione entre nossa variedade de cestas preparadas com produtos frescos e de qualidade. Perfeitas para
          presentear ou desfrutar em momentos especiais.
        </p>

        <BasketList />
      </main>
      <Footer />
    </div>
  )
}

