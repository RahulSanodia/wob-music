import React from 'react'
import Hero from './Hero'
import PhaseOne from './PhaseOne'
import PhaseThree from './PhaseThree'
import PhaseTwo from './PhaseTwo'
import HomeExtra from './HomeExtra'


function index() {
    return (
        <div className=' w-full flex flex-col px-4 max-w-7xl justify-center items-center mx-auto'>
            <Hero />
            <PhaseOne />
            <PhaseTwo />
            <PhaseThree />
            <HomeExtra />
        </div>
    )
}

export default index