import { motion } from 'framer-motion'
import { EVENT_CATEGORIES } from '../../data/categories'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function EventCategories() {
  return (
    <section
      id="events"
      aria-labelledby="events-heading"
      className="scroll-mt-24 bg-gradient-to-b from-aaghaaz-cream via-white to-aaghaaz-sand py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Signature experiences"
          titleId="events-heading"
          title="Event categories shaped for real lives."
          description="Whether you are attending with friends, colleagues, or family, each format is designed to feel composed—never chaotic."
        />
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {EVENT_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.li
                key={cat.id}
                variants={fadeUp}
                custom={i}
                className="group relative overflow-hidden rounded-3xl border border-aaghaaz-900/8 bg-white p-6 shadow-card transition-shadow duration-300 hover:shadow-soft"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-aaghaaz-900/90 to-aaghaaz-teal text-white shadow-md transition-transform duration-300 group-hover:scale-105">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-display text-xl text-aaghaaz-950">{cat.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-aaghaaz-muted">{cat.description}</p>
                  </div>
                </div>
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-aaghaaz-teal to-aaghaaz-teal-light transition-transform duration-300 group-hover:scale-x-100"
                  aria-hidden
                />
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </section>
  )
}
