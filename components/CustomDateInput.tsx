'use client'

import { useRef, useState } from 'react'
import VariableProximity from './VariableProximity'

interface CustomDateInputProps {
  label: string
  containerRef?: React.RefObject<HTMLElement> | null
  className?: string
  value?: string
  onChange?: (value: string) => void
  min?: string
  error?: string
}

export default function CustomDateInput({ 
  label, 
  containerRef = null, 
  className = '',
  value: controlledValue,
  onChange,
  min,
  error
}: CustomDateInputProps) {
  const [internalValue, setInternalValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  
  // Utiliser la valeur contrôlée si fournie, sinon utiliser l'état interne
  const value = controlledValue !== undefined ? controlledValue : internalValue
  const setValue = (newValue: string) => {
    if (onChange) {
      onChange(newValue)
    } else {
      setInternalValue(newValue)
    }
  }

  const formatDateForDisplay = (dateString: string) => {
    if (!dateString) return ''
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric' 
    })
  }

  return (
    <div className={className}>
      <label className="block text-sm font-semibold mb-2 text-gray-700">
        <VariableProximity
          label={label}
          fromFontVariationSettings="'wght' 400"
          toFontVariationSettings="'wght' 600"
          containerRef={null}
          radius={60}
          falloff="linear"
        />
      </label>
      <div className="relative">
        <input
          ref={inputRef}
          type="date"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          min={min}
          className="w-full px-4 py-3 rounded-lg bg-stone-50 border border-bamboo-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gold opacity-0 absolute inset-0 z-10 cursor-pointer"
        />
        <div className={`w-full px-4 py-3 rounded-lg bg-stone-50 border ${error ? 'border-red-300' : 'border-bamboo-200'} text-gray-900 pointer-events-none`}>
          {value ? (
            <VariableProximity
              label={formatDateForDisplay(value)}
              fromFontVariationSettings="'wght' 300"
              toFontVariationSettings="'wght' 500"
              containerRef={null}
              radius={60}
              falloff="linear"
            />
          ) : (
            <span className="text-gray-400">
              <VariableProximity
                label="JJ/MM/AAAA"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 400"
                containerRef={null}
                radius={60}
                falloff="linear"
              />
            </span>
          )}
        </div>
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    </div>
  )
}

