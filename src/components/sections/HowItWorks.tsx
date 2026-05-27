import {
  ClipboardList,
  Leaf,
  PawPrint,
  Star,
  Trophy,
} from 'lucide-react'
import { howItWorksSteps } from '../../lib/constants'
import PhoneMockup from '../ui/PhoneMockup'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'

const iconMap = {
  clipboard: ClipboardList,
  paw: PawPrint,
  star: Star,
  trophy: Trophy,
} as const

function StepConnector({ variant }: { variant: 'vertical' | 'horizontal' }) {
  if (variant === 'vertical') {
    return (
      <div className="flex justify-center py-3 lg:hidden" aria-hidden="true">
        <img
          src="/assets/icons/arrow-down.svg"
          alt=""
          className="h-12 w-6 object-contain"
        />
      </div>
    )
  }

  return (
    <div
      className="hidden shrink-0 items-center justify-center px-2 lg:flex xl:px-4"
      aria-hidden="true"
    >
      <img
        src="/assets/icons/arrow-right.svg"
        alt=""
        className="h-8 w-14 object-contain xl:h-9 xl:w-16"
      />
    </div>
  )
}

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

        <div className="mt-12 grid items-center gap-12 xl:grid-cols-[1fr_auto]">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col lg:flex-row lg:items-stretch">
              {howItWorksSteps.map((step, index) => {
                const Icon = iconMap[step.icon]

                return (
                  <div key={step.title} className="contents">
                    <article className="flex min-w-0 flex-1 flex-col rounded-3xl bg-white p-5 shadow-sm ring-1 ring-brown/5 sm:p-6">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sage-light text-sage-dark">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold text-brown">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-brown-light">
                        {step.description}
                      </p>
                    </article>

                    {index < howItWorksSteps.length - 1 && (
                      <>
                        <StepConnector variant="vertical" />
                        <StepConnector variant="horizontal" />
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

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
