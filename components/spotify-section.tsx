"use client"

export function SpotifySection() {
  return (
    <section id="spotify" className="py-16 pb-8 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nuestras <span className="text-accent">Producciones</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground">Escuchá lo que hacemos en Estudio 27</p>
        </div>
        
        <div className="relative rounded-2xl overflow-hidden
                       bg-gradient-to-b from-secondary/80 to-secondary/40
                       border border-border/50
                       shadow-xl shadow-black/20
                       p-4">
          {/* Aero glass effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none rounded-2xl" />
          
          {/* Spotify Embed */}
          <div className="relative rounded-xl overflow-hidden">
            <iframe 
              src="https://open.spotify.com/embed/playlist/65vQ5JVfJaGIvkIIoifyHH?utm_source=generator" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allowFullScreen 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
