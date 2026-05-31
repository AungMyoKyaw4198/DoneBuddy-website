import type { ReactNode } from 'react'

type SectionHeadingProps = {
  children: ReactNode
  subtitle?: string
  className?: string
  icon?: ReactNode
}

export default function SectionHeading({
  children,
  subtitle,
  className = '',
  icon,
}: SectionHeadingProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="mb-3 flex items-center justify-center gap-3">
        {icon}
        <h2 className="font-heading text-3xl font-bold text-on-surface md:text-4xl">
          {children}
        </h2>
        {icon}
      </div>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-on-surface-variant">{subtitle}</p>
      )}
    </div>
  )
}
