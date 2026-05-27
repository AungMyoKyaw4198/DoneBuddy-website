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
            icon={<Heart className="h-5 w-5 fill-warm-pink text-warm-pink" />}
          >
            Loved by Thousands
          </SectionHeading>
        </ScrollReveal>

        <div className="relative mt-12">
          <button
            type="button"
            onClick={prev}
            className="absolute -left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md ring-1 ring-brown/5 md:block"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5 text-brown" />
          </button>

          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={prefersReducedMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={prefersReducedMotion ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="grid gap-6 md:grid-cols-3"
              >
                {visibleTestimonials.map((testimonial) => (
                  <article
                    key={`${testimonial.name}-${testimonial.quote.slice(0, 12)}`}
                    className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-brown/5"
                  >
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-4 w-4 fill-warm-yellow text-warm-yellow"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="text-sm italic leading-relaxed text-brown-light">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage-light font-semibold text-sage-dark">
                        {testimonial.initials}
                      </div>
                      <span className="font-semibold text-brown">
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
            className="absolute -right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 shadow-md ring-1 ring-brown/5 md:block"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5 text-brown" />
          </button>

          <div className="mt-8 flex items-center justify-center gap-3 md:hidden">
            <button
              type="button"
              onClick={prev}
              className="rounded-full bg-white p-2 shadow-md ring-1 ring-brown/5"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5 text-brown" />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-full bg-white p-2 shadow-md ring-1 ring-brown/5"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5 text-brown" />
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
                    ? 'w-8 bg-sage'
                    : 'w-2.5 bg-brown/20 hover:bg-brown/35'
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
