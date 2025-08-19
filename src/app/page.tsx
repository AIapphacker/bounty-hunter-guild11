'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import ClubIntro from '@/components/ClubIntro'
import GameIntro from '@/components/GameIntro'
import Precautions from '@/components/Precautions'
import Registration from '@/components/Registration'
import Footer from '@/components/Footer'
import BackgroundSelector from '@/components/BackgroundSelector'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  const [currentBackground, setCurrentBackground] = useState('ig-bg')

  const handleBackgroundChange = (backgroundClass: string) => {
    setCurrentBackground(backgroundClass)
  }

  return (
    <>
      <ParticleBackground />
      <main className={`min-h-screen ${currentBackground}`}>
        <Navigation />
        <BackgroundSelector 
          onBackgroundChange={handleBackgroundChange}
          currentBackground={currentBackground}
        />
        <HeroSection />
        <ClubIntro />
        <GameIntro />
        <Precautions />
        <Registration />
        <Footer />
      </main>
    </>
  )
}
