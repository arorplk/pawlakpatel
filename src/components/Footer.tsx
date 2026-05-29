import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <footer ref={ref} className="relative py-24 md:py-36 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/IMG_2152.JPG)' }}
      />
      <div className="absolute inset-0 bg-sand-900/60" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h2 className="font-serif text-4xl md:text-6xl text-white font-light">
          See you Saturday
        </h2>
        <p className="font-sans text-white/80 mt-4 text-sm tracking-widest uppercase">
          Khusbu & Mitch &middot; 05.31.2026
        </p>
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="mt-8 inline-block"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-sunset-300" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
          </svg>
        </motion.div>
      </motion.div>
    </footer>
  )
}
