import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import { SITE, WHATSAPP_URL } from '../../data/constants'
import { fadeUp } from '../../lib/motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const initial = { name: '', email: '', phone: '', subject: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please add your name.'
  if (!values.email.trim()) errors.email = 'Email is required.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Enter a valid email.'
  if (!values.phone.trim()) errors.phone = 'Phone helps us respond quickly.'
  if (!values.subject.trim()) errors.subject = 'A short subject keeps threads clear.'
  if (!values.message.trim() || values.message.trim().length < 12)
    errors.message = 'Share a few sentences so we can help meaningfully.'
  return errors
}

export function Contact() {
  const [values, setValues] = useState(initial)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function onChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }))
  }

  function onSubmit(e) {
    e.preventDefault()
    const next = validate(values)
    setErrors(next)
    if (Object.keys(next).length) return
    setSubmitted(true)
  }

  const waText = encodeURIComponent(
    `Hello ${SITE.name}, I would like to inquire about collaborations/events. My name: ${values.name || '…'}`,
  )

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-24 bg-aaghaaz-sand py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          titleId="contact-heading"
          title="Tell us what you are building—we will meet you with care."
          description="Professional inquiries for partnerships, sponsorships, event participation, and media. Based in Sharjah; serving women’s communities across the UAE."
        />

        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="space-y-6"
          >
            <div className="rounded-3xl border border-aaghaaz-900/10 bg-white p-8 shadow-card">
              <p className="font-display text-2xl text-aaghaaz-950">Direct lines</p>
              <ul className="mt-6 space-y-4 text-sm text-aaghaaz-muted">
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-aaghaaz-teal" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-aaghaaz-900/60">
                      Phone
                    </p>
                    <a className="font-medium text-aaghaaz-900" href={`tel:${SITE.phoneE164.replace(/\s/g, '')}`}>
                      {SITE.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-aaghaaz-teal" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-aaghaaz-900/60">
                      Email
                    </p>
                    <a className="font-medium text-aaghaaz-900" href={`mailto:${SITE.email}`}>
                      {SITE.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-aaghaaz-teal" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-aaghaaz-900/60">
                      Location
                    </p>
                    <p className="font-medium text-aaghaaz-900">{SITE.location}</p>
                  </div>
                </li>
              </ul>
              <Button
                variant="primary"
                size="lg"
                className="mt-8 w-full !justify-center"
                href={`${WHATSAPP_URL}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare className="h-4 w-4" aria-hidden />
                WhatsApp Aaghaaz
              </Button>
            </div>

            <div className="overflow-hidden rounded-3xl border border-aaghaaz-900/10 bg-aaghaaz-950 shadow-card">
              <div
                className="flex h-56 items-center justify-center bg-gradient-to-br from-aaghaaz-800 to-aaghaaz-teal text-center text-white sm:h-64"
                role="img"
                aria-label="Map placeholder for Sharjah, United Arab Emirates"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                    Map preview
                  </p>
                  <p className="mt-2 font-display text-xl">Sharjah, UAE</p>
                  <a
                    className="mt-4 inline-block text-sm text-white/85 underline decoration-white/40 underline-offset-4 hover:text-white"
                    href="https://www.google.com/maps/search/?api=1&query=Sharjah+United+Arab+Emirates"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            variants={fadeUp}
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            onSubmit={onSubmit}
            className="rounded-3xl border border-aaghaaz-900/10 bg-white p-8 shadow-soft sm:p-10"
            noValidate
          >
            <p className="font-display text-2xl text-aaghaaz-950">Inquiry form</p>
            <p className="mt-2 text-sm text-aaghaaz-muted">
              This form is front-end only for launch; connect by email, phone, or WhatsApp for a guaranteed
              response.
            </p>

            {submitted ? (
              <p className="mt-8 rounded-2xl border border-aaghaaz-teal/30 bg-aaghaaz-sand px-4 py-4 text-sm text-aaghaaz-900" role="status">
                Thank you—your message is ready to send. For now, please use email or WhatsApp so we can
                reply promptly.
              </p>
            ) : null}

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-aaghaaz-muted">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={values.name}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-aaghaaz-900/12 bg-aaghaaz-cream/40 px-4 py-3 text-sm text-aaghaaz-900 outline-none ring-aaghaaz-teal/40 transition focus:ring-2"
                />
                {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name}</p> : null}
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-aaghaaz-muted">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-aaghaaz-900/12 bg-aaghaaz-cream/40 px-4 py-3 text-sm text-aaghaaz-900 outline-none ring-aaghaaz-teal/40 transition focus:ring-2"
                />
                {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
              </div>
              <div>
                <label htmlFor="phone" className="text-xs font-semibold uppercase tracking-wider text-aaghaaz-muted">
                  Phone
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-aaghaaz-900/12 bg-aaghaaz-cream/40 px-4 py-3 text-sm text-aaghaaz-900 outline-none ring-aaghaaz-teal/40 transition focus:ring-2"
                />
                {errors.phone ? <p className="mt-1 text-xs text-red-600">{errors.phone}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="text-xs font-semibold uppercase tracking-wider text-aaghaaz-muted">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={onChange}
                  className="mt-2 w-full rounded-2xl border border-aaghaaz-900/12 bg-aaghaaz-cream/40 px-4 py-3 text-sm text-aaghaaz-900 outline-none ring-aaghaaz-teal/40 transition focus:ring-2"
                />
                {errors.subject ? <p className="mt-1 text-xs text-red-600">{errors.subject}</p> : null}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-aaghaaz-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={onChange}
                  className="mt-2 w-full resize-y rounded-2xl border border-aaghaaz-900/12 bg-aaghaaz-cream/40 px-4 py-3 text-sm text-aaghaaz-900 outline-none ring-aaghaaz-teal/40 transition focus:ring-2"
                />
                {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message}</p> : null}
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="primary" size="lg" type="submit" className="sm:min-w-[180px]">
                Submit inquiry
              </Button>
              <a
                href={`mailto:${SITE.email}?subject=${encodeURIComponent(values.subject || 'Inquiry to Aaghaaz')}`}
                className="text-sm font-medium text-aaghaaz-800 underline decoration-aaghaaz-teal/40 underline-offset-4 hover:text-aaghaaz-teal"
              >
                Prefer email? Open your mail app
              </a>
            </div>
          </motion.form>
        </div>
      </Container>
    </section>
  )
}
