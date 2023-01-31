import React from 'react'
import logo from '../../images/LOGO_WOBBLEB.png';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='w-full'>
            <header className=" ">
                <div className='flex justify-between '>
                    <div>
                        <Link to='/'>
                        <img src={logo} alt="" className='mt-3' />
                        </Link>
                    </div>
                    <div className='w-14 h-14 border-2 border-[#D92F86] rounded-full mt-7 '></div>
                </div>
            </header>
            <div>
                <div className='text-white font-monumentExtended uppercase text-3xl lg:text-7xl md:mt-20 mt-10 lg:mt-32'>wob music
                    <div>group.</div>
                </div>
                <div className='font-silom text-white text-xl lg:text-3xl mt-4'>AN INNOVATIVE WEB3 RECORD LABEL BY
                    <div>WOBBLEBUG</div>
                </div>
                <div className='font-silom text-white mt-4 pr-20'>WOBBLE LABS WILL BE THE CENTRAL HOME THAT WILL RELEASE THE MUSIC CREATED BY WOBBLEBUG AND IT'S COMMUNITY MEMBERS. WE PLAN TO ROLLOUT SINGLES, EP'S AND ALBUMS JUST LIKE ANY OTHER ARTIST WOULD. THE MUSIC WILL BE AVAILABLE ON THE TRADITIONAL PLATFORMS INCLUDING SPOTIFY, APPLE, AMAZON, YOUTUBE, AUDIUS AND MORE.</div>
                <button className='lg:mt-32 mt-8 bg-[#D92F86] uppercase font-monumentExtended text-[#1A1A1A] text-base px-6 py-3 rounded-2xl 
                transition duration-500  shadow-md  hover:shadow-[#fab9da] hover:-translate-y-1 delay-150 ease-in-out '>enter wob music player</button>
            </div>
        </div>
    )
}

export default Hero