import React, { useEffect, useState } from 'react'
import { navLinks } from '../constants'

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            // If user scroll by 10px
            const isScrolled = window.scrollY > 10
            setScrolled(isScrolled)
        }

        // Whenever user scroll call 'handleScroll'
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    
    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
            <div className='inner'>
                {/* User name */}
                <a className='logo' href='#hero'>
                    Nghia Vu
                </a>
                {/* NavBar Content */}
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({link, name, isDownload}) => (
                            <li key={name} className='group'>
                                <a 
                                    href={link}
                                    {...(isDownload && {target: '_blank', rel: 'noopener noreferrer'})}
                                >
                                    <span>{name}</span>
                                    <span className='underline' />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                
                {/* Contact me */}
                <a href='#contact' className='contact-btn group'>
                    <div className='inner'>
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}

export default NavBar