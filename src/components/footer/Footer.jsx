import React from "react";
import "./footer.scss";
import { NavLink } from "react-router-dom";

// assets
import footerVector from "../../assets/icons/footer_vector.svg";
import { footerData } from "../../assets/data/footerData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_top">
        <div className="footerIntro">
          <h1>{footerData.name}</h1>
          <span>{footerData.desc}</span>
        </div>

        <div className="footer_navigations">
          {footerData?.menu?.map((menuItem, index) => (
            <div className="footer_navigation" key={index}>
              <h3>{menuItem.title}</h3>
              <div className="links">
                {menuItem?.list?.map((listItem, index) => (
                  <NavLink to={listItem.link} className="link" key={index}>
                    {listItem.name}
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer_bottom">
        <img src={footerVector} alt="" />

        <div className="content">
          <span>© ২০২৫ সর্বস্বত্ত্ব মাহবুবুল আলম কর্তৃক সংরক্ষিত</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
