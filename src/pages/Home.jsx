import React from 'react'
import HeroSection from '../components/HeroSection'
import AIServicesSection from '../components/AIServiceSection'
import SaaSDashboardSection from '../components/SaaSDashboardSection'
import OutBoundAISection from '../components/OutBoundAISection'
import AITools from '../components/AITools'
import HowVaaniWorks from '../components/HowVaaniWorks'
import SuccessStorySection from '../components/SucessStorySection'
import Testimonials from '../components/Testimonials'
import Reinvent from '../components/Reinvent'
import AIIntegrationSection from '../components/AIIntegrationSection'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Features from '../components/Features'
import Industries from '../components/Industries'
import ComparisonSection from '../components/ComparisonSection'
import PricingSection from '../components/PricingSection'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <HowVaaniWorks />
      <Features/>
      <Industries/>
      {/* <AIServicesSection /> */}
      {/* <SaaSDashboardSection /> */}
      {/* <OutBoundAISection /> */}
      <AITools />
      <ComparisonSection/>
      <SuccessStorySection />
      <Testimonials />
      <PricingSection/>
      {/* <HowVaaniWorks /> */}
      {/* <Reinvent /> */}
      {/* <AIIntegrationSection /> */}
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home