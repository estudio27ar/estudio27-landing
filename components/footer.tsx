"use client"

import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-card border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <Image
          src="/images/estudio-27-logo.png"
          alt="Estudio 27"
          width={200}
          height={48}
          className="mx-auto w-auto h-10"
        />
      </div>
    </footer>
  )
}
