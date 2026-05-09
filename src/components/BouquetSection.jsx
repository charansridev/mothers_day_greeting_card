import { useState } from 'react'
import { motion } from 'framer-motion'
import FlowerCard from './FlowerCard'
import Vase from './Vase'
import { FLOWER_NOTES } from '../data/flowerNotes'

export default function BouquetSection({ onAllPicked }) {
  const [pickedFlowers, setPickedFlowers] = useState([])

  const handlePick = (id) => {
    if (pickedFlowers.includes(id)) return
    const updated = [...pickedFlowers, id]
    setPickedFlowers(updated)
    if (updated.length === FLOWER_NOTES.length) {
      setTimeout(() => onAllPicked(), 1200)
    }
  }

  const allPicked = pickedFlowers.length === FLOWER_NOTES.length

  return (
    <section className="section-bouquet">
      <motion.h2
        className="bouquet-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Pick a Flower for Mum
      </motion.h2>

      <motion.p
        className="bouquet-subtitle"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
      >
        each one holds a little note ♡
      </motion.p>

      <div className="flower-cards-row">
        {FLOWER_NOTES.map((flower, index) => (
          <motion.div
            key={flower.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <FlowerCard
              flower={flower}
              isPicked={pickedFlowers.includes(flower.id)}
              onPick={handlePick}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        className="vase-wrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: pickedFlowers.length > 0 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Vase pickedFlowers={pickedFlowers} flowerData={FLOWER_NOTES} />
      </motion.div>

      <p className="counter-text">
        {pickedFlowers.length} / {FLOWER_NOTES.length} flowers picked
        {allPicked && (
          <motion.span
            style={{ display: 'block', marginTop: 8, color: 'var(--rose)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            ✦ all picked ✦
          </motion.span>
        )}
      </p>
    </section>
  )
}