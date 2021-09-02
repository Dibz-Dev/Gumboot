import FoodData from "../../Data/food-data";


const Food = () => {


    return ( 
        <div id="Foods" className="menu-box">
        <br />
        
        <img className="gumboot-logo-menu" src="gumboot logo.svg" alt="gumboot logo" />
    <br />
        <h3 className="brunch-heading">Brunch</h3>
        <div className="food-container">
            <div className="food-item">
                    <h5 className="item-sub">{FoodData.brunch.item1.heading}</h5>
                    <p className="item-description">{FoodData.brunch.item1.description}<span className="item-price">{FoodData.brunch.item1.price}</span></p>
            </div>
            <div className="food-item">
                    <h5 className="item-sub">{FoodData.brunch.item2.heading}</h5>
                    <p className="item-description">{FoodData.brunch.item2.description}<span className="item-price">{FoodData.brunch.item1.price}</span></p>
            </div>
            <div className="food-item">
                    <h5 className="item-sub">{FoodData.brunch.item3.heading}</h5>
                    <p className="item-description">{FoodData.brunch.item3.description}<span className="item-price">{FoodData.brunch.item3.price}</span></p>
            </div>
            <div className="food-item">
                    <h5 className="item-sub">{FoodData.brunch.item4.heading}</h5>
                    <p className="item-description">{FoodData.brunch.item4.description}<span className="item-price">{FoodData.brunch.item4.price}</span></p>
            </div>
            <div className="food-item">
                    <h5 className="item-sub">{FoodData.brunch.item5.heading}</h5>
                    <p className="item-description">{FoodData.brunch.item5.description}<span className="item-price">{FoodData.brunch.item5.price}</span></p>
            </div>
            <div className="food-item">
                    <h5 className="item-sub">{FoodData.brunch.item6.heading}</h5>
                    <p className="item-description">{FoodData.brunch.item6.description}<span className="item-price">{FoodData.brunch.item6.price}</span></p>
            </div>
            <div className="food-item extras">
                    <h5 className="item-sub">{FoodData.brunch.item7.heading}</h5>
                    <p className="item-description">{FoodData.brunch.item7.description}<span className="item-price">{FoodData.brunch.item7.price}</span></p>
            </div>
            <div className="food-item pastries">
                    <h5 className="item-sub">{FoodData.brunch.item8.heading}</h5>
                    <p className="item-description">{FoodData.brunch.item8.description} <span className="item-price">{FoodData.brunch.item8.price}</span> <br />{FoodData.brunch.item9.description}  <span className="item-price">{FoodData.brunch.item9.price}</span><br /> {FoodData.brunch.item10.description} <span className="item-price">{FoodData.brunch.item10.price}</span></p>
            </div>
        </div>

       
            
            <h3 className="brunch-heading">Salads</h3>
        <div className="food-container">

            <div className="food-item">
                    <h5 className="item-sub">{FoodData.salad.item1.heading}</h5>
                    <p className="item-description">{FoodData.salad.item1.description} <br /> <span className="item-price">{FoodData.salad.item1.price}</span></p>
            </div>
            <div className="food-item">
                    <h5 className="item-sub">{FoodData.salad.item2.heading}</h5>
                    <p className="item-description">{FoodData.salad.item2.description}<br /><span className="item-price">{FoodData.salad.item2.price}</span></p>
            </div>
            <div className="food-item">
                    <h5 className="item-sub">{FoodData.salad.item3.heading}</h5>
                    <p className="item-description">{FoodData.salad.item3.description}<br /> <span className="item-price">{FoodData.salad.item3.price}</span></p>
            </div>
            </div>
           
          
            {/* </div>  */}
    </div>
     );
}
 
export default Food;