import React from 'react'
import MusicLogo from '../../images/Music_image.svg'
import NFTone from '../../images/nft1.png'
import NFTTwo from '../../images/nft22.png'
import NFTThree from '../../images/nft3.png'
import NFTfour from '../../images/nft4.png'
import NFToNEicon from "../../icons/Logomark_Blue_2.png"
import NFTtwoicon from "../../icons/image_5.png"

function TheNFTs() {
    return (
        <div className='text-white w-full flex justify-center flex-col px-10 mt-5 lg:mt-40'>
            <div className='w-full flex justify-center items-center mt-20 flex-row'>
                <img src={MusicLogo} alt="" />
            </div>
            <div className='w-full flex justify-center items-center mt-20 flex-row'>
                <div className='lg:w-72 w-10 md:w-32 border border-white mr-5'></div>
                <h1 className='text-white font-monumentExtended uppercase text-center text-3xl'>the nfts</h1>
                <div className='lg:w-72 w-10 md:w-32 border border-white ml-5'></div>
            </div>

            <div className=' w-full  text-center  px-5 font-monumentExtended text-xs  pb-10 '>
                <p className=' pt-5 text-center'>EACH WOBBLEBUG COLLECTION PROVIDES A DIFFERENT SET OF UTILITIES IN THE WOBVERSE</p>
            </div>

            <div className='w-full   bg-[#242424] bg-opacity-40 rounded-md   pb-4 text-xl flex flex-col justify-center '>
                <div className='lg:pr-16 px-2'>
                    <p className=' pt-5 font-monumentExtended text-sm text-center w-full'>
                        ARE YOU A MEGAWOB OR A DEGEN WOB?
                    </p>
                </div>


                <div className='flex font-monumentExtended text-xs  justify-center items-center mx-4 flex-col lg:flex-row'>


                    <div className='lg:my-10 mt-4 mr-4 flex flex-col  items-center lg:basis-1/4'>
                        <img src={NFTone} alt="NFTone" className='w-56' />
                        <div className=' flex flex-col justify-center items-center'>
                            <p className='px-4 bg-[#242424] mt-2 rounded-md text-center py-1'>GENESIS COLLECTION (ETH) - 1250
                            </p><p className='mt-4'>
                                MINT 11.11.21
                            </p><p className='mt-4'>
                                NO CURRENT UTILITY
                            </p>
                            <img className='mt-4 w-8 lg:translate-y-7' src={NFToNEicon} alt="icon" />
                        </div>
                    </div>

                    <div className='lg:my-10 my-4 flex flex-col justify-center items-center basis-1/4'>
                        <img src={NFTTwo} alt="NFTTwo" className='w-56' />
                        <div className=' flex flex-col justify-center items-center'>
                            <p className='px-4 bg-[#242424] mt-2 rounded-md py-1'>MEGAWOBS (SOL) - 10K
                            </p><p className='mt-4'>
                                MINT 6.9.2022
                            </p><p className='mt-4'>
                                EARN $WOB BY STAKING
                            </p>
                            <img className='mt-4 w-8 lg:translate-y-7' src={NFTtwoicon} alt="icon" />
                        </div>
                    </div>



                    <div className='lg:my-10 my-4 flex flex-col justify-center items-center basis-1/4'>
                        <img src={NFTThree} alt="NFTTwo" className='w-56 pt-8' />
                        <div className=' flex flex-col justify-center items-center'>
                            <p className='px-4 bg-[#242424] mt-2 rounded-md py-1 text-center'>
                                WOBBLEDRUGS (SOL) - 10k
                            </p><p className='mt-4 text-center'>
                                FREE CLAIM FOR MEGAWOBS  - 8.17.22
                            </p><p className='mt-4 text-center'>
                                USED TO TRANSFORM TO A DEGENWOB                            </p>
                            <img className='mt-4 w-8' src={NFTtwoicon} alt="icon" />
                        </div>
                    </div>

                    <div className='lg:my-10 my-4 flex flex-col justify-center items-center basis-1/4'>
                        <img src={NFTfour} alt="NFTTwo" className='w-56' />
                        <div className=' flex flex-col justify-center items-center'>
                            <p className='px-4 bg-[#242424] mt-2 rounded-md text-center py-1'>
                                DEGENWOBS (SOL) - ∞
                            </p><p className='mt-4 '>
                                TRANSFORM 10.4.22
                            </p><p className='mt-4 text-center'>
                                EARN $WOB BY STAKING + EXCLUSIVE ACCESS                            </p>
                            <img className='mt-4 w-8 lg:translate-y-5' src={NFTtwoicon} alt="icon" />
                        </div>
                    </div>
                </div>

                <div className='w-full flex justify-center'>
                    <button className='uppercase text-white px-12 cursor-pointer py-1 rounded-md font-monumentExtended text-sm text-center bg-[#242424] w-fit'>learn more</button>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default TheNFTs