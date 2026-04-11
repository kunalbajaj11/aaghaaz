import { NAV_LINKS, SITE, WHATSAPP_URL } from '../../data/constants'
import { Container } from '../ui/Container'
import { IconFacebook, IconInstagram, IconLinkedIn } from '../ui/SocialIcons'

function scrollToHash(hash) {
  const id = hash.replace('#', '')
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-aaghaaz-900/10 bg-aaghaaz-950 text-white">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <p className="font-display text-2xl">{SITE.name}</p>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            A premium women’s collective and event studio in Sharjah—curating empowerment,
            entrepreneurship, and community experiences across the UAE.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aaghaaz-teal-light/90">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="hover:text-white"
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToHash(link.href)
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aaghaaz-teal-light/90">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li>
              <a href={`tel:${SITE.phoneE164.replace(/\s/g, '')}`} className="hover:text-white">
                {SITE.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-white">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.location}</li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-aaghaaz-teal-light hover:text-white"
              >
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aaghaaz-teal-light/90">
            Social
          </p>
          <p className="mt-4 text-sm text-white/60">
            Follow for announcements, behind-the-scenes, and invitations.
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
              aria-label="Instagram (placeholder)"
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
              aria-label="LinkedIn (placeholder)"
            >
              <IconLinkedIn />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10"
              aria-label="Facebook (placeholder)"
            >
              <IconFacebook />
            </a>
          </div>
        </div>
      </Container>
      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-start justify-between gap-3 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {year} {SITE.name}. All rights reserved. Based in Sharjah, United Arab Emirates.
          </p>
          <p className="max-w-md text-[0.7rem] leading-relaxed sm:text-right">
            Women empowerment events in the UAE · Community events in Sharjah · Women networking and
            entrepreneurship · Event management and promotion across the Emirates.
          </p>
        </Container>
      </div>
    </footer>
  )
}
