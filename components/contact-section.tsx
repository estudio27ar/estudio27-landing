"use client"

import { useState } from "react"
import Image from "next/image"
import { Instagram, Mail, User, MapPin, ChevronDown } from "lucide-react"

const producerContacts = [
  {
    name: "Donfomento",
    instagram: "@donfomento",
    instagramUrl: "https://instagram.com/donfomento",
  },
  {
    name: "Thomás Heredia",
    instagram: "@thomasheredia",
    instagramUrl: "https://instagram.com/thomasheredia",
  },
]

export function ContactSection() {
  const [mapOpen, setMapOpen] = useState(false)

  return (
    <section id="contacto" className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">Ponete en contacto con nosotros, contanos tu idea.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Studio Contact */}
          <div className="relative p-8 rounded-2xl
                         bg-gradient-to-b from-secondary/80 to-secondary/40
                         border border-border/50
                         shadow-xl shadow-black/20
                         overflow-hidden">
            {/* Aero effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-foreground mb-6">Estudio 27</h3>
              
              <div className="space-y-4">
                <a
                  href="https://instagram.com/estudio27.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl
                            bg-secondary/50 border border-border/30
                            hover:border-primary/30 hover:bg-secondary/70
                            transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] 
                                 flex items-center justify-center shadow-lg">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      @estudio27.ar
                    </p>
                    <p className="text-muted-foreground text-sm">Instagram</p>
                  </div>
                </a>
                
                <a
                  href="mailto:estudio27.ar@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl
                            bg-secondary/50 border border-border/30
                            hover:border-primary/30 hover:bg-secondary/70
                            transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 
                                 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                      estudio27.ar@gmail.com
                    </p>
                    <p className="text-muted-foreground text-sm">Email</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          
          {/* Producer Contacts */}
          <div className="relative p-8 rounded-2xl
                         bg-gradient-to-b from-secondary/80 to-secondary/40
                         border border-border/50
                         shadow-xl shadow-black/20
                         overflow-hidden">
            {/* Aero effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-foreground mb-6">Productores</h3>
              
              <div className="space-y-4">
                {producerContacts.map((producer, index) => (
                  <a
                    key={index}
                    href={producer.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl
                              bg-secondary/50 border border-border/30
                              hover:border-accent/30 hover:bg-secondary/70
                              transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-accent/20 
                                   flex items-center justify-center">
                      <User className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium group-hover:text-accent transition-colors">
                        {producer.name}
                      </p>
                      <p className="text-muted-foreground text-sm flex items-center gap-1">
                        <Instagram className="w-3 h-3" />
                        {producer.instagram}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Location - Centered below */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="relative p-6 rounded-2xl
                         bg-gradient-to-b from-secondary/80 to-secondary/40
                         border border-border/50
                         shadow-xl shadow-black/20
                         overflow-hidden">
            {/* Aero effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
            
            <div className="relative">
              <h3 className="text-2xl font-bold text-foreground mb-4">Ubicación</h3>
              
              <button
                onClick={() => setMapOpen(!mapOpen)}
                className="flex items-center gap-4 p-4 rounded-xl w-full
                          bg-secondary/50 border border-border/30
                          hover:border-primary/30 hover:bg-secondary/70
                          transition-all duration-300 group text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 
                               flex items-center justify-center flex-shrink-0
                               group-hover:bg-primary/30
                               transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                    Zona Mataderos - Liniers
                  </p>
                  <p className="text-muted-foreground text-sm">
                    CABA, Buenos Aires
                  </p>
                </div>
                <ChevronDown className="w-8 h-8 text-muted-foreground animate-bounce flex-shrink-0" />
              </button>

              {/* Map with animation */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  mapOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                }`}
              >
                <div className="rounded-xl overflow-hidden border border-border/30 aspect-square">
                  <Image
                    src="/images/ubicacion-estudio-27.png"
                    alt="Ubicación Estudio 27 - Mataderos, Buenos Aires"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
