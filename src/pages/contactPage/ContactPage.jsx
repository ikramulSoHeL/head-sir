import React from "react";
import "./contactPage.scss";

// assests
import { socialData } from "../../assets/data/socialData";

// components
import SupportInfoSection from "../../cpmponents-ui/supportInfoSection/SupportInfoSection";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="contactPage">
      <div className="wrapper contact_container">
        <div className="wrapper_layout content">
          <span>যোগাযোগ </span>
          <h2>যেকোনো পরামর্শ ও অভিযোগের জন্য</h2>
          <p>
            আপনার মূল্যবান পরামর্শ, মতামত ও অভিযোগ আমার কাছে অত্যন্ত
            গুরুত্বপূর্ণ। আমি প্রতিটি বার্তা মনোযোগ সহকারে পর্যালোচনা করি, যাতে
            আমার সেবাকে আরও উন্নত ও কার্যকর করা যায়। আপনার সহযোগিতা আমার আগামী
            পথচলাকে আরও স্বচ্ছ, সুন্দর এবং সফল করে তুলবে।
          </p>

          <div className="socials">
            {socialData?.map((item, index) => {
              return (
                <Link to={item.link} className="social" key={index}>
                  <item.icon />
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <SupportInfoSection contentPadding={true} />
    </div>
  );
};

export default ContactPage;
