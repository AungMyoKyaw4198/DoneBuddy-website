import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import AppShowcase from '../components/sections/AppShowcase'
import HowItWorks from '../components/sections/HowItWorks'
import WhyLove from '../components/sections/WhyLove'
import MeetYourBuddies from '../components/sections/MeetYourBuddies'
import Testimonials from '../components/sections/Testimonials'
import BottomCTA from '../components/sections/BottomCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <AppShowcase />
      <HowItWorks />
      <WhyLove />
      <MeetYourBuddies />
      <Testimonials />
      <BottomCTA />
    </>
  )
}
