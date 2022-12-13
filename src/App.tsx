import { useContext, useState } from "react"
import {usersContext} from "./context/usersContext"
import {FiTwitter, FiBookOpen, FiMenu} from "react-icons/fi"
import {GrInstagram, GrFacebookOption} from "react-icons/gr"
import {SlPhone} from "react-icons/sl"
import {MdOutlineMail} from "react-icons/md"
import 'animate.css';
import "./app.css"


function App() {
  const [ modal, setModal] = useState(true)


  function changer(){
    if(modal){
      setModal(false)
      return
    }else{
      setModal(true)
      return
    }
  }
  return (
    <div className="App">


      <header>
        <img src="https://i.ibb.co/kmSCs2v/5ffbfa1fe3ac423bb59874fa3f47cda0-1.png" alt="logotipo" className="logo" />

        <div className="navbar">
          <ul>
            <li><SlPhone/>800-200-0200</li>
            <li><FiBookOpen/>Brochure</li>
            <li><MdOutlineMail/>Contact</li>
          </ul>
        </div>

        <div className="menu-button">

          <FiMenu className={modal?("icon-disabled"):("icon-active")} onClick={changer}/>
        
        </div>
    {/*menu opened animate__animated animate__fadeInRight*/}
    {/*menu animate__animated animate__fadeOutRight*/}
  

        
      </header>

      <main>

        <div className={modal?("menu hidden"):("menu showen")}>
            <ul className={modal?("hidden"):("")}>
              <li><SlPhone/>800-200-0200</li>
              <li><FiBookOpen/>Brochure</li>
              <li><MdOutlineMail/>Contact</li>
            </ul>
        </div>

        <div className="hud">
          <h2>Kenai Fjords</h2>
          <h1>Alaska</h1>
          <button>
            Explore
          </button>
        </div>


      </main>
      <div className="footer">
          <div className="card">
            <p><strong>Kenai fjords park</strong> is most populary accessed by day cruisers from nearby Seward. these trips anywhere from six to 10 hour. They visit either Aialik Bay or the Northwestern Fjord, both of which jave massive tidewater glaciers and classic coastal Alaska scenary. Some day tours also offer kayaking as a way to explore the landscape even more closely.</p>
          </div>

          <div className="social">
            <FiTwitter/>
            <GrFacebookOption/>
            <GrInstagram/>
          </div>
        </div>

    </div>
  )
}

export default App
