import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const details = [
  { label: 'The Date', value: 'Saturday, May 31st', sub: 'Two Thousand Twenty Six' },
  { label: 'The Time', value: '4:00 in the afternoon', sub: 'Reception to follow' },
  { label: 'The Place', value: 'Shared with', sub: 'our invited guests' },
]

export function Details() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-ink">
      <div className="px-6 md:px-16 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <p className="font-body text-xs tracking-[0.5em] uppercase text-warm/60">
            The details
          </p>
          <h2 className="font-display text-4xl md:text-7xl text-softWhite mt-4 leading-tight">
            Join us as we<br />
            <span className="italic text-warm">say I do</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-px bg-white/10 rounded-lg overflow-hidden">
          {details.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.2 }}
              className="bg-ink p-8 md:p-12 text-center group hover:bg-white/5 transition-colors duration-500"
            >
              <p className="font-body text-[10px] tracking-[0.4em] uppercase text-warm mb-4">
                {item.label}
              </p>
              <p className="font-display text-2xl md:text-3xl text-softWhite">
                {item.value}
              </p>
              <p className="font-body text-sm text-white/40 mt-2 italic">
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <p className="font-body text-sm text-white/30">
            More details coming soon. We can't wait to celebrate with you.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
