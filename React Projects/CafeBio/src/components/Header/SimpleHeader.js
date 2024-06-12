import React from 'react';
import { Layout, Space } from 'antd';
import CBHeader from '../Header/Header';
import CBFooter from '../Footer/Footer';

const { Header, Footer, Sider, Content } = Layout;

const headerStyle = {
 
    height: 80,
    paddingInline: 50,
    lineHeight: '80px',
    backgroundColor: '#fff',
    display: 'flex',        // Enables flexbox
    justifyContent: 'center', // Centers content horizontally
    alignItems: 'center',     // Centers content vertically
  };
  const contentStyle = {
  
   margin:'auto',
   maxWidth:'724px',
   
    
  };
  
  const footerStyle = {
    display: 'flex',        // Enables flexbox
    justifyContent: 'center', // Centers content horizontally
    alignItems: 'center', 
    color: '#000',
    backgroundColor: '#fff',
  };

const SimpleHeader=({child})=>(

    <>

<Layout >
      <Header style={headerStyle}>
        <CBHeader/>
      </Header>
      <Layout style={{backgroundColor:'#fff',padding:'20px'}}>
     <Content style={contentStyle}>
     {child}
     
     </Content>
       
      </Layout>
      <Footer style={footerStyle}>
        <CBFooter/>
        </Footer>
    </Layout>
    </>
)

export default SimpleHeader