import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  align = 'left',
  light = false,
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`mb-12 max-w-2xl space-y-4 ${alignClass}`}>
      {eyebrow ? (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? 'text-aaghaaz-teal-light/90' : 'text-aaghaaz-teal'}`}
        >
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h2
        id={titleId}
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        className={`font-display text-3xl leading-tight sm:text-4xl md:text-[2.65rem] ${light ? 'text-white' : 'text-aaghaaz-950'}`}
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-aaghaaz-muted'}`}
        >
          {description}
        </motion.p>
      ) : null}
    </div>
  )
}
