import AppStoreBadges from '../ui/AppStoreBadges'
import ScrollReveal from '../ui/ScrollReveal'
import { APP_LOGO } from '../../lib/constants'

export default function BottomCTA() {
  return (
    <section className="px-4 py-16 md:px-6">
      <ScrollReveal>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-xl bg-primary px-6 py-10 shadow-card md:flex-row md:rounded-2xl md:px-10">
          <div className="flex items-center gap-4 text-on-primary">
            <img
              src={APP_LOGO}
              alt=""
              aria-hidden="true"
              className="h-14 w-14 rounded-xl object-cover shadow-md ring-2 ring-on-primary/20"
            />
            <p className="max-w-md font-heading text-2xl font-bold leading-snug">
              Ready to build better habits with your new buddy?
            </p>
          </div>

          <AppStoreBadges size="sm" />
        </div>
      </ScrollReveal>
    </section>
  )
}
