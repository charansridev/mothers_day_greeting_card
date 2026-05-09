import { useState } from 'react'
import { motion } from 'framer-motion'
import Envelope from './Envelope'
import Confetti from './Confetti'

export default function HeroSection({ onOpen }) {
  const [sealPopped, setSealPopped] = useState(false)
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [confettiTrigger, setConfettiTrigger] = useState(false)

  const handleSealClick = () => {
    if (sealPopped) return
    setConfettiTrigger(true)
    setTimeout(() => setSealPopped(true), 100)
    setTimeout(() => {
      setEnvelopeOpened(true)
      setTimeout(() => onOpen(), 700)
    }, 500)
  }

  return (
    <section className="section-hero">
      <div className="hero-bg" />
      <Confetti trigger={confettiTrigger} />

      <motion.div
        className="pill-badge"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'ease' }}
      >
        ❤️ FOR MUM
      </motion.div>

      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'ease', delay: 0.2 }}
      >
        a little something
        <br />
        for you
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'ease', delay: 0.4 }}
      >
        happy mother&rsquo;s day ♡
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'ease', delay: 0.6 }}
      >
        <Envelope
          opened={envelopeOpened}
          sealPopped={sealPopped}
          onSealClick={handleSealClick}
        />
      </motion.div>

      {!sealPopped && (
        <motion.p
          className="hero-hint"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 1 }}
        >
          ✦ TAP THE SEAL TO OPEN ✦
        </motion.p>
      )}
    </section>
  )
}