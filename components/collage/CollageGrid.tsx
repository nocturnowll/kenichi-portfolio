'use client'
import { motion } from 'framer-motion'
import { CollagePhoto } from './CollagePhoto'

type Photo = {
  src: string
  alt: string
  rotation?: number
  width?: number
  x: number
  y: number
}

export function CollageGrid({ photos, height = 500 }: { photos: Photo[]; height?: number }) {
  return (
    <div className="relative w-full" style={{ height }}>
      {photos.map((photo, i) => (
        <motion.div
          key={photo.src}
          className="absolute"
          style={{ left: `${photo.x}%`, top: photo.y }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.12 }}
        >
          <CollagePhoto src={photo.src} alt={photo.alt} rotation={photo.rotation} width={photo.width} />
        </motion.div>
      ))}
    </div>
  )
}
