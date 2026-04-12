import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { NAV_LINKS, SITE, WHATSAPP_URL } from '../../data/constants'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

function scrollToHash(hash, onDone) {
  const id = hash.replace('#', '')
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  onDone?.()
}

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? 'border-aaghaaz-900/10 bg-aaghaaz-cream/90 backdrop-blur-xl shadow-sm'
          : 'border-transparent bg-gradient-to-b from-aaghaaz-950/55 to-transparent backdrop-blur-[2px]'
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:shadow-card"
      >
        Skip to main content
      </a>
      <Container className="flex h-[4.75rem] items-center justify-between gap-4 sm:h-[5rem]">
        <a
          href="#home"
          aria-label={`${SITE.name}, home`}
          className="group flex min-w-0 shrink-0 items-center rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aaghaaz-teal-light"
          onClick={(e) => {
            e.preventDefault()
            scrollToHash('#home')
          }}
        >
          <span
            className={`relative flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14 lg:h-[3.75rem] lg:w-[3.75rem] ${
              scrolled ? '' : 'drop-shadow-[0_2px_12px_rgba(0,0,0,0.45)]'
            }`}
          >
            <img
              src={SITE.logoMarkHeader}
              alt=""
              width={60}
              height={60}
              className="block max-h-full max-w-full object-contain object-center"
              decoding="async"
            />
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                scrolled
                  ? 'text-aaghaaz-800/90 hover:bg-white/70 hover:text-aaghaaz-950'
                  : 'text-white/90 hover:bg-white/10 hover:text-white'
              }`}
              onClick={(e) => {
                e.preventDefault()
                scrollToHash(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            size="md"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`!rounded-full !py-2.5 ${
              scrolled ? '' : '!border-white/30 !bg-white/10 !text-white hover:!bg-white/15'
            }`}
          >
            Join the Community
          </Button>
          <Button
            variant="primary"
            size="md"
            href="#contact"
            className="!from-aaghaaz-900 !to-aaghaaz-800"
            onClick={(e) => {
              e.preventDefault()
              scrollToHash('#contact')
            }}
          >
            Contact Us
          </Button>
        </div>

        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border shadow-sm backdrop-blur lg:hidden ${
            scrolled
              ? 'border-aaghaaz-900/10 bg-white/80 text-aaghaaz-900'
              : 'border-white/20 bg-white/10 text-white'
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          {open ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
        </button>
      </Container>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-aaghaaz-900/10 bg-aaghaaz-cream/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-aaghaaz-900 hover:bg-white"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToHash(link.href, () => setOpen(false))
                  }}
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 flex flex-col gap-2 border-t border-aaghaaz-900/10 pt-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full !justify-center"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  Join the Community
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full !justify-center !from-aaghaaz-900 !to-aaghaaz-800"
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToHash('#contact', () => setOpen(false))
                  }}
                >
                  Contact Us
                </Button>
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
