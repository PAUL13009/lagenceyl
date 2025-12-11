'use client'

import Image from 'next/image'
import { useState } from 'react'
import FadeContent from './FadeContent'
import VariableProximity from './VariableProximity'

export default function About() {
  const containerRef = null
  const images = [
    {
      src: '/images/DSC04823.jpg',
      alt: 'Villa Le Nid Céleste',
    },
    {
      src: '/images/DSC02823.jpg',
      alt: 'Villa Le Nid Céleste',
    },
    {
      src: '/images/DSC02414.jpg',
      alt: 'Villa Le Nid Céleste',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="a-propos" className="py-24 bg-stone-50">
      <FadeContent duration={1000} ease="power2.out" threshold={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-gold leading-relaxed max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            <VariableProximity
              label="Nichée au cœur de la jungle balinaise, Le Nid Céleste"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 700"
              containerRef={null}
              radius={100}
              falloff="linear"
            />
            <br />
            <VariableProximity
              label="est une villa exceptionnelle construite entièrement en bambou,"
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 700"
              containerRef={null}
              radius={100}
              falloff="linear"
            />
            <br />
            <VariableProximity
              label="alliant architecture traditionnelle et design contemporain."
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 700"
              containerRef={null}
              radius={100}
              falloff="linear"
            />
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl group">
            {/* Images du carrousel */}
            <div className="relative w-full h-full">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>

            {/* Flèche précédente */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
              aria-label="Image précédente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Flèche suivante */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
              aria-label="Image suivante"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicateurs de position */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-white w-8' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Aller à l'image ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="flex items-center">
            <div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <VariableProximity
                  label="Chaque détail a été pensé pour vous offrir une expérience unique, où le luxe rencontre la nature. Profitez d'une vue imprenable sur les rizières, d'une piscine à débordement et d'espaces de vie spacieux et lumineux."
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 500"
                  containerRef={null}
                  radius={80}
                  falloff="linear"
                />
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                <VariableProximity
                  label="Que vous recherchiez un havre de paix pour vous ressourcer ou une base pour explorer les merveilles de Bali, Le Nid Céleste saura répondre à toutes vos attentes."
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 500"
                  containerRef={null}
                  radius={80}
                  falloff="linear"
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      </FadeContent>
    </section>
  )
}

