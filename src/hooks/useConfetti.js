import { useCallback } from 'react'

export function useConfetti() {
  const spawn = useCallback(() => {
    const colors = ['#e890b8','#c9a8e0','#f0d060','#7cb98a','#f2a8c0','#d4b0e8']
    for (let i = 0; i < 70; i++) {
      const el = document.createElement('div')
      el.style.cssText = `
        position: fixed;
        left: ${Math.random() * 100}vw;
        top: -20px;
        width: ${6 + Math.random() * 8}px;
        height: ${6 + Math.random() * 8}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
        pointer-events: none;
        z-index: 9999;
        animation: confettiFall ${2 + Math.random() * 3}s linear ${Math.random() * 1.5}s forwards;
      `
      document.body.appendChild(el)
      setTimeout(() => el.remove(), 6000)
    }
  }, [])

  return spawn
}