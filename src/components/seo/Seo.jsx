import { Helmet } from 'react-helmet-async'
import { EVENTS } from '../../data/events'
import { SITE } from '../../data/constants'

function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    description:
      'Premium women’s community and events brand in Sharjah, UAE—empowerment, entrepreneurship, wellness, and event management.',
    url: SITE.url,
    email: SITE.email,
    telephone: SITE.phoneE164,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Sharjah',
      addressCountry: 'AE',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Arab Emirates',
    },
    sameAs: [
      'https://www.instagram.com/',
      'https://www.linkedin.com/',
      'https://www.facebook.com/',
    ],
  }
}

function buildEventsJsonLd() {
  const upcoming = EVENTS.filter((e) => e.status === 'upcoming')
  return upcoming.map((e) => ({
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: e.title,
    startDate: e.dateISO,
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    location: {
      '@type': 'Place',
      name: e.location,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Sharjah',
        addressRegion: 'Sharjah',
        addressCountry: 'AE',
      },
    },
    image: [e.image],
    description: e.summary,
    organizer: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  }))
}

export function Seo() {
  const title = `${SITE.name} | Women’s Empowerment Events & Community in Sharjah, UAE`
  const description =
    'Aaghaaz curates premium women’s empowerment events, community gatherings, and entrepreneurship experiences in Sharjah and across the UAE—with expert event management, marketing, and social promotion.'

  const orgLd = buildOrganizationJsonLd()
  const eventsLd = buildEventsJsonLd()

  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={SITE.url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={SITE.url} />
      <meta property="og:image" content={SITE.ogImage} />
      <meta property="og:locale" content="en_AE" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={SITE.ogImage} />

      <script type="application/ld+json">{JSON.stringify(orgLd)}</script>
      {eventsLd.map((doc, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(doc)}
        </script>
      ))}
    </Helmet>
  )
}
