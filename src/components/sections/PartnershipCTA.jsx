import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { WHATSAPP_URL } from '../../data/constants'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function PartnershipCTA() {
  return (
    <section
      aria-labelledby="partnership-heading"
      className="relative overflow-hidden bg-gradient-to-r from-aaghaaz-900 via-aaghaaz-800 to-aaghaaz-teal py-20 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
      </div>
      <Container className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
            Partnerships
          </p>
          <h2 id="partnership-heading" className="mt-4 font-display text-3xl leading-tight sm:text-4xl lg:text-[2.5rem]">
            Co-create activations that feel worthy of your brand—and our community.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            Sponsors and collaborators choose Aaghaaz for tasteful production, aligned audiences, and
            marketing support across the UAE. From launches to CSR moments, we steward your reputation
            with care.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.08 }}
          className="rounded-[2rem] border border-white/20 bg-white/10 p-8 shadow-soft backdrop-blur-md"
        >
          <ul className="space-y-4 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-aaghaaz-teal-light" aria-hidden />
              Sponsor-ready women’s programs in Sharjah and beyond
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-aaghaaz-teal-light" aria-hidden />
              Integrated publicity, social, and on-site brand storytelling
            </li>
            <li className="flex items-start gap-2">
              <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-aaghaaz-teal-light" aria-hidden />
              Dedicated liaison for timelines, vendors, and dignified guest experience
            </li>
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg" href="#contact" className="!justify-center sm:flex-1">
              Start a conversation
            </Button>
            <Button
              variant="secondary"
              size="lg"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="!justify-center sm:flex-1"
            >
              WhatsApp the team
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
