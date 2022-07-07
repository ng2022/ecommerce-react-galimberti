//IMAGES
import logoFooter from '../../assets/icons/Unusual-People-Logo-Footer.png';

import './Footer.css';

const Footer = () => {
    return (
    <footer>
        <div class="item-logo">
            <img src={logoFooter} alt="logo unusual people" width={'150px'} />
        </div>
        <div class="footer-item">
            © Unusual People - All rights reserved.
        </div>
    </footer>
    )
}
export default Footer;