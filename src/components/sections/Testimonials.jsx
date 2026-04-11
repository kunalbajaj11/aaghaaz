import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/testimonials'
import { Container } from '../ui/Container'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const total = TESTIMONIALS.length

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % total)
    }, 7000)
    return () => window.clearInterval(id)
  }, [total])

  const active = TESTIMONIALS[index]

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-y border-aaghaaz-900/8 bg-white py-20 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aaghaaz-teal">
            Voices from the room
          </p>
          <h2
            id="testimonials-heading"
            className="mt-3 font-display text-3xl text-aaghaaz-950 sm:text-4xl"
          >
            Proof, told quietly.
          </h2>
          <p className="mt-3 text-base text-aaghaaz-muted">
            Placeholder testimonials for launch—written to reflect the tone guests and partners describe.
          </p>
        </div>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.figure
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-[2rem] border border-aaghaaz-900/10 bg-gradient-to-br from-white to-aaghaaz-sand/50 p-10 shadow-soft sm:p-12"
            >
              <Quote
                className="h-10 w-10 text-aaghaaz-teal/40"
                aria-hidden
              />
              <blockquote className="mt-6 font-display text-2xl leading-snug text-aaghaaz-950 sm:text-[1.65rem]">
                “{active.quote}”
              </blockquote>
              <figcaption className="mt-8 text-sm text-aaghaaz-muted">
                <span className="font-semibold text-aaghaaz-900">{active.name}</span>
                <span className="mx-2 text-aaghaaz-teal">·</span>
                <span>{active.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-aaghaaz-900/10 bg-white text-aaghaaz-900 shadow-sm transition hover:border-aaghaaz-teal/40"
              aria-label="Previous testimonial"
              onClick={() => setIndex((v) => (v - 1 + total) % total)}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <div className="flex gap-2" role="tablist" aria-label="Testimonial slides">
              {TESTIMONIALS.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? 'w-8 bg-aaghaaz-900' : 'w-2 bg-aaghaaz-900/20 hover:bg-aaghaaz-900/35'
                  }`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-aaghaaz-900/10 bg-white text-aaghaaz-900 shadow-sm transition hover:border-aaghaaz-teal/40"
              aria-label="Next testimonial"
              onClick={() => setIndex((v) => (v + 1) % total)}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <ul className="mx-auto mt-16 hidden max-w-5xl gap-5 lg:grid lg:grid-cols-2">
          {TESTIMONIALS.map((t) => (
            <li
              key={t.id}
              className="rounded-2xl border border-aaghaaz-900/8 bg-aaghaaz-cream/60 p-6 text-sm text-aaghaaz-muted"
            >
              <p className="font-display text-lg leading-snug text-aaghaaz-950">“{t.quote}”</p>
              <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-aaghaaz-teal">
                {t.name}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
