'use client'

import { useRef, useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PackCard from '@/components/PackCard'
import ContactSection from '@/components/ContactSection'
import { useProximityContainer } from '@/components/ProximityProvider'

interface PackData {
  image: string
  imageAlt: string
  title: string
  subtitle: string
  price: string
  duration: string
  services: string[]
}

export default function Pack() {
  const mainRef = useRef<HTMLElement>(null)
  const containerRef = useProximityContainer()
  const [currentPackIndex, setCurrentPackIndex] = useState(0)

  // Données des packs
  const packs: PackData[] = [
    {
      image: "/images/DSC02758.jpg",
      imageAlt: "Week-end de lune de miel à Le Nid Céleste",
      title: "Week-end de lune de miel",
      subtitle: "Romance tout compris",
      price: "1 200 $",
      duration: "3 jours / 2 nuits",
      services: [
        "Dîner romantique privé avec coucher de soleil sur le mont Agung",
        "Massage en couple (2 séances)",
        "Champagne et corbeille de fruits tropicaux",
        "Décorations florales et aménagement d'ambiance",
        "Service de petit-déjeuner au lit",
        "Piscine privée et accès au hamac"
      ]
    },
    {
      image: "/images/DSC02823.jpg",
      imageAlt: "Retraite bien-être à Le Nid Céleste",
      title: "Retraite bien-être",
      subtitle: "Régénérez votre âme",
      price: "1 800 $",
      duration: "5 jours / 4 nuits",
      services: [
        "Séances quotidiennes de massothérapie",
        "Conseils en yoga et méditation",
        "Préparation de repas gastronomiques sains",
        "Promenades en pleine nature à travers les rizières en terrasses",
        "Consultation et planification du bien-être",
        "Service de livraison de jus détox"
      ]
    },
    {
      image: "/images/DSC02758.jpg",
      imageAlt: "Nomade numérique à Le Nid Céleste",
      title: "Nomade numérique",
      subtitle: "Travaillez depuis le paradis",
      price: "2 400 $",
      duration: "2 semaines",
      services: [
        "Starlink 150+ Mbps garanti",
        "Livraison de repas quotidienne pendant les heures de travail",
        "Service de ménage hebdomadaire",
        "Configuration d'un espace de travail dédié",
        "Service de blanchisserie inclus",
        "Horaires de départ flexibles"
      ]
    },
    {
      image: "/images/DSC02823.jpg",
      imageAlt: "Immersion culturelle à Le Nid Céleste",
      title: "Immersion culturelle",
      subtitle: "Expérience authentique à Bali",
      price: "1 600 $",
      duration: "5 jours / 4 nuits",
      services: [
        "Visites guidées des villages et des rizières en terrasses",
        "Atelier d'orfèvrerie traditionnel",
        "Participation à la cérémonie du temple",
        "Cours de cuisine balinaise",
        "Expérience d'achat au marché local",
        "Guide expert en culture inclus"
      ]
    },
    {
      image: "/images/DSC02758.jpg",
      imageAlt: "Chercheur d'aventures à Le Nid Céleste",
      title: "Chercheur d'aventures",
      subtitle: "Explorateur du Mont Agung",
      price: "2 200 $",
      duration: "6 jours / 5 nuits",
      services: [
        "Expédition de trekking au lever du soleil sur le mont Agung",
        "Excursions vers des cascades cachées (3 sites)",
        "Guide professionnel et transport",
        "Dîner barbecue pour fêter la fin de la randonnée",
        "Prise de vue par drone incluse",
        "Séances de massage de récupération"
      ]
    },
    {
      image: "/images/DSC02823.jpg",
      imageAlt: "Créateur de contenu à Le Nid Céleste",
      title: "Créateur de contenu",
      subtitle: "Pack de contenu viral",
      price: "2 800 $",
      duration: "4 jours / 3 nuits",
      services: [
        "Séance photo et vidéo professionnelle",
        "Images aériennes par drone avec vue sur le mont Agung",
        "Accès aux portes motorisées du cinéma",
        "Projecteur 4K pour l'évaluation du contenu",
        "Changements multiples de tenues et de lieux",
        "Fichiers bruts + montage des meilleurs moments"
      ]
    }
  ]

  useEffect(() => {
    if (mainRef.current && containerRef) {
      containerRef.current = mainRef.current
    }
  }, [containerRef])

  const handlePrevious = () => {
    setCurrentPackIndex((prev) => (prev === 0 ? packs.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentPackIndex((prev) => (prev === packs.length - 1 ? 0 : prev + 1))
  }

  const handleGoToPack = (index: number) => {
    setCurrentPackIndex(index)
  }

  const currentPack = packs[currentPackIndex]

  return (
    <main ref={mainRef} className="min-h-screen">
      <Navbar />
      <Hero 
        title="Découvrez nos expériences exclusives"
        subtitle="Choisissez le forfait idéal pour votre escapade inoubliable à Bali"
        buttonText="Découvrir les packs"
        buttonLink="#packs"
        id="pack"
        backgroundImage="/images/DSC02758.jpg"
        alt="Terrasse et espace extérieur de Le Nid Céleste"
      />
      <div key={currentPackIndex} className="animate-fade-in">
        <PackCard
          image={currentPack.image}
          imageAlt={currentPack.imageAlt}
          title={currentPack.title}
          subtitle={currentPack.subtitle}
          price={currentPack.price}
          duration={currentPack.duration}
          services={currentPack.services}
          buttonText="Réserver"
          onButtonClick={() => {
            // Action à définir
          }}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onGoToPack={handleGoToPack}
          showNavigation={packs.length > 1}
          currentIndex={currentPackIndex}
          totalPacks={packs.length}
        />
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}

