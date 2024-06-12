import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './MasterPage.module.css';
import { Layout, Button, Divider } from 'antd';
import { AppContext } from '../../AppContext';
import MerchantInfo from '../../utils/Constants';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import {
  app,
  database,
  dbset,
  dbref,
  dbOnValue,
  signInWithEmail,
  firebaseConfig,
  auth,
  dbget,
} from '../../objects/dataobject';
import CBHeader from '../Header/Header';
import CBFooter from '../Footer/Footer';
import MiniProfile from '../MiniProfile/MiniProfile';
import { menuItems } from '../../utils/AppStrings';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  height: 80,
  paddingInline: 50,
  lineHeight: '80px',
  backgroundColor: '#fff',
};

const contentStyle = {
  backgroundColor: '#fff',
};

const footerStyle = {
  color: '#000',
  backgroundColor: '#fff',
};

function MasterPage({ child = <div>No content provided</div> }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [profileImageUrl, setProfileImageUrl] = useState('');
  const [profileDisplayName, setProfileDisplayName] = useState('');
  const [merchantName, setMerchantName] = useState('');
  const { appUserID, setAppUserID, appMerchantHandle, setAppMerchantHandle } = useContext(AppContext);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        navigate('/');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  useEffect(() => {
    sessionStorage.setItem('prev_url', location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        setAppUserID(userId);
        const merchantHandleRef = dbref(database, `users/${userId}/info`);
        const fetchData = async () => {
          try {
            const snapshot = await dbget(merchantHandleRef);
            if (snapshot.exists()) {
              const userInfo = snapshot.val();
              setAppMerchantHandle(userInfo.merchantHandle);
              MerchantInfo.merchantHandle = userInfo.merchantHandle;
              setProfileDisplayName(userInfo.displayname);
              setProfileImageUrl(userInfo.photourl);
              setMerchantName(userInfo.merchantName);
            }
          } catch (error) {
            console.error('Error fetching merchant handle:', error);
          }
        };
        fetchData();
      } else {
        navigate('/signup');
      }
    });

    return () => unsubscribe();
  }, [appUserID, navigate, setAppMerchantHandle, setAppUserID]);

  return (
      <Layout>
        <Header style={headerStyle}>
          <CBHeader />
        </Header>
        <Layout>
          <Sider style={{ backgroundColor: '#f4f4f4' }} className={styles.sidemenu}>
            <div>
              <MiniProfile
                profileimage={profileImageUrl}
                displayName={profileDisplayName}
                companyName={merchantName}
              />
               <Divider/>
              <Link to="/newpromo">
                <Button className="solidbutton">{menuItems.newCampaign}</Button>
              </Link>
              <Link to="/newsocial">
                <Button className="solidbutton">{menuItems.newSocial}</Button>
              </Link>
              <Link to="/newlink">
                <Button className='solidbutton'>{menuItems.newLink}</Button>
              </Link>
              <Link to="/campaigns">
                <Button className='borderbutton'>{menuItems.myCampaigns}</Button>
              </Link>
             
              {/* <Link to="/newdiscount">
                <Button>Dis(Deprecated)</Button>
              </Link> */}
              {/* <Link to="/loyalty">
                <Button>Loyalty</Button>
              </Link> */}
              <Link to="/insights">
                <Button className='borderbutton'>{menuItems.redemptions}</Button>
              </Link>
              {/* <Link to="/stores">
                <Button>Stores</Button>
              </Link> */}
              <Link to="/account">
                <Button className='borderbutton'>{menuItems.editProfile}</Button>
              </Link>
                <Button onClick={handleLogout} className={styles.logoutButton}>{menuItems.logOut}</Button>            
              <div className={styles.tellUsThoughts}>
                <Link to="/feedback">{menuItems.yourThoughts}</Link>
              </div>
            </div>
   
        </Sider>
        <Content style={contentStyle}>{child}</Content>
      </Layout>
      <Footer style={footerStyle}>
        <CBFooter />
      </Footer>
    </Layout>
  );
}

MasterPage.propTypes = {
  child: PropTypes.node,
};

export default MasterPage;
