import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { WHATSAPP_URL } from '../../data/constants'

const trust = ['Community-led', 'Women-focused', 'UAE-based']

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-aaghaaz-950 pb-20 pt-6 sm:pb-28 sm:pt-10 lg:pb-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-0 h-[520px] w-[520px] rounded-full bg-aaghaaz-teal/25 blur-3xl" />
        <div className="absolute right-[-120px] top-32 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-[-180px] left-1/3 h-[480px] w-[480px] rounded-full bg-aaghaaz-teal-light/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.12), transparent 40%), radial-gradient(circle at 80% 0%, rgba(77,184,176,0.2), transparent 35%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-aaghaaz-950/20 to-aaghaaz-950" />
      </div>

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-xl pt-4 text-white lg:pt-8"
        >
          <motion.p
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-white/85 backdrop-blur-md"
          >
            <Sparkles className="h-3.5 w-3.5 text-aaghaaz-teal-light" aria-hidden />
            Sharjah · United Arab Emirates
          </motion.p>
          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-6 font-display text-[2.35rem] leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.35rem]"
          >
            Where women connect, grow, and rise—together.
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-base leading-relaxed text-white/75 sm:text-lg"
          >
            Aaghaaz is a premium women’s collective curating empowerment experiences, entrepreneurship
            circles, and family-conscious community moments across the UAE—with the calm precision of an
            events studio you can trust.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Button variant="primary" size="lg" href="#events" className="!shadow-soft">
              Explore Events
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Button>
            <Button variant="secondary" size="lg" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Partner With Us
            </Button>
          </motion.div>
          <motion.ul
            variants={item}
            className="mt-10 flex flex-wrap gap-2"
            aria-label="Trust highlights"
          >
            {trust.map((label) => (
              <li
                key={label}
                className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/85 backdrop-blur-sm"
              >
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-soft sm:aspect-[5/6] lg:aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=960&h=1200&fit=crop&q=80"
              alt="Women in conversation at an elegant community gathering in the UAE"
              className="h-full w-full object-cover"
              width={960}
              height={1200}
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-aaghaaz-950/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/15 bg-white/10 p-5 text-white shadow-card backdrop-blur-md sm:bottom-8 sm:left-8 sm:right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aaghaaz-teal-light/95">
                This season
              </p>
              <p className="mt-2 font-display text-2xl leading-tight">Curated gatherings. Real momentum.</p>
              <p className="mt-2 text-sm text-white/75">
                Medical outreach, leadership salons, family-friendly weekends, and brand-safe activations—
                orchestrated with warmth.
              </p>
            </div>
          </div>
          <motion.div
            aria-hidden
            className="absolute -right-4 -top-4 hidden h-24 w-24 rounded-full border border-white/20 bg-gradient-to-br from-aaghaaz-teal/40 to-transparent sm:block"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </Container>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-aaghaaz-cream to-transparent"
        aria-hidden
      />
    </section>
  )
}
