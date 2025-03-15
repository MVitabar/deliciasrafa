import { Instagram, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white py-6 sm:py-8 border-t border-rose-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div>
            <h3 className="font-bold text-lg text-rose-800 mb-3 sm:mb-4">Contacto</h3>
            <div className="flex items-center gap-2 mb-2">
              <Phone className="h-4 w-4 text-rose-600" />
              <Link href="tel:+5571992143541" className="text-rose-700 hover:text-rose-900 text-sm sm:text-base">
                (71) 99214-3541
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="h-4 w-4 text-rose-600" />
              <Link
                href="https://www.instagram.com/deliciasdarafapastore"
                className="text-rose-700 hover:text-rose-900 text-sm sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
              >
                @deliciasdarafapastore
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg text-rose-800 mb-3 sm:mb-4">Horário de Funcionamento</h3>
            <p className="text-rose-700 mb-1 text-sm sm:text-base">Segunda a Sexta: 08:00 - 19:00</p>
            <p className="text-rose-700 text-sm sm:text-base">Sábados e Domingos: 09:00 - 17:00</p>
          </div>

          <div>
            <h3 className="font-bold text-lg text-rose-800 mb-3 sm:mb-4">Formas de Pagamento</h3>
            <p className="text-rose-700 mb-1 text-sm sm:text-base">Transferencia o PIX</p>
            <p className="text-rose-700 mb-1 text-sm sm:text-base">BEATRIZ PASTORE LEITE</p>
            <p className="text-rose-700 mb-1 text-sm sm:text-base">PIX: 034581438000122</p>
            <p className="text-rose-700 mb-1 text-sm sm:text-base">BANCO DO BRASIL 001</p>
            <p className="text-rose-700 mb-1 text-sm sm:text-base">AGÊNCIA: 4279-X</p>
            <p className="text-rose-700 text-sm sm:text-base">CONTA CORRENTE: 29616-3</p>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-4 border-t border-rose-100 text-center text-rose-700 text-sm sm:text-base">
          <p>© {new Date().getFullYear()} Delicias da Rafa Pastore. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

