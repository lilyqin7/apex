import React, { useState, useEffect } from 'react';
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import topImg from '../assets/header-images/home-header-top-layer.png'
import bottomImg from '../assets/header-images/home-header-bottom-layer.png'
import Circle from '../components/Circles.jsx'
import photo from '../assets/home-image.png'

function useResponsiveHeaderHeight() {
  const [height, setHeight] = useState('300px');
  useEffect(() => {
    function handleResize() {
      setHeight(window.innerWidth >= 768 ? '600px' : '300px');
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return height;
}

function HomePage() {
  const headerHeight = useResponsiveHeaderHeight();
  return <div className="overflow-x-hidden">
      <Header
        topLayer={topImg}
        bottomLayer={bottomImg}
        pageTitle="Apex"
        headerHeight={headerHeight}
      />
        <div className="flex flex-col items-center xl:relative xl:min-h-[600px] pb-[100px]">
          <div className="-mb-5 xl:-mb-15 xl:absolute xl:left-[146px] xl:-top-[100px]">
            <Circle 
              className="w-[80vw] xl:w-[550px] xl:h-[300px]"
              color="#F0E9DD"
            >
              Apex is CMU's newest independent buggy organization, founded in 2012 by a group of friends living in the Rez on Fifth.
            </Circle>
          </div>
          <div className="-mb-5 xl:-mb-15 xl:absolute xl:left-[550px] lg:top-[0px]">
            <Circle 
              className="w-[80vw] xl:w-[700px] xl:h-[500px]"
              color="#E2D8C7"
            >
              <span className="whitespace-nowrap">We are <i>the</i></span> open-source buggy team, meaning that we don't keep any trade secrets. Our shop hours are fully open and we are always happy to share our knowledge with other teams. We build a new buggy each year, allowing us to innovate and push the boundaries with new ideas in buggy design.
            </Circle>
          </div>
          <div className="-mb-5 xl:-mb-15 xl:absolute xl:left-[50px] xl:top-[150px]">
            <Circle
              className="w-[80vw] xl:w-[550px] xl:h-[350px]"
              color="#C7BCA8"
            >
              Apex remains dedicated to our founding principles of teamwork, passion, innovation, and excitement. But above all, we're just a bunch of friends who all love buggy!
            </Circle>
          </div>
        </div>
      <div className="flex flex-col gap-y-[50px] items-center lg:px-[150px] px-[50px] pb-[80px]">
        <img src={photo} alt="Apex Team" className="w-[80vw]" />
        <h2 className="text-center">But first... what is buggy?</h2>
        <div className="text-[22px] text-center text-white">
          Buggy is a uniquely CMU activity that mixes engineering, design, and athleticism. Students build unmotorized vehicles (buggies) which are driven through a 0.84-mile course by individuals called drivers and powered by athletes who push it in a relay race.
        </div>
        <div className="text-[22px] text-center text-white font-bold">
          Here is the course:
        </div>
        <div className="w-[80vw] aspect-video mx-auto">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/TPKQenBolWY?si=C08VKVPAw2_R2bm1" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
        <div className="text-[22px] text-center text-white font-bold">
          Below is a buggy race during Carnival:
        </div>
        <div className="w-[80vw] aspect-video mx-auto">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/3oddPGM-2BQ?si=FnZScZ4JjDWZ_eLW" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
        <h2 className="text-center">So...what makes Apex special?</h2>
        <div className="flex items-center flex-col">
          <Circle 
            className="w-[80vw] xl:w-[1000px] xl:h-[300px]"
            color="#F0E9DD"
          >
            <h2 style={{fontSize: '35px', color: 'black'}}>We're open source</h2>
            <div>
              Our shop hours are open to all (including members of other buggy teams) because we want to share our love of buggy with everyone. Whether you have extensive experience with composites or have never heard the word "epoxy" before, you're welcome in our shop! We're happy to teach you everything you need to know!
            </div>
          </Circle>
          <div style={{ marginTop: '-40px' }}>
            <Circle 
              className="w-[80vw] xl:w-[1000px] xl:h-[330px]"
              color="#E2D8C7"
            >
            <h2 style={{fontSize: '35px', color: 'black'}}>We're flexible</h2>
              <div>
                There is no minimum time commitment to join Apex. We respect our members' responsibilities outside of buggy, so other than a few Raceday-related events in the spring, nothing is mandatory. You can be as involved as little or as much as you want to be (so if waking up at 4 am isn't your thing, you don't have to!). We also welcome new members throughout the year, not just at the beginning of the semester.
              </div>
            </Circle>
          </div>
          <div style={{ marginTop: '-40px' }}>
            <Circle
              className="w-[80vw] xl:w-[1000px] xl:h-[270px]"
              color="#C7BCA8"
            >
            <h2 style={{fontSize: '35px', color: 'black'}}>We're fun</h2>
              <div>
                Above all, we're in Apex because we like it! In addition to doing all things buggy, Apex also organizes regular social events for everyone to enjoy. These include movie and game nights, Late Nights at local restaurants in Pittsburgh, group study sessions, and the occasional team party.
              </div>
            </Circle>
          </div>
        </div>
        <h2 className="text-center">Sounds like your cup of tea?</h2>
        <div className="text-white text-[22px] text-center">Join our Slack and come to one of our recruitment events!</div>
      </div>
      
      <Footer/>
  </div>
}

export default HomePage;