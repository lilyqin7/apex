import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import BuggyCard from '../components/BuggyCards.jsx'
import topImg from '../assets/header-images/buggies-header-top-layer.png'
import bottomImg from '../assets/header-images/buggies-header-bottom-layer.png'
import helios from '../assets/buggy-images/helios.png'
import scorch from '../assets/buggy-images/scorch.png'
import molotov from '../assets/buggy-images/molotov.png'
import solaris from '../assets/buggy-images/solaris.png'
import phoenix from '../assets/buggy-images/phoenix.png'
import nova from '../assets/buggy-images/nova.png'
import azula from '../assets/buggy-images/azula.png'
import firefly from '../assets/buggy-images/firefly.png'
import ember from '../assets/buggy-images/ember.png'

function BuggyPage() {
  return <div className="overflow-x-hidden">
      <Header
        topLayer={topImg}
        bottomLayer={bottomImg}
        pageTitle="Meet the Buggies"
        headerHeight="547.36px"
      />
      <div className="sm:px-[50px] lg:px-[136px] text-center text-white">
        <div className="px-[30px] pb-[80px] text-[22px]">
            Apex's theme is fire (we like to call ourselves "the most fire buggy team"). Each of our buggies' names and paint jobs has been chosen to align with this theme.
        </div>
        <div className="flex flex-col gap-y-[80px]">
            <h2>Currently Rolling</h2>
            <div class="flex flex-col gap-y-[100px]">
                <div className="flex flex-col gap-y-[80px] justify-center md:flex-row md:gap-x-[100px]">
                    <BuggyCard image={helios} name="Helios" />
                    <BuggyCard image={scorch} name="Scorch" />
                </div>
                <div className="flex flex-col gap-y-[80px] md:flex-row md:gap-x-[100px]">
                    <BuggyCard image={molotov} name="Molotov" />
                    <BuggyCard image={solaris} name="Solaris" />
                </div>
                <div className="flex flex-col gap-y-[80px] md:flex-row md:gap-x-[100px]">
                    <BuggyCard image={phoenix} name="Phoenix" />
                    <BuggyCard/>
                </div>
            </div>
            <h2>Retired</h2>
            <div class="flex flex-col gap-y-[100px] pb-[80px]">
                <div className="flex flex-col gap-y-[80px] md:flex-row md:gap-x-[100px]">
                    <BuggyCard image={nova} name="Nova" />
                    <BuggyCard image={azula} name="Azula" />
                </div>
                <div className="flex flex-col gap-y-[80px] md:flex-row md:gap-x-[100px]">
                    <BuggyCard image={firefly} name="Firefly" />
                    <BuggyCard image={ember} name="Ember" />
                </div>
            </div>
        </div>

      </div>
      <Footer/>
  </div>
}

export default BuggyPage;