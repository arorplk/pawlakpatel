import './index.css'
import { Hero } from './components/Hero'
import { PhotoStrip } from './components/PhotoStrip'
import { Story } from './components/Story'
import { Countdown } from './components/Countdown'
import { Details } from './components/Details'
import { Finale } from './components/Finale'

function App() {
  return (
    <>
      <Hero />
      <PhotoStrip />
      <Story />
      <Countdown />
      <Details />
      <Finale />
    </>
  )
}

export default App
