import './index.css'
import { Hero } from './components/Hero'
import { Chapter } from './components/Chapter'
import { Countdown } from './components/Countdown'
import { Details } from './components/Details'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="relative">
      <Hero />

      <Chapter
        number={1}
        title="The Beginning"
        subtitle="Where it all started"
        image="/images/IMG_8773.jpeg"
        imageAlt="Khusbu and Mitch on a pier"
        direction="left"
      >
        Two people. One spark. The kind of connection you can't plan for
        and couldn't forget if you tried.
      </Chapter>

      <Chapter
        number={2}
        title="The Adventures"
        subtitle="Every day an adventure together"
        image="/images/28E94F65-6942-4C14-A98F-32AD8007C5E0.JPG"
        imageAlt="Khusbu and Mitch at the pumpkin patch"
        direction="right"
      >
        From pumpkin patches to ocean sunsets, every ordinary moment became
        extraordinary together.
      </Chapter>

      <Chapter
        number={3}
        title="The Question"
        subtitle="She said yes!"
        image="/images/IMG_2170.JPG"
        imageAlt="Mitch proposing to Khusbu on the beach"
        direction="left"
      >
        On a golden beach at sunset, one knee hit the sand and a lifetime
        together began. She said yes before he even finished asking.
      </Chapter>

      <Gallery />

      <Countdown />

      <Details />

      <Footer />
    </div>
  )
}

export default App
