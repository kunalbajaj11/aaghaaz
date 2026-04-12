import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { SITE } from '../../data/constants'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const pillars = [
  {
    title: 'Purposeful gatherings',
    body:
      'Spaces where women lead conversations—on health, ambition, family, and craft—without rushing the room.',
  },
  {
    title: 'Momentum with care',
    body:
      'Programming that pairs motivation with dignity: clear hosts, thoughtful pacing, and follow-through you can feel.',
  },
  {
    title: 'UAE-wide collaboration',
    body:
      'Sharjah-rooted partnerships across the Emirates—events, outreach, and storytelling that reflect your community.',
  },
]

export function Vision() {
  return (
    <section
      id="vision"
      aria-labelledby="vision-heading"
      className="relative scroll-mt-24 overflow-hidden bg-aaghaaz-950 py-20 text-white sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        aria-hidden
        style={{
          backgroundImage: `url(${SITE.logoMark})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '85% 45%',
          backgroundSize: 'min(420px, 55vw)',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-aaghaaz-950 via-aaghaaz-900/95 to-aaghaaz-teal/25"
        aria-hidden
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Our vision"
          titleId="vision-heading"
          title="Lift communities by design—then let them rise in their own rhythm."
          description="Aaghaaz is built for women who are doing many things at once: leading, learning, caring, and creating. Our vision is to keep that reality visible—and to resource it with events that feel premium, grounded, and unmistakably human."
          light
        />

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid gap-5 md:grid-cols-3"
        >
          {pillars.map((p) => (
            <motion.li
              key={p.title}
              variants={fadeUp}
              className="rounded-3xl border border-white/10 bg-white/[0.06] p-7 shadow-card backdrop-blur-sm"
            >
              <p className="font-display text-xl text-white">{p.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-white/75">{p.body}</p>
            </motion.li>
          ))}
        </motion.ul>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="mt-12 max-w-2xl font-display text-2xl italic leading-snug text-aaghaaz-teal-light/95 sm:text-[1.65rem]"
        >
          {SITE.deckTagline}
        </motion.p>
      </Container>
    </section>
  )
}
