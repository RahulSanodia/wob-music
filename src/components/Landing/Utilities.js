import React from 'react'
import MusicLogo from '../../images/Music_image.svg'
import LogoBlackHead from '../../icons/LOGO_HEAD_BLACK.png'
import Arrow2 from '../../icons/Arrow2.svg'
import NFTTwo from '../../images/nft22.png'
import Plus from '../../icons/plus.svg'
import NFTTHree from '../../images/nft3.png'
import ArrowIcon from '../../icons/Arrow20.svg'
import NFTFourr from '../../images/nft4.png'
import NFTFive from '../../images/nft5.png'
import Solana from '../../images/solana.png'
import Image_11 from '../../images/image_11.png'


function Utilities() {
    return (
        <div className='text-white font-monumentExtended w-full md:px-16 lg:mt-52 '>
            <div className='text-white mx-5 pb-6'>
                <div className='w-full flex justify-center items-center mt-20 flex-row'>
                    <img src={MusicLogo} alt="" />
                </div>
                <div className='w-full flex justify-center items-center mt-10 flex-row'>
                    <div className='lg:w-72 md:w-32 w-12 border border-white mr-5'></div>
                    <h1 className=' uppercase text-xl lg:text-3xl'>Utilities</h1>
                    <div className='lg:w-72 md:w-32 w-12 border border-white ml-5'></div>
                </div>
            </div>

            <div className=' w-full   bg-[#242424] bg-opacity-40 rounded-md  text-white pb-4 text-xl '>
                <div>
                    <div className='flex justify-center flex-col'>
                        <div className='text-xl lg:text-3xl flex justify-center w-full mt-5'>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                            <div className=''>STAKING</div>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                        </div>
                        <div className='text-center text-sm mx-10 lg:mx-36 mt-14'> Once you have acquired the perfect Wobblebug and become part of the Wob Mob, you now have the ability to Stake your MegaWob or Degen and start earning the $WOB utility token immediately.</div>
                    </div>
                </div>
                <div className='basis-1/2 h-full flex justify-center items-center mt-8 text-xs lg:text-base'>
                    <button className='lg:px-8 px-2 py-4 bg-[#242424] rounded-md whitespace-nowrap'><div className='flex flex-row'>
                        <div>DEGEN & MEGAWOB STAKING</div>
                    </div>
                    </button>
                </div>
                <div className='mt-20'>
                    <div className='flex justify-center flex-col'>
                        <div className='text-xl lg:text-3xl flex justify-center w-full mt-5'>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                            <div className=''>WOBMART</div>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                        </div>
                        <div className='text-center text-sm mx-10 lg:mx-36 mt-14'> Once you have earned enough $WOB, head over to the $WobMart for a one of a kind web3 shopping experience stacked with legit physical and digital items.</div>
                    </div>
                </div>
                <div className='flex text-xs lg:text-base justify-center space-x-3 lg:space-x-6 py-5'>


                    <button className='lg:px-8 px-2 py-4 bg-[#242424] rounded-md whitespace-nowrap'><div className='flex flex-row '>
                        ENTER WOBMART
                    </div>
                    </button>

                    <button className='lg:px-8 px-2 py-4 bg-[#242424] rounded-md whitespace-nowrap'><div className='flex flex-row'>
                        $WOB INFO
                    </div>
                    </button>

                </div>
                <div className='mt-20'>
                    <div className='flex justify-center flex-col'>
                        <div className='text-xl lg:text-3xl flex justify-center w-full mt-5'>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                            <div className=''>PERSCRIPTION</div>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                        </div>
                        <div className='text-center text-sm mx-10 lg:mx-36 mt-14'> If you have received a prescription for a Wobbledrug in your wallet from our labs, click below to pick up your drugs at the claim site and store them for future use.</div>
                    </div>
                </div>

                <div className='flex text-base justify-center flex-col'>
                    <div className='my-10 w-full flex justify-center items-center space-x-10'>
                        <div>
                            <img src={Image_11} alt="" className='w-20 px-2'/>
                        </div>
                        <div>
                            <img src={ArrowIcon} alt="" />
                        </div>
                        <div>
                            <img src={NFTTHree} alt="" className='w-20'  />
                        </div>
                    </div>

                    <div className=' h-full flex justify-center items-center mt-4  '>
                        <button className='lg:px-8 px-2 py-4 bg-[#242424] rounded-md whitespace-nowrap text-xs lg:text-base'><div className='flex flex-row'>
                            <div>CLAIM WOBBLEDRUGS</div>
                        </div>
                        </button>
                    </div>
                </div>
                <div className='mt-20'>
                    <div className='flex justify-center flex-col'>
                        <div className='text-xl lg:text-3xl flex justify-center w-full mt-5'>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                            <div className=''>TRANSFORMATION</div>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                        </div>
                        <div className='text-center text-sm mx-10 lg:mx-36 mt-14'> Now that you have your drug, are you actually brave enough to take it and find out what it does?</div>
                        <div className='text-center text-sm mx-10 lg:mx-36 mt-4'>  If so, head to the transformation spaceship and find out what kind of Degenerate your MegaWob really is under that badass exterior.</div>
                    </div>
                </div>
                <div className='flex flex-col justify-center w-full '>

                    <div className='items-center mx-auto flex w-full justify-center my-6'>
                        <div>
                            <img src={NFTTwo} alt="" className='rounded-full w-16 ' />
                            <div className='whitespace-nowrap absolute mt-2 ml-2 -translate-x-4 text-xs'>MEGAWOB</div>
                        </div>
                        <img src={Plus} alt="" className='lg:mx-10 mx-4' />

                        <div>
                            <img src={NFTTHree} alt="" className='rounded-full w-16 ' />
                            <div className='whitespace-nowrap absolute mt-2 ml-2 -translate-x-9 text-xs'>WOBBLEDRUG</div>
                        </div>

                        <img src={ArrowIcon} alt="" className=' w-16 mx-4 lg:w-32 h-10 lg:mx-14 lg:mr-12 mt-4 ' />

                        <div>
                            <img src={NFTFourr} alt="" className='rounded-full w-16 ' />
                            <div className='whitespace-nowrap absolute mt-2 ml-2 -translate-x-5 text-xs'>DEGENWOB</div>
                        </div>
                    </div>

                    <img src={Arrow2} alt="" className='mx-auto lg:w-max  w-72' />
                    <div className='text-center text-xs -translate-y-4 '>$WOB TO SWITCH BACK</div>

                </div>
                <div className='flex text-base justify-center'>

                    <div className=' h-full flex justify-center items-center mt-8 text-xs lg:text-base '>
                        <button className='lg:px-8 px-2 py-4 bg-[#242424] rounded-md whitespace-nowrap'><div className='flex flex-row'>
                            <div>TRANSFORMATION SPACESHIP</div>
                        </div>
                        </button>

                    </div>
                </div>
                <div className='mt-20'>
                    <div className='flex justify-center flex-col'>
                        <div className='text-xl lg:text-3xl flex justify-center w-full mt-5'>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                            <div className=''>DEGEN RE-ROLL</div>
                            <img src={LogoBlackHead} alt="b" className='mx-4' />
                        </div>
                        <div className='text-center text-sm mx-10 lg:mx-36 mt-14'> Now that you are a full on Degenerate, you have a tough decision to make... </div>
                        <div className='text-center text-sm mx-10 lg:mx-36 mt-4'>  Are you happy with how Degenerate you are or do you want to try your luck at a brand new Degen in hopes of becoming more Rare? If you choose the latter, you can use our one of a kind Re-Roll system that allows you to switch out your current Degen for a new and hopefully more rare Degen by paying 0.2 SOL.
                        </div>
                    </div>
                </div>
                <div className='items-center mx-auto flex w-full justify-center my-6'>
                    <div>
                        <img src={NFTFourr} alt="" className='rounded-full w-16 ' />
                        <div className='whitespace-nowrap absolute mt-2 ml-2 -translate-x-4 text-xs'>DEGENWOB</div>
                    </div>
                    <img src={Plus} alt="" className='lg:mx-10 mx-4' />

                    <div>
                        <img src={Solana} alt="" className='rounded-full w-16 ' />
                        <div className='whitespace-nowrap absolute mt-2 ml-2 -translate-x-2 text-xs'>0.1 SOL</div>
                    </div>

                    <img src={ArrowIcon} alt="" className=' lg:w-32 h-10 lg:mx-14 lg:mr-12 mt-4 w-16 mx-3' />

                    <div>
                        <img src={NFTFive} alt="" className='rounded-full w-16 ' />
                        <div className='whitespace-nowrap absolute mt-2 ml-2 -translate-x-5 text-xs'>NEW DEGEN</div>
                    </div>

                </div>


                <div className='flex text-base justify-center mb-32'>

                    <div className=' h-full flex justify-center items-center mt-8 text-xs lg:text-base '>
                        <button className='lg:px-8 px-2 py-4 bg-[#242424] rounded-md whitespace-nowrap'>
                            <div className='flex flex-row'>
                                <div>TDEGEN RE-ROLL</div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Utilities