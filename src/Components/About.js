import AboutData from '../Data/about-data';

const About = () => {

    const title = 'About Us';

    return ( 

        
            
        <div id="About" className="content-container about">
                
                <div className="content-paragraph-box">
                <h2 className="content-header">{title}</h2>

                    <p className="para-about-us"> {AboutData.paraOne} </p>
                    <div className="img-decor-wrapper">
                    <p style={{ width: "90%"}}> {AboutData.paraTwo} </p>
                    <img className="about-img-decor" src="cafedecor.jpg" alt="inside cafe" />
                    </div><br/><br/><br/>
                    <p className="lower-about-para" style={{  width: "95%"}}> {AboutData.paraThree} </p>
                </div>

        </div>
    
     );
}
 
export default About;