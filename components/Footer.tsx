'use client'

import VariableProximity from './VariableProximity'

export default function Footer() {
  const containerRef = null
  return (
    <footer className="bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-light mb-4">
              <VariableProximity
                label="Le Nid Céleste"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 500"
                containerRef={null}
                radius={80}
                falloff="linear"
              />
            </h3>
            <p className="text-white/70 leading-relaxed">
              <VariableProximity
                label="Une villa exceptionnelle en bambou au cœur de Bali. Votre havre de paix pour un séjour inoubliable."
                fromFontVariationSettings="'wght' 200"
                toFontVariationSettings="'wght' 400"
                containerRef={null}
                radius={70}
                falloff="linear"
              />
            </p>
          </div>
          
          <div>
            <h4 className="font-light mb-4">
              <VariableProximity
                label="Liens rapides"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 500"
                containerRef={null}
                radius={70}
                falloff="linear"
              />
            </h4>
            <ul className="space-y-2 text-white/70">
              <li><a href="#accueil" className="hover:text-bali-400 transition-colors">
                <VariableProximity
                  label="Accueil"
                  fromFontVariationSettings="'wght' 200"
                  toFontVariationSettings="'wght' 400"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </a></li>
              <li><a href="#a-propos" className="hover:text-bali-400 transition-colors">
                <VariableProximity
                  label="À propos"
                  fromFontVariationSettings="'wght' 200"
                  toFontVariationSettings="'wght' 400"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </a></li>
              <li><a href="#galerie" className="hover:text-bali-400 transition-colors">
                <VariableProximity
                  label="Galerie"
                  fromFontVariationSettings="'wght' 200"
                  toFontVariationSettings="'wght' 400"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </a></li>
              <li><a href="#reservation" className="hover:text-bali-400 transition-colors">
                <VariableProximity
                  label="Réservation"
                  fromFontVariationSettings="'wght' 200"
                  toFontVariationSettings="'wght' 400"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-light mb-4">
              <VariableProximity
                label="Contact"
                fromFontVariationSettings="'wght' 300"
                toFontVariationSettings="'wght' 500"
                containerRef={null}
                radius={70}
                falloff="linear"
              />
            </h4>
            <ul className="space-y-2 text-white/70">
              <li>
                <VariableProximity
                  label="Sidemen, Karangasem, Bali, Indonésie"
                  fromFontVariationSettings="'wght' 200"
                  toFontVariationSettings="'wght' 400"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </li>
              <li>
                <VariableProximity
                  label="bonjour@theskynest.com"
                  fromFontVariationSettings="'wght' 200"
                  toFontVariationSettings="'wght' 400"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </li>
              <li>
                <VariableProximity
                  label="+62 812 3456 7890"
                  fromFontVariationSettings="'wght' 200"
                  toFontVariationSettings="'wght' 400"
                  containerRef={null}
                  radius={60}
                  falloff="linear"
                />
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60 text-sm">
          <p>
            <VariableProximity
              label={`© ${new Date().getFullYear()} Le Nid Céleste. Tous droits réservés.`}
              fromFontVariationSettings="'wght' 200"
              toFontVariationSettings="'wght' 300"
              containerRef={null}
              radius={60}
              falloff="linear"
            />
          </p>
        </div>
      </div>
    </footer>
  )
}

