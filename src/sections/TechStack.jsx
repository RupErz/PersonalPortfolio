import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons, techStackImgs } from '../constants'
import TechIcon from '../components/Models/TechLogo/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo(
            '.tech-card',
            {
                y: 15,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: 'power2.inOut',
                stagger: 0.2,
                scrollTrigger: {
                    trigger: '#skills',
                    start: 'top center'
                }
            }
        )
    }, [])
    
    return (
        <div id='skills' className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader 
                    title="My Go-To Development Stack 🚀"
                    sub="🧠 What I Excel At"
                />

                <div className='tech-grid'>
                    {techStackImgs.map((icon) => (
                        <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rounded-lg'>
                            <div className='tect-card-animated-bg' />
                            <div className='tech-card-content'>
                                <div className='tech-icon-wrapper'>
                                    <img src={icon.imgPath} width={150} height={150} />
                                </div>
                                <div className='padding-x w-full pb-8'>
                                    <p>{icon.name}</p>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechStack