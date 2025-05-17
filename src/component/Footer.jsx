import '../sass/Footer.scss';
const Footer = ({socialMe}) => {
    return(
        <footer>
            <div className="innerFooter">
                <div className="portfolio">
                    <h2>Arnab's Portfolio</h2>
                    <p>Thank you for visiting my personal portfolio website contact with me over socials</p>
                    <p>Keep rising 🚀. Contact with me over chat</p>
                </div>
                <div className="portfolio">
                    <h2>Quick Links</h2>
                        <li><a href="#home" >Home</a></li>
                        <li><a href="#about" >About Me</a></li>
                        <li><a href="#education" >Education</a></li>
                        <li><a href="#experience" >Experience</a></li>
                        <li><a href="#skills" >Skills</a></li>
                        <li><a href="#project" >Project</a></li>
                        <li><a href="#contact" >Contact</a></li>
                </div>
                <div className="portfolio">
                    <h2>Contact Info</h2>
                    <p><ion-icon name="call"></ion-icon>&nbsp;&nbsp;+91 93394 21756</p>
                    <p><ion-icon name="mail"></ion-icon>&nbsp;&nbsp;arnabmondal203@gmail.com</p>
                    <p><ion-icon name="map-sharp"></ion-icon>&nbsp;&nbsp;Champahati, West Bengal - 743330, India</p>
                    <div className="links">
                        {socialMe.map((item, index) => (
                            <a
                            href={item.media_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={index}
                            className={item.name}
                            >
                            <ion-icon name={item.media_logo}></ion-icon>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bottomFooter">
                Designed With&nbsp;<span><ion-icon name="heart"></ion-icon></span>&nbsp;Arnab Mondal
            </div>

        </footer>
    );
}
export default Footer;