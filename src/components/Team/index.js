import React from 'react'
import MusicLogo from '../../images/Music_image.svg'
import LOGOHead from '../../icons/LOGO_HEAD_RED_WOBBLEBUG.png'
import InstaIcon from '../../icons/instagram_icon.png'
import TickTokIcon from '../../icons/ticktok_icon.png'
import TwitterIcon from '../../icons/twitterIcon.png'
import Header from '../Header'
import Footer from '../Footer'

function Index() {
    return (
        <>
            <Header />
            <div className=' w-full flex justify-center flex-col lg:px-10 items-center  text-white font-monumentExtended'>
                <div className='w-full flex justify-center items-center mt-8 flex-row'>
                    <img src={MusicLogo} alt="" />
                </div>

                <div className='w-full flex justify-center items-center mt-20 flex-row '>
                    <div className='w-72 border border-white mr-5'></div>
                    <h1 className=' uppercase text-3xl'>TEAM</h1>
                    <div className='w-72 border border-white ml-5'></div>
                </div>

                <div className='flex space-x-4 flex-wrap lg:flex-nowrap justify-center'>
        

                    <div className='max-w-7xl   pb-10  mt-12 flex justify-center'>
                        <div className='border rounded-3xl w-52  h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Wuki</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Creator</div>
                            <div className='text-center text-[11px] mt-4'>Grammy nominated DJ and producer.</div>
                            <div className='text-center text-[11px] mt-4'>International Touring musician & crypto/NFT connoisseur.</div>
                            <div className='w-full flex justify-center items-center mt-4 h-8'>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl   pb-10  mt-12 flex justify-center self-end'>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Bert</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>3D Art Director</div>
                            <div className='text-center text-[11px] mt-4'>Senior 3D Artist and CG Generalist with experience working professionally in multiple industries.</div>
                            <div className='w-full flex justify-center items-center mt-8 h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>

                        </div>
                    </div>
                    <div className='max-w-7xl  pb-10  mt-12 flex justify-center'>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Rawtek</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Creative</div>
                            <div className='text-center text-[11px] mt-4'>Music Producer & International Touring DJ.</div>
                            <div className='text-center text-[11px] mt-4'>Illustrator & Concept Artist.</div>
                            <div className='w-full flex justify-center items-center mt-8 h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl   pb-10  mt-12 flex justify-center'>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Christy</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Project Manager</div>
                            <div className='text-center text-[11px] mt-4'>Political shill turned crypto / music shill.</div>
                            <div className='text-center text-[11px] mt-4'>Rebel Society.</div>
                            <div className='w-full flex justify-center items-center mt-12 h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl   pb-10  mt-12 lg:flex justify-center hidden '>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Rambo</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Development</div>
                            <div className='text-center text-[11px] mt-4'>Project Manager and Blockchain developer</div>
                            <div className='text-center text-[11px] mt-4'>Crypto since 2017</div>
                            <div className='w-full flex justify-center items-center mt-12 h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>
                        </div>
                    </div>
                </div>


                <div className='flex space-x-4 flex-wrap lg:flex-nowrap justify-center'>

                    <div className='max-w-7xl   pb-10  mt-12 flex justify-center lg:hidden '>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Rambo</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Development</div>
                            <div className='text-center text-[11px] mt-4'>Project Manager and Blockchain developer</div>
                            <div className='text-center text-[11px] mt-4'>Crypto since 2017</div>
                            <div className='w-full flex justify-center items-center mt-12 h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>
                        </div>
                    </div>


                    <div className='max-w-7xl  pb-10  mt-12 flex justify-center'>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Hayden</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Advisor</div>
                            <div className='text-center text-[11px] mt-4'>Visual Artist & NFT community consultant.</div>
                            <div className='text-center text-[11px] mt-4'>DeFi Expert.</div>
                            <div className='w-full flex justify-center items-center mt-12 h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TwitterIcon} alt="InstaIcon" className='mx-2 mt-2' />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl  pb-10  mt-12 flex justify-center'>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Ryan</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Music Manager</div>
                            <div className='text-center text-[11px] mt-4'>Represents multiple Grammy nominated artists.</div>
                            <div className='text-center text-[11px] mt-4'>Handling strategic partnerships and big picture planning.</div>
                            <div className='w-full flex justify-center items-center  h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl   pb-10  mt-12 flex justify-center'>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Wiens</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Marketing</div>
                            <div className='text-center text-[11px] mt-4'>&10M E-commerce founder and marketeer.</div>
                            <div className='text-center text-[11px] mt-4'>Crypto since 2017.</div>
                            <div className='w-full flex justify-center items-center mt-12 h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl   pb-10  mt-12 flex justify-center'>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Zach</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Community Manager</div>
                            <div className='text-center text-[11px] mt-4'>Senior community manager for multiple top NFT projects.</div>
                            <div className='text-center text-[11px] mt-4'>Crypto since 2017.</div>
                            <div className='w-full flex justify-center items-center mt-8 h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>
                        </div>
                    </div>
                    <div className='max-w-7xl   pb-10  mt-12 flex justify-center'>
                        <div className='border rounded-3xl w-52 h-96'>
                            <img src={LOGOHead} alt="" className='w-full px-12 mt-6' />
                            <div className='text-center mt-4 '>Dwoopy</div>
                            <div className='text-center text-xs mt-2 text-[#FFEBB9]'>Development</div>
                            <div className='text-center text-[11px] mt-4'>Experienced blockchain developer.</div>
                            <div className='text-center text-[11px] mt-4'>Your friendly neighbourhood Boogle.</div>
                            <div className='w-full flex justify-center items-center mt-8 h-8 '>
                                <img src={InstaIcon} alt="InstaIcon" className='mt-2' />
                                <img src={TickTokIcon} alt="InstaIcon" className='mx-2' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index