import React from "react";
import Switch from "react-switch";
import "./checkBox.css";

const IOSCheckbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-container">
      <Switch
        checked={checked}
        onChange={onChange}
        onColor="#146BFF"
        height={30}
      />
      <label className="checkbox-label">{label}</label>
    </div>
  );
};

export default IOSCheckbox;
