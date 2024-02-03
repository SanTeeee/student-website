import React from "react";



function Footer(){
    return (
        <div className="footerCont">
            <div className="footerUp">
                <div className="footerUpFirstColumn">
                    <h2>Company Info</h2>
                    <a href="#">About Us</a>
                    <a href="#">Carrier</a>
                    <a href="#">We are hiring</a>
                    <a href="#">Blog</a>
                </div>
                <div className="footerUpFirstColumn">
                    <h2>Legal</h2>
                    <a href="#">About Us</a>
                    <a href="#">Carrier</a>
                    <a href="#">We are hiring</a>
                    <a href="#">Blog</a>
                </div>
                <div className="footerUpFirstColumn">
                    <h2>Features</h2>
                    <a href="#">Business Mareketing</a>
                    <a href="#">User Analytic</a>
                    <a href="#">Live Chat</a>
                    <a href="#">Unlimited Support</a>
                </div>
                <div className="footerUpFirstColumn">
                    <h2>Resources</h2>
                    <a href="#">IOS & Android</a>
                    <a href="#">Watch a demo</a>
                    <a href="#">Customers</a>
                    <a href="#">API</a>
                </div>
                <div className="footerUpFirstColumn">
                    <h2>Get in touch</h2>
                    <a href="#"><i class="fa-solid fa-phone"></i>(480) 555-0103</a>
                    <a href="#"><i class="fa-solid fa-location-dot"></i>4517 Ifite</a>
                    <a href="mailto:echetammesoma@gamil.com"><i class="fa-regular fa-envelope"></i>echetammesoma@gmail.com</a>
                </div>
            </div>
            <div className="footerDown">
                <p>Made with love by Echeta Mmesoma</p>
                <span className="footerIcons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-twitter"></i>
                </span>
            </div>
        </div>
    )
}

export default Footer;