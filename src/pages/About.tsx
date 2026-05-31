import ScrollReveal from '../components/ui/ScrollReveal'

export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 md:px-6">
      <ScrollReveal>
        <h1 className="font-heading text-4xl font-extrabold text-on-surface">About DoneBuddy</h1>
        <div className="mt-8 space-y-6 leading-relaxed text-on-surface-variant">
          <p>
            DoneBuddy is a cozy habit tracker built around companionship. Instead
            of feeling like another productivity chore, every completed habit helps
            you care for an adorable virtual pet that grows alongside you.
          </p>
          <p>
            We believe consistency should feel warm, playful, and rewarding. Our
            mission is to help people build better routines through gentle
            motivation, streaks, and a buddy who is always happy to see you show up.
          </p>
          <p>
            Whether you are starting your first morning routine or rebuilding
            long-term habits, DoneBuddy is designed to be simple, relaxing, and
            genuinely fun to use every day.
          </p>
        </div>
      </ScrollReveal>
    </div>
  )
}
