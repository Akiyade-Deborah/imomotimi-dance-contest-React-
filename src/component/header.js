import React from 'react';
import  Image from "next/image";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
// import  { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMoon } from "@fortawesome/free-regular-svg-icons";



const Home = () => {
    return (
        <>
   <AliceCarousel autoplay infinite autoPlayInterval="3000" disableDotsControls disableButtonsControls className="owl-carousel">
    <div className="bg1" />
    <div className="bg2" />
    <div className="bg3" />
  </AliceCarousel>  
  <div className="main-pic">
    <div>
      <header>
        <div className="logo">
          <Image
            src="/logo.png"
            alt="Dance Logo"
            width={50} height={100}
            className="logo-img"
          />
          <nav>
            <div className="menuList" id="sidemenu">
              <ul className="main">
                <li>
                  <a href="#">intro</a>
                </li>
                <li>
                  <a href="#">countdown</a>
                </li>
                <li>
                  <a href="#">notes</a>
                </li>
                <li>
                  <a href="#">location</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
              </div>
              <i
                className="fa fa-window-close"
                id="close"
                onclick="closemenu()"
              />
            
          </nav>
          <div className="toggleswitch">
            <i className="fa-solid fa-moon moon" />
            <button onclick="togglemode()" className="toggle">
              <i className="fa-solid fa-toggle-on toggleon" id="toggle" />
            </button>
            <i className="fa-solid fa-sun sun" />
          </div>
          <a href="#" className="call">
            <i className="fa-solid fa-phone-volume" />
          </a>
          <i className="fa-solid fa-bars" id="bar" onclick="openmenu()" />
        </div>
      </header>
    </div>
    {/* Hero */}
     <section>
      <div className="imgText">
        <h5>imomotimi foundation presents</h5>
        <div className="ijaw">
          <h1>imomotimi ijaw </h1>
          <h1>dance contest 2024</h1>
        </div>
        <button value="submit" className="button">
          Download entry form <i className="fa-solid fa-download download" />
        </button>
        <p>
          All duly filled out forms and the entry fees should be brought to the
          auditions.
        </p>
        <i className="fas fa-mouse" id="mouse" />
      </div>
      <Image 
        id="shapeTop"
        src="/shape-top-white-80.png"
        alt="shapeTop"
        width={100} height={100}
      />
    </section> 
  </div>
</>

    );
};

export default Home;