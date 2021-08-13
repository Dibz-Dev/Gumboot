
const NavBar = () => {

    const navClick = () => {
       console.log('clicked')
    }
    return (  

        <nav id="sideNav" className="sideNav">
                <h1 className="loading-header">The Gumboot</h1>

                <ul className="sideNav-menu">
                    <li onClick={navClick}><span className="hash"># </span>About us</li>
                    <li><span className="hash"># </span>Food & Drink</li>
                    <li><span className="hash"># </span>Reservations</li>
                    <li><span className="hash"># </span>Contact</li>

                </ul>

        </nav>


    );
}
 
export default NavBar;