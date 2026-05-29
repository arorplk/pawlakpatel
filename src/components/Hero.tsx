import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const words = ['a love story', 'an adventure', 'a beginning', 'forever']

export function Hero() {
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % words.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      >
        <img
          src="/IMG_2181.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />

      <div className="relative z-10 h-full flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <p className="text-warm font-body text-xs md:text-sm tracking-[0.4em] uppercase mb-4">
            05 . 31 . 2026
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.8 }}
          className="font-display text-[clamp(3rem,12vw,10rem)] leading-[0.85] tracking-tight text-softWhite"
        >
          Khusbu<br />
          <span className="text-warm">&</span> Mitch
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-8 h-8 overflow-hidden"
        >
          <motion.p
            key={wordIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-sm md:text-base text-white/60 tracking-widest lowercase italic"
          >
            this is {words[wordIndex]}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-warm/60" />
      </motion.div>
    </section>
  )
}
