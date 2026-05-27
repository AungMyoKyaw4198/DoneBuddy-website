import { Check, PawPrint } from 'lucide-react'
import { whyLovePoints } from '../../lib/constants'
import ScrollReveal from '../ui/ScrollReveal'

export default function WhyLove() {
  return (
    <section className="px-4 py-16 md:px-6">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-sage-light px-6 py-12 md:px-10 md:py-16">
        <PawPrint
          className="pointer-events-none absolute -right-6 bottom-4 h-40 w-40 text-sage/10"
          aria-hidden="true"
        />

        <div className="relative grid items-center gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <img
              src="/assets/mascot/corgi-heart.png"
              alt="DoneBuddy corgi mascot hugging a heart"
              className="mx-auto w-full max-w-sm drop-shadow-xl"
            />
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <h2 className="font-heading text-3xl font-semibold text-brown md:text-4xl">
              Why You&apos;ll Love{' '}
              <span className="text-sage">DoneBuddy</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {whyLovePoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sage text-white">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <span className="text-brown-light">{point}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
