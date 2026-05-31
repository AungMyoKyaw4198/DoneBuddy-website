import {
  BarChart3,
  Check,
  Heart,
  Star,
} from 'lucide-react'
import { features } from '../../lib/constants'
import HoverScale from '../ui/HoverScale'
import {
  StaggerContainer,
  StaggerItem,
} from '../ui/ScrollReveal'

const iconMap = {
  check: Check,
  heart: Heart,
  star: Star,
  chart: BarChart3,
} as const

export default function Features() {
  return (
    <section id="features" className="scroll-mt-24 px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon]

            return (
              <StaggerItem key={feature.title}>
                <HoverScale>
                  <article className="card-surface h-full p-6 transition-shadow hover:shadow-card-hover">
                    <div
                      className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl ${feature.color}`}
                    >
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-on-surface">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                      {feature.description}
                    </p>
                  </article>
                </HoverScale>
              </StaggerItem>
            )
          })}
        </StaggerContainer>
      </div>
    </section>
  )
}
