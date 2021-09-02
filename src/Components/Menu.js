import Drinks from './Menus/Drinks'
import Food from './Menus/Food'


const Menu = ({ onFood, onDrinks, fb }) => {



  
    return ( 
            
        <div id="Menu" >
                {fb === "Food" ? <div className="content-container-menu"> <Food /></div>: null }
                {fb === "Drinks" ? <div className="content-container"> <Drinks /> </div> : null }
                 
                  
               
           
              
           </div>
      
     );
}
 
export default Menu;