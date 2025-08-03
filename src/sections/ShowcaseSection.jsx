import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const ShowcaseSection = () => {
    const sectionRef = useRef(null)
    const project1Ref = useRef(null)
    const project2Ref = useRef(null)
    const project3Ref = useRef(null)

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current]

        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    // When to trigger the animation
                    scrollTrigger: {
                        trigger: card,    
                        start: 'top bottom-=100'
                    }
                }
            )
        })

        gsap.fromTo(
            sectionRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.5
            }
        )
    }, [])

    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* Left  */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className='image-wrapper'>
                            <img src='/images/project1.png' alt='PennyPal' />
                        </div>
                        <div className='text-content'>
                            <h2>Track expenses, manage budgets, and achieve your financial goals with PennyPal</h2>
                            <p className='text-white-50 md:text-xl'>
                                An app built with <b>React Native</b>, <b>Expo</b> and <b>Tailwind CSS</b> for a fast, user-friendly experience and providing smart insights graph with React Native Chart Kit.
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref}>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project4.png' alt='Prep Bot AI' />
                            </div>
                            <h2>PrepBot AI Assistant</h2>
                            <p className='text-white-50 md:text-xl'>Next.js, Firebase, Vapi AI, Tailwind CSS, Google Gemini AI, Typescript</p>
                        </div>
                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/project3.png' alt='Start Pro' />
                            </div>
                            <h2>Start Pro - A Start Up Showcase Website</h2>
                            <p className='text-white-50 md:text-xl'>React, Next.js, Typescript, Tailwind CSS, Sanity, Github OAuth</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection