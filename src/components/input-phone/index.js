import React from "react";
import PhoneInput from "react-phone-input-2";

import "react-phone-input-2/lib/bootstrap.css";
import "./style.scss";

const InputPhone = ({
  defaultCountry = "in",
  onChange = () => {},
  value,
  required = false,
  onEnterKeyPress = () => {},
  title,
}) => {
  return (
    <>
      <label>{title}</label>{" "}
      {required && <small className="text-danger font-10">(Required)</small>}
      <PhoneInput
        onEnterKeyPress={onEnterKeyPress}
        country={defaultCountry}
        value={value}
        onChange={onChange}
        inputClass={required && "border-danger"}
      />
    </>
  );
};

export default InputPhone;
