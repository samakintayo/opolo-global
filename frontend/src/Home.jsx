import React from 'react'
import Hero from './components/Hero'
import Header from './components/Header'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'
import Programs from './components/Programs'
import WhyOpolo from './components/WhyOpolo'


const Home = () => {
  return (
    <>
      <Header />
    <Hero />
    <WhyOpolo />
    <Programs/>
     <HowItWorks />
    <Footer />
    </>
  )
}

export default Home