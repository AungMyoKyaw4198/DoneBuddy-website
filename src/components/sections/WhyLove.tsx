import { Check } from 'lucide-react'
import { ASSETS, whyLovePoints } from '../../lib/constants'
import ScrollReveal from '../ui/ScrollReveal'

export default function WhyLove() {
  return (
    <section className="px-4 py-16 md:px-6">
      <div className="relative mx-auto max-w-6xl overflow-x-clip rounded-xl bg-surface-container px-6 py-12 md:rounded-2xl md:px-10 md:py-16">
        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[15rem] pb-10 pr-5 sm:max-w-xs sm:pb-12 sm:pr-7 md:max-w-sm md:pb-14 md:pr-8">
              <img
                src={ASSETS.pets.mochi}
                alt="Mochi, a happy DoneBuddy pet companion"
                className="relative z-10 w-full drop-shadow-xl"
              />
              <img
                src={ASSETS.screens.profile.left}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 right-0 z-0 hidden w-[46%] min-w-[6.75rem] max-w-[10.5rem] opacity-90 drop-shadow-lg sm:block sm:min-w-[7.5rem] sm:max-w-[11rem] md:max-w-[12rem]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2 className="font-heading text-3xl font-bold text-on-surface md:text-4xl">
              Why You&apos;ll Love{' '}
              <span className="text-primary">DoneBuddy</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {whyLovePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-on-primary">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-on-surface-variant">{point}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
