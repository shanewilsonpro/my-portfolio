import React from "react";
import { Button } from "@material-ui/core";

import "./CustomButton.components.css";

const CustomButton = ({ text, icon, image, email }) => {
  return (
    <a href={image} download="profilePicture.jpg">
      <Button
        className="custom_btn"
        variant="contained"
        type='submit'
        href={email ? (`mailto:${email}`) : null }
        endIcon={icon ? <div className="btn_icon_container">{icon}</div> : null}
      >
        <span className="btn_text">{text}</span>
      </Button>
    </a>
  );
};

export default CustomButton;
