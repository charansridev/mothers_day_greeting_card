import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function FlowerCanvas3D() {
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)

    const flowers = []
    const flowerData = [
      { position: [-4, 2, -2],  color: 0xe890b8, petals: 8, scale: 0.6 },
      { position: [4, 2.5, -3], color: 0xc9a8e0, petals: 6, scale: 0.45 },
      { position: [-4.5, -1, -2], color: 0xf2a8c0, petals: 7, scale: 0.5 },
      { position: [4.2, -1.5, -3], color: 0xd4b0e8, petals: 5, scale: 0.35 },
      { position: [0, -3, -2],  color: 0xe0a0c8, petals: 8, scale: 0.55 },
      { position: [-2, 3.5, -4], color: 0xf0b0d0, petals: 6, scale: 0.4  },
      { position: [2.5, -3, -3], color: 0xb8a0d8, petals: 7, scale: 0.3  },
    ]

    flowerData.forEach(({ position, color, petals, scale }) => {
      const group = new THREE.Group()

      for (let i = 0; i < petals; i++) {
        const angle = (i / petals) * Math.PI * 2
        const petalGeo = new THREE.SphereGeometry(0.3, 8, 6)
        petalGeo.scale(1, 2.2, 0.4)
        const petalMat = new THREE.MeshStandardMaterial({
          color,
          transparent: true,
          opacity: 0.75,
          roughness: 0.6,
          metalness: 0.1,
        })
        const petal = new THREE.Mesh(petalGeo, petalMat)
        petal.position.set(Math.cos(angle) * 0.55, Math.sin(angle) * 0.55, 0)
        petal.rotation.z = angle
        group.add(petal)
      }

      const centerGeo = new THREE.SphereGeometry(0.22, 16, 16)
      const centerMat = new THREE.MeshStandardMaterial({ color: 0xf0d060, roughness: 0.4 })
      group.add(new THREE.Mesh(centerGeo, centerMat))

      group.position.set(...position)
      group.scale.setScalar(scale)
      scene.add(group)
      flowers.push(group)
    })

    scene.add(new THREE.AmbientLight(0xffeeff, 0.8))
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2)
    dirLight.position.set(3, 5, 5)
    scene.add(dirLight)
    const pinkLight = new THREE.PointLight(0xf2a8c0, 0.6, 12)
    pinkLight.position.set(-3, 2, 2)
    scene.add(pinkLight)

    let frame
    const clock = new THREE.Clock()
    const animate = () => {
      frame = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()
      flowers.forEach((f, i) => {
        f.rotation.z = t * 0.15 * (i % 2 === 0 ? 1 : -1) + i
        f.position.y += Math.sin(t * 0.4 + i) * 0.003
      })
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', onResize)
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{
        position: 'fixed', inset: 0,
        zIndex: 0, pointerEvents: 'none',
        opacity: 0.55,
      }}
    />
  )
}