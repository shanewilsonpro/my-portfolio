import React from "react";
import { Typography } from "@material-ui/core";
import './Footer.components.css';
import resume from '../../utils/resume';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">{resume.name}</Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyright">
                    &copy; 2021 All rights reserved. Developed by{" "}
                    <a href="/" target="_blank">
                        Shane Wilson
                    </a>
                </Typography>
            </div>
        </div>
    );
};

export default Footer;