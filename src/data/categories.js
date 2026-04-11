import {
  Baby,
  Briefcase,
  HeartPulse,
  Mic2,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react'

/** Signature event categories — icons resolved in component */
export const EVENT_CATEGORIES = [
  {
    id: 'medical',
    title: 'Medical Camps',
    description:
      'Compassionate, well-organised health outreach that meets women and families where they are.',
    icon: Stethoscope,
  },
  {
    id: 'health',
    title: 'Health Awareness',
    description:
      'Clear, dignified sessions on prevention, vitality, and everyday wellbeing—never alarmist, always practical.',
    icon: HeartPulse,
  },
  {
    id: 'motivation',
    title: 'Motivational Talks',
    description:
      'Editorial-quality conversations with voices that inspire without empty hype—substance, warmth, and momentum.',
    icon: Mic2,
  },
  {
    id: 'kids',
    title: 'Kids’ Activities',
    description:
      'Joyful, age-appropriate experiences so mothers can participate fully while little ones feel seen.',
    icon: Baby,
  },
  {
    id: 'skills',
    title: 'Skill-Building Workshops',
    description:
      'Hands-on learning in communication, digital presence, creativity, and professional polish.',
    icon: Sparkles,
  },
  {
    id: 'business',
    title: 'Business & Entrepreneurship',
    description:
      'Roundtables, showcases, and networking for women building ventures across the UAE.',
    icon: Briefcase,
  },
  {
    id: 'community',
    title: 'Community Gatherings',
    description:
      'Intentional social moments—tea circles, cultural evenings, and celebrations rooted in respect.',
    icon: Users,
  },
]
