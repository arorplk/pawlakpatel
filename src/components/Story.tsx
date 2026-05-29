import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const scenes = [
  {
    image: '/images/IMG_8773.jpeg',
    text: 'It started with a look across the room that neither of us could explain.',
    position: 'left' as const,
  },
  {
    image: '/images/28E94F65-6942-4C14-A98F-32AD8007C5E0.JPG',
    text: 'We did everything together. Even the weird stuff. Especially the weird stuff.',
    position: 'right' as const,
  },
  {
    image: '/images/IMG_2170.JPG',
    text: 'And then, on a beach in Hawaii, with the sun going down and the waves rolling in\u2014',
    position: 'center' as const,
  },
]

function Scene({ image, text, position, index }: {
  image: string
  text: string
  position: 'left' | 'right' | 'center'
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [80, -80])
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05])

  const textAlign = position === 'center' ? 'text-center mx-auto' :
    position === 'left' ? 'text-left md:ml-12 lg:ml-24' : 'text-right md:mr-12 lg:mr-24 md:ml-auto'

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden flex items-center">
      <motion.div className="absolute inset-0" style={{ scale: imgScale }}>
        <img src={image} alt="" className="w-full h-full object-cover" />
      </motion.div>

      <div className="absolute inset-0 bg-ink/50" />

      <motion.div
        style={{ y }}
        className={`relative z-10 px-6 md:px-16 max-w-2xl ${textAlign}`}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1, delay: index * 0.1 }}
          className="font-display text-2xl md:text-4xl lg:text-5xl text-softWhite leading-snug italic font-light"
        >
          "{text}"
        </motion.p>
      </motion.div>
    </div>
  )
}

export function Story() {
  return (
    <section>
      {scenes.map((scene, i) => (
        <Scene key={scene.image} {...scene} index={i} />
      ))}
    </section>
  )
}
