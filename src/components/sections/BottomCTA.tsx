import { PawPrint } from 'lucide-react'
import AppStoreBadges from '../ui/AppStoreBadges'
import ScrollReveal from '../ui/ScrollReveal'

export default function BottomCTA() {
  return (
    <section className="px-4 py-16 md:px-6">
      <ScrollReveal>
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 rounded-[2rem] bg-sage px-6 py-10 md:flex-row md:px-10">
          <div className="flex items-center gap-4 text-white">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <PawPrint className="h-7 w-7" aria-hidden="true" />
            </div>
            <p className="max-w-md font-heading text-2xl font-semibold leading-snug">
              Ready to build better habits with your new buddy?
            </p>
          </div>

          <AppStoreBadges size="sm" />
        </div>
      </ScrollReveal>
    </section>
  )
}
