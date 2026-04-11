import { motion } from 'framer-motion'
import { COMMUNITY_BENEFITS } from '../../data/communityBenefits'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { WHATSAPP_URL } from '../../data/constants'

export function Community() {
  return (
    <section
      id="community"
      aria-labelledby="community-heading"
      className="relative scroll-mt-24 overflow-hidden bg-aaghaaz-950 py-20 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-aaghaaz-teal/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
      </div>
      <Container className="relative">
        <SectionHeading
          align="center"
          light
          eyebrow="Why join"
          titleId="community-heading"
          title="Built for women, families, partners, and brands who care about craft."
          description="Whether you are seeking growth, visibility, or a sponsor-ready platform in Sharjah and the wider UAE—Aaghaaz meets you with warmth and rigour."
        />
        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mx-auto grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {COMMUNITY_BENEFITS.map((b, i) => {
            const Icon = b.icon
            return (
              <motion.li
                key={b.id}
                variants={fadeUp}
                custom={i}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
              >
                <Icon className="h-6 w-6 text-aaghaaz-teal-light" aria-hidden />
                <h3 className="mt-4 font-display text-xl">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{b.description}</p>
              </motion.li>
            )
          })}
        </motion.ul>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex justify-center"
        >
          <Button variant="primary" size="lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Request an invitation
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
