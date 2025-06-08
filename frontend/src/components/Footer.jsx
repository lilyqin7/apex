import logo from '../assets/logo.png';
import slackIcon from '../assets/slack-icon.png';
import instagramIcon from '../assets/instagram-icon.png';

function Footer() {
    return <div className="bg-[#FF0000] w-screen px-[20px] py-[20px] lg:px-[56px] lg:py-[32px] flex items-center justify-between text-white">
        <div className="flex flex-row justify-between w-full">
            <img src={logo} alt="Apex Logo" className="hidden lg:block h-[15vw] lg:h-[176px] lg:w-[167.2px]" />
            <div className="flex flex-col space-y-[30px] lg:flex-row lg:space-x-[70px]">
                <div className="flex flex-col space-y-[13px]">
                    <div className="text-[18px] md:text-[26px]">Contact Us</div>
                    <div className="text-[12px] md:text-[18px]">cmu.apex@gmail.com</div>
                </div>
                <div className="flex flex-row space-x-[13px] lg:flex-col lg:space-y-[13px]">
                    <div className="text-[18px] md:text-[26px]">Join our Slack!</div>
                    {/* REPLACE THE SLACK LINK WHEN IT EXPIRES!!! */}
                    <a href="https://join.slack.com/t/apexbuggy/shared_invite/zt-367fbv1ck-K53JHZifaUMcK~1ZAIPwZg" target="_blank" rel="noopener noreferrer">
                        <img src={slackIcon} alt="Slack Icon" className="h-[50px] w-[50px]"/>
                    </a>
                </div>
                <div className="flex flex-row space-x-[13px] lg:flex-col lg:space-y-[13px]">
                    <div className="text-[18px] md:text-[26px]">Follow us on Instagram!</div>
                    <a href="https://www.instagram.com/apexbuggy/" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram Icon" className="h-[50px] w-[50px]"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
}

export default Footer