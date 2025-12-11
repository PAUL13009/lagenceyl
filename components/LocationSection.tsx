'use client'

import FadeContent from './FadeContent'
import VariableProximity from './VariableProximity'

export default function LocationSection() {
  const containerRef = null

  const locationInfos = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      ),
      text: "2h de l'aéroport Ngurah Rai"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "À 30 minutes d'Ubud"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "Cœur de l'Est de Bali"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "Vallée de Sidemen"
    }
  ]

  const experiences = [
    {
      name: "Trekking au lever du soleil sur le mont Agung",
      info: "Guides locaux disponibles"
    },
    {
      name: "Palais d'eau de Tirta Gangga",
      info: "20 minutes en voiture"
    },
    {
      name: "Cascade de Tukad Cepung",
      info: "25 minutes en voiture"
    },
    {
      name: "Temple de Lempuyang (Portes du Ciel)",
      info: "45 minutes en voiture"
    },
    {
      name: "Virgin Beach (Pasir Putih)",
      info: "30 minutes en voiture"
    },
    {
      name: "Villages traditionnels d'orfèvres",
      info: "10 minutes en voiture"
    }
  ]

  return (
    <section id="localisation" className="py-24 bg-stone-50">
      <FadeContent duration={1000} ease="power2.out" threshold={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Titre de la section */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gold mb-4 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              <VariableProximity
                label="Localisation"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 700"
                containerRef={containerRef}
                radius={100}
                falloff="linear"
              />
            </h2>
          </div>

          {/* Carte Google Maps et Informations */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Carte Google Maps - Colonne de gauche */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31592.27498482899!2d115.4307407!3d-8.5336143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2175a8f0e3b3b%3A0x8c3b3b3b3b3b3b3b!2sSidemen%2C%20Karangasem%2C%20Bali%2080864%2C%20Indon%C3%A9sie!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>

            {/* Colonne de droite - Informations et Expériences */}
            <div className="space-y-8">
              {/* Informations de localisation */}
              <div className="grid grid-cols-2 gap-4">
                {locationInfos.map((info, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 shadow-md border border-bamboo-100 h-full flex items-center">
                    <div className="flex items-center gap-3 w-full">
                      <div className="text-green-600 flex-shrink-0">
                        {info.icon}
                      </div>
                      <p className="text-gray-700">
                        <VariableProximity
                          label={info.text}
                          fromFontVariationSettings="'wght' 300"
                          toFontVariationSettings="'wght' 500"
                          containerRef={containerRef}
                          radius={70}
                          falloff="linear"
                        />
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Expériences à proximité */}
              <div>
                <h3 className="text-2xl md:text-3xl font-light text-gold mb-6">
                  <VariableProximity
                    label="Expériences à proximité"
                    fromFontVariationSettings="'wght' 300"
                    toFontVariationSettings="'wght' 500"
                    containerRef={containerRef}
                    radius={100}
                    falloff="linear"
                  />
                </h3>
                <div className="space-y-4">
                  {experiences.map((experience, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-gold mt-1 flex-shrink-0">•</span>
                      <div className="flex flex-col">
                        <p className="text-gray-900 mb-1">
                          <VariableProximity
                            label={experience.name}
                            fromFontVariationSettings="'wght' 400"
                            toFontVariationSettings="'wght' 600"
                            containerRef={containerRef}
                            radius={80}
                            falloff="linear"
                          />
                        </p>
                        <p className="text-gray-600 text-sm">
                          <VariableProximity
                            label={experience.info}
                            fromFontVariationSettings="'wght' 300"
                            toFontVariationSettings="'wght' 400"
                            containerRef={containerRef}
                            radius={70}
                            falloff="linear"
                          />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeContent>
    </section>
  )
}

