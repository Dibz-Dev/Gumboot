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
    const [showMenu, setMenu] = useState("Food");


    const changeFood = (e) => setMenu("Food");
    const changeDrinks = (e) => setMenu("Drinks");
    
    const onClick = (e) => {

        let subList = document.querySelector('.sub-list');
        let html = document.querySelector('html')

        if(e.target.classList.contains('about-lk')) {
            setChange("About")
            setMenu("Food")
            subList.classList.remove('active')
            window.scrollTo(0, 0)
            html.setAttribute('style', '')

        } else if (e.target.classList.contains('menu-lk')) {
            setChange("Menu")
            subList.classList.add('active')
            window.scrollTo(0, 0)
            html.setAttribute('style', '')
            

        } else if(e.target.classList.contains('reservations-lk')) {
            setChange("Reservations")
            setMenu("Food")
            subList.classList.remove('active')
            window.scrollTo(0, 0)
            html.setAttribute('style', 'overflow-y:hidden')
            

        } else if(e.target.classList.contains('contact-lk')) {
            setChange("Contact")
            setMenu("Food")
            subList.classList.remove('active')
            window.scrollTo(0, 0)
            html.setAttribute('style', 'overflow-y:hidden')
            
        } else {
            console.log('error')
        }
            
        }
        
    return (

        <div id="content" className="page-wrapper">
            <div>
                <NavBar onClick={onClick} onFood={changeFood} onDrinks={changeDrinks} fb={showMenu} cc={whichComponent} />
            </div>
        <div className="content-page-style">
        { whichComponent === "" && <Images /> }
        { whichComponent === "About" ? <About /> : null }
        { whichComponent === "Menu" ? <Menu onFood={changeFood} onDrinks={changeDrinks}  fb={showMenu} /> : null }
        { whichComponent === "Reservations" ? <Reservations /> : null }
        { whichComponent === "Contact" ? <Contact /> : null }
        </div>
        <Footer />
        </div>
    )


  
}

export default Content;

  

   

   
    
   

    









