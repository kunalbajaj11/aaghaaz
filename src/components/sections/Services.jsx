import { motion } from 'framer-motion'
import { SERVICES } from '../../data/services'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Services"
          titleId="services-heading"
          title="Event management and promotion—with editorial taste."
          description="From intimate community programs to high-visibility activations, Aaghaaz supports partners across the UAE with strategy, production, and dignified storytelling."
        />
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-6 md:grid-cols-2"
        >
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.li
                key={svc.id}
                variants={fadeUp}
                custom={i}
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 360, damping: 22 }}
                className="rounded-3xl border border-aaghaaz-900/8 bg-gradient-to-br from-white to-aaghaaz-sand/60 p-8 shadow-card"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-aaghaaz-950 text-white shadow-md">
                    <Icon className="h-6 w-6" aria-hidden />
                  </span>
                  <h3 className="font-display text-2xl text-aaghaaz-950">{svc.title}</h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-aaghaaz-muted sm:text-base">
                  {svc.description}
                </p>
              </motion.li>
            )
          })}
        </motion.ul>
      </Container>
    </section>
  )
}
