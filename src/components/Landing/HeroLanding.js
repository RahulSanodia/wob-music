import React from 'react'

import Player from '../../images/player.png'
import Header from '../Header'
import Footer from '../Footer'

import MusicLogo from '../../images/Music_image.svg'
import TheNFTs from './TheNFTs'
import YourJourney from './YourJourney'
import Roadmap from './Roadmap'
import Utilities from './Utilities'
import Wobblebug from './Wobblebug'
import WobMusicGroup from './WobMusicGroup'

import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';





const HtmlTooltip = styled(({ className, ...props }) => (<Tooltip {...props} classes={{ popper: className }} />))
    (({ theme }) => ({ [`& .${tooltipClasses.tooltip}`]: {}, }));


function HeroLanding() {

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Header />
            <div className='flex w-full justify-center flex-col'>



                <div className='w-full flex justify-center flex-col items-center'>
                    <img src={Player} alt="logo" className=' ' />
                    <div className='text-white font-monumentExtended md:text-xl px-2 lg:text-3xl text-center'>THE FIRST TOKENIZED MUSICIAN IN HISTORY</div>
                </div>


                <div className='w-full flex justify-center items-center mt-10 lg:mt-56 flex-row '>
                    <img src={MusicLogo} alt="" />
                </div>


                <div className='w-full flex justify-center items-center mt-20 flex-row'>
                    <div className='lg:w-72 md:w-36 w-10 border border-white mr-5'></div>
                    <h1 className='text-white font-monumentExtended uppercase text-2xl md:text-3xl lg:text-4xl'>preface</h1>
                    <div className='lg:w-72 md:w-36 w-10 border border-white ml-5'></div>
                </div>

                <div className=' w-full flex items-center justify-center mt-10 flex-col text-white font-monumentExtended px-4 md:px-8 lg:px-16 '>

                    <div className='max-w-7xl w-full   bg-[#1E1E1E]  rounded-md md:px-5   pb-10 lg:text-xl '>
                        <div className='lg:pr-16 px-2 '>
                            <p className=' pt-5'>An alien, a dj, an out of this world electronic music producer, Wobblebug is so much more than an NFT project...
                            </p>
                            <p className=' pt-5'>
                                Collection of 10k utility enabled PFP's that are innovating tech and music.
                            </p>
                            <p className=' pt-5'>
                                Holding a Wobblebug is your key to accessing a private club where you will have the chance to help shape the career of an up and coming electronic music producer and DJ.
                            </p>
                            <p className=' pt-5'>
                                The community will have the opportunity to help the WOB team and vote to make decisions on things like music, art, content, ideas and so much more.
                            </p>

                        </div>
                    </div>

                    <h1 className='text-white  uppercase text-lg md:text-2xl lg:text-3xl w-full md:ml-16 lg:ml-28 mt-10 '>
                        BENEFITS THAT INCREASE OVER TIME:
                    </h1>

                    <p className='px-4 lg:px-10 lg:text-xl mt-10 lg:ml-6'>
                        By holding a MegaWob or Degen and becoming a member of the Wob Mob you will have exclusive access to the following:
                    </p>

                    <p className='pt-4 lg:pr-60 px-4 lg:px-10 list-disc mt-2 lg:text-xl lg:ml-6 '>
                        <li>
                            IRL Events, Metaverse Events,
                        </li>
                        <li>
                            Music Releases,
                        </li>
                        <li>
                            Collaboration opportunities for music, art, content creation.
                        </li>
                        <li >
                            Opportunity to earn $wob and purchase physical and digital {"\n"} {"  "}items from the $wobmart
                        </li>
                    </p>

                </div>

                <TheNFTs />
                <YourJourney />
                <Roadmap />
                <Utilities />
                <Wobblebug />
                <WobMusicGroup />
                
                <div className='mb-20'></div>
                <Footer />
            </div>
        </>
    )
}

export default HeroLanding