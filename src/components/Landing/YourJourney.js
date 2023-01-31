import React from 'react'
import MusicLogo from '../../images/Music_image.svg'
import LogoFour from '../../images/Logo_4.png'
import WebToken from '../../images/wobtoken.png'
import WobMart from '../../images/Grou_p.png'
import NFTTwo from '../../images/nft22.png'
import RollBack from '../../images/image_9.png'
import NFTTHree from '../../images/nft3.png'
import NFTFourr from '../../images/nft4.png'
import ArrowIcon from '../../icons/Arrow20.svg'
import Icon2 from '../../icons/icon_10.svg'
import LogoMark from '../../icons/Logomark_Blue.svg'

function YourJourney() {
    return (
        <div className='flex flex-col justify-center  lg:mt-32 mx-6'>
            <div className='text-white mx-5 pb-6'>
                <div className='w-full flex justify-center items-center mt-20 flex-row'>
                    <img src={MusicLogo} alt="" />
                </div>
                <div className='w-full flex justify-center items-center mt-10 flex-row'>
                    <div className='lg:w-72 md:w-32 w-12 border border-white mr-5'></div>
                    <h1 className='text-white font-monumentExtended uppercase text-lg lg:text-3xl text-center'>your journey</h1>
                    <div className='lg:w-72 md:w-32 w-12 border border-white ml-5'></div>
                </div>
            </div>

            <div className=' w-full bg-[#242424] bg-opacity-40 rounded-md  text-white pb-4 text-xl lg:pr-10 pl-4'>

                <div className=''>
                    <p className=' pt-5 font-monumentExtended text-2xl text-center '>READY TO START?</p>
                </div>

                <div className='flex font-monumentExtended text-base  justify-center items-center mx-4 mt-8 text-center'>
                    Follow the steps below and join the invasion!
                </div>

                <div className='flex font-monumentExtended text-xs justify-center items-center mx-4 max px-4 lg:px-40 mt-8 text-center'>
                    If you are ready to go on the adventure of a lifetime and join the invasion, acquire your Megawob or Degen on Magic Eden or OpenSea and LET THE BASS begin...
                </div>


                <div className='flex justify-between mt-10 text-xs font-monumentExtended lg:flex-row flex-col items-center'>
                    <div className=' justify-between items-center '>
                        <img src={NFTTwo} alt="" className='rounded-full w-16 lg:ml-10' />
                        <div className='whitespace-nowrap absolute mt-2 ml-2 -translate-x-12 lg:-translate-x-4'>ACQUIRE MEGAWOB</div>
                    </div>
                    <img src={ArrowIcon} alt="" className='w-16 animate-pulse mb-10 mt-14 rotate-90 lg:rotate-0' />
                    <div className=' '>
                        <img src={LogoFour} alt="" className='rounded-full w-16 ease-in' />
                        <div className='whitespace-nowrap absolute mt-2 -translate-x-10'>STAKE YOUR WOB</div>
                    </div>
                    <img src={ArrowIcon} alt="" className='w-16 mb-10 mt-14 rotate-90 lg:rotate-0 animate-pulse' />
                    <div className=' '>
                        <img src={WebToken} alt="" className='rounded-full w-16' />
                        <div className='whitespace-nowrap absolute mt-2 -translate-x-5'>EARN $WOB</div>
                    </div>
                    <img src={ArrowIcon} alt="" className='w-16 mb-10 mt-14 rotate-90 lg:rotate-0 animate-pulse' />
                    <div className=' '>
                        <img src={WobMart} alt="" className='rounded-full w-16' />
                        <div className='whitespace-nowrap absolute mt-2 -translate-x-12'>SPEND IN WOBMART</div>
                    </div>
                    <img src={ArrowIcon} alt="" className='w-16 mb-10 mt-14 rotate-90 lg:rotate-0 animate-pulse' />
                    <div className=' '>
                        <img src={NFTTHree} alt="" className='rounded-full w-16' />
                        <div className='whitespace-nowrap absolute mt-2 -translate-x-12'>TAKE WOBBLEDRUG</div>
                    </div>
                    <img src={ArrowIcon} alt="" className='w-16 mb-10 mt-14 rotate-90 lg:rotate-0 animate-pulse' />
                    <div className=' '>
                        <img src={NFTFourr} alt="" className='rounded-full w-16' />
                        <div className='whitespace-nowrap absolute mt-2 -translate-x-5'>TRANSFORM</div>
                    </div>
                    <img src={ArrowIcon} alt="" className='w-16 mb-10 mt-14 rotate-90 lg:rotate-0 animate-pulse' />
                    <div className='pr-6 '>
                        <img src={RollBack} alt="" className='rounded-full w-16 bg-white translate-x-4 lg:translate-x-0' />
                        <div className=' absolute mt-2 -translate-x-20 lg:-translate-x-16 text-center'>RE-ROLL / BACK TO MEGAWOB</div>
                    </div>
                </div>
                <div className='h-36 flex text-xs lg:text-sm font-monumentExtended justify-around'>
                    <div className=' h-full flex justify-center items-center lg:translate-x-20 mt-8'>
                        <button className='md:px-8 px-2 py-2 md:py-4 bg-[#242424] rounded-md whitespace-nowrap'><div className='flex flex-row'>
                            <img src={Icon2} alt="" className='w-6 mr-3' /><div>MAGIC EDEN</div>
                        </div>
                        </button>
                    </div>
                    <div className='h-full  flex justify-center items-center lg:-translate-x-20 mt-8'>
                        <button className='md:px-8 px-2 py-2 md:py-4 bg-[#242424] rounded-md flex flex-row'>
                            <img src={LogoMark} alt="" className='w-5 mr-1 md:mr-3' />
                            <div>
                                OPENSEA
                            </div>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default YourJourney