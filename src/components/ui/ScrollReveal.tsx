import { useEffect, useState, type ReactNode } from 'react'
import {
  motion,
  useReducedMotion,
  type Variants,
} from 'framer-motion'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{ staggerChildren: 0.12 }}
      variants={{ hidden: {}, visible: {} }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  )
}

export function FloatingMascot({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
}

export function useCarousel(length: number) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index >= length) {
      setIndex(0)
    }
  }, [index, length])

  return {
    index,
    setIndex,
    next: () => setIndex((current) => (current + 1) % length),
    prev: () => setIndex((current) => (current - 1 + length) % length),
  }
}
