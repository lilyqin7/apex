import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import topImg from '../assets/header-images/events-header-layer-top.png'
import bottomImg from '../assets/header-images/events-header-layer-bottom.png'

function EventsPage() {
  return <div className="overflow-x-hidden">
      <Header
        topLayer={topImg}
        bottomLayer={bottomImg}
        pageTitle="Upcoming Events"
        headerHeight="550px"
      />
      <div className="flex justify-center">
        <iframe 
          src="https://calendar.google.com/calendar/embed?src=cmu.apex%40gmail.com&ctz=America%2FNew_York" 
          style={{ border: 0 }}
          width="800"
          height="600">
        </iframe>
      </div>
      <div className="px-[200px] text-center text-white pt-[50px] pb-[80px] text-[22px]">
        We have shop hours every week on Mondays and Thursdays from 5-7pm in our shop in East Campus Garage and rolls nearly every weekend starting at 5am at our staging location!
      </div>
      <Footer/>
  </div>
}

export default EventsPage;