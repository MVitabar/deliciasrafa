import Link from "next/link"
import { Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contato */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contato</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="tel:+5571992143541"
                  className="flex items-center gap-2 text-muted-foreground hover:text-rose-600 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  (71) 99214-3541
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:deliciasdarafapastore@gmail.com"
                  className="flex items-center gap-2 text-muted-foreground hover:text-rose-600 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  deliciasdarafapastore@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/deliciasdarafapastore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-rose-600 transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                  @deliciasdarafapastore
                </Link>
              </li>
            </ul>
          </div>

          {/* Horário de Funcionamento */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Horário de Funcionamento</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Segunda à Sexta: 08:00 - 18:00</li>
              <li>Sábado: 08:00 - 14:00</li>
              <li>Domingo: Fechado</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Delicias da Rafa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}

