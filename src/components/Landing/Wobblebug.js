import React from 'react'
import MusicLogo from '../../images/Music_image.svg'
import WobPro from '../../images/WOB_PROFILE_Spotify_Final_1.png'
import BabyWobsStudio from '../../images/BABYWOBS_IN_THE_STUDIO_1.png'

function Wobblebug() {
    return (
        <div className=' text-white font-monumentExtended '>
            <div className='text-white mx-5 pb-6'>
                <div className='w-full flex justify-center items-center mt-20 flex-row'>
                    <img src={MusicLogo} alt="" />
                </div>
                <div className='w-full flex justify-center items-center mt-10 flex-row'>
                    <div className='lg:w-72 md:w-32 w-12 border border-white mr-5'></div>
                    <h1 className=' uppercase lg:text-3xl text-center  text-base'>WOBBLEBUG THE DJ
                        <div>

                            & MUSIC PRODUCER
                        </div>
                    </h1>
                    <div className='lg:w-72 md:w-32 w-12 border border-white ml-5'></div>
                </div>
            </div>

            <div className='text-center text-xs lg:mx-52 mx-3 mt-8 md:mx-10'>
                Help Wobblebug accomplish its dreams to become a successful and respected electronic music producer and dj in a way that has never been done before...

            </div>

            <div className='text-center text-xs lg:mx-36 mx-3 mt-4 md:mx-10'>
                Now that you have gone through the Invasion and are a veteran in the Wob Mob Squad, you have earned the opportunity to become a member of the Wob Music Group and help Wobblebug accomplish its dreams and become one of the most successful DJ / Producers in electronic music.
            </div>

            <div className='text-center text-xs lg:mx-20 mx-3 mt-4 md:mx-10'>
                To become a member you simply have to participate by giving feedback on music, art, content and more and helping to shape the decisions made by the WB team. OR by providing a creative service for the community such as participating in remix contests of WB music, art and content contests and so much more...
            </div>
            <div className='text-center text-xs lg:mx-8 mx-3 mt-4 md:mx-10' >
                Once inducted in the Wob Music Group you will get exclusive perks such as exclusive first access to song previews, vip access to wobblebug IRL and Metaverse events and more. The more you share the WB music online and spread the word the more well known WB will become and the more valuable you WB assets you acquire over time will be worth.
            </div>

            <div className='flex justify-center my-10 text-center flex-col lg:flex-row'>
                <div className='mx-10 flex flex-col justify-center items-center'>
                    <div className=''>

                        <img src={WobPro} alt="" className='rounded-3xl my-6 ' />
                    </div>
                    <div className='lg:text-base text-sm'>“WOBBLEDRUG” SONG</div>
                    <div className='flex justify-center w-full my-6 lg:text-base text-sm'>

                        <button className='w-48 bg-[#242424] h-10 rounded-md '>LISTEN NOW</button>
                    </div>
                </div>

                <div className='mx-10 flex flex-col justify-center'>
                    <img src={BabyWobsStudio} alt="" className='rounded-3xl my-6' />
                    <div className='lg:text-base text-sm'>“WOBBLEDRUG” MUSIC VIDEO</div>
                    <div className='flex justify-center w-full my-6 lg:text-base text-sm'>

                        <button className='w-48 bg-[#242424] h-10 rounded-md '>WATCH NOW</button>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Wobblebug