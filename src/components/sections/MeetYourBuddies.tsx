import { Heart } from 'lucide-react'
import { petBuddies } from '../../lib/constants'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from '../ui/ScrollReveal'

export default function MeetYourBuddies() {
  return (
    <section className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            icon={
              <Heart className="h-5 w-5 fill-primary-fixed-dim text-primary-container" />
            }
            subtitle="Pick a companion with personality — then keep them happy with your habits."
          >
            Meet Your Buddies
          </SectionHeading>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4 md:gap-6">
          {petBuddies.map((buddy) => (
            <StaggerItem key={buddy.name}>
              <article className="card-surface flex flex-col items-center p-5 text-center">
                <div className="flex h-28 w-28 items-center justify-center md:h-32 md:w-32">
                  <img
                    src={buddy.image}
                    alt={`${buddy.name}, DoneBuddy pet companion`}
                    className="max-h-full max-w-full object-contain drop-shadow-md"
                    loading="lazy"
                  />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-on-surface">
                  {buddy.name}
                </h3>
                <p className="mt-1 text-sm text-on-surface-variant">
                  {buddy.tagline}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
