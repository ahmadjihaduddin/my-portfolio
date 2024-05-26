import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };
  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="" />
      <img onClick={openMenu} src={menu_open} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img onClick={closeMenu} src={menu_close} alt="" className="nav-mob-close" />
        <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#hero">
            Home
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            About Me
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            Services
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("porto")} className={menu === "porto" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            Portfolio
          </AnchorLink>
        </li>
        <li onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Contact
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Hubungi saya
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
