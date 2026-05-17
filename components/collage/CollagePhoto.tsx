import Image from 'next/image'

type CollagePhotoProps = {
  src: string
  alt: string
  rotation?: number
  width?: number
  className?: string
}

export function CollagePhoto({ src, alt, rotation = 0, width = 280, className = '' }: CollagePhotoProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-sm shadow-2xl ${className}`}
      style={{ transform: `rotate(${rotation}deg)`, width, aspectRatio: '4/3', flexShrink: 0 }}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes={`${width}px`} />
    </div>
  )
}
