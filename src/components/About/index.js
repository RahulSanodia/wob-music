import React from 'react'
import MusicLogo from '../../images/Music_image.svg'
import Header from '../Header'
import Footer from '../Footer'

function Index() {
    return (
        <>
            <Header />
            <div className='text-white font-monumentExtended'>

                <div className=' w-full flex justify-center flex-col lg:px-10 px-5  items-center  mt-8'>
                    <div className='w-full flex justify-center items-center mt-8 flex-row'>
                        <img src={MusicLogo} alt="MusicLogo" />
                    </div>

                    <div className='w-full flex justify-center items-center mt-8 lg:mt-14 flex-row '>
                        <div className='lg:w-72 md:w-32 w-12  border border-white mr-5'></div>
                        <h1 className=' uppercase md:text-2xl text-xl lg:text-3xl'>about</h1>
                        <div className='lg:w-72 md:w-32 w-12  border border-white ml-5'></div>
                    </div>

                    <div className='max-w-7xl w-full  font-monumentExtended text-base lg:text-2xl px lg:px-10 pb-10  mt-12'>
                        <p className=' lg:pt-5 '>What started as a small collection on ETH, Wobblebug has developed into an innovative cross chain collection that has moved to SOL... now geared on innovating tech and music.

                        </p>
                        <p className=' pt-5 lg:px-20 mt-10'>Wobblebug has developed into a full on web3 ecosystem consisting of multiple NFTs, $WOB a first of its kind utility token, the $wobmart one of the most smooth shopping experiences in web3, and a first of its kind transformation system allowing holders to switch back and forth between 2 NFT's.

                        </p>
                    </div>
                    <div className='flex justify-center my-5'>
                        <button className='bg-[#242424] px-10 py-2 rounded-md'>LEARN MORE</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Index