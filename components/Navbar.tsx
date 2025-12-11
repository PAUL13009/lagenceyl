'use client'

import { useState, useEffect } from 'react'
import VariableProximity from './VariableProximity'

export default function Navbar() {
  const containerRef = null
  const [scrolled, setScrolled] = useState(false)
  const [isOnHero, setIsOnHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      setScrolled(scrollY > 20)
      setIsOnHero(scrollY < 50) // L'effet se déclenche dès qu'on commence à scroller (dès que scrollY > 50px)
    }
    
    // Vérifier l'état initial
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
      scrolled ? 'bg-stone-50 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center transition-all duration-500 ease-out ${
          isOnHero ? 'h-24' : 'h-20'
        }`}>
          <div className="flex-1"></div>
          <div className={`hidden md:flex items-center transition-all duration-500 ease-out ${
            isOnHero ? 'space-x-10' : 'space-x-8'
          }`}>
            <a href="/" className={`transition-all duration-500 ease-out hover:opacity-80 ${
              isOnHero ? 'text-gold' : (scrolled ? 'text-gold' : 'text-white')
            } ${isOnHero ? 'text-lg' : 'text-base'}`}>
              <VariableProximity
                label="Villa"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 600"
                containerRef={null}
                radius={60}
                falloff="linear"
              />
            </a>
            <a href="#galerie" className={`transition-all duration-500 ease-out hover:opacity-80 ${
              isOnHero ? 'text-gold' : (scrolled ? 'text-gold' : 'text-white')
            } ${isOnHero ? 'text-lg' : 'text-base'}`}>
              <VariableProximity
                label="Galerie"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 600"
                containerRef={null}
                radius={60}
                falloff="linear"
              />
            </a>
            <a href="/pack" className={`transition-all duration-500 ease-out hover:opacity-80 ${
              isOnHero ? 'text-gold' : (scrolled ? 'text-gold' : 'text-white')
            } ${isOnHero ? 'text-lg' : 'text-base'}`}>
              <VariableProximity
                label="Pack"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 600"
                containerRef={null}
                radius={60}
                falloff="linear"
              />
            </a>
          </div>
          <div className="flex-1 flex justify-end">
            <a 
              href="/reservation"
              className={`rounded-full font-semibold transition-all duration-500 ease-out ${
                isOnHero ? 'px-8 py-3 text-base' : 'px-6 py-2 text-sm'
              } ${
                scrolled 
                  ? 'bg-gold text-white hover:bg-gold-dark' 
                  : 'bg-gold text-white hover:bg-gold-dark'
              }`}
            >
              <VariableProximity
                label="Réserver"
                fromFontVariationSettings="'wght' 400"
                toFontVariationSettings="'wght' 600"
                containerRef={null}
                radius={60}
                falloff="linear"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

