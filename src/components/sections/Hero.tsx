import { Leaf } from 'lucide-react'
import AppStoreBadges from '../ui/AppStoreBadges'
import ScrollReveal, { FloatingMascot } from '../ui/ScrollReveal'
import { ASSETS } from '../../lib/constants'

function SocialProof({ className = '' }: { className?: string }) {
  return (
    <div
      className={`flex items-start gap-3 text-sm text-on-surface-variant sm:items-center ${className}`}
    >
      <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-secondary sm:mt-0" aria-hidden="true" />
      <p>
        Join thousands of users building better habits with their adorable
        buddy!
      </p>
      <Leaf
        className="mt-0.5 h-4 w-4 shrink-0 rotate-180 text-secondary sm:mt-0"
        aria-hidden="true"
      />
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-x-clip">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-primary-fixed/60 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-secondary-container/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-tertiary-fixed/50 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-16 sm:gap-10 md:px-6 lg:grid-cols-2 lg:gap-12 lg:py-24">
        <ScrollReveal className="relative z-10 order-1">
          <h1 className="font-heading text-4xl font-extrabold leading-tight text-on-surface md:text-5xl lg:text-6xl">
            Build habits. Raise{' '}
            <span className="text-primary">happiness.</span>{' '}
            <span aria-hidden="true">❤️</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface-variant">
            DoneBuddy is your cozy habit tracker with a virtual pet companion.
            Stay productive, take care of your pet, and grow together every day.
          </p>

          <div id="download" className="mt-8 scroll-mt-28">
            <AppStoreBadges />
          </div>

          <SocialProof className="mt-8 hidden lg:flex" />
        </ScrollReveal>

        <ScrollReveal
          delay={0.15}
          className="relative z-0 order-2 mx-auto w-full max-w-md overflow-visible px-2 sm:px-4"
        >
          <div className="relative mx-auto h-[20rem] w-full max-w-[18rem] sm:h-[23rem] sm:max-w-[21rem] md:h-[25rem] md:max-w-[23rem]">
            <img
              src={ASSETS.screens.tasks.left}
              alt="DoneBuddy app showing today's habits, dailies, and to-dos"
              className="absolute bottom-0 left-1/2 z-10 w-[80%] -translate-x-[44%] drop-shadow-2xl"
            />

            <FloatingMascot className="absolute bottom-[4%] left-[2%] z-20 w-[38%] max-w-[7rem] sm:bottom-[6%] sm:w-[40%] sm:max-w-[8.25rem]">
              <img
                src={ASSETS.pets.sunny}
                alt=""
                aria-hidden="true"
                className="h-auto w-full drop-shadow-xl"
              />
            </FloatingMascot>

            <FloatingMascot className="absolute right-[2%] top-[14%] z-20 w-[38%] max-w-[7rem] sm:top-[4%] sm:w-[40%] sm:max-w-[8.25rem]">
              <img
                src={ASSETS.pets.bean}
                alt=""
                aria-hidden="true"
                className="h-auto w-full drop-shadow-xl"
              />
            </FloatingMascot>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.2} className="order-3 lg:hidden">
          <SocialProof />
        </ScrollReveal>
      </div>
    </section>
  )
}
