import React,{useState} from 'react';
import PropTypes from 'prop-types';
import styles from './ResponsiveMenu.module.css';

const ResponsiveMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Toggle function to open/close menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return(
  <div className={styles.ResponsiveMenu}>
    <div className={styles.menuholder}>
      <div>
      <button 
      className='borderbutton'
      onClick={toggleMenu}
      >
        ☰ Menu
        </button>
     </div>
        {menuVisible && (
      <div className={styles.menudiv}>
      <ul>
               <li>
                <a href="/" >Home</a>
                </li>
               <li>
                <a href="/#howitworks" >How It Works</a> 
                </li>
               <li>
                <a href="/#pricing" className={styles.link}>Plans</a>
                </li>
               <li>
                <a href="/#faq" className={styles.link}>FAQ</a>
                </li>
               <li>
                <a href="/signup" className={styles.link}>Login</a>
                </li>
             
              
          </ul> 
      </div>
)}
    </div>
  </div>

  )
};

ResponsiveMenu.propTypes = {};

ResponsiveMenu.defaultProps = {};

export default ResponsiveMenu;
