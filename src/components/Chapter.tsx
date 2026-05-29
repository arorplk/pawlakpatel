import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

interface ChapterProps {
  number: number
  title: string
  subtitle: string
  image: string
  imageAlt: string
  direction: 'left' | 'right'
  children: ReactNode
}

export function Chapter({ number, title, subtitle, image, imageAlt, direction, children }: ChapterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const imageSlide = direction === 'left' ? -60 : 60
  const textSlide = direction === 'left' ? 60 : -60

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
      <div className={`flex flex-col ${direction === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>
        <motion.div
          initial={{ opacity: 0, x: imageSlide }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="w-full md:w-1/2"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-sunset-100 rounded-lg -rotate-2" />
            <img
              src={image}
              alt={imageAlt}
              className="relative rounded-lg w-full h-80 md:h-[480px] object-cover shadow-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: textSlide }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <span className="font-serif text-6xl md:text-8xl text-sunset-200 font-light">
            {number}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-sand-800 mt-2 leading-tight">
            {title}
          </h2>
          <p className="font-sans text-sm tracking-[0.2em] uppercase text-sunset-500 mt-3">
            {subtitle}
          </p>
          <p className="font-sans text-base md:text-lg text-sand-700 mt-6 leading-relaxed max-w-md">
            {children}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
