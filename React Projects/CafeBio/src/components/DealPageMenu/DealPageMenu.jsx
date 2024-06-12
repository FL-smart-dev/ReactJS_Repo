import React, { useState } from 'react';
import menu from '../../images/hamburger-circle.svg';
import styles from './DealPageMenu.css';
import { Modal } from 'antd';

const DealPageMenu = ({ merchantMenu }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  // Toggle function to open/close menu
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const showModal = () => {
    setMenuVisible(true);
  };

  const handleOk = () => {
    setMenuVisible(false);
  };

  const handleCancel = () => {
    setMenuVisible(false);
  };

  const menuItem = (href, label) => (
    <div>
      <a href={href} alt= {label} target='_blank'> 
        <div className='menuborderbutton' style={{margin:'15px'}}>
        {label}
        </div>
      </a>
    </div>
  );

  return (
    <div className={styles.ResponsiveMenu}>
      <div className={styles.menuholder}>
        <button
          onClick={showModal}
          style={{
            backgroundColor: '#ffffff',
            border: 'none',
            marginLeft: '40px',
          }}
        >
          <img
            style={{
              height: '30px',
              width: '30px',
            }}
            src={menu}
            alt='menu'
          />
        </button>

        <Modal  open={menuVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className={styles.menuitems}>
          {merchantMenu.youtubeHandle && menuItem(merchantMenu.youtubeHandle, `${merchantMenu.merchantName} YouTube`)}
          {merchantMenu.menuUrl && menuItem(merchantMenu.menuUrl, `${merchantMenu.merchantName} Menu`)}
          {merchantMenu.shopUrl && menuItem(merchantMenu.shopUrl, `${merchantMenu.merchantName} Shop`)}
          
            {merchantMenu.websiteUrl && menuItem(merchantMenu.websiteUrl, `${merchantMenu.merchantName} Website`)}
            {merchantMenu.instagramHandle && menuItem(merchantMenu.instagramHandle, `${merchantMenu.merchantName} Instagram`)}
            {merchantMenu.tikTokHandle && menuItem(merchantMenu.tikTokHandle, `${merchantMenu.merchantName} TikTok`)}
            {merchantMenu.twitterHandle && menuItem(merchantMenu.twitterHandle, `${merchantMenu.merchantName} X.com`)}

    
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DealPageMenu;
