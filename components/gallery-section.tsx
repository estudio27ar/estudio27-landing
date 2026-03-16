"use client"

import { useRef } from "react"
import Image from "next/image"

const galleryVideos = [
  { 
    id: 1, 
    video: "/videos/catalogo-microfonos.mp4"
  },
  { 
    id: 2, 
    video: "/videos/catalogo-instrumentos.mp4"
  },
  { 
    id: 3, 
    video: "/videos/equipo-audio-monitoreo.mp4"
  },
]

const galleryPhotos = [
  {
    id: 1,
    title: "ESTUDIO A - 6x3 mts.",
    image: "/images/estudio-a.jpeg"
  },
  {
    id: 2,
    title: "FONDO INFINITO",
    image: "/images/fondo-infinito.jpeg"
  },
  {
    id: 3,
    title: "ESTUDIO B - CONTROL ROOM",
    image: "/images/estudio-b.jpeg"
  },
  {
    id: 4,
    title: "PRODUCCIÓN MUSICAL - ESTUDIO A",
    image: "/images/produccion-musical.jpeg"
  },
  {
    id: 5,
    title: "SET GRABACION VOCAL",
    image: "/images/set-grabacion-vocal.jpeg"
  },
  {
    id: 6,
    title: "SET GRABACION DE BATERÍAS",
    image: "/images/set-grabacion-baterias.jpg"
  },
]

function VideoCard({ item }: { item: typeof galleryVideos[number] }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleClick = () => {
    const video = videoRef.current
    if (!video) return

    if (video.paused) {
      video.play()
    } else {
      video.pause()
      video.currentTime = 0
    }
  }

  const handleEnded = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
  }

  return (
    <div
      onClick={handleClick}
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden
                 bg-gradient-to-br from-secondary to-muted
                 border border-border/50
                 hover:border-primary/30
                 hover:scale-[1.02]
                 transition-all duration-300
                 cursor-pointer"
    >
      <video
        ref={videoRef}
        src={item.video}
        muted
        playsInline
        onEnded={handleEnded}
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  )
}

function PhotoCard({ item }: { item: typeof galleryPhotos[number] }) {
  return (
    <div
      className="group relative aspect-[3/4] rounded-2xl overflow-hidden
                 bg-gradient-to-br from-secondary to-muted
                 border border-border/50
                 hover:border-primary/30
                 hover:scale-[1.02]
                 transition-all duration-300"
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
      
      {/* Title */}
      <div className="absolute bottom-0 left-0 right-0 p-4 pointer-events-none">
        <p className="text-sm text-foreground font-medium">{item.title}</p>
      </div>
    </div>
  )
}

export function GallerySection() {
  return (
    <>
      {/* Nuestro Equipamiento - Videos */}
      <section className="py-16 px-6 bg-gradient-to-b from-background to-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Nuestro</span>{" "}
              <span className="text-[#718f49]">Equipamiento</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">Clickeá en las imagenes para ver más</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryVideos.map((item) => (
              <VideoCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Galería del Estudio - Photos */}
      <section className="py-16 px-6 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-foreground">Galería del</span>{" "}
              <span className="text-primary">Estudio</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">Conocé nuestro espacio de trabajo</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryPhotos.map((item) => (
              <PhotoCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
