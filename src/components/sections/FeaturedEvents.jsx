import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Calendar, MapPin } from 'lucide-react'
import { EVENTS } from '../../data/events'
import { WHATSAPP_URL } from '../../data/constants'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const tabs = [
  { id: 'upcoming', label: 'Upcoming' },
  { id: 'past', label: 'Past' },
  { id: 'popular', label: 'Popular' },
]

export function FeaturedEvents() {
  const [tab, setTab] = useState('upcoming')

  const filtered = useMemo(() => {
    if (tab === 'upcoming') return EVENTS.filter((e) => e.status === 'upcoming')
    if (tab === 'past') return EVENTS.filter((e) => e.status === 'past')
    return EVENTS.filter((e) => e.popular)
  }, [tab])

  return (
    <section
      aria-labelledby="featured-events-heading"
      className="border-t border-aaghaaz-900/8 bg-aaghaaz-sand py-20 sm:py-24"
    >
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aaghaaz-teal">
              Featured events
            </p>
            <h2
              id="featured-events-heading"
              className="font-display text-3xl text-aaghaaz-950 sm:text-4xl"
            >
              Moments worth marking on the calendar.
            </h2>
            <p className="text-base leading-relaxed text-aaghaaz-muted">
              Discover upcoming women’s empowerment events in the UAE, community events in Sharjah, and
              entrepreneurship gatherings—crafted for presence, not pressure.
            </p>
          </div>
          <div
            className="inline-flex rounded-full border border-aaghaaz-900/10 bg-white p-1 shadow-sm"
            role="tablist"
            aria-label="Filter events"
          >
            {tabs.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                aria-selected={tab === t.id}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  tab === t.id
                    ? 'bg-aaghaaz-900 text-white shadow-sm'
                    : 'text-aaghaaz-800 hover:bg-aaghaaz-sand'
                }`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((event) => (
              <motion.article
                key={event.id + tab}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col overflow-hidden rounded-3xl border border-aaghaaz-900/10 bg-white shadow-card"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.imageAlt}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                    width={900}
                    height={600}
                    loading="lazy"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-aaghaaz-900 shadow-sm backdrop-blur">
                    {event.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl text-aaghaaz-950">{event.title}</h3>
                  <div className="mt-3 flex flex-wrap gap-3 text-sm text-aaghaaz-muted">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-aaghaaz-teal" aria-hidden />
                      {event.dateLabel}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-aaghaaz-teal" aria-hidden />
                      {event.location}
                    </span>
                  </div>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-aaghaaz-muted">{event.summary}</p>
                  <Button
                    variant="outline"
                    size="md"
                    className="mt-6 w-full !justify-center"
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inquire to join
                  </Button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
