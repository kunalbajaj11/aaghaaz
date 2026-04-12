import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { TEAM_MEMBERS } from '../../data/team'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 bg-aaghaaz-cream py-20 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-aaghaaz-teal/35 to-transparent"
        aria-hidden
      />
      <Container>
        <SectionHeading
          eyebrow="About Aaghaaz"
          titleId="about-heading"
          title="A trusted beginning—for ambition, wellbeing, and belonging."
          description="Rooted in Sharjah and woven through the Emirates, Aaghaaz designs experiences where women lead conversations, build ventures, care for family life with intention, and step into professional rooms with confidence."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={fadeUp} className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-aaghaaz-900/10">
              <img
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&h=1100&fit=crop&q=80"
                alt="Women collaborating during a professional workshop in the UAE"
                className="h-full w-full object-cover"
                width={900}
                height={1100}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 max-w-xs rounded-2xl border border-aaghaaz-900/10 bg-white p-5 shadow-card sm:-right-8">
              <p className="font-display text-xl text-aaghaaz-950">Community, elevated.</p>
              <p className="mt-2 text-sm leading-relaxed text-aaghaaz-muted">
                We believe premium is felt in pacing, language, and care—not in volume.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="space-y-6 lg:pl-4">
            <p className="text-lg leading-relaxed text-aaghaaz-900">
              Aaghaaz exists to make space—generous, intelligent space—for women who are building,
              healing, leading, and learning at once. Our programs honour entrepreneurship and personal
              growth without flattening either into trends.
            </p>
            <p className="text-base leading-relaxed text-aaghaaz-muted">
              From medical camps and health awareness in Sharjah to motivational evenings that feel
              editorial, we choreograph gatherings where dignity comes first. For partners, we bring event
              management, marketing, digital promotion, and social storytelling that matches the calibre of
              your brand.
            </p>
            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                'Women’s empowerment with substance',
                'Entrepreneurship & leadership salons',
                'Family-conscious programming',
                'UAE-wide collaborations',
              ].map((line) => (
                <li
                  key={line}
                  className="rounded-2xl border border-aaghaaz-900/8 bg-white/70 px-4 py-3 text-sm font-medium text-aaghaaz-800 shadow-sm"
                >
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-20 border-t border-aaghaaz-900/10 pt-16"
          aria-labelledby="about-leadership-heading"
        >
          <motion.h3
            variants={fadeUp}
            id="about-leadership-heading"
            className="text-xs font-semibold uppercase tracking-[0.2em] text-aaghaaz-teal-800"
          >
            Leadership
          </motion.h3>
          <ul className="mt-8 grid list-none gap-8 sm:grid-cols-2 sm:gap-10 lg:max-w-4xl">
            {TEAM_MEMBERS.map((member) => (
              <motion.li key={member.id} variants={fadeUp}>
                <article className="overflow-hidden rounded-2xl border border-aaghaaz-900/10 bg-white shadow-soft ring-1 ring-aaghaaz-900/5">
                  <div className="aspect-[4/5] overflow-hidden bg-aaghaaz-cream">
                    <img
                      src={member.image}
                      alt={member.imageAlt}
                      className="h-full w-full object-cover object-top"
                      width={720}
                      height={900}
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5 sm:p-6">
                    {member.name ? (
                      <>
                        <p className="font-display text-xl text-aaghaaz-950">{member.name}</p>
                        <p className="mt-1 text-sm font-semibold text-aaghaaz-teal-800">{member.role}</p>
                      </>
                    ) : (
                      <p className="font-display text-lg leading-snug text-aaghaaz-950 sm:text-xl">
                        {member.role}
                      </p>
                    )}
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </Container>
    </section>
  )
}
