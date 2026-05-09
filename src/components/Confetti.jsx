import { useEffect, useRef } from 'react'
import { useConfetti } from '../hooks/useConfetti'

export default function Confetti({ trigger }) {
  const spawn = useConfetti()
  const prevRef = useRef(false)

  useEffect(() => {
    if (trigger && !prevRef.current) {
      spawn()
    }
    prevRef.current = trigger
  }, [trigger, spawn])

  return null
}