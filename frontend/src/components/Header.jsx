import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import blackLogo from '../assets/logo-black.png';
import searchIcon from '../assets/search-icon.png';

function Header({topLayer, bottomLayer, pageTitle, headerHeight}) {
    const [menuOpen, setMenuOpen] = useState(false);

    return <div className="relative w-full" style={headerHeight ? { height: headerHeight } : {}}>
        <img src={bottomLayer} alt="Bottom Layer" className="absolute top-0 left-0 w-full object-cover z-0 pointer-events-none" />
        <img src={topLayer} alt="Top Layer" className="absolute top-0 left-0 w-full object-cover z-0 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-y-[40px]">
            <div className="px-[64px] py-[9px] flex items-center justify-between text-white">
                <Link to='/'>
                    <img src={logo} alt="Apex Logo" className="h-[75px] w-[75px]" />
                </Link>
                <button 
                    className="lg:hidden flex flex-col justify-center items-center"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="block w-8 h-1 bg-white mb-1 rounded"></span>
                    <span className="block w-8 h-1 bg-white mb-1 rounded"></span>
                    <span className="block w-8 h-1 bg-white rounded"></span>
                </button>
                <div className="hidden lg:flex flex-row space-x-[30px] text-[18px]">
                    <Link to='/meettheteam'>Meet the Team</Link>
                    <Link to='/meetthebuggies'>Meet the Buggies</Link>
                    <Link to='/getinvolved'>Ways to Get Involved</Link>
                    <Link to='/events'>Upcoming Events</Link>
                    {/* <img src={searchIcon} alt="Search Icon" className="h-[20px] w-[20px]" /> */}
                </div>
            </div>
            {menuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen z-50 flex justify-center items-center lg:hidden">
                    <button 
                        className="absolute top-6 right-6 text-4xl text-black"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                    <div className="flex flex-col items-center justify-center gap-y-4 py-4 text-[18px] w-full h-full bg-[#F0E9DD]">
                        <Link to='/' onClick={() => setMenuOpen(false)}>
                            <img src={blackLogo} alt="Apex Logo" className="h-[75px] w-[75px]" />
                        </Link>
                        <Link to='/meettheteam' onClick={() => setMenuOpen(false)}>Meet the Team</Link>
                        <Link to='/meetthebuggies' onClick={() => setMenuOpen(false)}>Meet the Buggies</Link>
                        <Link to='/getinvolved' onClick={() => setMenuOpen(false)}>Ways to Get Involved</Link>
                        <Link to='/events' onClick={() => setMenuOpen(false)}>Upcoming Events</Link>
                    </div> 
                </div>
            )}
            <h1 className="text-center">{pageTitle}</h1>
        </div>
    </div>
}

export default Header