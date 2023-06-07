import { Link } from 'react-router-dom';
import logo from '../../../../../public/smash-logo-white-ok.png'


const Footer = () => {
    return (
        <div className='p-10 bg-black text-white'>
        <footer className="footer pb-10 grid grid-cols-1 md:grid-cols-4">
  <div className=''>
    <img className='w-24' src={logo} alt="smash" />
    <p>Badminton School & Sports Club is the most popular in the Bangladesh.</p>
  </div> 
  <div>
    <span className="footer-title">QUICK LINKS</span> 
    <Link to={'/instructor'} className="link-hover">Instructor</Link>
    <Link to={'/classes'} className="link-hover">Classes</Link>
    <Link to={'/about'} className="link-hover">About Us</Link>
    <Link to={'/contact'} className="link-hover">Contact Us</Link>
  </div> 
  <div>
    <span className="footer-title">USEFUL LINKS</span> 
    <Link className="link-hover">Privacy Policy</Link>
    <Link className="link-hover">Terms & Condition</Link>
    <Link className="link-hover">Disclaimer</Link>
    <Link className="link-hover">FAQ</Link>
  </div> 
  <div>
    <span className="footer-title">GET IN TOUCH</span> 
    <div className="leading-7">
         <p>Block-J, Baridhara, Dhaka, Bangladesh</p>
<p>
(+62) 81 2345 6789
</p>
<p>
smash@domain.com
</p>
<p>
07.00 AM - 19.00 PM
</p>
</div>
  </div>
</footer>
<hr />
<footer className="footer pt-10 bg-black text-white border-base-300">
  <div className="items-center grid-flow-col">
    
    <p>Badminton School & Sports Club Template Kit by Own Design.</p>
  </div> 
  <div className="md:place-self-center md:justify-self-end">
  <p>Copyright &copy; 2023. All rights reserved.</p>
  </div>
</footer>
        </div>
    );
};

export default Footer;