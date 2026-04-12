import { motion } from 'framer-motion'
import { GALLERY_ITEMS } from '../../data/gallery'
import { fadeUp, staggerContainer } from '../../lib/motion'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Gallery() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="scroll-mt-24 bg-aaghaaz-cream py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Gallery"
          titleId="gallery-heading"
          title="A glimpse of the room—before you step in."
          description="Moments from our halls, stages, and community programmes—health awareness, gatherings, media, and the people who make it all happen."
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="columns-1 gap-4 sm:columns-2 lg:columns-3"
        >
          {GALLERY_ITEMS.map((item, i) => (
            <motion.figure
              key={item.id}
              variants={fadeUp}
              custom={i}
              className={`group mb-4 break-inside-avoid overflow-hidden rounded-3xl border border-aaghaaz-900/10 bg-white shadow-card ${
                item.span === 'tall' ? '' : ''
              }`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  width={800}
                  height={item.span === 'tall' ? 1000 : 650}
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-aaghaaz-950/55 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <figcaption className="sr-only">{item.alt}</figcaption>
              </div>
            </motion.figure>
          ))}
        </motion.div>
        <div className="mt-12 flex justify-center">
          <Button variant="outline" size="lg" href="#contact" className="!px-8">
            View full gallery — inquire for access
          </Button>
        </div>
      </Container>
    </section>
  )
}
