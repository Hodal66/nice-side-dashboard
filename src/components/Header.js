import React, { useState } from "react";
import "./Header.css";
import {
  IoMdBookmark,
  IoMdClose,
  IoMdImage,
  IoMdNotifications,
  IoMdPerson,
  IoMdMenu,
} from "react-icons/io";
import { Link } from "react-router-dom";
function Header() {
  const [active, setActive] = useState(false);
  const activeNav = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "header" : "header-mobile"}>
      <div className="menu-icon" onClick={activeNav}>
        {!active ? (
          <IoMdMenu className="menu" />
        ) : (
          <IoMdClose className="close-icon" />
        )}
      </div>
      <nav>
        <ul className={active ? "ul-item" : "ul-item oicon"}>
          {/* use io image */}
          <li>
            <IoMdImage className="icon" />
            <Link to="/">alumin</Link>
          </li>
          <li>
            <IoMdBookmark className="icon" />
            <Link to="/">alumin</Link>
          </li>
          <li>
            <IoMdPerson className="icon" />
            <Link to="/">alumin</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/">alumin</Link>
          </li>
          <li>
            <IoMdImage className="icon" />
            <Link to="/">alumin</Link>
          </li>
          <li>
            <IoMdNotifications className="icon" />
            <Link to="/">alumin</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
