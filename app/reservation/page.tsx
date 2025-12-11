'use client'

import { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import { useProximityContainer } from '@/components/ProximityProvider'

export default function Reservation() {
  const mainRef = useRef<HTMLElement>(null)
  const containerRef = useProximityContainer()
  const heroContainerRef = useRef<HTMLElement>(null)
  const lodgifyContainerRef = useRef<HTMLDivElement>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)
  const [widgetReady, setWidgetReady] = useState(false)

  useEffect(() => {
    if (mainRef.current && containerRef) {
      containerRef.current = mainRef.current
    }
  }, [containerRef])

  // Initialiser Lodgify après le chargement du script
  useEffect(() => {
    if (!scriptLoaded || !lodgifyContainerRef.current) return

    const initLodgify = () => {
      const widget = document.getElementById('lodgify-search-bar')
      if (!widget) {
        console.error('❌ Div Lodgify non trouvé dans le DOM')
        return
      }

      // Attendre que LodgifySearchBar soit disponible
      let attempts = 0
      const maxAttempts = 50 // 5 secondes max
      
      const checkLodgify = setInterval(() => {
        attempts++
        
        if ((window as any).LodgifySearchBar) {
          clearInterval(checkLodgify)
          console.log('✅ LodgifySearchBar disponible')
          
          // Attendre encore un peu pour que le DOM soit complètement prêt
          setTimeout(() => {
            console.log('✅ Div Lodgify trouvé dans le DOM')
            setWidgetReady(true)
            
            // Forcer l'initialisation si nécessaire
            try {
              if (typeof (window as any).LodgifySearchBar.init === 'function') {
                console.log('🔄 Initialisation du widget Lodgify...')
                ;(window as any).LodgifySearchBar.init()
                
                // Vérifier après 1 seconde si le widget s'est initialisé
                setTimeout(() => {
                  const widgetAfterInit = document.getElementById('lodgify-search-bar')
                  if (widgetAfterInit && widgetAfterInit.children.length > 0) {
                    console.log('✅ Widget Lodgify initialisé avec succès')
                  } else {
                    console.warn('⚠️ Widget Lodgify toujours vide après initialisation')
                    // Réessayer une fois
                    if (typeof (window as any).LodgifySearchBar.init === 'function') {
                      ;(window as any).LodgifySearchBar.init()
                    }
                  }
                }, 1000)
              } else {
                console.warn('⚠️ LodgifySearchBar.init n\'est pas une fonction')
              }
            } catch (e) {
              console.error('❌ Erreur lors de l\'initialisation Lodgify:', e)
            }
          }, 300)
        } else if (attempts >= maxAttempts) {
          clearInterval(checkLodgify)
          console.error('❌ LodgifySearchBar non disponible après 5 secondes')
        }
      }, 100)

      // Timeout après 10 secondes
      setTimeout(() => {
        clearInterval(checkLodgify)
      }, 10000)
    }

    initLodgify()
  }, [scriptLoaded])

  // Vérification périodique du widget
  useEffect(() => {
    if (!widgetReady) return

    const checkWidget = setInterval(() => {
      const widget = document.getElementById('lodgify-search-bar')
      if (widget && widget.children.length === 0 && (window as any).LodgifySearchBar) {
        console.log('🔄 Widget vide détecté, réinitialisation...')
        try {
          if (typeof (window as any).LodgifySearchBar.init === 'function') {
            ;(window as any).LodgifySearchBar.init()
          }
        } catch (e) {
          console.error('Erreur lors de la réinitialisation:', e)
        }
      }
    }, 2000)

    return () => clearInterval(checkWidget)
  }, [widgetReady])

  // Charger le script Lodgify de manière standard (comme recommandé par Lodgify)
  useEffect(() => {
    // Vérifier si le script existe déjà
    if (document.querySelector('script[src*="lodgify-search-bar.js"]')) {
      console.log('✅ Script Lodgify déjà présent')
      setScriptLoaded(true)
      return
    }

    // Créer une balise script standard (sans crossOrigin pour éviter les problèmes CORS)
    const script = document.createElement('script')
    script.src = 'https://widget.lodgify.com/lodgify-search-bar.js'
    script.async = true
    script.id = 'lodgify-search-bar-script'
    // Ne pas utiliser crossOrigin pour éviter les problèmes CORS
    
    script.onload = () => {
      console.log('✅ Script Lodgify chargé avec succès')
      setScriptLoaded(true)
    }
    
    script.onerror = (error) => {
      console.error('❌ Erreur lors du chargement du script Lodgify:', error)
      // Afficher un message d'aide
      console.warn('💡 Si le problème persiste, vérifiez :')
      console.warn('   1. Que l\'URL https://widget.lodgify.com/lodgify-search-bar.js est accessible')
      console.warn('   2. Que votre connexion internet fonctionne')
      console.warn('   3. Contactez le support Lodgify pour obtenir le bon code d\'intégration')
    }

    // Ajouter le script au head
    document.head.appendChild(script)

    return () => {
      // Ne pas supprimer le script pour éviter les conflits
    }
  }, [])

  return (
    <main ref={mainRef} className="min-h-screen">
      <Navbar />
      
      <section ref={heroContainerRef as any} id="reservation-hero" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/hero.jpg"
              alt="Villa Le Nid Céleste - Réservation"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
          </div>
        </div>

        {/* Widget Lodgify centré */}
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto w-full">
          {scriptLoaded && widgetReady ? (
            <div
              ref={lodgifyContainerRef}
              id="lodgify-search-bar"
              data-website-id="622083"
              data-language-code="en"
              data-checkout-page-url="https://checkout.lodgify.com/theskynest/en/#/744274"
              data-dates-check-in-label="Check-in"
              data-dates-check-out-label="Check-out"
              data-guests-counter-label="Guests"
              data-guests-input-singular-label="{{NumberOfGuests}} guest"
              data-guests-input-plural-label="{{NumberOfGuests}} guests"
              data-location-input-label="Location"
              data-search-button-label="Search"
              data-dates-input-min-stay-tooltip-text='{"one":"Minimum {minStay} night","other":"Minimum {minStay} nights"}'
              data-guests-breakdown-label="Guests"
              data-adults-label='{"one":"adult","other":"adults"}'
              data-adults-description="Ages {minAge} or above"
              data-children-label='{"one":"child","other":"children"}'
              data-children-description="Ages {minAge}-{maxAge}"
              data-children-not-allowed-label="Not suitable for children"
              data-infants-label='{"one":"infant","other":"infants"}'
              data-infants-description="Under {maxAge}"
              data-infants-not-allowed-label="Not suitable for infants"
              data-pets-label='{"one":"pet","other":"pets"}'
              data-pets-not-allowed-label="Not allowed"
              data-done-label="Done"
              data-new-tab="true"
              data-version="stable"
              data-has-guests-breakdown
              suppressHydrationWarning
            />
          ) : (
            <div className="bg-white/95 backdrop-blur-md rounded-lg p-8 text-center">
              <h2 className="text-2xl font-serif text-gold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Réservation
              </h2>
              <p className="text-gray-700 mb-6">
                Le widget de réservation Lodgify est en cours de chargement...
              </p>
              <a
                href="https://checkout.lodgify.com/theskynest/en/#/744274"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-gold text-white font-semibold rounded-full hover:bg-gold-dark transition-all"
              >
                Réserver maintenant
              </a>
              {process.env.NODE_ENV === 'development' && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-left text-sm">
                  <p className="font-semibold text-yellow-800 mb-2">⚠️ Mode développement - Widget Lodgify non chargé</p>
                  <p className="text-yellow-700 mb-2">L'URL du script Lodgify retourne une erreur 404.</p>
                  <p className="text-yellow-700 mb-2">Pour résoudre ce problème :</p>
                  <ol className="list-decimal list-inside text-yellow-700 space-y-1">
                    <li>Contactez le support Lodgify pour obtenir le bon code d'intégration</li>
                    <li>Vérifiez que l'URL du script est correcte dans votre compte Lodgify</li>
                    <li>Utilisez le lien "Réserver maintenant" ci-dessus en attendant</li>
                  </ol>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
