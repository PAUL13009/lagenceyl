'use client'

import { useState } from 'react'
import FadeContent from './FadeContent'
import VariableProximity from './VariableProximity'
import CustomSelect from './CustomSelect'
import CustomDateInput from './CustomDateInput'

export default function Booking() {
  const containerRef = null
  const [arrivalDate, setArrivalDate] = useState('')
  const [departureDate, setDepartureDate] = useState('')
  const [guests, setGuests] = useState('2')
  const [errors, setErrors] = useState<{ arrival?: string; departure?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)

  // Date minimale : aujourd'hui
  const today = new Date().toISOString().split('T')[0]

  const validateDates = () => {
    const newErrors: { arrival?: string; departure?: string } = {}
    
    if (!arrivalDate) {
      newErrors.arrival = 'Veuillez sélectionner une date d\'arrivée'
    }
    
    if (!departureDate) {
      newErrors.departure = 'Veuillez sélectionner une date de départ'
    }
    
    if (arrivalDate && departureDate) {
      const arrival = new Date(arrivalDate)
      const departure = new Date(departureDate)
      
      if (departure <= arrival) {
        newErrors.departure = 'La date de départ doit être après la date d\'arrivée'
      }
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitMessage(null)
    
    if (!validateDates()) {
      return
    }
    
    setIsSubmitting(true)
    
    try {
      // Simulation d'une soumission (à remplacer par l'intégration Lodgify)
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Ici, vous pouvez rediriger vers Lodgify ou envoyer les données à votre API
      // Exemple de redirection vers Lodgify :
      // window.location.href = `https://votre-lodgify-url.com/booking?checkin=${arrivalDate}&checkout=${departureDate}&guests=${guests}`
      
      setSubmitMessage({
        type: 'success',
        text: 'Redirection vers la page de réservation...'
      })
      
      // Pour l'instant, on affiche juste un message
      // Quand Lodgify sera intégré, décommentez la ligne de redirection ci-dessus
      
    } catch (error) {
      setSubmitMessage({
        type: 'error',
        text: 'Une erreur est survenue. Veuillez réessayer.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="reservation" className="py-24 bg-stone-50">
      <FadeContent duration={1000} ease="power2.out" threshold={0.2}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-gold mb-6 max-w-4xl mx-auto" style={{ fontFamily: 'var(--font-playfair), serif' }}>
          <VariableProximity
            label="Réservez votre séjour"
            fromFontVariationSettings="'wght' 400"
            toFontVariationSettings="'wght' 700"
            containerRef={null}
            radius={100}
            falloff="linear"
          />
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          <VariableProximity
            label="Disponibilité et tarifs en temps réel. Réservez directement en ligne."
            fromFontVariationSettings="'wght' 300"
            toFontVariationSettings="'wght' 500"
            containerRef={null}
            radius={80}
            falloff="linear"
          />
        </p>
        
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 md:p-12 border border-bamboo-100 shadow-lg">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <CustomDateInput
              label="Arrivée"
              className="w-full"
              value={arrivalDate}
              onChange={setArrivalDate}
              min={today}
              error={errors.arrival}
            />
            <CustomDateInput
              label="Départ"
              className="w-full"
              value={departureDate}
              onChange={setDepartureDate}
              min={arrivalDate || today}
              error={errors.departure}
            />
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-700">
                <VariableProximity
                  label="Voyageurs"
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 600"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </label>
              <CustomSelect
                options={[
                  { value: '1', label: '1 voyageur' },
                  { value: '2', label: '2 voyageurs' },
                  { value: '3', label: '3 voyageurs' },
                  { value: '4', label: '4 voyageurs' },
                  { value: '5', label: '5+ voyageurs' },
                ]}
                className="w-full"
                value={guests}
                onChange={setGuests}
                name="guests"
              />
            </div>
          </div>
          
          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitMessage.type === 'success' 
                ? 'bg-green-50 text-green-700 border border-green-200' 
                : 'bg-red-50 text-red-700 border border-red-200'
            }`}>
              <p className="text-sm">
                <VariableProximity
                  label={submitMessage.text}
                  fromFontVariationSettings="'wght' 400"
                  toFontVariationSettings="'wght' 500"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </p>
            </div>
          )}
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full md:w-auto px-12 py-4 bg-gold text-white rounded-full font-semibold transition-all transform shadow-lg ${
              isSubmitting 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gold-dark hover:scale-105'
            }`}
          >
            <VariableProximity
              label={isSubmitting ? 'Traitement...' : 'Vérifier la disponibilité'}
              fromFontVariationSettings="'wght' 400"
              toFontVariationSettings="'wght' 600"
              containerRef={null}
              radius={70}
              falloff="linear"
            />
          </button>
          
          <p className="mt-6 text-sm text-gray-500">
            <VariableProximity
              label="* L'intégration Lodgify sera disponible prochainement"
              fromFontVariationSettings="'wght' 300"
              toFontVariationSettings="'wght' 400"
              containerRef={null}
              radius={60}
              falloff="linear"
            />
          </p>
        </form>
      </div>
      </FadeContent>
    </section>
  )
}

