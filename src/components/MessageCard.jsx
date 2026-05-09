import { motion } from 'framer-motion'

function LeafCorner({ className }) {
  return (
    <svg
      className={`leaf-corner ${className}`}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path d="M2 30 Q2 2 30 2" stroke="#7cb98a" strokeWidth="2"
            fill="none" strokeLinecap="round"/>
      <ellipse cx="12" cy="12" rx="7" ry="4" fill="#7cb98a" opacity="0.6"
               transform="rotate(-35 12 12)"/>
      <ellipse cx="20" cy="6" rx="5" ry="3" fill="#4a8a5a" opacity="0.5"
               transform="rotate(-55 20 6)"/>
    </svg>
  )
}

export default function MessageCard({ onContinue }) {
  return (
    <section className="section-hero">
      <motion.div
        className="card-outer"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'ease' }}
      >
        <LeafCorner className="tl" />
        <LeafCorner className="tr" />
        <LeafCorner className="bl" />
        <LeafCorner className="br" />

        <div className="avatar-badge">🌸</div>

        <div className="card-pill">❤️ FOR THE ONE WHO MADE EVERYTHING</div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(22px, 4vw, 30px)',
          fontWeight: 700,
          marginBottom: 8,
        }}>
          Happy Mother&rsquo;s Day
        </h2>
        <p style={{
          fontFamily: 'var(--font-script)',
          fontSize: 22,
          color: 'var(--rose)',
        }}>
          for Mum ♡
        </p>

        <div className="card-divider">✦</div>

        <p style={{
          fontSize: 14,
          color: 'var(--text-mid)',
          lineHeight: 1.8,
          maxWidth: 360,
          margin: '0 auto',
        }}>
          Today is yours. A whole little garden of gratitude &mdash; for every meal,
          every late-night talk, every moment you made the world feel softer.
        </p>

        <motion.button
          className="card-continue-btn"
          onClick={onContinue}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          PICK A FLOWER FOR MUM →
        </motion.button>
      </motion.div>
    </section>
  )
}