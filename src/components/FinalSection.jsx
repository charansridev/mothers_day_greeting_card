import { motion } from 'framer-motion'

export default function FinalSection() {
  return (
    <section className="section-final">
      <motion.h1
        className="final-title"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'ease' }}
      >
        With all my love ♡
      </motion.h1>

      <motion.p
        className="final-message"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        There&rsquo;s no card big enough,
        <br />
        no words quite right — but
        <br />
        you&rsquo;ve always understood
        <br />
        me anyway.
      </motion.p>

      <motion.div
        className="final-hearts"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <span className="heart">💐</span>
        <span className="heart">🤍</span>
        <span className="heart">🌸</span>
      </motion.div>
    </section>
  )
}