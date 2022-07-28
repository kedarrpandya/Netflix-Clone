import React, {useEffect, useState} from 'react'

const Navbar = () => {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setShow(true);
      }else setShow(false);      
    });
    return() => {
      window.removeEventListener("scroll");
    }
  }, [])


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo"
       src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
       alt="Netflix Logo"/>
       <img className="nav__avatar"
        src="https://w7.pngwing.com/pngs/283/567/png-transparent-barney-stinson-how-i-met-your-mother-neil-patrick-harris-robin-scherbatsky-marshall-eriksen-how-i-met-your-mother-television-poster-logo-thumbnail.png" alt="Netflix Avatar"/>
    </div>
  )
}

export default Navbar