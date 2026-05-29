import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/images/IMG_2181.jpg)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-sand-900/40 via-sand-900/20 to-sand-50" />

      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-sans text-sm tracking-[0.3em] uppercase text-white/90 mb-4"
        >
          The story of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-white leading-tight"
        >
          Khusbu
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="block text-3xl md:text-4xl lg:text-5xl font-light italic text-sunset-200 my-2 md:my-4"
          >
            &amp;
          </motion.span>
          Mitch
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="font-sans text-lg md:text-xl text-white/90 mt-6 tracking-wide"
        >
          May 31, 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="text-white/70"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
            <p className="text-xs mt-2 tracking-widest uppercase">Scroll to begin</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
