/**
 * Mock events — shape ready for CMS/API (id, slug, dates, media, tags).
 * status: upcoming | past; popular flags featured placement.
 */
export const EVENTS = [
  {
    id: 'evt-1',
    slug: 'wellness-circle-sharjah',
    title: 'The Wellness Circle — Sharjah Edition',
    dateISO: '2026-05-18',
    dateLabel: '18 May 2026',
    location: 'Al Majaz, Sharjah',
    category: 'Health & Community',
    summary:
      'An intimate evening of guided conversation, gentle movement, and expert-led habits for sustainable energy.',
    image:
      'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=900&h=600&fit=crop&q=80',
    imageAlt:
      'Women seated in a softly lit wellness circle during a community event',
    status: 'upcoming',
    popular: true,
  },
  {
    id: 'evt-2',
    slug: 'rise-founders-brunch',
    title: 'Rise Founders Brunch',
    dateISO: '2026-06-02',
    dateLabel: '2 June 2026',
    location: 'Sharjah, UAE',
    category: 'Entrepreneurship',
    summary:
      'A refined brunch for women scaling ideas across the Emirates—warm introductions, honest panels, and quiet wins celebrated aloud.',
    image:
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Elegant brunch table setup for a women founders networking event',
    status: 'upcoming',
    popular: true,
  },
  {
    id: 'evt-3',
    slug: 'little-makers-saturday',
    title: 'Little Makers Saturday',
    dateISO: '2026-05-24',
    dateLabel: '24 May 2026',
    location: 'Family Hub, Sharjah',
    category: 'Kids & Families',
    summary:
      'Creative stations, calm facilitators, and a mothers’ lounge—so families can connect without rushing.',
    image:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Children engaged in a creative craft activity at a community event',
    status: 'upcoming',
    popular: false,
  },
  {
    id: 'evt-4',
    slug: 'voices-that-lift',
    title: 'Voices That Lift',
    dateISO: '2026-03-08',
    dateLabel: '8 March 2026',
    location: 'Sharjah Ladies Club',
    category: 'Motivation',
    summary:
      'A standing-room gathering of stories that steadied rooms—grit, grace, and the quiet courage of starting again.',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Speaker addressing an attentive audience at a women’s leadership event',
    status: 'past',
    popular: true,
  },
  {
    id: 'evt-5',
    slug: 'digital-presence-masterclass',
    title: 'Digital Presence Masterclass',
    dateISO: '2026-02-14',
    dateLabel: '14 February 2026',
    location: 'Hybrid — Sharjah & Online',
    category: 'Skills',
    summary:
      'Profile clarity, content rhythm, and boundaries online—built for professionals who value depth over noise.',
    image:
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Women collaborating with laptops during a professional skills workshop',
    status: 'past',
    popular: false,
  },
  {
    id: 'evt-6',
    slug: 'community-health-day',
    title: 'Community Health Day',
    dateISO: '2026-01-11',
    dateLabel: '11 January 2026',
    location: 'Sharjah',
    category: 'Medical & Awareness',
    summary:
      'Screenings, counselling corners, and dignified queues—community care delivered with calm organisation.',
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&h=600&fit=crop&q=80',
    imageAlt: 'Health professionals supporting visitors at a community medical camp',
    status: 'past',
    popular: true,
  },
]
