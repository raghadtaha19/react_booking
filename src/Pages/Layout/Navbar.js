import React from "react";
import { Button } from "semantic-ui-react";
import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    document.title = `${title}` ;
  }, [title]);

  useEffect(() => {
    // JSON.parse(...): This is used to parse the JSON string
    // retrieved from sessionStorage and convert it into a JavaScript object.
    // If there's no data stored in sessionStorage for the key 'myData', it will return null.
    const userData = JSON.parse(sessionStorage.getItem("myData"));

    if (userData) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("myData");
  };
  return (
    <div className="navbar" role="navigation">
      <div className="heading">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="search">
                <a href="#">{/* <i className="material-icons">search</i> */}</a>
              </div>
              <div className="tel">
                <a href="tel:03301234567">
                  {/* <i className="material-icons">phone in talk</i> 0330 123 4567 */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="navbar-header">
          <a href="index.html" className="logo" title="Craft beer landing page">
            <img src="assets/images/logo.svg" alt="Craft Beer HTML Template" />
          </a>
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar top-bar"></span>
            <span className="icon-bar middle-bar"></span>
            <span className="icon-bar bottom-bar"></span>
          </button>
        </div>
        <div className="navbar-collapse collapse">
          <ul id="menu-primary" className="nav navbar-nav">

            <li  ClassName="active">
              <NavLink to="/" 
              onClick={() => setTitle("Home")}>Home</NavLink>
            </li>
            
            {loggedIn ? (
              <li  ClassName="active">
                <NavLink to="/profile" 
              onClick={() => setTitle("Profile")}>Profile</NavLink>
              </li>
            ) : null}

            <li  ClassName="active">
              <NavLink to="/aboutus" 
              onClick={() => setTitle("About")}>About</NavLink>
            </li>

            <li  ClassName="active">
              <NavLink to="/ContactUs"
              onClick={() => setTitle("Contact")}>Contact</NavLink>
            </li>

            {loggedIn ? (
              <li>
                <button
                  className="logout_button"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #faa82f, #e76115)",
                    border: "none",
                  }}
                  onClick={handleLogout}
                >
                  <strong>Logout</strong>
                </button>
              </li>
            ) : (
              // Render "Login" and "Register" when user is not logged in
              <>
                <li>
                  <NavLink
                    to="/login"
                    className="btn btn-ghost"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #faa82f, #e76115)",
                      border: "none",
                      marginRight: "3px",
                    }}
                  >
                    <strong>Login</strong>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/register"
                    className="btn btn-ghost"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #faa82f, #e76115)",
                      border: "none",
                    }}
                  >
                    <strong>Register</strong>
                  </NavLink>
                </li>
              </>
            )}
            {/* <Link to="/register"><strong>Register</strong></Link>
          <Link to="/login"><strong>Login</strong></Link> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
