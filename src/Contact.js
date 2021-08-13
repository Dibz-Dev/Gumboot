const Contact = () => {
    return ( 

        <div id="Contact" className="content-container">
            <div className="contact-info-wrapper">
                <div className="location">
                    <h3 className="contact-header">Located</h3>
                    <p className="contact-info">15 Croxted Road / South Bermondsey / SWE 9DG <br /> LONDON</p>
                </div>
                <div className="contact">
                <h3 className="contact-header">Get in Touch</h3>
                    <p className="contact-info"> +44750 3846 256</p>
                    <p className="contact-info"> thegumboot@net.com</p>
                </div>
                <div className="hours">
                <h3 className="contact-header">Hours</h3>
                    <p className="contact-info "><span className="price"> Tuesday - Friday </span><br />7am - 3pm / 5pm - 8pm</p>
                    <p className="contact-info"><span className="price">Saturday</span><br /> 8am - 3pm</p>
                    <p className="contact-info"><span className="price">Sunday</span><br /> 8am - 3pm</p>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;