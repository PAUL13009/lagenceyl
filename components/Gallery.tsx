'use client'

import Masonry from './Masonry'
import FadeContent from './FadeContent'
import VariableProximity from './VariableProximity'

export default function Gallery() {
  const containerRef = null
  const images = [
    {
      id: 1,
      img: '/images/DSC02414.jpg',
      height: 400,
    },
    {
      id: 2,
      img: '/images/DSC02758.jpg',
      height: 500,
    },
    {
      id: 3,
      img: '/images/DSC02823.jpg',
      height: 450,
    },
    {
      id: 4,
      img: '/images/DSC04823.jpg',
      height: 380,
    },
    {
      id: 5,
      img: '/images/DSC04839.JPG',
      height: 420,
    },
    {
      id: 6,
      img: '/images/DSC04844.jpg',
      height: 400,
    },
    {
      id: 7,
      img: '/images/DSC04848.jpg',
      height: 480,
    },
    {
      id: 8,
      img: '/images/IMG_2678.jpg',
      height: 360,
    },
    {
      id: 9,
      img: '/images/terrasse.jpg',
      height: 440,
    },
    {
      id: 10,
      img: '/images/DSC02417.jpg',
      height: 390,
    },
    {
      id: 11,
      img: '/images/DSC04868.jpg',
      height: 410,
    },
    {
      id: 12,
      img: '/images/IMG_2720.jpg',
      height: 470,
    },
    {
      id: 13,
      img: '/images/DSC02494.jpg',
      height: 430,
    },
    {
      id: 14,
      img: '/images/DSC04893.jpg',
      height: 400,
    },
    {
      id: 15,
      img: '/images/IMG_2699.jpg',
      height: 450,
    },
    {
      id: 16,
      img: '/images/IMG_2700.jpg',
      height: 420,
    },
  ]

  return (
    <section id="galerie" className="pt-16 pb-24 bg-stone-50">
      <FadeContent duration={1000} ease="power2.out" threshold={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gold mb-4 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              <VariableProximity
                label="Galerie"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 700"
                containerRef={null}
                radius={100}
                falloff="linear"
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <VariableProximity
                label="Découvrez les espaces de Le Nid Céleste"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 500"
                containerRef={null}
                radius={80}
                falloff="linear"
              />
            </p>
          </div>
        </div>

        <div className="w-full px-2">
        <Masonry
          items={images}
          ease="power2.out"
          duration={0.6}
          stagger={0.03}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={false}
          colorShiftOnHover={false}
        />
        </div>
      </FadeContent>
    </section>
  )
}

