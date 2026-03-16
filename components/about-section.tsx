"use client"

import { Mic2, Drum, Guitar, Headphones } from "lucide-react"

const features = [
  {
    icon: Mic2,
    title: "Música Urbana",
    description: "Trap, reggaeton, soul y R&B",
  },
  {
    icon: Drum,
    title: "Banda en Vivo",
    description: "Grabación de banda completa",
  },
  {
    icon: Guitar,
    title: "Instrumentos Acústicos",
    description: "Baterías, guitarras, vientos, etc.",
  },
  {
    icon: Headphones,
    title: "Equipamiento Pro",
    description: "Micrófonos, Interfaces, instrumentos y monitoreo.",
  },
]

export function AboutSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Sobre el <span className="text-primary">Estudio</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            El espacio está equipado para la produccion musical, grabación de voces y cualquier tipo de instrumentos.
            También contamos con un fondo infinito desplegable para fotografía y creación de contenido.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl
                         bg-gradient-to-b from-secondary/80 to-secondary/40
                         border border-border/50
                         shadow-lg shadow-black/10
                         hover:shadow-xl hover:border-primary/30
                         hover:-translate-y-1
                         transition-all duration-300"
            >
              {/* Aero glass effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4
                               group-hover:bg-primary/30 transition-colors duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
