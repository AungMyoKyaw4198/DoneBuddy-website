import { useMemo } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react'
import { testimonials } from '../../lib/constants'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal, { useCarousel } from '../ui/ScrollReveal'

const visibleCount = 3

export default function Testimonials() {
  const { index, next, prev, setIndex } = useCarousel(testimonials.length)
  const prefersReducedMotion = useReducedMotion()

  const visibleTestimonials = useMemo(() => {
    return Array.from({ length: visibleCount }, (_, offset) => {
      return testimonials[(index + offset) % testimonials.length]
    })
  }, [index])

  return (
    <section id="testimonials" className="scroll-mt-24 px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <SectionHeading
            icon={
              <Heart className="h-5 w-5 fill-primary-fixed-dim text-primary-container" />
            }
          >
            Loved by Thousands
          </SectionHeading>
        </ScrollReveal>

        <div className="relative mt-12 px-1 md:px-4">
          <button
            type="button"
            onClick={prev}
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-card ring-1 ring-outline-variant/40 md:block lg:-left-4"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5 text-on-surface" />
          </button>

          <div className="overflow-x-hidden py-3 md:py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid items-stretch gap-6 md:grid-cols-3 md:gap-7"
              >
                {visibleTestimonials.map((testimonial) => (
                  <article
                    key={`${testimonial.name}-${testimonial.quote.slice(0, 12)}`}
                    className="card-surface flex min-h-[15.5rem] flex-col p-7 md:min-h-[17rem] lg:min-h-[18rem] lg:p-8"
                  >
                    <div className="mb-5 flex gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-tertiary-fixed-dim text-tertiary-fixed-dim lg:h-[1.125rem] lg:w-[1.125rem]"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-on-surface-variant italic lg:text-[0.9375rem] lg:leading-7">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3 lg:mt-8">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-fixed font-label font-semibold text-primary-dark">
                        {testimonial.initials}
                      </div>
                      <span className="font-heading font-bold text-on-surface">
                        {testimonial.name}
                      </span>
                    </div>
                  </article>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            type="button"
            onClick={next}
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-card ring-1 ring-outline-variant/40 md:block lg:-right-4"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5 text-on-surface" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={prev}
              className="rounded-full bg-white p-2 shadow-card ring-1 ring-outline-variant/40"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5 text-on-surface" />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-white p-2 shadow-card ring-1 ring-outline-variant/40"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5 text-on-surface" />
            </button>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((testimonial, dotIndex) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setIndex(dotIndex)}
                className={`h-2.5 rounded-full transition-all ${
                  dotIndex === index
                    ? 'w-8 bg-primary'
                    : 'w-2.5 bg-outline-variant hover:bg-outline'
                }`}
                aria-label={`Go to testimonial ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
