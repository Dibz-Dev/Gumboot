const Drinks = () => {
    return ( 

       <div id="drinks" className="content-container drinks">
                        <h2 className="content-header">& Drinks</h2>

        <div className="drink-box">
           
                <div className="drink-square day-start">
                <h3 className="drink-heading">Kick start your Day..</h3>
                      <div className="para-description">
                        <p><span className="sub-drink">Coffee:</span><br /> Espresso / Machiato<span className="price">2</span><br />
                         Dbl Espresso / Dbl Machiato / Americano<span className="price">2.5</span><br />
                         Latte / Cappucino / Flat White<span className="price">3</span><br />Hot Chocolate<span className="price">3</span></p>
                         <p><span className="sub-drink">Juices:</span><br /> OJ / Apple / Fresh Lemonade<span className="price">2</span><br /><br />
                         <span className="sub-drink">Softs:</span><br /> Coke Zero / Orangina / Sprite<span className="price">2</span>
                         </p>
                      </div>
                      
                      
                </div>
                <div className="drink-square edge-off">
                <h3 className="drink-heading"> Its 12 o'clock Somewhere..</h3>
                <div className="para-description edge">
                        <p><span className="sub-drink">Bottled Beers:</span><br />Monteiths Summer Ale/ Blue Moon / Estrella <span className="price">3</span><br /><br />
                        <span className="sub-drink">Draught: (Pint)</span><br />Grimbergen<span className="price">4</span>
                         <br />Blue Moon<span className="price">6</span></p>
                         <p><span className="sub-drink">Wines by the Glass:</span><br /> Rose / White / Red / Prosecco <span className="price">5</span><br /><br />
                         <span className="sub-drink">Wine Bottles:</span><br /> See our Wine board on Arrival
                         </p>
                      </div>
                      <div className="horiz-line"></div>
                      <div className="line-break-width-left"></div>
                      <div className="line-break-width-right"></div>
                </div>
           <div  className="drink-square cocktails">
                <h3 className="drink-heading harder-stuff"> Harder Stuff..</h3>
                <div className="para-description cocktails">
                        <p><span className="sub-drink">Cocktails:</span><br />Mojito / Clover Club / Aperol Spritz<span className="price">7</span><br />
                         Negroni / Old Fashioned<span className="price">6</span>
                        <br /><br />Espresso Martini<span className="price">8</span>
                         </p>
                       
                </div>
           </div>
           <div className="horiz-line bottom"></div>
                <div  className="drink-square happy-hour">
                
                <h2 className="happy-hour-style"> Happy Hours</h2>
                <h5 className="sub-happy-hour"> Cocktails for a Fiver<br />Everyday between 5-7pm</h5>
                </div>
                       
        </div>
        
</div>
     );
}
 
export default Drinks;