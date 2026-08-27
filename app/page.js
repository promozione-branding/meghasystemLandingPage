import AboutUs from '@/compoents/AboutUs'
import AuthorisedPartners2 from '@/compoents/AuthorisedPartners2'
import BuyNowBanner from '@/compoents/BuyNowBanner'
import Certificates from '@/compoents/Certificates'
import CertificatesMarquee from '@/compoents/CertificatesMarquee'
import ContactSection from '@/compoents/ContactSection'
import FooterSection from '@/compoents/Footer'
import Form2 from '@/compoents/Form2'
import Header from '@/compoents/Header'
import Hero2 from '@/compoents/Hero2'
import Hero4 from '@/compoents/Hero4'
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
    <Form2/>
    <AuthorisedPartners2/>
    <OurProjectsSection2/>
    <AboutUs/>
    <Certificates/>
    <Hero4/>
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
