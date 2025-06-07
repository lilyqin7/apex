import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import topImg from '../assets/header-images/involved-header-layer-top.png'
import bottomImg from '../assets/header-images/involved-header-layer-bottom.png'
import mechsImg from '../assets/mechs.png'
import pushersImg from '../assets/pushers.png'
import driversImg from '../assets/drivers.png'

function InvolvedPage() {
  return (
    <div className="overflow-x-hidden">
        <Header
            topLayer={topImg}
            bottomLayer={bottomImg}
            pageTitle="Ways to Get Involved"
            headerHeight="607px"
        />
        <div className="px-[71px] text-center text-white pb-[80px]">
            <div className="pb-[80px] text-[22px]">
                While there are three traditional roles in buggy (mechanics, pushers, and drivers), there are many other ways for you to get involved! We’re always in need of flaggers (people who stand near the chute with a flag and an epic view) and timers, and you’re always welcome to just come to social events!
            </div>
            <div className="flex flex-col gap-y-[50px]">
                <div className="flex flex-row gap-x-[60px]">
                    <div className="flex flex-col">
                        <h2>Mechanics</h2>
                        <div className="text-[22px]">
                            Mechanics are the glue that holds buggy teams together. They are the ones who keep existing buggies up to spec and ready for every practice, allowing us to race quickly and safely. Apex mechanics also design and build a new buggy every year, allowing them to do a lot of hands-on work. Although they work with many complex processes, becoming a mechanic requires no special skills or experiences other than a willingness to try new things!
                        </div>
                    </div>
                    <img src={mechsImg} alt="Mechanics" className="w-[450px] h-[422px]"/>
                </div>
                <div className="flex flex-row gap-x-[60px]">
                    <img src={pushersImg} alt="Pushers" className="w-[450px] h-[408px]"/>
                    <div className="flex flex-col">
                        <h2>Pushers</h2>
                        <div className="text-[22px]">
                            Pushers are the runners of the buggy relay race. They give buggies their power in the uphill and flat portions of the buggy course. During practices, they refine their pushing technique to maximize speed on each of the five hills. On Raceday, their skills make the biggest difference in how fast we race. Throughout the year, pushers also have fun and stay in shape by playing intramural sports and doing group workouts (alongside non-pushers)!
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-x-[60px]">
                    <div className="flex flex-col">
                        <h2>Drivers</h2>
                        <div className="text-[22px]">
                            Drivers lie inside buggies and steer them through the course. Like pushers, they practice throughout the year to navigate the course as efficiently as possible. Because they must fit inside a buggy, most drivers are relatively small individuals. They get the rare and thrilling experience of traveling at speeds of up to 40 mph while lying just inches above the road!
                        </div>
                    </div>
                    <img src={driversImg} alt="Drivers" className="w-[450px] h-[390px]"/>
                </div>
            </div>
      </div>
      <Footer/>
    </div>
  );
}

export default InvolvedPage;