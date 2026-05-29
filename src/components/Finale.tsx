import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Finale() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.9, 1])

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <img
          src="/IMG_2152.JPG"
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-ink/40" />

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="font-display text-5xl md:text-8xl lg:text-9xl text-softWhite leading-tight"
        >
          See you<br />
          <span className="italic text-warm">Saturday</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8"
        >
          <p className="font-body text-xs tracking-[0.4em] uppercase text-white/50">
            K & M &middot; 05.31.26
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
