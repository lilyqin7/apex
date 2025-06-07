import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import searchIcon from '../assets/search-icon.png';

function Header({topLayer, bottomLayer, pageTitle, headerHeight}) {
    return <div className="relative w-full" style={headerHeight ? { height: headerHeight } : {}}>
        <img src={bottomLayer} alt="Bottom Layer" className="absolute top-0 left-0 w-full object-cover z-0 pointer-events-none" />
        <img src={topLayer} alt="Top Layer" className="absolute top-0 left-0 w-full object-cover z-0 pointer-events-none" />
        <div className="relative z-10 flex flex-col gap-y-[40px]">
            <div className="px-[64px] py-[9px] flex items-center justify-between text-white">
                <Link to='/'>
                    <img src={logo} alt="Apex Logo" className="h-[75px] w-[75px]" />
                </Link>
                <div className="flex flex-row space-x-[30px] text-[18px]">
                    <Link to='/meettheteam'>Meet the Team</Link>
                    <Link to='/meetthebuggies'>Meet the Buggies</Link>
                    <Link to='/getinvolved'>Ways to Get Involved</Link>
                    <Link to='/events'>Upcoming Events</Link>
                    {/* <img src={searchIcon} alt="Search Icon" className="h-[20px] w-[20px]" /> */}
                </div>
            </div>
            <h1 className="text-center">{pageTitle}</h1>
        </div>
    </div>
}

export default Header