import { title } from "framer-motion/client";

/**
 * Mock events — shape ready for CMS/API (id, slug, dates, media, tags).
 * status: upcoming | past; popular flags featured placement.
 */
export const EVENTS = [
  {
    id: 'evt-1',
    slug: 'cancer-awareness',
    title: 'Cancer Awareness Event',
    dateISO: 'October 2026',
    dateLabel: 'October 2026',
    location: 'Sharjah',
    category: 'Health & Community',
    summary:
      'A supportive community initiative dedicated to spreading awareness, providing vital resources, and standing in solidarity with those affected by cancer.',
    image:
      'https://images.unsplash.com/photo-1625869736621-784a42674da4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt:
      'Women seatead holding paitents hand',
    status: 'upcoming',
    popular: true,
  },
  {
    id: 'evt-2',
    slug: 'independence-day-and-back-to-school',
    title: 'Idependence Day & Back To School Gathering ',
    dateISO: 'August 2026',
    dateLabel: 'August 2026',
    location: 'Sharjah, UAE',
    category: 'Kids & Families',
    summary:
      'A vibrant community event to honor our heritage with cultural festivities, patriotic displays, and family fun.',
    image:
      'https://d3pc1xvrcw35tl.cloudfront.net/ln/images/420x315/india-pakistan-independence-day-2024_202408787979.jpg',
    imageAlt: 'Men showing equality by holding differnet flags together',
    status: 'upcoming',
    popular: true,
  },
  {
    id: 'evt-3',
    slug: 'little-makers-week',
    title: 'Little Makers week',
    dateISO: '2026-07-13',
    dateLabel: '13 July 2026 - 27 August 2026',
    location: 'Online, Google meets',
    category: 'Kids & Families',
    summary:
      'A collaborative creative workshop designed for mothers and children to build, craft, cook, and experiment on fun projects together.',
    image:
      'https://images.unsplash.com/photo-1758598737882-4d6d61886bde?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Happy little girl is drawing at home with caring mother using pencils having fun in modern apartment. Creative leisure activity and childhood concept.',
    status: 'upcoming',
    popular: false,
  },
  {
    id: 'evt-4',
    slug: '13th-anniverssary',
    title: 'Aaghaaz 13th Anniversary ',
    dateISO: '2026-06-28',
    dateLabel: '28 June 2026',
    location: 'Sharjah, Afghaan Tandoor Restaurant',
    category: 'Celebration & Community',
    summary:
      'Aaghaaz 13th Anniversary Celebration: A milestone event celebrating 13 years of empowering',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZDgSACBJp-g-_Q_BYd3isFgo1I5WpIweYFQ2S9JNi7w&s=10',
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
  {
    id: 'evt-7',
    slug: 'eco-debate',
    title: 'Going Eco is essential or not?',
    dateISO: '2026-08-08',
    dateLabel: '08 August 2026',
    location: 'sharjah,london city university, near expo 2020',
    category: 'Debate',
    summary:
    'Debate About Why Going Eco Is Essential For The Economy/Future or Against it cost, challenges, or alternative priorites',
    image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLaltHlEKgTTf5gJ-KcLVb1jR8sdT9V24_g-jVDiWsA&s=10',
    status: 'upcoming',
    popular: false,
  }
]
