import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import blackLogo from '../assets/logo-black.png';
import searchIcon from '../assets/search-icon.png';

function Header({topLayer, bottomLayer, pageTitle}) {
    const [menuOpen, setMenuOpen] = useState(false);

    return <div className="relative w-full mb-36">
        <img src={bottomLayer} alt="Bottom Layer" className="absolute top-0 left-0 w-full z-0 pointer-events-none h-[420px]" />
        <img src={topLayer} alt="Top Layer" className="absolute top-0 left-0 w-full z-0 pointer-events-none h-[320px]" />
        <div className="relative z-10 flex flex-col gap-y-[40px]">
            <div className="px-[40px] py-[9px] flex items-center justify-between text-white">
                <Link to='/'>
                    <img src={logo} alt="Apex Logo" className="h-[75px] w-[75px]" />
                </Link>
                <button 
                    className="lg:hidden flex flex-col justify-center items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
                </button>
                <div className="hidden lg:flex flex-row space-x-[30px] text-[18px]">
                    <Link to='/meettheteam'>Meet the Team</Link>
                    <Link to='/meetthebuggies'>Meet the Buggies</Link>
                    <Link to='/getinvolved'>Get Involved</Link>
                    <Link to='/events'>Upcoming Events</Link>
                    {/* <img src={searchIcon} alt="Search Icon" className="h-[20px] w-[20px]" /> */}
                </div>
            </div>
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center lg:hidden">
                    <button 
                        className="absolute top-7 right-10"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                    <div className="flex flex-col items-center justify-center gap-y-4 py-4 text-[18px] w-full h-full bg-[#F0E9DD]">
                        <Link to='/' onClick={() => setMenuOpen(false)}>
                            <img src={blackLogo} alt="Apex Logo" className="h-[75px] w-[75px]" />
                        </Link>
                        <Link to='/meettheteam' onClick={() => setMenuOpen(false)}>Meet the Team</Link>
                        <Link to='/meetthebuggies' onClick={() => setMenuOpen(false)}>Meet the Buggies</Link>
                        <Link to='/getinvolved' onClick={() => setMenuOpen(false)}>Get Involved</Link>
                        <Link to='/events' onClick={() => setMenuOpen(false)}>Upcoming Events</Link>
                    </div> 
                </div>
            )}
            <h1 className="text-center md:text-[110px] text-[70px] px-2 pb-20 md:pb-24 leading-16">{pageTitle}</h1>
        </div>
    </div>
}

export default Header