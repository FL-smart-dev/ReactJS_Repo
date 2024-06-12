import React from "react";
import PropTypes from "prop-types";
import styles from "./MiniProfile.module.css";
import { Image } from "antd";

const MiniProfile = ({
  profileimage = '../../images/cafebiopromoimages/espresso.png',
  displayName = 'Default Name',
  companyName = ''
}) => (
  <div className={styles.profilecontainer}>
    {profileimage && (
      <Image
        preview={false}
        className={styles.miniprofileimage}
        src={profileimage}
        alt={displayName}
      />
    )}
    <div>
      <div className={styles.miniprofileName}>{displayName}</div>
      <div className={styles.minimerchantName}>{companyName}</div>
    </div>
  </div>
);

MiniProfile.propTypes = {
  profileimage: PropTypes.string,
  displayName: PropTypes.string,
  companyName: PropTypes.string,
};

export default MiniProfile;
