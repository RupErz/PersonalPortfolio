import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './components/LogoSection'

const App = () => {
    return (
        <>
            <NavBar />
            <Hero />
            <ShowcaseSection />
            {/* Replace with Tech Stack  */}
            <LogoSection />
        </>
    )
}

export default App