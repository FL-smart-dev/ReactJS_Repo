import React from 'react';
import { Layout } from 'antd';
import CafeBioHeader from '../Header/cafebioheader';
import CompareTable from '../CompareTable/CompareTable';
import CBFooter from '../Footer/Footer';
import styles from './home.module.css';
import PricingTable from '../PricingTable/PricingTable';
import FAQSection from '../faq/faq';
import { Divider } from 'antd-mobile';
import Home2 from '../home2/home2';
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu';
import HowItWorks from '../HowItWorks/HowItWorks';
import CustomerExperience from '../CustomerExperience/CustomerExperience';

const { Header, Footer, Content } = Layout;

const Home = () => (
  
    <Layout>
      <Header headerHeight='120px' className={styles.headerStyle}>
        <CafeBioHeader/>
      </Header>
      <Layout style={{backgroundColor:'#fff'}}>
     <div>
     <ResponsiveMenu/>
     </div>
        <Content className={styles.contentStyle}>
          <Home2/>
          <Divider/>
          <HowItWorks/>
          <Divider/>
          <CustomerExperience/>
          <Divider/>
          <CompareTable showOverlay='false'/>
          <Divider/>
          <PricingTable showTrial='false' showPrice='false' />
          <Divider/>
          <FAQSection/>
          <Divider/>
        </Content>
      </Layout>
      <Footer className={styles.footerStyle}>
        <CBFooter/>
      </Footer>
    </Layout>
  
);

export default Home;
