'use client'

import { useState } from 'react'
import Image from 'next/image'
import CountUp from './CountUp'
import FadeContent from './FadeContent'
import VariableProximity from './VariableProximity'

interface FeatureData {
  image: string
  imageAlt: string
  title: string
  subtitle: string
  details: string[]
}

export default function Features() {
  const containerRef = null
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0)

  const features: FeatureData[] = [
    {
      image: "/images/DSC04823.jpg",
      imageAlt: "Connectivité - Le Nid Céleste",
      title: "Connectivité",
      subtitle: "Technologie de pointe",
      details: [
        "Starlink à plus de 150 Mbps",
        "Projecteur et téléviseur 4K",
        "Espace de travail dédié"
      ]
    },
    {
      image: "/images/terrasse.jpg",
      imageAlt: "Confort - Le Nid Céleste",
      title: "Confort",
      subtitle: "Bien-être et détente",
      details: [
        "Climatisation intégrale",
        "Piscine à débordement de 60 m²",
        "Averses de pluie"
      ]
    },
    {
      image: "/images/DSC04839.JPG",
      imageAlt: "Emplacement - Le Nid Céleste",
      title: "Emplacement",
      subtitle: "Cadre exceptionnel",
      details: [
        "Vues du mont Agung",
        "Cadre de jungle",
        "Confidentialité totale"
      ]
    },
    {
      image: "/images/DSC04868.jpg",
      imageAlt: "Expérience - Le Nid Céleste",
      title: "Expérience",
      subtitle: "Services et équipements premium",
      details: [
        "Cuisine équipée et barbecue",
        "Services de conciergerie",
        "Parking privé"
      ]
    },
  ]

  const handlePrevious = () => {
    setCurrentFeatureIndex((prev) => (prev === 0 ? features.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentFeatureIndex((prev) => (prev === features.length - 1 ? 0 : prev + 1))
  }

  const handleGoToFeature = (index: number) => {
    setCurrentFeatureIndex(index)
  }

  const currentFeature = features[currentFeatureIndex]

  return (
    <section className="pt-24 pb-16 bg-stone-50">
      <FadeContent duration={1000} ease="power2.out" threshold={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gold mb-4 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              <VariableProximity
                label="Caractéristiques de la villa"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 700"
                containerRef={null}
                radius={100}
                falloff="linear"
              />
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              <VariableProximity
                label="Tout ce dont vous avez besoin pour un séjour inoubliable"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 500"
                containerRef={null}
                radius={80}
                falloff="linear"
              />
            </p>
          </div>

          <div key={currentFeatureIndex} className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative">
              {/* Colonne de gauche - Image */}
              <div className="relative h-[500px] md:h-[600px] overflow-hidden shadow-2xl">
                <Image
                  src={currentFeature.image}
                  alt={currentFeature.imageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Colonne de droite - Contenu */}
              <div className="space-y-6">
                {/* Titre principal */}
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gold mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    <VariableProximity
                      label={currentFeature.title}
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 700"
                      containerRef={null}
                      radius={100}
                      falloff="linear"
                    />
                  </h3>
                  <p className="text-xl md:text-2xl text-gold">
                    <VariableProximity
                      label={currentFeature.subtitle}
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 600"
                      containerRef={null}
                      radius={80}
                      falloff="linear"
                    />
                  </p>
                </div>

                {/* Détails */}
                {currentFeature.details && currentFeature.details.length > 0 && (
                  <div className="space-y-3">
                    <ul className="space-y-3 text-gray-700">
                      {currentFeature.details.map((detail, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="text-gold mt-1">•</span>
                          <span className="leading-relaxed">
                            <VariableProximity
                              label={detail}
                              fromFontVariationSettings="'wght' 300"
                              toFontVariationSettings="'wght' 500"
                              containerRef={null}
                              radius={70}
                              falloff="linear"
                            />
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Flèches de navigation - Positionnées à mi-hauteur de l'image, décalées vers la droite */}
              <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2 flex gap-2 hidden md:flex" style={{ marginLeft: 'calc(8rem / 2 + 28rem)' }}>
                <button 
                  onClick={handlePrevious}
                  className="w-10 h-10 border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={handleNext}
                  className="w-10 h-10 border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Indicateurs de navigation */}
            <div className="flex justify-center items-center gap-2 mt-12 mb-16">
              {features.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleGoToFeature(index)}
                  className={`transition-all duration-300 ${
                    index === currentFeatureIndex
                      ? 'w-8 h-1 bg-gold'
                      : 'w-1 h-1 bg-gray-300 hover:bg-gold/50'
                  } rounded-full`}
                  aria-label={`Aller à la caractéristique ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

      {/* Section Statistiques - Pleine largeur */}
      <div className="mt-8 bg-black py-12 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">
                <CountUp to={2} duration={2} containerRef={null} />
              </div>
              <div className="text-sm md:text-base font-light text-white/80">
                <VariableProximity
                  label="Chambres"
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 500"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">
                <CountUp to={120} duration={2} delay={0.2} containerRef={null} />
                <span className="text-2xl md:text-3xl ml-1">
                  <VariableProximity
                    label="m²"
                    fromFontVariationSettings="'wght' 300"
                    toFontVariationSettings="'wght' 500"
                    containerRef={null}
                    radius={60}
                    falloff="linear"
                  />
                </span>
              </div>
              <div className="text-sm md:text-base font-light text-white/80">
                <VariableProximity
                  label="Surface bâtie"
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 500"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">
                <CountUp to={300} duration={2} delay={0.4} containerRef={null} />
                <span className="text-2xl md:text-3xl ml-1">
                  <VariableProximity
                    label="m²"
                    fromFontVariationSettings="'wght' 300"
                    toFontVariationSettings="'wght' 500"
                    containerRef={null}
                    radius={60}
                    falloff="linear"
                  />
                </span>
              </div>
              <div className="text-sm md:text-base font-light text-white/80">
                <VariableProximity
                  label="Superficie du terrain"
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 500"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2 flex items-baseline">
                <span>
                  <VariableProximity
                    label="+"
                    fromFontVariationSettings="'wght' 300"
                    toFontVariationSettings="'wght' 500"
                    containerRef={null}
                    radius={60}
                    falloff="linear"
                  />
                </span>
                <CountUp to={150} duration={2} delay={0.6} containerRef={null} />
              </div>
              <div className="text-sm md:text-base font-light text-white/80">
                <VariableProximity
                  label="Mbps Starlink"
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 500"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </FadeContent>
    </section>
  )
}

