import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import FeatureCards from './sections/FeatureCards'
import LogoSection from './sections/LogoSection'

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            {/* Replace with Tech Stack  */}
            <LogoSection />
            <FeatureCards />
        </>
    )
}

export default App