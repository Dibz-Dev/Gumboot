import Drinks from './Menus/Drinks'
import Food from './Menus/Food'
import { useState } from 'react'

const Menu = () => {

    const[displayMenu, setDisplay] = useState("null")

    const menuDisplay = (e) => {

        if(e.target.classList.contains('food-btn')) {
            setDisplay("food")
        } else if(e.target.classList.contains('drink-btn')) {
            setDisplay("drink")
        } else {
            setDisplay("null")
        }
    }
    return ( 
            
        <div id="Menu" className="content-container" style={{ height:'150%'}}>
             <div className="menu-btn-wrapper">
                     
                        <button onClick={ menuDisplay } className="menu-btn food-btn">Food</button>
                        <button onClick={ menuDisplay } className="menu-btn drink-btn">Drinks</button> 
                     </div>
                     
                     { displayMenu === "drink" && <Drinks /> }
                     { displayMenu === "food" && <Food /> }
           
              
           </div>
      
     );
}
 
export default Menu;