import Images from './Images';
import About from './About';
import Menu from './Menu';
import Reservations from './Reservations';
import Contact from './Contact';
import NavBar from './NavBar';
import Footer from './Footer';

import { useState } from 'react';


const Content = () => {

    const [whichComponent, setChange] = useState("");
    const [showMenu, setMenu] = useState("");
    const [burger, setBurger] = useState("false");

    const [showModal, setModal] = useState(false);

        const galleryClick = () => {

        showModal === false ? setModal(true) : setModal(false);
        
        }
        const closeNav = () => {
    
            const overlay = document.querySelector('.nav-overlay')
            const nav = document.querySelector('.sideNav')
            const navMenu = nav.querySelector('.sideNav-menu')

            setBurger('false')
            nav.classList.remove('active')
            overlay.classList.remove('active')
            navMenu.classList.remove('active')
    
        }
    
        const openNav = () => {

            const overlay = document.querySelector('.nav-overlay')
            const nav = document.querySelector('.sideNav')
            const navMenu = nav.querySelector('.sideNav-menu')
    
            setBurger('true')
            nav.classList.add('active')
            navMenu.classList.add('active')
            overlay.classList.add('active')
        }

        const changeFood = (e) => {

            setModal(true)
            setMenu("Food");
            closeNav()
        }
        const changeDrinks = (e) => {
    
            setModal(true)
            setMenu("Drinks");
            closeNav()
        }
    
        const burgerClick = (e) => {
    
           
                  if( burger === 'false') {
                      openNav()
                  } else if(burger === 'true') {
                      closeNav()
                  }
        
        }

        const onClick = (e) => {

       
            let html = document.querySelector('html')
    
            if(e.target.classList.contains('about-lk')) {
                setChange("About")
                window.scrollTo(0, 0)
                html.setAttribute('style', '')
                closeNav()
    
            } else if (e.target.classList.contains('menu-lk')) {
                setChange("Menu")
                window.scrollTo(0, 0)
                html.setAttribute('style', '')
                closeNav()
    
            } else if(e.target.classList.contains('reservations-lk')) {
                setChange("Reservations")
                window.scrollTo(0, 0)
                html.setAttribute('style', 'overflow-y:hidden')
                closeNav()
    
            } else if(e.target.classList.contains('contact-lk')) {
                
                setChange("Contact")
                window.scrollTo(0, 0)
                html.setAttribute('style', 'overflow-y:hidden')
                closeNav()
                
            } else {
                console.log('error')
            }
                
        }
    
        
    return (

        <div id="content" className="page-wrapper">
            <div>
                <NavBar openBurger={burgerClick} onClick={onClick} onFood={changeFood} onDrinks={changeDrinks} fb={showMenu} cc={whichComponent} hb={burger} gallery={galleryClick}/>
            </div>
        <div className="content-page-style">
        <div className="nav-overlay"></div>
        { whichComponent === "" && <Images gallery={galleryClick} sm={showModal} /> }
        { whichComponent === "About" ? <About /> : null }
        { whichComponent === "Menu" ? <Menu onFood={changeFood} onDrinks={changeDrinks}  fb={showMenu} sm=  {showModal} gallery={galleryClick} /> : null }
        { whichComponent === "Reservations" ? <Reservations /> : null }
        { whichComponent === "Contact" ? <Contact /> : null }
        </div>
        
        <Footer />
        </div>
    )


  
}

export default Content;

  

   

   
    
   

    









