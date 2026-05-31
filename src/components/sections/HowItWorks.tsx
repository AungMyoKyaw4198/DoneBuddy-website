import {
  ClipboardList,
  Leaf,
  PawPrint,
  Star,
  Trophy,
} from 'lucide-react'
import { ASSETS, howItWorksSteps } from '../../lib/constants'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal, { FloatingMascot } from '../ui/ScrollReveal'

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
            icon={<Leaf className="h-5 w-5 text-secondary" aria-hidden="true" />}
          >
            How It Works
          </SectionHeading>
        </ScrollReveal>

        <div className="mt-12 grid items-center gap-10 md:gap-12 lg:grid-cols-[1fr_auto]">
          <ScrollReveal delay={0.1}>
            <div className="flex flex-col lg:flex-row lg:items-stretch">
              {howItWorksSteps.map((step, index) => {
                const Icon = iconMap[step.icon]

                return (
                  <div key={step.title} className="contents">
                    <article className="card-surface flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary-fixed text-primary-dark">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-on-surface">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
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

          <ScrollReveal
            delay={0.2}
            className="mx-auto flex w-full max-w-[17rem] justify-center sm:max-w-[19rem] lg:mx-0 lg:max-w-[15rem] lg:justify-end xl:max-w-[17rem]"
          >
            <div className="relative w-full">
              <img
                src={ASSETS.screens.pet.portrait}
                alt="DoneBuddy pet room where you play with and care for your buddy"
                className="relative z-10 w-full drop-shadow-xl"
                loading="lazy"
              />

              <FloatingMascot className="absolute -bottom-1 -left-[18%] z-20 w-[46%] max-w-[7.5rem] sm:-left-[16%] sm:max-w-[8rem] lg:-left-[22%] lg:max-w-[7rem] xl:-left-[18%] xl:max-w-[7.5rem]">
                <img
                  src={ASSETS.pets.churro}
                  alt=""
                  aria-hidden="true"
                  className="h-auto w-full drop-shadow-lg"
                />
              </FloatingMascot>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
