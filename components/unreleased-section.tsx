"use client"

import { Disc3 } from "lucide-react"

export function UnreleasedSection() {
  return (
    <section className="pt-8 pb-16 px-6 bg-gradient-to-b from-card to-background">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-12 md:p-16 rounded-3xl text-center
                       bg-gradient-to-br from-secondary via-secondary/80 to-secondary/60
                       border border-border/50
                       shadow-2xl shadow-black/30
                       overflow-hidden">
          {/* Aero effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          {/* Accent glows */}
          <div className="absolute top-0 left-1/4 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-accent/20 flex items-center justify-center">
              <Disc3 className="w-10 h-10 text-accent" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Producciones <span className="text-accent">Inéditas</span>
            </h2>
            
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Accedé a nuestras producciones inéditas y demos exclusivos en Untitled
            </p>
            
            <a
              href="https://untitled.stream/library/project/ts3D7JbSBjFpFcQOed1Mg"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 
                         bg-gradient-to-b from-accent to-accent/90 
                         text-accent-foreground font-bold text-lg rounded-xl
                         shadow-lg shadow-accent/25
                         hover:shadow-xl hover:shadow-accent/30
                         hover:from-accent/90 hover:to-accent/80
                         transition-all duration-300
                         before:absolute before:inset-0 before:rounded-xl
                         before:bg-gradient-to-b before:from-white/25 before:to-transparent
                         before:opacity-50 before:pointer-events-none"
            >
              <Disc3 className="w-5 h-5" />
              Escuchar demos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
