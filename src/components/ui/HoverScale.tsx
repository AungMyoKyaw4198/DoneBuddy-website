import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function HoverScale({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
