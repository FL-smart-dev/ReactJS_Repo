import React from 'react';
import PropTypes from 'prop-types';
import styles from './CompletionScreen.module.css';
import {Steps} from 'antd-mobile';
import { Result,Button } from 'antd';
import { useParams,useNavigate,Link } from 'react-router-dom';

const { Step } = Steps
export default function CompletionScreen () {
  const navigate = useNavigate();
  const routeParams = useParams();
  const offer = "Offer number :"+ routeParams.redeemguid  
  return(
    
  <div className={styles.CompletionScreen}>
    <Steps current={2}>
          <Step title='Select Offer' description='' />
          <Step title='Redeem' description='' />
          <Step title='Complete' description='' />
        </Steps>
        <Result
    status="success"
    title="You have successfully redeemed your offer!"
    subTitle={offer}
    extra={[
      <>
      <Link to={'https://www.cafe.bio/' + routeParams.merchanthandle } >
      Back to Offers
      </Link>
      
      {/* <Link>
     
      <Button type="primary" key="console" >
        Back to Offers
      </Button>
      </Link> */}
      </>
    ]}
  />
  </div>
)};

CompletionScreen.propTypes = {};

CompletionScreen.defaultProps = {};

// export default CompletionScreen;
