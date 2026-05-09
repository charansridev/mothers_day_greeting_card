import { motion, AnimatePresence } from 'framer-motion'

export default function FlowerCard({ flower, isPicked, onPick }) {
  const handleClick = () => {
    if (!isPicked) onPick(flower.id)
  }

  return (
    <motion.div
      className={`flower-card${isPicked ? ' picked' : ''}`}
      onClick={handleClick}
      layout
      transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
    >
      <AnimatePresence mode="wait">
        {!isPicked ? (
          <motion.div
            key="unpicked"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}
          >
            <span className="flower-icon">{flower.emoji}</span>
            <span className="pick-label">PICK ME</span>
          </motion.div>
        ) : (
          <motion.div
            key="picked"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px' }}
          >
            <span className="picked-icon">{flower.emoji}</span>
            <span className="flower-note-title">
              ✦ {flower.name} ✦
            </span>
            <p className="flower-note-text">{flower.note}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}