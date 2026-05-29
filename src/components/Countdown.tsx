import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function getTimeRemaining() {
  const wedding = new Date('2026-05-31T16:00:00').getTime()
  const now = Date.now()
  const diff = Math.max(0, wedding - now)

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState(getTimeRemaining())
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeRemaining()), 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { label: 'days', value: time.days },
    { label: 'hrs', value: time.hours },
    { label: 'min', value: time.minutes },
    { label: 'sec', value: time.seconds },
  ]

  return (
    <section ref={ref} className="relative py-32 md:py-48 bg-cream overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #1a1714 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="font-body text-xs tracking-[0.5em] uppercase text-coolGray mb-6"
        >
          The countdown is on
        </motion.p>

        <div className="flex justify-center items-baseline gap-2 md:gap-6">
          {units.map((unit, i) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-5xl md:text-8xl lg:text-[10rem] leading-none text-ink font-light tabular-nums">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-coolGray mt-2">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="font-display text-xl md:text-3xl text-warmDark italic mt-12"
        >
          until forever begins
        </motion.p>
      </div>
    </section>
  )
}
