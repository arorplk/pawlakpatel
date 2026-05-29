import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

function getTimeRemaining() {
  const wedding = new Date('2026-05-31T00:00:00').getTime()
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
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    const interval = setInterval(() => setTime(getTimeRemaining()), 1000)
    return () => clearInterval(interval)
  }, [])

  const units = [
    { label: 'Days', value: time.days },
    { label: 'Hours', value: time.hours },
    { label: 'Minutes', value: time.minutes },
    { label: 'Seconds', value: time.seconds },
  ]

  return (
    <section ref={ref} className="py-20 md:py-32 px-6 bg-sand-100">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h2 className="font-serif text-3xl md:text-5xl text-sand-800">Counting Down</h2>
        <p className="font-sans text-sm tracking-[0.2em] uppercase text-sunset-500 mt-3 mb-12">
          Until we say "I do"
        </p>

        <div className="flex justify-center gap-4 md:gap-8 flex-wrap">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-white shadow-lg flex items-center justify-center border border-sunset-100">
                <span className="font-serif text-3xl md:text-5xl text-sand-800 font-light">
                  {unit.value}
                </span>
              </div>
              <span className="font-sans text-xs md:text-sm text-sand-600 mt-3 tracking-wider uppercase">
                {unit.label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
