import {
  ArrowRight,
  ClipboardList,
  Leaf,
  PawPrint,
  Star,
  Trophy,
} from 'lucide-react'
import { howItWorksSteps } from '../../lib/constants'
import PhoneMockup from '../ui/PhoneMockup'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from '../ui/ScrollReveal'

const iconMap = {
  clipboard: ClipboardList,
  paw: PawPrint,
  star: Star,
  trophy: Trophy,
} as const

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            icon={<Leaf className="h-5 w-5 text-sage" aria-hidden="true" />}
          >
            How It Works
          </SectionHeading>
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <StaggerContainer className="grid gap-6 sm:grid-cols-2">
            {howItWorksSteps.map((step, index) => {
              const Icon = iconMap[step.icon]

              return (
                <StaggerItem key={step.title}>
                  <div className="relative h-full rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brown/5">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-light text-sage-dark">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-brown">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brown-light">
                      {step.description}
                    </p>

                    {index < howItWorksSteps.length - 1 && (
                      <ArrowRight
                        className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-brown/20 lg:block"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>

          <ScrollReveal delay={0.2} className="flex justify-center">
            <PhoneMockup
              screenshotSrc="/assets/screenshots/streak.svg"
              screenshotAlt="DoneBuddy app streak screen placeholder"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
