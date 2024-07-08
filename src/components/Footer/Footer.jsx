import FooterIcon from '../../common/FooterIcon';
import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer_img">
        <img src="/img/logo.png" alt="Logo AluraFlix" />
      </div>
      <div className="footer_icons">
        <FooterIcon />
      </div>
    </footer>
  );
}
