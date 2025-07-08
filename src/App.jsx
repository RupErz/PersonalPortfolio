import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import FeatureCards from './sections/FeatureCards'
import LogoSection from './sections/LogoSection'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            {/* Replace with Tech Stack  */}
            <LogoSection />
            <FeatureCards />
            <ExperienceSection />
            <TechStack />
            <Testimonials />
            <Contact />
            <Footer />
        </>
    )
}

export default App