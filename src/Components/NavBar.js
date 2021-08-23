const NavBar = ({ onClick, coffeeShow }) => {

   

    return (  

        <nav id="sideNav" className="sideNav">
                <h1 className="loading-header"><a style={{ textDecoration: 'none', color: 'black'}} href="">The Gumboot</a></h1>

                <ul className="sideNav-menu">
                    <li id="About" className="about-lk" onClick={onClick} >
                        <img className="cup about-cup" src="myCoff.svg" alt="coffee" />About us</li>
                    <li id="Menu" className="menu-lk" onClick={onClick}><img className="cup menu-cup" src="myCoff.svg" alt="coffee" />Food & Drink</li>
                    <li id="Reservations" className="reservations-lk"onClick={onClick}><img className="cup reservations-cup" src="myCoff.svg" alt="coffee" />Reservations</li>
                    <li id="Contact" className="contact-lk" onClick={onClick}><img className="cup contact-cup" src="myCoff.svg" alt="coffee" />Contact</li>

                </ul>

        </nav>


    );
}
 
export default NavBar;