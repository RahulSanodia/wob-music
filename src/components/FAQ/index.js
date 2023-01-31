import React from 'react'
import MusicLogo from '../../images/Music_image.svg'
import ArrowUp from '../../icons/Arrow_32.svg'

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Header from '../Header';
import Footer from '../Footer'

function Index() {

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            <Header />
            <div className='text-white font-monumentExtended'>

                <div className=' w-full flex justify-center flex-col lg:px-10 items-center  mt-8'>
                    <div className='w-full flex justify-center items-center mt-8 flex-row'>
                        <img src={MusicLogo} alt="MusicLogo" />
                    </div>

                    <div className='w-full flex justify-center items-center mt-14 flex-row '>
                        <div className='lg:w-72 md:w-32 w-12 border border-white mr-5'></div>
                        <h1 className=' uppercase text-3xl'>FAQ</h1>
                        <div className='lg:w-72 md:w-32 w-12 border border-white ml-5'></div>
                    </div>



                </div>


                <div className='md:text-sm  md:mt-14 mt-8  lg:mt-24 flex justify-between w-full lg:px-24 mx-auto '>
                    <div className='w-full flex justify-center flex-col px-3'>
                        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary
                                expandIcon={<img src={ArrowUp} alt="" />}
                                id="panel1bh-header"
                                sx={{ backgroundColor: "black" }}>
                                <Typography sx={{ flexShrink: 0, backgroundColor: "black" }}>
                                    <div className='text-white font-monumentExtended capitalize '>
                                        What is Wobblebug? </div>
                                        <div className='w-full border'>
                                    </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{ backgroundColor: "black" }}>
                                <Typography>
                                    <div className='bg-black text-white font-monumentExtended'>
                                        Wobblebug is the alter-ego of Wuki, a Grammy nominated DJ and Producer who has played the worlds biggest festivals like Ultra, EDC, and (other show). Wobblebug is the first ever tokenized Grammy nominated DJ and producer owned through decentralized means. MegaWob NFTs are your ownership token into Wobblebugs Career.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>



                        <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
                            <AccordionSummary
                                expandIcon={<img src={ArrowUp} alt="" />}
                                id="panel1bh-header2"
                                sx={{ backgroundColor: "black" }}>
                                <Typography sx={{ flexShrink: 0, backgroundColor: "black" }}>
                                    <div className='text-white font-monumentExtended capitalize flex flex-col lg:flex-row '>
                                        Where can I get <div className=' lg:ml-2'>
                                        Wobblebug NFTs?
                                        </div>
                                    </div>
                                    <div className='w-full border'>
                                    </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{ backgroundColor: "black" }}>
                                <Typography>
                                    <div className='bg-black text-white font-monumentExtended'>
                                        You can start your journey by purchasing a Wobblebug NFT on Magic Eden.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel125'} onChange={handleChange('panel125')}>
                            <AccordionSummary
                                expandIcon={<img src={ArrowUp} alt="" />}
                                id="panel1bh-header2"
                                sx={{ backgroundColor: "black" }}>
                                <Typography sx={{ flexShrink: 0, backgroundColor: "black" }}>
                                    <div className='text-white font-monumentExtended capitalize flex flex-col lg:flex-row'>
                                        What is the Utility of
                                        <div className=' lg:ml-2'>
                                       holding a Wobblebug NFT?
                                        </div>
                                    </div>
                                    <div className='w-full border'>
                                    </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{ backgroundColor: "black" }}>
                                <Typography>
                                    <div className='bg-black text-white font-monumentExtended'>
                                        Community members will be able to acquire and stake their MegaWob NFTs for $WOB, the utility token of the Wobblebug ecosystem. With $WOB members will be able to acquire things like Wobblebug merch, exclusive music and stems made by Wobblebug, tickets to live events and major festivals, loot boxes, and much more.

                                        In addition to earning and utilizing the $WOB Utility token, when you hold a MegaWob NFT you become part of the most exclusive club of musicians and music aficionados on the blockchain. Wobblebug treats his disciples as family and rewards them like his own. Becoming a part of this club will allow you early access to shows Wobblebug performs in, potential VIP experiences at larger music events, inter group alpha, and much much more.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel124'} onChange={handleChange('panel124')}>
                            <AccordionSummary
                                expandIcon={<img src={ArrowUp} alt="" />}
                                id="panel1bh-header2"
                                sx={{ backgroundColor: "black" }}>
                                <Typography sx={{ flexShrink: 0, backgroundColor: "black" }}>
                                    <div className='text-white font-monumentExtended capitalize flex flex-col lg:flex-row'>

                                            How do I Stake my
                                            <div className=' lg:ml-2'>
                                            Wobblebug NFT?
                                        </div>
                                    </div>
                                    <div className='w-full border'>
                                    </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{ backgroundColor: "black" }}>
                                <Typography>
                                    <div className='bg-black text-white font-monumentExtended'>
                                        Stake your Wobblebug by visiting our staking site here.For more information on staking, checkout our Wobpaper

                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion expanded={expanded === 'panel123'} onChange={handleChange('panel123')}>
                            <AccordionSummary
                                expandIcon={<img src={ArrowUp} alt="" />}
                                id="panel1bh-header2"
                                sx={{ backgroundColor: "black" }}>
                                <Typography sx={{ flexShrink: 0, backgroundColor: "black" }}>
                                    <div className='text-white font-monumentExtended capitalize '>
                                        What is a Re-Roll?
                                    </div>
                                    <div className='w-full border'>
                                    </div>
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{ backgroundColor: "black" }}>
                                <Typography>
                                    <div className='bg-black text-white font-monumentExtended'>
                                        The Wobblebug Re-Roll system is an innovative system created by the Wobblebug team to let transformed MegaWob holders switch their NFTs to a fresh new look.
                                        For more information on Re-Roll and transformation, checkout our Wobpaper.
                                    </div>
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}

export default Index