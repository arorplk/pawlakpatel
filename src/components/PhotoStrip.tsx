import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const photos = [
  { src: '/images/P001.jpg', rotate: -2 },
  { src: '/images/IMG_2158.jpeg', rotate: 1.5 },
  { src: '/images/IMG_8773.jpeg', rotate: -1 },
  { src: '/images/P131.jpg', rotate: 2 },
  { src: '/images/28E94F65-6942-4C14-A98F-32AD8007C5E0.JPG', rotate: -1.5 },
  { src: '/images/P220.jpeg', rotate: 1 },
]

export function PhotoStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['10%', '-40%'])

  return (
    <section ref={containerRef} className="relative py-24 md:py-40 overflow-hidden bg-ink">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center font-display text-2xl md:text-4xl text-white/20 italic mb-12 md:mb-20"
      >
        moments that led us here
      </motion.p>

      <motion.div style={{ x }} className="flex gap-4 md:gap-6 pl-8">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            className="shrink-0 relative group"
            style={{ rotate: `${photo.rotate}deg` }}
          >
            <div className="w-[280px] h-[380px] md:w-[340px] md:h-[460px] overflow-hidden rounded-sm bg-white p-2 shadow-2xl shadow-black/40">
              <img
                src={photo.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
