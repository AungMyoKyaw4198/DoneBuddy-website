import { appScreens } from '../../lib/constants'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal, {
  StaggerContainer,
  StaggerItem,
} from '../ui/ScrollReveal'

export default function AppShowcase() {
  return (
    <section className="scroll-mt-24 px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading subtitle="Three core screens that turn discipline into care.">
            Everything you need in one cozy app
          </SectionHeading>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid gap-8 md:grid-cols-3">
          {appScreens.map((screen) => (
            <StaggerItem key={screen.title}>
              <article className="card-surface flex h-full flex-col overflow-hidden p-5">
                <img
                  src={screen.image}
                  alt={screen.alt}
                  className="mx-auto w-full max-w-[220px] drop-shadow-md"
                  loading="lazy"
                />
                <h3 className="mt-6 font-heading text-lg font-bold text-on-surface">
                  {screen.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  {screen.description}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
