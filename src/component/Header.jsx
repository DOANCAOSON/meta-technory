import { IoSearchSharp } from "react-icons/io5";
import logo from "../img/logo.png";
import { FaFacebookF } from "react-icons/fa6";
import { GrPinterest } from "react-icons/gr";
import { CgInstagram } from "react-icons/cg";
import { FaTwitter } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <div className="header-img__list">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="header-category">
        <ul className="header-category_list">
          <li className="header-category_list--item">HOME
            <FaChevronDown className="header-category_list--icon" />
          </li>
          <li className="header-category_list--item">FEATURES
            <FaChevronDown className="header-category_list--icon" />
          </li>
          <li>TRAVEL</li>
          <li className="header-category_list--item">PAGES
            <FaChevronDown className="header-category_list--icon" />
          </li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div className="social-networks" >
        <ul className="social-networks__list">
          <li>
            <IoSearchSharp />
          </li>
          <li>
            <FaFacebookF />
          </li>
          <li>
            <FaTwitter />
          </li>
          <li>
            <CgInstagram />
          </li>
          <li>
            <GrPinterest />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
