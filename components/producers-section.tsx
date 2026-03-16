"use client"

import Image from "next/image"
import { Instagram } from "lucide-react"

const producers = [
  {
    name: "Thomás Heredia",
    instagram: "@thomasheredia",
    instagramUrl: "https://instagram.com/thomasheredia",
    image: "/images/thomas-heredia.jpg",
  },
  {
    name: "Donfomento",
    instagram: "@donfomento",
    instagramUrl: "https://instagram.com/donfomento",
    image: "/images/donfomento.jpg",
  },
]

export function ProducersSection() {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Productores</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">El equipo detrás de Estudio 27</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {producers.map((producer, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden
                         bg-gradient-to-b from-secondary to-secondary/60
                         border border-border/50
                         shadow-xl shadow-black/20
                         hover:shadow-2xl hover:border-primary/30
                         hover:-translate-y-2
                         transition-all duration-300"
            >
              {/* Aero glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-10" />
              
              {/* Profile image */}
              <Image
                src={producer.image}
                alt={producer.name}
                fill
                className="object-cover object-top"
              />
              
              {/* Content overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <h3 className="text-2xl font-bold text-foreground mb-2">{producer.name}</h3>
                <a
                  href={producer.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>{producer.instagram}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
