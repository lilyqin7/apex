import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import topImg from '../assets/header-images/home-header-top-layer.png'
import bottomImg from '../assets/header-images/home-header-bottom-layer.png'
import Circle from '../components/Circles.jsx'
import photo from '../assets/home-image.png'
// import course from '../assets/course.png'

function HomePage() {
  return <div className="overflow-x-hidden">
      <Header
        topLayer={topImg}
        bottomLayer={bottomImg}
        pageTitle="Apex"
        headerHeight="600px"
      />
      <div className="pb-[40px]">
        <div style={{marginLeft: '146px', marginTop: '-100px'}}>
          <Circle width="550px" height="300px" color="#F0E9DD">
            Apex is CMU's newest independent buggy organization, founded in 2012 by a group of friends living in the Rez on Fifth.
          </Circle>
        </div>
        <div style={{marginLeft: '550px', marginTop: '-200px'}}>
          <Circle width="700px" height="500px" color="#E2D8C7">
            We are the open-source buggy team, meaning that we don't keep any trade secrets. Our shop hours are fully open and we are always happy to share our knowledge with other teams. We build a new buggy each year, allowing us to innovate and push the boundaries with new ideas in buggy design.
          </Circle>
        </div>
        <div style={{marginLeft: '50px', marginTop: '-350px'}}>
          <Circle width="550px" height="350px" color="#C7BCA8">
            Apex remains dedicated to our founding principles of teamwork, passion, innovation, and excitement. But above all, we're just a bunch of friends who all love buggy!
          </Circle>
        </div>
      </div>
      <div className="flex flex-col gap-y-[50px] items-center px-[150px] pb-[80px]">
        <img src={photo} alt="Apex Team" className="w-[857px] h-[514px]" />
        <h2>But first... what is buggy?</h2>
        <div className="text-[22px] text-center text-white">
          Buggy is a uniquely CMU activity that mixes engineering, design, and athleticism. Students build unmotorized vehicles (buggies) which are driven through a 0.84-mile course by individuals called drivers and powered by athletes who push it in a relay race.
        </div>
        <div className="text-[22px] text-center text-white font-bold">
          Here is the course:
        </div>
        {/* <div className="flex justify-center">
          <img src={course} alt="Buggy Course" className="w-[800px] h-[400px]"/>
        </div> */}
        <div className="text-[22px] text-center text-white font-bold">
          Below is a buggy race during Carnival:
        </div>
        <div className="flex justify-center">
          <iframe 
            width="800" 
            height="450" 
            src="https://www.youtube.com/embed/3oddPGM-2BQ?si=FnZScZ4JjDWZ_eLW" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
        <h2>So...what makes Apex special?</h2>
        <div className="flex items-center flex-col">
          <Circle width="1000px" height="300px" color="#F0E9DD">
            <h2 style={{fontSize: '35px', color: 'black'}}>We're open source</h2>
            <div className="text-[20px]">
              Our shop hours are open to all (including members of other buggy teams) because we want to share our love of buggy with everyone. Whether you have extensive experience with composites or have never heard the word "epoxy" before, you're welcome in our shop! We're happy to teach you everything you need to know!
            </div>
          </Circle>
          <div style={{ marginTop: '-40px' }}>
            <Circle width="1000px" height="330px" color="#E2D8C7">
            <h2 style={{fontSize: '35px', color: 'black'}}>We're flexible</h2>
              <div className="text-[20px]">
                There is no minimum time commitment to join Apex. We respect our members' responsibilities outside of buggy, so other than a few Raceday-related events in the spring, nothing is mandatory. You can be as involved as little or as much as you want to be (so if waking up at 4 am isn't your thing, you don't have to!). We also welcome new members throughout the year, not just at the beginning of the semester.
              </div>
            </Circle>
          </div>
          <div style={{ marginTop: '-40px' }}>
            <Circle width="1000px" height="270px" color="#C7BCA8">
            <h2 style={{fontSize: '35px', color: 'black'}}>We're fun</h2>
              <div className="text-[20px]">
                Above all, we're in Apex because we like it! In addition to doing all things buggy, Apex also organizes regular social events for everyone to enjoy. These include movie and game nights, Late Nights at local restaurants in Pittsburgh, group study sessions, and the occasional team party.
              </div>
            </Circle>
          </div>
        </div>
        <h2>Sounds like your cup of tea?</h2>
        <div className="text-white text-[22px]">Join our Slack and come to one of our recruitment events!</div>
      </div>
      
      <Footer/>
  </div>
}

export default HomePage;