import React from 'react'
import MusicLogo from '../../images/Music_image.svg'
import LogoBlackHead from '../../icons/LOGO_HEAD_BLACK.png'
import { Link } from 'react-router-dom'

function WobMusicGroup() {
    return (
        <div className='font-monumentExtended uppercase '>
            <div className='text-white mx-5 pb-6'>
                <div className='w-full flex justify-center items-center mt-20 flex-row'>
                    <img src={MusicLogo} alt="" />
                </div>
                <div className='w-full flex justify-center items-center mt-10 flex-row'>
                    <div className='lg:w-72 md:w-32 w-12 border border-white mr-5'></div>
                    <h1 className='text-white font-monumentExtended uppercase lg:text-3xl'>WOB MUSIC GROUP</h1>
                    <div className='lg:w-72 md:w-32 w-12 border border-white ml-5'></div>
                </div>
            </div>

            <div className=' w-full   text-white pb-4 lg:text-2xl px-6 text-center mt-4'>
            AN INNOVATIVE RECORD LABEL BY WOBBLEBUG
            </div>
            <div className=' w-full   text-white pb-4 px-6 lg:px-36 lg:text-xl text-xs '>
            WOBBLE LABS WILL BE THE CENTRAL HOME THAT WILL RELEASE THE MUSIC CREATED BY WOBBLEBUG AND IT'S COMMUNITY MEMBERS. WE PLAN TO ROLLOUT SINGLES, EP'S AND ALBUMS JUST LIKE ANY OTHER ARTIST WOULD. THE MUSIC WILL BE AVAILABLE ON THE TRADITIONAL PLATFORMS INCLUDING SPOTIFY, APPLE, AMAZON, YOUTUBE, AUDIUS AND MORE.
            </div>

            <div className='w-full flex justify-center mt-8'>
                <Link to='/wobmusicgroup'>
                <button className='uppercase w-64 h-14 text-xs  bg-[#FF0000] rounded-lg text-white flex flex-col justify-center items-center'>
                    <div className='mt-2'>

                    enter wob music group
                    </div>
                    <img src={LogoBlackHead} alt="b" className='mx-4' />
                </button>
                </Link>
            </div>
        </div>

    )
}

export default WobMusicGroup