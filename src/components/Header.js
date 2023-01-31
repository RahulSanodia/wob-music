import React from 'react'
import Discord from '../icons/discord.svg'
import GithubIcon from '../icons/github.svg'
import TwitterLogo from '../icons/TwitterIcon.svg'
import InstagramFrame from '../icons/instagram.svg'
import logo from '../images/LOGO_WOBBLEB.png'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material'
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { Link } from 'react-router-dom'
import './HeaderCss.css';


const HtmlTooltip = styled(({ className, ...props }) => (<Tooltip {...props} classes={{ popper: className }} />))
    (({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
        },
    }));

function Header() {

    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        if(open === true){
            setOpen(false);
        }else{
            setOpen(true);
        }
        
    };

    return (
        
        <div className='w-full max-w-7xl px-4 flex justify-center items-center mx-auto'>

            <div className='flex w-full justify-center  flex-col m-auto items-center'>
                <div className='flex flex-col max-w-screen-2xl justify-center w-full '>
                    <div className='flex text-white items-center justify-between'>
                        <div className='flex text-white items-center h-20  '>
                            <Link to="/" className='flex items-center'>
                                <img src={logo} alt="logo" className='md:w-16 md:h-16 w-12 pl-2' />
                                <div className='flex text-center w-full'>
                                    <h1 className='font-monumentExtended ml-2 lg:ml-4 md:text-xl lg:text-2xl'>WOBBLEBUG</h1>
                                </div>
                            </Link>
                            <div className='lg:flex hidden'>
                                <img src={TwitterLogo} alt="logo" className='ml-4 w-5 ' />
                                <img src={InstagramFrame} alt="logo" className='ml-3 w-5 ' />
                                <img src={Discord} alt="logo" className=' ml-3 w-5' />
                                <img src={GithubIcon} alt="logo" className=' ml-3 w-5' />
                                <h1 className='font-monumentExtended ml-4 text-base'>AwHb..DNNT</h1>
                            </div>
                        </div>

                        <HtmlTooltip
                            title={
                                <div className='text-white flex absolute  overflow-hidden -translate-x-10 rounded-lg  select-none  border border-gray-600'>
                                    <div className=' space-y-1 text-lg font-monumentExtended bg-black px-5 py-5 
                                    '>
                                        <Link to="/lore">
                                            <h1 className='cursor-pointer'>LORE</h1>
                                        </Link>
                                        <h1 className='cursor-pointer'>WOBMART</h1>
                                        <h1 className='cursor-pointer'>STAKING</h1>
                                        <h1 className='cursor-pointer'>TRANSFORM</h1>
                                        <h1 className='cursor-pointer'>MUSIC GROUP</h1>
                                        <div className=''>
                                            <Link to="/team">
                                                <h1 className='mt-8 cursor-pointer'>TEAM</h1>
                                            </Link>
                                            <Link to='/faq'>
                                                <h1 className='cursor-pointer'>FAQ</h1>
                                            </Link><Link to='/about'>
                                                <h1 className='cursor-pointer'>ABOUT</h1>
                                            </Link>
                                        </div>
                                    </div>
                                </div>}

                            leaveDelay={200}
                            placement="bottom-start"
                            onClose={handleTooltipClose}

                        >

                            <button className='md:w-36 w-20 lg:flex hidden'>
                                <h1 className='font-monumentExtended  md:ml-4 lg:text-2xl '>MENU</h1>
                            </button>
                        </HtmlTooltip>

                        <ClickAwayListener onClickAway={handleTooltipClose} >
                            <div className='flex lg:hidden'>
                                <Tooltip
                                    PopperProps={{
                                        disablePortal: true,
                                    }}
                                    onClose={handleTooltipClose}
                                    open={open}
                                    disableFocusListener
                                    disableHoverListener
                                    disableTouchListener
                                    title={
                                        <div className='text-white flex absolute -translate-x-40 bg-black  py-2 rounded-lg   border border-gray-600'>
                                            <div className=' space-y-1 text-lg font-monumentExtended  px-4'>
                                                <Link to="/lore">
                                                    <h1 className='cursor-pointer'>LORE</h1>
                                                </Link>
                                                <h1 className='cursor-pointer'>WOBMART</h1>
                                                <h1 className='cursor-pointer'>STAKING</h1>
                                                <h1 className='cursor-pointer'>TRANSFORM</h1>
                                                <h1 className='cursor-pointer'>MUSIC GROUP</h1>
                                                <div className=''>
                                                    <Link to="/team">
                                                        <h1 className='mt-8 cursor-pointer'>TEAM</h1>
                                                    </Link>
                                                    <Link to='/faq'>
                                                        <h1 className='cursor-pointer'>FAQ</h1>
                                                    </Link><Link to='/about'>
                                                        <h1 className='cursor-pointer'>ABOUT</h1>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>}
                                    leaveDelay={200}
                                >
                                    <button className='md:w-36 select-none w-20 flex lg:hidden' onClick={handleTooltipOpen}>
                                        <h1 className='font-monumentExtended  md:ml-4 lg:text-2xl select-none'>MENU</h1>
                                    </button>

                                </Tooltip>
                            </div>
                        </ClickAwayListener>

                    </div>
                </div>

                {/* <div className='mt-40 mb-10'>
                <img src={logo} alt="" className='mt-3 ml-6' />
                <h3 className='mt-4 pl-4 text-white font-monumentExtended'>Copyright © WOBBLEBUG 2022</h3>
            </div> */}
            </div>

        </div>


    )
}

export default Header