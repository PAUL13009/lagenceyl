'use client'

import { useState, useRef, useEffect } from 'react'
import VariableProximity from './VariableProximity'

interface CustomSelectProps {
  options: { value: string; label: string }[]
  containerRef?: React.RefObject<HTMLElement> | null
  className?: string
  value?: string
  onChange?: (value: string) => void
  name?: string
}

export default function CustomSelect({ 
  options, 
  containerRef = null, 
  className = '',
  value: controlledValue,
  onChange,
  name = 'select'
}: CustomSelectProps) {
  const [internalValue, setInternalValue] = useState(options[0].value)
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLDivElement>(null)

  // Utiliser la valeur contrôlée si fournie, sinon utiliser l'état interne
  const selectedValue = controlledValue !== undefined ? controlledValue : internalValue
  const setSelectedValue = (newValue: string) => {
    if (onChange) {
      onChange(newValue)
    } else {
      setInternalValue(newValue)
    }
  }

  const selectedOption = options.find(opt => opt.value === selectedValue) || options[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
    <div className={`relative ${className}`} ref={selectRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-bamboo-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold text-left flex justify-between items-center"
      >
        <span>
          <VariableProximity
            label={selectedOption.label}
            fromFontVariationSettings="'wght' 300"
            toFontVariationSettings="'wght' 500"
            containerRef={null}
            radius={60}
            falloff="linear"
          />
        </span>
        <svg
          className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute z-20 w-full mt-1 bg-white border border-bamboo-200 rounded-lg shadow-lg max-h-60 overflow-auto">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setSelectedValue(option.value)
                  setIsOpen(false)
                }}
                className={`w-full px-4 py-3 text-left hover:bg-stone-50 transition-colors ${
                  selectedValue === option.value ? 'bg-stone-100' : ''
                }`}
              >
                <VariableProximity
                  label={option.label}
                  fromFontVariationSettings="'wght' 300"
                  toFontVariationSettings="'wght' 500"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </button>
            ))}
          </div>
        </>
      )}
      
      <input type="hidden" name={name} value={selectedValue} />
    </div>
  )
}

