import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const photos = [
  { src: '/images/P131.jpg', alt: 'Khusbu and Mitch engagement photo' },
  { src: '/images/IMG_2152.JPG', alt: 'Khusbu and Mitch on the beach' },
  { src: '/images/P001.jpg', alt: 'Khusbu and Mitch under the trees' },
  { src: '/images/IMG_2158.jpeg', alt: 'The proposal moment' },
  { src: '/images/P220.jpeg', alt: 'Khusbu and Mitch in the waves' },
]

export function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12 md:mb-16"
      >
        <span className="font-serif text-6xl md:text-8xl text-sunset-200 font-light">4</span>
        <h2 className="font-serif text-3xl md:text-5xl text-sand-800 mt-2">Our Moments</h2>
        <p className="font-sans text-sm tracking-[0.2em] uppercase text-sunset-500 mt-3">
          A love worth capturing
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            className="mb-4 break-inside-avoid"
          >
            <div className="group relative overflow-hidden rounded-lg">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sand-900/0 group-hover:bg-sand-900/10 transition-colors duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
