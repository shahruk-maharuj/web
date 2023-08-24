import React, { useEffect, useState } from "react";
import logo from "../../assets/img/logo/shahruk.svg";
import avatar from "../../assets/img/avatar/avatar_1.svg";
import "../../assets/css/nav/Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <div className={`sm_nav ${show && "sm_navBlack"}`}>
      <div className="sm_navContents">
        <img className="sm_mainLogo" src={logo} alt="alaqsa" />
        <img className="sm_avatarImg" src={avatar} alt="avatar" />
      </div>
    </div>
  );
}

export default Nav;
