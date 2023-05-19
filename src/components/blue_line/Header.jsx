import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Accordion from "react-bootstrap/Accordion"
import { useAccordionButton } from "react-bootstrap/AccordionButton"

import { blue_menu } from "@/settings/menu"

const CustomToggle = ({ children, eventKey }) => {
    const decoratedOnClick = useAccordionButton(eventKey, () => { })

    return (
        <button
            type="button"
            onClick={decoratedOnClick}
            className="navbar-toggle"
        >
            {children}
        </button>
    )
}

const Header = () => {
    return (
        <>
            <header className="main-header">
                {/* <div className="header-top-wrap bgc-secondary text-white py-5">
                        <div className="container">
                            <div className="header-top">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="top-left text-center text-lg-start">
                                            <ul>
                                                <li>
                                                    <a href="#">About</a>
                                                </li>
                                                <li>
                                                    <a href="#">Services</a>
                                                </li>
                                                <li>
                                                    <a href="#">Faqs</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="top-right text-center text-lg-end">
                                            <ul>
                                                <li>
                                                    <i className="far fa-envelope" />{" "}
                                                    <a href="mailto:support@gmail.com">
                                                        support@gmail.com
                                                    </a>
                                                </li>
                                                <li>
                                                    <i className="far fa-phone" />{" "}
                                                    <a href="callto:+000(123)45699">
                                                        +000 (123) 456 99
                                                    </a>
                                                </li>
                                                <li>
                                                    <select
                                                        className="select"
                                                        name="language"
                                                        id="language"
                                                    >
                                                        <option value="English">
                                                            English
                                                        </option>
                                                        <option value="Bengali">
                                                            Bengali
                                                        </option>
                                                        <option value="Arabic">
                                                            Arabic
                                                        </option>
                                                    </select>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                {/*Header-Upper*/}
                <div className="header-upper">
                    <div className="container clearfix">
                        <div className="header-inner rel d-flex align-items-center">
                            <div className="logo-outer">
                                <div className="logo">
                                    <Link href="/">
                                        <img
                                            src="assets/images/logos/Ltda_azul.png"
                                            alt="Logo"
                                            title="Logo"
                                            width={178}
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="nav-outer clearfix">
                                {/* Main Menu */}
                                <nav className="main-menu navbar-expand-lg">
                                    <Accordion>
                                        <div className="navbar-header">
                                            <div className="mobile-logo my-15">
                                                <Link href="index.html">
                                                    <img
                                                        src="assets/images/logos/logo_simple.png"
                                                        alt="Logo"
                                                        title="Logo"
                                                        width={50}
                                                    />
                                                </Link>
                                            </div>
                                            {/* Toggle Button */}
                                            <CustomToggle eventKey="nav">
                                                <span className="icon-bar" />
                                                <span className="icon-bar" />
                                                <span className="icon-bar" />
                                            </CustomToggle>
                                        </div>
                                        <Accordion.Collapse
                                            eventKey="nav"
                                            className="navbar-collapse clearfix"
                                        >
                                            <ul className="navigation onepage clearfix">
                                                {
                                                    blue_menu?.map((row, i) => (
                                                        <li key={i}>
                                                            <Link href={row.path || "/"}>{row.name || ""}</Link>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </Accordion.Collapse>
                                    </Accordion>
                                </nav>
                                {/* Main Menu End*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*End Header Upper*/}
            </header>
        </>
    )
}

export default Header