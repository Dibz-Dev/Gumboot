import { useState } from 'react';
import ImageData from '../Data/image-data';

const Gallery = () => {


const [slider, setSlider] = useState(0)



const arrowClickRight = () => {
    setSlider( slider + 1)

    if(slider >= 11) {
        setSlider(0)
    }

}
    
const arrowClickLeft = () => {
    setSlider(slider - 1)

    if(slider < 1 ) {
        setSlider(11)
    
    }
}


    return ( 
         <div>
            <section className="gallery-wrapper">
                     <div className="gallery-slide" >
                         <img onClick={arrowClickLeft} className="arrow-left" src="altArrow.svg" alt="Arrow" />
                         <img className={"img-slide "} src={ImageData[slider]} alt="" />
                         <img onClick={arrowClickRight}  className="arrow-right" src="altArrow.svg" alt="Arrow" />
                     </div>
            </section>
         </div>

     );
}
 
export default Gallery;