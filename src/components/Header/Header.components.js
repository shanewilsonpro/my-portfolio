import React from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { HomeRounded, SchoolRounded, WorkRounded, LinkedIn, GitHub, Telegram } from "@material-ui/icons";
import { Link, NavLink, withRouter } from "react-router-dom";
import resume from "../../utils/resume";
import CustomButton from "../Button/CustomButton.components.js";

import './Header.components.css'

const Header = (props) => {
    const pathName = props?.location?.pathname;

    return (
        <Navbar expand="lg" sticky='top' className='header'>
            {/* Home link */}
            <Nav.Link as={NavLink} to='/' className='header_navlink'>
                <Navbar.Brand className='header_home'>
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className='header_left'>
                    {/* Resume link */}
                    <Nav.Link as={NavLink} to='/resume' className={pathName === '/resume' ? "header_link_active" : "header_link"}>
                        RESUME
                    </Nav.Link>

                    {/* Portfolio link */}
                    <Nav.Link as={NavLink} to='/portfolio' className={pathName === '/portfolio' ? "header_link_active" : "header_link"}>
                        PORTFOLIO
                    </Nav.Link>

                    {/* Contact link */}
                    <Nav.Link as={NavLink} to='/contact' className={pathName === '/contact' ? "header_link_active" : "header_link"}>
                        CONTACT
                    </Nav.Link>

                </Nav>

                <div className="header_right">
                    {Object.keys(resume.socials).map((key) => (
                        <a href={resume.socials[key].link} target="_blank" className='header_right_icon'>
                            {resume.socials[key].icon}
                        </a>
                    ))}
                    <CustomButton text={"Hire Me"} icon={<Telegram />} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default withRouter(Header);