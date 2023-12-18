import logo from "../img/logo.png";
import { CgInstagram } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
  return (
    <div>
      <div>
        <div className="">
          <div className="footer-container">
            <div className="">
              <div className="footer-logo">
                <div className="footer-img__list">
                  <img src={logo} alt="" />
                </div>
                <div>
                  <ul className="footer-info">
                    <li>Lorem Ipsum is simply dummy</li>
                    <li>Text of the printing and</li>
                    <li>Typesetting industry.</li>
                  </ul>
                </div>
                <div className="footer-social-list">
                  <div className="footer-social-list_item">
                    <CgInstagram />
                    Instagram
                  </div>
                  <div className="footer-social-list_item">
                    <FaTwitter />
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>

            <div className="footer-address">
              <div className="footer-heading">
                Links
              </div>
              <ul>
                <li>About Me</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Services</li>
              </ul>
            </div>
            <div>
              <div className="footer-heading">
                Categories
              </div>
              <div className="footer-categories">
                <div>
                  <p className="">
                    Health
                  </p>
                  <p className="">
                    Music
                  </p>
                  <p className="">
                    Travel
                  </p>
                </div>
                <div>
                  <p className="">
                    Liststyle
                  </p>
                  <p className="">
                    Technolory
                  </p>
                  <p className="">
                    Uncategorized
                  </p>
                </div>
              </div>

            </div>

            <div>
              <div className="footer-heading">
                Address
              </div>
              <div className="footer-Address-contact">
                <ul>
                  <li>Dieter Wellhausen, D-11179 Berlin</li>
                  <li>+49 241 241</li>
                  <li>demo@rivaxstudio.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyrights">
          Copyright © 2023 <a href="#">RivaxStudio.</a> All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
