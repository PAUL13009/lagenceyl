'use client'

import Image from 'next/image'
import { useState } from 'react'
import FadeContent from './FadeContent'
import VariableProximity from './VariableProximity'

interface PackCardProps {
  image: string
  imageAlt: string
  title: string
  subtitle: string
  price: string
  originalPrice?: string
  discount?: string
  duration: string
  durationOptions?: string[]
  defaultDuration?: number
  description?: string
  benefitsTitle?: string
  benefits?: string[]
  services?: string[]
  buttonText: string
  onButtonClick?: () => void
  onPrevious?: () => void
  onNext?: () => void
  onGoToPack?: (index: number) => void
  showNavigation?: boolean
  currentIndex?: number
  totalPacks?: number
}

export default function PackCard({
  image,
  imageAlt,
  title,
  subtitle,
  price,
  originalPrice,
  discount,
  duration,
  durationOptions,
  defaultDuration = 0,
  description,
  benefitsTitle,
  benefits,
  services,
  buttonText,
  onButtonClick,
  onPrevious,
  onNext,
  onGoToPack,
  showNavigation = true,
  currentIndex = 0,
  totalPacks = 1
}: PackCardProps) {
  const containerRef = null
  const [selectedDuration, setSelectedDuration] = useState(defaultDuration)

  return (
    <section className="py-24 bg-stone-50">
      <FadeContent duration={1000} ease="power2.out" threshold={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Colonne de gauche - Image */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden shadow-2xl">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Colonne de droite - Contenu */}
            <div className="space-y-6">
              {/* Titre principal */}
              <div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gold mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  <VariableProximity
                    label={title}
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 700"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </h2>
                <p className="text-xl md:text-2xl text-gold mb-4">
                  <VariableProximity
                    label={subtitle}
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 600"
                    containerRef={containerRef}
                    radius={80}
                    falloff="linear"
                  />
                </p>
              </div>

              {/* Prix */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl md:text-5xl font-light text-gold">
                  <VariableProximity
                    label={price}
                    fromFontVariationSettings="'wght' 300"
                    toFontVariationSettings="'wght' 500"
                    containerRef={containerRef}
                    radius={80}
                    falloff="linear"
                  />
                </span>
                {originalPrice && (
                  <span className="text-4xl md:text-5xl text-gray-400 line-through font-light">
                    <VariableProximity
                      label={originalPrice}
                      fromFontVariationSettings="'wght' 300"
                      toFontVariationSettings="'wght' 500"
                      containerRef={containerRef}
                      radius={80}
                      falloff="linear"
                    />
                  </span>
                )}
                {discount && (
                  <span className="text-4xl md:text-5xl text-gold font-light">
                    <VariableProximity
                      label={discount}
                      fromFontVariationSettings="'wght' 300"
                      toFontVariationSettings="'wght' 500"
                      containerRef={containerRef}
                      radius={80}
                      falloff="linear"
                    />
                  </span>
                )}
              </div>

              {/* Durée */}
              <div className="mb-6">
                <p className="text-lg text-gray-700">
                  <VariableProximity
                    label={duration}
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 600"
                    containerRef={containerRef}
                    radius={70}
                    falloff="linear"
                  />
                </p>
              </div>

              {/* Options de durée (si fournies) */}
              {durationOptions && durationOptions.length > 0 && (
                <div className="flex gap-3 flex-wrap mb-6">
                  {durationOptions.map((dur, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedDuration(index)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        selectedDuration === index
                          ? 'bg-gold text-white'
                          : 'bg-white border-2 border-gold text-gold hover:bg-gold/10'
                      }`}
                    >
                      <VariableProximity
                        label={dur}
                        fromFontVariationSettings="'wght' 400"
                        toFontVariationSettings="'wght' 600"
                        containerRef={containerRef}
                        radius={60}
                        falloff="linear"
                      />
                    </button>
                  ))}
                </div>
              )}

              {/* Description (si fournie) */}
              {description && (
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  <VariableProximity
                    label={description}
                    fromFontVariationSettings="'wght' 300"
                    toFontVariationSettings="'wght' 500"
                    containerRef={containerRef}
                    radius={80}
                    falloff="linear"
                  />
                </p>
              )}

              {/* Services inclus */}
              {services && services.length > 0 && (
                <div className="space-y-3 mb-6">
                  <ul className="space-y-3 text-gray-700">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-gold mt-1">•</span>
                        <span className="leading-relaxed">
                          <VariableProximity
                            label={service}
                            fromFontVariationSettings="'wght' 300"
                            toFontVariationSettings="'wght' 500"
                            containerRef={containerRef}
                            radius={70}
                            falloff="linear"
                          />
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Section "Convient à ceux qui recherchent" (si fournie) */}
              {benefitsTitle && benefits && benefits.length > 0 && (
                <div className="space-y-3 mb-6">
                  <h3 className="text-xl font-serif text-gold" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    <VariableProximity
                      label={benefitsTitle}
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 600"
                      containerRef={containerRef}
                      radius={80}
                      falloff="linear"
                    />
                  </h3>
                  <ol className="space-y-2 list-decimal list-inside text-gray-700">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="leading-relaxed">
                        <VariableProximity
                          label={benefit}
                          fromFontVariationSettings="'wght' 300"
                          toFontVariationSettings="'wght' 500"
                          containerRef={containerRef}
                          radius={70}
                          falloff="linear"
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Bouton d'action */}
              <div className="flex items-center justify-between pt-4">
                <button
                  onClick={onButtonClick}
                  className="px-8 py-4 bg-gold text-white font-semibold hover:bg-gold-dark transition-all"
                >
                  <VariableProximity
                    label="Réserver"
                    fromFontVariationSettings="'wght' 400"
                    toFontVariationSettings="'wght' 600"
                    containerRef={containerRef}
                    radius={70}
                    falloff="linear"
                  />
                </button>
                
                {/* Flèches de navigation */}
                {showNavigation && (
                  <div className="flex gap-2">
                    <button 
                      onClick={onPrevious}
                      className="w-10 h-10 border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button 
                      onClick={onNext}
                      className="w-10 h-10 border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Indicateurs de navigation */}
          {showNavigation && totalPacks > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {Array.from({ length: totalPacks }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (onGoToPack && index !== currentIndex) {
                      onGoToPack(index)
                    }
                  }}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 h-1 bg-gold'
                      : 'w-1 h-1 bg-gray-300 hover:bg-gold/50'
                  } rounded-full`}
                  aria-label={`Aller au pack ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </FadeContent>
    </section>
  )
}

