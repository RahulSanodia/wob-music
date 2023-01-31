import React from 'react'
import MusicLogo from '../../images/Music_image.svg'
import LOGOHead from '../../icons/LOGO_HEAD_RED_WOBBLEBUG.png'

function Roadmap() {
    return (
        <div className='text-white  font-monumentExtended w-full lg:px-16 mt-20'>
            <div className=' mx-5 pb-6'>
                <div className='w-full flex justify-center items-center mt-20 flex-row'>
                    <img src={MusicLogo} alt="" />
                </div>
                <div className='w-full flex justify-center items-center mt-10 flex-row'>
                    <div className='lg:w-72 md:w-32 w-12 border border-white mr-5'></div>
                    <h1 className=' uppercase text-3xl'>Roadmap</h1>
                    <div className='lg:w-72 md:w-32 w-12 border border-white ml-5'></div>
                </div>
            </div>

            <div className=' w-full   bg-[#242424] bg-opacity-40 rounded-md  text-white pb-4 flex flex-col justify-center'>
                <div className='flex w-full justify-center '>

                    <div className=' border border-white mx-36 lg:translate-y-36 max-w-5xl w-full rotate-90 lg:rotate-0 translate-y-96'></div>
                </div>

                <div className='flex lg:flex-row my-20 justify-center text-xs text-center z-10 flex-col items-center'>
                    <div className=' border border-white mx-36 lg:translate-y-36 max-w-5xl w-full rotate-90 lg:rotate-0 translate-y-96 lg:hidden'>
                    </div>

                    <div className='mx-10 my-16 lg:my-0 z-20'>
                        <img src={LOGOHead} alt="LOGOHead" />
                        <div className='absolute lg:-translate-x-10 my-3 lg:translate-y-0 -translate-y-10 translate-x-24 text-[10px] lg:text-xs'>
                            THE INVASION BEGINS
                        </div>

                    </div>

                    <div className=' border border-white mx-36 lg:translate-y-36 max-w-5xl w-full rotate-90 lg:rotate-0 translate-y-96 lg:hidden'>
                    </div>

                    <div className='mx-10 my-16 lg:my-0 z-20'>
                        <div className='absolute -mt-5 lg:-translate-x-0 my-3 lg:translate-y-0 translate-y-32 -translate-x-24'>
                            WOB UTILITY</div>
                        <img src={LOGOHead} alt="LOGOHead" />

                    </div>

                    <div className=' border border-white mx-36 lg:translate-y-36 max-w-5xl w-full rotate-90 lg:rotate-0 translate-y-96 lg:hidden'>
                    </div>

                    <div className='mx-10 my-16 lg:my-0 z-20'>
                        <img src={LOGOHead} alt="LOGOHead" />
                        <div className='absolute my-3 lg:-translate-x-2  lg:translate-y-0 -translate-y-10 translate-x-24'
                        >RELEASE MUSIC</div>

                    </div>

                    <div className=' border border-white mx-36 lg:translate-y-36 max-w-5xl w-full rotate-90 lg:rotate-0 translate-y-96 lg:hidden'>
                    </div>

                    <div className='mx-10 my-16 lg:my-0 z-20'>
                        <div className='absolute -mt-5 lg:translate-x-3 my-3 lg:translate-y-0 translate-y-32 -translate-x-20'>
                            WOBVERSE</div>
                        <img src={LOGOHead} alt="LOGOHead" />

                    </div>
                    <div className='mx-10 my-16 lg:my-0 z-20'>
                        <img src={LOGOHead} alt="LOGOHead" />
                        <div className='absolute my-3 lg:-translate-x-2 lg:translate-y-0 -translate-y-10 translate-x-24'>WOB FEST</div>

                    </div>
                    <div className='mx-10 my-16 lg:my-0 z-20'>
                        <div className='absolute -mt-5 lg:translate-x-6  my-3 lg:translate-y-0 translate-y-32 -translate-x-12'>FUTURE</div>
                        <img src={LOGOHead} alt="LOGOHead" />

                    </div>
                </div>


                <div className='text-xl text-center mt-10 px-2'>
                    Wobblebug is the first of many Web3 musicians that will invade the industry.
                </div>
                <div className='text-xs text-center my-6 px-2'>
                    Each WOB you own brings you closer to the forefront of music tech innovation.
                </div>


            </div>

        </div>

    )
}

export default Roadmap