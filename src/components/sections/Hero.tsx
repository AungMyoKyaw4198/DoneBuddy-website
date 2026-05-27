import { Leaf } from 'lucide-react'
import AppStoreBadges from '../ui/AppStoreBadges'
import PhoneMockup from '../ui/PhoneMockup'
import ScrollReveal, { FloatingMascot } from '../ui/ScrollReveal'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-warm-orange/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-warm-yellow/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:gap-12 md:px-6 lg:grid-cols-2 lg:py-24">
        <ScrollReveal className="relative z-10">
          <h1 className="font-heading text-4xl font-bold leading-tight text-brown md:text-5xl lg:text-6xl">
            Build habits. Raise{' '}
            <span className="text-sage">happiness.</span>{' '}
            <span aria-hidden="true">❤️</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-brown-light">
            DoneBuddy is your cozy habit tracker with a virtual pet companion.
            Stay productive, take care of your pet, and grow together every day.
          </p>

          <div id="download" className="mt-8 scroll-mt-28">
            <AppStoreBadges />
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm text-brown-light">
            <Leaf className="h-4 w-4 shrink-0 text-sage" aria-hidden="true" />
            <p>
              Join thousands of users building better habits with their adorable
              buddy!
            </p>
            <Leaf
              className="h-4 w-4 shrink-0 rotate-180 text-sage"
              aria-hidden="true"
            />
          </div>
        </ScrollReveal>

        <ScrollReveal
          delay={0.15}
          className="relative z-0 mx-auto w-full max-w-md lg:max-w-lg"
        >
          <div className="relative mx-auto h-[22rem] w-full max-w-[20rem] sm:h-[24rem] sm:max-w-[22rem] md:h-[26rem] md:max-w-[24rem] lg:h-[28rem] lg:max-w-[26rem]">
            <FloatingMascot className="absolute bottom-0 left-1/2 z-10 w-[68%] max-w-[15rem] -translate-x-[58%] sm:w-[72%] sm:max-w-[16rem] lg:max-w-[18rem]">
              <img
                src="/assets/mascot/hero-corgi.png"
                alt="DoneBuddy corgi mascot wearing a green bandana"
                className="h-auto w-full drop-shadow-2xl"
              />
            </FloatingMascot>

            <div className="absolute bottom-2 right-0 z-20 sm:bottom-4 lg:bottom-6">
              <PhoneMockup
                screenshotSrc="/assets/screenshots/today-tasks.svg"
                screenshotAlt="DoneBuddy app today tasks screen placeholder"
                className="rotate-3 sm:rotate-6"
                size="sm"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
