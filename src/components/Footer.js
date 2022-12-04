import logo from '../logo.svg';
import './styles.css';

function Footer() {
    return(
      <div>
        <footer className='footer-wrapper'>
          <img src={logo} alt="logo" />
          <h1 className='footer-title' >Footer Richcy</h1>
        </footer>
      </div>
    );
  }

export default Footer;