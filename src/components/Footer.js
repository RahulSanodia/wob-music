import React from 'react'

import Discord from '../icons/discord.svg'

import TwitterLogo from '../icons/TwitterIcon.svg'
import InstagramFrame from '../icons/instagram.svg'
import logo from '../images/LOGO_WOBBLEB.png'

function Footer() {
    return (
        <div className='lg:mt-32 mt-14 mb-10 mx-auto w-full lg:pl-10 flex lg:flex-row lg:justify-between font-monumentExtended lg:items-baseline flex-col-reverse items-center justify-center'>
            <div className='w-full lg:w-fit '>
                <div className='w-full lg:w-fit justify-center flex lg:justify-start'>
                <img src={logo} alt="" className='mt-3 lg:ml-5 ' />
                </div>
                <h3 className='mt-4 pl-4 text-white lg:text-left text-center'>Copyright © WOBBLEBUG 2022</h3>
            </div>
            <div className='flex  space-x-3 mx-3 '>
                <div>
                    <img src={TwitterLogo} alt='' />
                </div>
                <div>
                    <img src={InstagramFrame} alt='' />

                </div>
                <div>
                    <img src={Discord} alt='' />

                </div>
            </div>
            <div className='text-[#DFDFDF] opacity-10 text-end h-max mx-4 my-4'>
                <div className='flex flex-col justify-end h-full'>

                Made with BASS
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Footer