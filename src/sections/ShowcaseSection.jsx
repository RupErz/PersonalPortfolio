import React from 'react'

const ShowcaseSection = () => {
    return (
        <div id='work' className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/* Left  */}
                    <div className="first-project-wrapper">
                        <div className='image-wrapper'>
                            <img src='/images/project1.png' alt='PennyPal' />
                        </div>
                        <div className='text-content'>
                            <h2>Track expenses, manage budgets, and achieve your financial goals with PennyPal</h2>
                            <p className='text-white-50 md:text-xl'>
                                An app built with React Native, Expo and Tailwind CSS for a fast, user-friendly experience and providing smart insights graph with React Native Chart Kit.
                            </p>
                        </div>
                    </div>
                    {/* Right */}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project'>
                            <div className='image-wrapper bg-[#ffefdb]'>
                                <img src='/images/project2.png' alt='Recipe Management App' />
                            </div>
                            <h2>Recipe Management Mobile App</h2>
                        </div>
                        <div className='project'>
                            <div className='image-wrapper bg-[#ffe7eb]'>
                                <img src='/images/project3.png' alt='Start Pro' />
                            </div>
                            <h2>Start Pro - A Start Up Showcase Website</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowcaseSection