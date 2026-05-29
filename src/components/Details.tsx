import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function Details() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section ref={ref} className="py-20 md:py-32 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <span className="font-serif text-6xl md:text-8xl text-sunset-200 font-light">5</span>
        <h2 className="font-serif text-3xl md:text-5xl text-sand-800 mt-2">The Big Day</h2>
        <p className="font-sans text-sm tracking-[0.2em] uppercase text-sunset-500 mt-3 mb-12">
          Join us as we celebrate
        </p>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-sand-100"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sunset-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-sunset-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-sand-800 mb-2">When</h3>
            <p className="font-sans text-sand-600 text-sm leading-relaxed">
              Saturday<br />
              May 31, 2026
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-sand-100"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sunset-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-sunset-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-sand-800 mb-2">Time</h3>
            <p className="font-sans text-sand-600 text-sm leading-relaxed">
              Ceremony at 4:00 PM<br />
              Reception to follow
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white rounded-xl p-8 shadow-sm border border-sand-100"
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-sunset-50 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-sunset-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-serif text-xl text-sand-800 mb-2">Where</h3>
            <p className="font-sans text-sand-600 text-sm leading-relaxed">
              Details shared<br />
              with invited guests
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
