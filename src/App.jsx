import { useState } from 'react'
import FlowerCanvas3D   from './components/FlowerCanvas3D'
import HeroSection      from './components/HeroSection'
import MessageCard      from './components/MessageCard'
import BouquetSection   from './components/BouquetSection'
import FinalSection     from './components/FinalSection'

export default function App() {
  const [step, setStep] = useState('hero')

  return (
    <>
      <FlowerCanvas3D />

      {step === 'hero' && (
        <HeroSection onOpen={() => setStep('card')} />
      )}

      {step === 'card' && (
        <MessageCard onContinue={() => setStep('bouquet')} />
      )}

      {step === 'bouquet' && (
        <BouquetSection onAllPicked={() => setStep('final')} />
      )}

      {step === 'final' && <FinalSection />}
    </>
  )
}