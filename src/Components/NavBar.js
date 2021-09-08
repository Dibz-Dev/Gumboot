import BurgerMenu from "./BurgerMenu";


const NavBar = ({ onClick, onFood, onDrinks, openBurger, fb, cc, hb,}) => {

  

   return (  

        <nav id="sideNav" className="sideNav">
              <a href="/"><img className="gumboot-logo" src="gumboot logo.svg" alt="gumboot logo" /></a>
                     <BurgerMenu openBurger={openBurger} hb={hb}/>
                <ul className="sideNav-menu">
                    <li id="About" className="about-lk" onClick={onClick} >
                        {cc === "About" ? <img className="cup about-cup" src="myCoff.svg" alt="coffee" /> : null }About</li>
                    <li id="Menu" className="menu-lk" onClick={onClick}>{cc === "Menu" ? <img className="cup menu-cup" src="myCoff.svg" alt="coffee" /> : null } Menu</li>
                    <li id="Reservations" className="reservations-lk"onClick={onClick}>{cc === "Reservations" ?<img className="cup reservations-cup" src="myCoff.svg" alt="coffee" /> : null}Reservations</li>
                    <li id="Contact" className="contact-lk" onClick={onClick}>{cc === "Contact" ? <img className="cup contact-cup" src="myCoff.svg" alt="coffee" /> : null}Contact</li>

                </ul>

        </nav>


    );
}
 
export default NavBar;