import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LIT AI - Tu Asesor Virtual de Seguros",
  description:
    "Descubre el futuro del asesoramiento en seguros con LIT AI. Próximamente, tu asistente virtual disponible 24/7 para todas tus necesidades de seguros.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} min-h-screen flex flex-col items-center justify-between`}>
        <main className="container mx-auto px-4 flex-1 flex flex-col items-center justify-center">
          {children}
        </main>
      </body>
    </html>
  )
}
