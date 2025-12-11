'use client'

import { useRef } from 'react'
import VariableProximity from './VariableProximity'

interface TextWithProximityProps {
  children: string
  className?: string
  style?: React.CSSProperties
  fromWeight?: number
  toWeight?: number
  radius?: number
  falloff?: 'linear' | 'exponential' | 'gaussian'
}

export default function TextWithProximity({
  children,
  className = '',
  style,
  fromWeight = 300,
  toWeight = 700,
  radius = 80,
  falloff = 'linear'
}: TextWithProximityProps) {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <VariableProximity
      label={children}
      fromFontVariationSettings={`'wght' ${fromWeight}`}
      toFontVariationSettings={`'wght' ${toWeight}`}
      containerRef={null}
      radius={radius}
      falloff={falloff}
      className={className}
      style={style}
    />
  )
}

