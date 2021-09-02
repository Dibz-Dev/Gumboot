
const NavBar = ({ onClick, onFood, onDrinks, fb, cc }) => {

   return (  

        <nav id="sideNav" className="sideNav">
               <img className="gumboot-logo" src="gumboot logo.svg" alt="gumboot logo" />

                <ul className="sideNav-menu">
                    <li id="About" className="about-lk" onClick={onClick} >
                        {cc === "About" ? <img className="cup about-cup" src="myCoff.svg" alt="coffee" /> : null }About</li>
                    <li id="Menu" className="menu-lk" onClick={onClick}>{cc === "Menu" ? <img className="cup menu-cup" src="myCoff.svg" alt="coffee" /> : null } Menu</li>
                    <ul className="sub-list">
                        <li onClick={onFood} className="sub-list-style food-menu-list">{fb === "Food" && <img className="mini-icon-egg" src="friedEgg.svg" alt="fried egg" />}Food</li>
                        <li onClick={onDrinks} className="sub-list-style drink-menu-list">{fb === "Drinks" && <img className="mini-icon-OJ" src="Group 1OJ.svg" alt="Orange juice" />}Drinks</li>
                    </ul>
                    <li id="Reservations" className="reservations-lk"onClick={onClick}>{cc === "Reservations" ?<img className="cup reservations-cup" src="myCoff.svg" alt="coffee" /> : null}Reservations</li>
                    <li id="Contact" className="contact-lk" onClick={onClick}>{cc === "Contact" ? <img className="cup contact-cup" src="myCoff.svg" alt="coffee" /> : null}Contact</li>

                </ul>

        </nav>


    );
}
 
export default NavBar;