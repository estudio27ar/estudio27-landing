"use client"

import Image from "next/image"
import { Music, MessageCircle, ChevronDown } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
      
      {/* Subtle glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src="/images/estudio-27-logo.png"
            alt="Estudio 27"
            width={600}
            height={150}
            className="mx-auto w-auto h-24 md:h-36 lg:h-44 drop-shadow-[0_4px_20px_rgba(113,143,73,0.3)]"
            priority
          />
        </div>
        
        {/* Subtitle */}
        <p className="font-serif text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto tracking-wide">
          Estudio de grabación y producción musical.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#spotify"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 
                       bg-gradient-to-b from-primary to-primary/90 
                       text-primary-foreground font-semibold rounded-xl
                       shadow-lg shadow-primary/25
                       hover:shadow-xl hover:shadow-primary/30
                       hover:from-primary/90 hover:to-primary/80
                       transition-all duration-300
                       before:absolute before:inset-0 before:rounded-xl
                       before:bg-gradient-to-b before:from-white/20 before:to-transparent
                       before:opacity-50 before:pointer-events-none"
          >
            <Music className="w-5 h-5" />
            Escuchar producciones
          </a>
          
          <a
            href="#contacto"
            className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 
                       bg-gradient-to-b from-secondary to-secondary/90 
                       text-secondary-foreground font-semibold rounded-xl
                       border border-border/50
                       shadow-lg shadow-black/20
                       hover:shadow-xl hover:border-primary/30
                       hover:from-secondary/80 hover:to-secondary/70
                       transition-all duration-300
                       before:absolute before:inset-0 before:rounded-xl
                       before:bg-gradient-to-b before:from-white/10 before:to-transparent
                       before:opacity-50 before:pointer-events-none"
          >
            <MessageCircle className="w-5 h-5" />
            Contactar
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-12 h-12 text-muted-foreground/50" />
      </div>
    </section>
  )
}
