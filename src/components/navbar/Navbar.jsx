import React from "react";
import "./navbar.scss";
import { Link, NavLink } from "react-router-dom";

// data
import { navbarData } from "../../assets/data/navbarData";
import pImg from "../../assets/images/mah.png";

const Navbar = () => {
  const handleMobileMenuToggle = () => {
    const mobileMenu = document.querySelector(".mobile_menu");
    mobileMenu.classList.toggle("active");

    const line1 = document.querySelector(".line_1");
    line1.classList.toggle("active");
    const line2 = document.querySelector(".line_2");
    line2.classList.toggle("active");
    const line3 = document.querySelector(".line_3");
    line3.classList.toggle("active");
  };

  return (
    <nav className="navbar">
      <div className="navbar_container">
        <Link to="/" className="logo_section">
          <div className="image">
            <img src={pImg} alt="" />
          </div>

          <span>মাহবুবুল আলম</span>
        </Link>

        <div className="navbar_center">
          {navbarData.map((item) => (
            <NavLink to={item.link} key={item.id} className="menu_item">
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>

        <div className="navbar_right">
          <button>সাপোর্ট করুন</button>

          <div className="mobile_menuContainer">
            <div className="mobile_menuBtn" onClick={handleMobileMenuToggle}>
              <div className="line_1"></div>
              <div className="line_2"></div>
              <div className="line_3"></div>
            </div>

            <div className="mobile_menu">
              {navbarData.map((item) => (
                <NavLink
                  to={item.link}
                  key={item.id}
                  className="mobile_menuItem"
                >
                  <span>{item.name}</span>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
