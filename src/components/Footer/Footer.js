//IMAGES
import logoFooter from '../../assets/icons/logo-ecommerce.png';

import './Footer.css';

const Footer = () => {
    return (
    <footer>
        <div class="item-logo"><img src={logoFooter} alt="logo unusual people" />
        </div>
        <div class="footer-item">© Unusual People - All rights reserved.
        </div>
    </footer>
    )
}
export default Footer;