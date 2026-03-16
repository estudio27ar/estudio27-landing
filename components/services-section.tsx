"use client"

import { Music, SlidersHorizontal, Mic, Drum, AudioWaveform, Camera } from "lucide-react"

const services = [
  {
    icon: Music,
    title: "Producción Musical",
    description: "Producción completa de tu proyecto musical desde la idea hasta el master final.",
    accent: "primary",
  },
  {
    icon: AudioWaveform,
    title: "Instrumentales Custom",
    description: "Creación de beats e instrumentales personalizados para tu estilo.",
    accent: "accent",
  },
  {
    icon: SlidersHorizontal,
    title: "Mezcla & Mastering",
    description: "Mezcla profesional y masterización para un sonido de calidad comercial.",
    accent: "primary",
  },
  {
    icon: Drum,
    title: "Grabación de Ensayo",
    description: "Sala con monitoreo equipada para grabar tu ensayo.",
    accent: "accent",
  },
  {
    icon: Mic,
    title: "Producción y coaching vocal",
    description: "Grabación, edición y afinación de voces.",
    accent: "primary",
  },
  {
    icon: Camera,
    title: "Fotografía",
    description: "Fondo infinito para foto y creación de contenido, equipado con cámaras e iluminación.",
    accent: "accent",
  },
]

export function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-card to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para materializar tu idea.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl
                         bg-gradient-to-b from-secondary/80 to-secondary/40
                         border border-border/50
                         shadow-lg shadow-black/10
                         hover:shadow-xl 
                         hover:border-primary/40
                         hover:-translate-y-1
                         transition-all duration-300
                         overflow-hidden"
            >
              {/* Aero glass effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
              
              {/* Subtle accent glow on hover */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-0 
                             group-hover:opacity-20 transition-opacity duration-500
                             ${service.accent === "primary" ? "bg-primary" : "bg-accent"}`} 
              />
              
              <div className="relative">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6
                               transition-colors duration-300
                               ${service.accent === "primary" 
                                 ? "bg-primary/20 group-hover:bg-primary/30" 
                                 : "bg-accent/20 group-hover:bg-accent/30"}`}>
                  <service.icon className={`w-7 h-7 ${service.accent === "primary" ? "text-primary" : "text-accent"}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
