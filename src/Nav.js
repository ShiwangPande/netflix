import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  function toggleShow(event) {
    if (window.scrollY > 100) {
      handleShow(true);
    } else handleShow(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleShow);
    return () => {
      window.removeEventListener("scroll", toggleShow);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />

      <img
        onClick={() => history.push("/profile")}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;
