import Images from './Images'
import About from './About'
import Menu from './Menu'
import Reservations from './Reservations'
import Contact from './Contact'
import NavBar from './NavBar'

import { useState } from 'react'


const Content = () => {

    const [whichComponent, setChange] = useState("Images");

  
    const onClick = (e) => {

        if(e.target.classList.contains('about-lk')) {
            setChange("About")
            coffeeShow(e)
        } else if (e.target.classList.contains('menu-lk')) {
            setChange("Menu")
            coffeeShow(e)
        } else if(e.target.classList.contains('reservations-lk')) {
            setChange("Reservations")
            coffeeShow(e)
        } else if(e.target.classList.contains('contact-lk')) {
            setChange("Contact")
            coffeeShow(e)
        } else {
            console.log('error')
        }
            
        }

        const coffeeShow = (e) => {

            const about = document.querySelector('.about-cup')
            const menu = document.querySelector('.menu-cup')
            const reservations = document.querySelector('.reservations-cup')
            const contact = document.querySelector('.contact-cup')
        

           
                e.target.classList.contains('about-lk') ? about.classList.add('active') : about.classList.remove('active')
                e.target.classList.contains('menu-lk') ? menu.classList.add('active') : menu.classList.remove('active')
                e.target.classList.contains('reservations-lk') ? reservations.classList.add('active') : reservations.classList.remove('active')
                e.target.classList.contains('contact-lk') ? contact.classList.add('active') : contact.classList.remove('active')

            
         
          
            
        }
    return (

        <div id="content">
        <NavBar onClick={onClick} coffeeShow />
        { whichComponent === "Images" && <Images />}
        { whichComponent === "About" ? <About /> : null }
        { whichComponent === "Menu" ? <Menu /> : null }
        { whichComponent === "Reservations" ? <Reservations /> : null }
        { whichComponent === "Contact" ? <Contact /> : null }
        </div>
    )


  
}

export default Content;

  

   

   
    
   

    









// const aboutClick = (e) => {
       
    //             if(whichComponent === 'Images') {
    //                 return (
    //                     <div id="content">
    //                          <NavBar onClick={aboutClick} />
    //                          <Images />
    //                     </div>
    //                 )
    //             } else if (whichComponent === 'About') {
    //                 return (
    //                     <div id="content">
    //                         <NavBar onClick={aboutClick} />
    //                         console.log
    //                         {/* <About /> */}
    //                     </div>
    //                 )
    //             } else if (whichComponent === 'Reservations') {
    //                 return (
    //                     <div id="content">
    //                         <NavBar onClick={whichComponent} />
    //                         <Reservations />
    //                     </div>
    //                 )
    //             } else if (whichComponent === 'Menu') {
    //                 return (
    //                     <div id="content">
    //                         <NavBar onClick={whichComponent} />
    //                         <Menu />
    //                     </div>
    //                 )
    //             } else if (whichComponent === 'Contact') {
    //                 return (
    //                     <div id="content">
    //                         <NavBar onClick={whichComponent} />
    //                         <Contact />
    //                     </div>
    //                 )
    //             } else {
                   
    //             }}
        