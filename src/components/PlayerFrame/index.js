import React from 'react'
import WhiteHeadLogo from '../../icons/LOGO_HEAD_WHITE_WOBBLEBUG_2.png'
import Play from '../../icons/play.svg'
import NextFrame from '../../icons/NextFrame.svg'
import PrevFrame from '../../icons/PrevFrame.svg'
import HomeFrame from '../../icons/HomeFrame.svg'

function Index() {
  return (
    <div className='w-full h-full'>
        <div className='w-fit rounded-full bg-[#D92F86] m-5 p-2'>
            <img src={HomeFrame} alt=' ' />
        </div>
        <div className='text-2xl text-white font-monumentExtended w-full text-center -translate-y-5'>
        WOB MUSIC PLAYER
        </div>
        <div className='flex w-full justify-center text-white absolute top-1/2 items-center'>
            <div>
            SONG PLAYING
            </div>
            <div className='w-40'>
                <img src={WhiteHeadLogo} alt='' />
            </div>
            <div>
            SONG PLAYING
            </div>
        </div>
    </div>
  )
}

export default Index