'use client'

import { useState } from 'react'
import FadeContent from './FadeContent'
import VariableProximity from './VariableProximity'

export default function ContactSection() {
  const containerRef = null
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+1',
    country: '',
    contactPreference: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Gestion de la soumission du formulaire
  }

  return (
    <section className="py-24 bg-stone-50">
      <FadeContent duration={1000} ease="power2.out" threshold={0.2}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Colonne de gauche - Texte informatif */}
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gold mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                <VariableProximity
                  label="Vous ne savez pas quelle formule de retraite vous convient le mieux ?"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 700"
                  containerRef={containerRef}
                  radius={100}
                  falloff="linear"
                />
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                <VariableProximity
                  label="Consultez notre équipe de soins holistiques et de bien-être. Faites-nous part de vos préférences et nous vous contacterons."
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 500"
                  containerRef={containerRef}
                  radius={80}
                  falloff="linear"
                />
              </p>
            </div>

            {/* Colonne de droite - Formulaire */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Première ligne : Nom et prénom + Email */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Nom et prénom */}
                  <div>
                    <label className="block text-gray-700 mb-2">
                      <VariableProximity
                        label="Nom et prénom*"
                        fromFontVariationSettings="'wght' 400"
                        toFontVariationSettings="'wght' 600"
                        containerRef={containerRef}
                        radius={70}
                        falloff="linear"
                      />
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-gold outline-none pb-2 text-gray-900"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-gray-700 mb-2">
                      <VariableProximity
                        label="Adresse email*"
                        fromFontVariationSettings="'wght' 400"
                        toFontVariationSettings="'wght' 600"
                        containerRef={containerRef}
                        radius={70}
                        falloff="linear"
                      />
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-gold outline-none pb-2 text-gray-900"
                    />
                  </div>
                </div>

                {/* Deuxième ligne : Téléphone + Pays de résidence */}
                <div className="grid grid-cols-2 gap-6 items-end">
                  {/* Téléphone avec indicatif pays */}
                  <div className="flex flex-col">
                    <label className="block text-gray-700 mb-2 h-12">
                      <span className="text-gold">+1</span>
                      <span className="mx-2">|</span>
                      <VariableProximity
                        label="Numéro de téléphone"
                        fromFontVariationSettings="'wght' 400"
                        toFontVariationSettings="'wght' 600"
                        containerRef={containerRef}
                        radius={70}
                        falloff="linear"
                      />
                    </label>
                    <div className="flex gap-2 items-end">
                      <select
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleInputChange}
                        className="bg-transparent border-b-2 border-gray-300 focus:border-gold outline-none pb-2 text-gray-900 pr-2 cursor-pointer"
                      >
                        <option value="+1">+1</option>
                        <option value="+33">+33</option>
                        <option value="+62">+62</option>
                        <option value="+44">+44</option>
                      </select>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 bg-transparent border-b-2 border-gray-300 focus:border-gold outline-none pb-2 text-gray-900"
                      />
                    </div>
                  </div>

                  {/* Pays de résidence */}
                  <div className="flex flex-col">
                    <label className="block text-gray-700 mb-2 h-12">
                      <VariableProximity
                        label="Pays de résidence"
                        fromFontVariationSettings="'wght' 400"
                        toFontVariationSettings="'wght' 600"
                        containerRef={containerRef}
                        radius={70}
                        falloff="linear"
                      />
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b-2 border-gray-300 focus:border-gold outline-none pb-2 text-gray-900"
                    />
                  </div>
                </div>

                {/* Préférences de contact */}
                <div className="pt-4">
                  <p className="text-gold text-sm mb-2">
                    <VariableProximity
                      label="Sélectionnez autant que nécessaire"
                      fromFontVariationSettings="'wght' 300"
                      toFontVariationSettings="'wght' 500"
                      containerRef={containerRef}
                      radius={70}
                      falloff="linear"
                    />
                  </p>
                  <label className="block text-gold mb-4">
                    <VariableProximity
                      label="Je préfère être contacté par *"
                      fromFontVariationSettings="'wght' 400"
                      toFontVariationSettings="'wght' 600"
                      containerRef={containerRef}
                      radius={70}
                      falloff="linear"
                    />
                  </label>
                  <div className="flex gap-6 flex-wrap">
                    {['E-mail', 'WhatsApp', 'Télégramme'].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="contactPreference"
                          value={option.toLowerCase()}
                          checked={formData.contactPreference === option.toLowerCase()}
                          onChange={handleInputChange}
                          required
                          className="w-4 h-4 text-gold border-gray-300 focus:ring-gold"
                        />
                        <span className="text-gray-700">
                          <VariableProximity
                            label={option}
                            fromFontVariationSettings="'wght' 300"
                            toFontVariationSettings="'wght' 500"
                            containerRef={containerRef}
                            radius={70}
                            falloff="linear"
                          />
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </FadeContent>
    </section>
  )
}

