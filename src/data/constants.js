/** Site-wide business and SEO constants */
export const SITE = {
  name: 'Aaghaaz',
  /** Short positioning line (headers, SEO support) */
  tagline: 'Premium women’s community & events',
  /** From brand deck — hero and footer */
  deckTagline: 'Teaming together to soar high',
  /** Eagle + ring mark, trimmed from your deck screenshot (`public/brand/`) */
  logoMark: '/brand/aaghaaz-eagle-mark.png',
  /** Same mark with transparent background — header only */
  logoMarkHeader: '/brand/aaghaaz-eagle-mark-header.png',
  phoneDisplay: '+971 52 8136677',
  phoneE164: '+971528136677',
  email: 'Aaghaazevents@gmail.com',
  location: 'Sharjah, United Arab Emirates',
  url: 'https://aaghaaz.com',
  /** Social profile URLs — leave empty string to hide that icon until you add links */
  social: {
    instagram: '',
    linkedin: '',
    facebook: '',
  },
  /** Absolute URL for Open Graph when the site is deployed */
  ogImage: 'https://aaghaaz.com/brand/aaghaaz-eagle-mark.png',
}

export const NAV_LINKS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'events', label: 'Events', href: '#events' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'gallery', label: 'Gallery', href: '#gallery' },
  { id: 'community', label: 'Community', href: '#community' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const WHATSAPP_URL = `https://wa.me/971528136677`
