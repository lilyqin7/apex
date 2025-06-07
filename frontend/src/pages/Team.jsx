import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import topImg from '../assets/header-images/team-header-top-layer.png'
import bottomImg from '../assets/header-images/team-header-bottom-layer.png'
import teamImg from '../assets/team-photo.png'
import ExecCards from '../components/ExecCards.jsx'
import tiegan from '../assets/exec-photos/tiegan.png'
import sarah from '../assets/exec-photos/sarah.png'
import michelle from '../assets/exec-photos/michelle.png'
import katrina from '../assets/exec-photos/katrina.png'
import sam from '../assets/exec-photos/sam.png'
import ray from '../assets/exec-photos/ray.png'
import kayley from '../assets/exec-photos/kayley.png'
import alex from '../assets/exec-photos/alex.png'
import liam from '../assets/exec-photos/liam.png'
import emma from '../assets/exec-photos/emma.png'
import lily from '../assets/exec-photos/lily.png'
import meryl from '../assets/exec-photos/meryl.png'

function TeamPage() {
  return <div className="overflow-x-hidden">
      <Header
        topLayer={topImg}
        bottomLayer={bottomImg}
        pageTitle="Meet the Team"
        headerHeight="553.6px"
      />
      <div className="px-[200px] text-center text-white pb-[80px]">
        <img src={teamImg} alt="Apex Team" className="w-[900px] pb-[50px]" />
        <div className="flex flex-col gap-y-[80px] justify-center items-center">
          <h2>Executive Members</h2>
          <div className="flex flex-row gap-x-[200px]">
            <ExecCards photo={tiegan} name="Tiegan Duncan" position="Chairman" />
            <ExecCards photo={sarah} name="Sarah Tillinger" position="Assistant Chairman" />
          </div>
          <div className="flex flex-row justify-center">
            <ExecCards photo={michelle} name="Michelle Bank" position="Treasurer" />
          </div>
          <h2>Ex-Mech</h2>
          <div className="flex flex-row gap-x-[200px]">
            <ExecCards photo={katrina} name="Katrina Mayen" position="Head Mechanic" />
            <ExecCards photo={sam} name="Sam Leong" position="Build Lead" />
          </div>
          <div className="flex flex-row gap-x-[200px]">
            <ExecCards photo={ray} name="Ray Kong" position="Assistant Head Mechanic" />
            <ExecCards photo={kayley} name="Kayley Sze" position="Assistant Build Lead" />
          </div>
          <h2>Push Captains</h2>
          <div className="flex flex-row gap-x-[200px]">
            <ExecCards photo={alex} name="Alex Werth" position="" />
            <ExecCards photo={liam} name="Liam Swayne" position="" />
          </div>
          <h2>Head Driver</h2>
          <div className="flex flex-row justify-center">
            <ExecCards photo={emma} name="Emma Bigler" position="" />
          </div>
          <h2>Social Chairs</h2>
          <div className="flex flex-row gap-x-[200px]">
            <ExecCards photo={lily} name="Lily Qin" position="" />
            <ExecCards photo={meryl} name="Meryl Meyerson" position="" />
          </div>
        </div>
      </div>
      <Footer/>
  </div>
}

export default TeamPage;