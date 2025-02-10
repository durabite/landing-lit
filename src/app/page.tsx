import { Bot, Shield, Car, HeartPulse, PiggyBank, Clock } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Simplificado */}
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <div className="flex items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">LIT AI</span>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section con énfasis en "Próximamente" */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-blue-600 px-3 py-1 text-sm text-white mb-4">Próximamente</div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  El Futuro del Asesoramiento en Seguros
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Estamos desarrollando tu asesor virtual con inteligencia artificial, disponible 24/7 para ayudarte a
                  encontrar la mejor protección para ti y tu familia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section Simplificado */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Innovación en Seguros</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl">
                  Combinando la experiencia humana con inteligencia artificial para brindarte el mejor servicio.
                </p>
              </div>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                  <Bot className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Asistencia 24/7</h3>
                  <p className="text-center text-gray-500">
                    Respuestas instantáneas a tus consultas en cualquier momento.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                  <Shield className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Asesoría Experta</h3>
                  <p className="text-center text-gray-500">
                    Recomendaciones personalizadas basadas en tus necesidades.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-white shadow-sm">
                  <Clock className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Proceso Rápido</h3>
                  <p className="text-center text-gray-500">Cotizaciones y comparativas en minutos, no en días.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-10">
              <div className="space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Servicios que Ofreceremos</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Especialización en diversos tipos de seguros para proteger lo que más te importa.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
                  <HeartPulse className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Seguro de Vida</h3>
                  <p className="text-center text-gray-500">Protección financiera para ti y tu familia.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
                  <PiggyBank className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Plan Personal de Retiro</h3>
                  <p className="text-center text-gray-500">Asegura tu futuro financiero.</p>
                </div>
                <div className="flex flex-col items-center space-y-2 border rounded-lg p-6 bg-gray-50">
                  <Car className="h-12 w-12 text-blue-600" />
                  <h3 className="text-xl font-bold">Seguro de Auto</h3>
                  <p className="text-center text-gray-500">Cobertura completa para tu vehículo.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Simplificado */}
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-center text-sm text-gray-500">
              &copy; 2024 Laura Isela Torres. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}