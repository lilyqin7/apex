import logo from '../assets/logo.png';
import slackIcon from '../assets/slack-icon.png';
import instagramIcon from '../assets/instagram-icon.png';

function Footer() {
    return <div className="bg-[#FF0000] w-screen h-[222px] px-[56px] py-[32px] flex items-center justify-center text-white">
        <div className="flex flex-row space-x-[86.8px]">
            <img src={logo} alt="Apex Logo" className="h-[176px] w-[167.2px]" />
            <div className="flex flex-row space-x-[70px]">
                <div className="flex flex-col space-y-[13px]">
                    <div className="text-[26px]">Contact Us</div>
                    <div className="text-[18px]">cmu.apex@gmail.com</div>
                </div>
                <div className="flex flex-col space-y-[13px]">
                    <div className="text-[26px]">Join our Slack!</div>
                    <img src={slackIcon} alt="Slack Icon" className="h-[50px] w-[50px]"/>
                </div>
                <div className="flex flex-col space-y-[13px]">
                    <div className="text-[26px]">Follow us on Instagram!</div>
                    <img src={instagramIcon} alt="Instagram Icon" className="h-[50px] w-[50px]"/>
                </div>
            </div>
        </div>
    </div>
}

export default Footer