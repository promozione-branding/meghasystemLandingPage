import AboutUs from '@/compoents/AboutUs'
import AuthorisedPartners2 from '@/compoents/AuthorisedPartners2'
import BuyNowBanner from '@/compoents/BuyNowBanner'
import CertificatesMarquee from '@/compoents/CertificatesMarquee'
import ContactSection from '@/compoents/ContactSection'
import FooterSection from '@/compoents/Footer'
import Header from '@/compoents/Header'
import Hero2 from '@/compoents/Hero2'
import OurProjectsSection2 from '@/compoents/OurProjectsSection2'
import Testimonials from '@/compoents/Testimonials'
import TextMaskScroll from '@/compoents/TextMaskScroll'
import WashroomCubiclesFAQ from '@/compoents/WashroomCubiclesFAQ'
import WhatsApp from '@/compoents/WhatsApp'
import React from 'react'

export default function page() {
  return (
    <>
    <WhatsApp/>
    <Header/>
    <Hero2/>
    <AuthorisedPartners2/>
    <OurProjectsSection2/>
    <AboutUs/>
    <TextMaskScroll />
    <CertificatesMarquee/>
    <Testimonials/>
    <WashroomCubiclesFAQ/>
    <ContactSection/>
    <BuyNowBanner/>
    <FooterSection/>
    </>
  )
}
