import {
  CalendarRange,
  Handshake,
  Megaphone,
  Radio,
  Share2,
  UsersRound,
} from 'lucide-react'

export const SERVICES = [
  {
    id: 'organizing',
    title: 'Event Organizing & Management',
    description:
      'End-to-end production—from concept and run-of-show to on-site calm—so your gathering feels effortless.',
    icon: CalendarRange,
  },
  {
    id: 'programs',
    title: 'Community Programs',
    description:
      'Curated series for women and families: learning arcs, mentorship touchpoints, and inclusive formats.',
    icon: UsersRound,
  },
  {
    id: 'activations',
    title: 'Brand Activations',
    description:
      'Immersive brand moments aligned with Aaghaaz values: premium staging, storytelling, and dignified engagement.',
    icon: Handshake,
  },
  {
    id: 'marketing',
    title: 'Marketing Campaigns',
    description:
      'Campaign architecture, messaging, and rollout across touchpoints—with clarity and measurable intent.',
    icon: Megaphone,
  },
  {
    id: 'social',
    title: 'Social Media Promotions',
    description:
      'Editorial calendars, reels and stills direction, and community tone that stays human, never noisy.',
    icon: Share2,
  },
  {
    id: 'advertising',
    title: 'Advertising & Publicity',
    description:
      'Targeted visibility across UAE audiences—partnerships, placements, and tasteful amplification.',
    icon: Radio,
  },
]
