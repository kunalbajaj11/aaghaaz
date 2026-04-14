import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, X } from 'lucide-react'
import { TESTIMONIALS } from '../../data/testimonials'
import { Container } from '../ui/Container'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(null)
  const total = TESTIMONIALS.length

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((v) => (v + 1) % total)
    }, 7000)
    return () => window.clearInterval(id)
  }, [total])

  useEffect(() => {
    if (!expanded) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setExpanded(null)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [expanded])

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
            Real words from members and founders who have grown with the Aaghaaz community.
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
              <button
                type="button"
                className="mt-5 inline-flex items-center rounded-full border border-aaghaaz-900/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-aaghaaz-900 transition hover:border-aaghaaz-teal/40 hover:text-aaghaaz-teal"
                onClick={() => setExpanded(active)}
              >
                Read more
              </button>
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
              <button
                type="button"
                className="mt-4 inline-flex items-center rounded-full border border-aaghaaz-900/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-aaghaaz-900 transition hover:border-aaghaaz-teal/40 hover:text-aaghaaz-teal"
                onClick={() => setExpanded(t)}
              >
                Read more
              </button>
            </li>
          ))}
        </ul>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-aaghaaz-950/60 px-4 py-8"
              onClick={() => setExpanded(null)}
            >
              <motion.div
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
                role="dialog"
                aria-modal="true"
                aria-labelledby={`testimonial-modal-title-${expanded.id}`}
                className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-aaghaaz-900/10 bg-white p-7 shadow-soft sm:p-9"
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-aaghaaz-900/10 text-aaghaaz-900 transition hover:border-aaghaaz-teal/40 hover:text-aaghaaz-teal"
                  aria-label="Close testimonial"
                  onClick={() => setExpanded(null)}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-aaghaaz-teal">
                  Full testimonial
                </p>
                <h3
                  id={`testimonial-modal-title-${expanded.id}`}
                  className="mt-2 font-display text-2xl text-aaghaaz-950"
                >
                  {expanded.name}
                </h3>
                <p className="mt-1 text-sm text-aaghaaz-muted">{expanded.role}</p>
                <p className="mt-6 whitespace-pre-line text-[1.02rem] leading-relaxed text-aaghaaz-900">
                  {expanded.fullQuote}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
