import React from "react";
import { useEffect, useState, useRef } from "react";
import { Button, Form } from "semantic-ui-react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useNavigate } from "react-router";


const Login = () => {
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
  const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [rememberMe, setRememberMe] = useState(false);

  const [storedData, setStoredData] = useState("");

  const [data, setData] = useState([]);

  const [message, setMessage] = useState("");
  const [message_pass, setMessage_pass] = useState("");

  let navigate = useNavigate();
  let currentPageUrl = window.location.href;
  const movieToBook = sessionStorage.getItem('movieToBook');
  const category = sessionStorage.getItem('category');

  useEffect(() => {
    // Check if the email matches the email regex
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    // Check if the password matches the password regex
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
  }, [pwd]);

  useEffect(() => {
    setErrMsg("");
  }, [pwd, email]);

  const handleLogin = () => {
    axios
      .get("https://651d753144e393af2d59d664.mockapi.io/users")
      .then((response) => {
        const data = response.data;
        const user = data.find(
          (item) => item.email === email && item.pwd === pwd
        );

        const user_log = data.find (
          (item) => item.email === email
        )

        if (user_log) {

          if (user_log.pwd === pwd) {
          console.log("Login successful");

          // Store the user data as a string in sessionStorage
          sessionStorage.setItem("myData", JSON.stringify(user));

          // Update the state to reflect the stored data
          setStoredData(user);
        //  const user = data.find(item => item.email === email && item.pwd === pwd);
        // window.location.href = "/";
        if (movieToBook) {
          sessionStorage.removeItem('movieToBook');
          navigate(`/allmovies/${category}/single/${movieToBook}`);
        } else {
          navigate(`/`);
        }

          }
        else {
          setMessage_pass('Invalid password. Please try again.');
          setPwd("")
          // setMessage_pass("");


        }
      } else {
        setMessage('Email not found. Please sign up.');
        setPwd("")

        setMessage_pass("");

      }})
      .catch((error) => {
        console.error("Error:", error);
        setMessage_pass("");


      });
  };

 


  return (
    <div className="half container_register">

      <div className="form_pading loginform ">
        <h3 className="mb-5">
          Login <strong>MovieStar</strong>
        </h3>
        
          {/* Display the message and a Sign Up button */}
          {message && (
            <div className="error_msg">
              <span className="">{message}</span>
              <a onClick={() => (window.location.href = "/register")}>
                Sign Up
              </a>
            </div>
          )}

           {/* Display the message and a Sign Up button */}
           {message_pass && (
            <div className="error_msg">
              <span className="">{message_pass}</span>
             
            </div>
          )}


        <Form onSubmit={handleLogin} className="Formlog">


          <div className="form-group first">
            <Form.Field>
              <label htmlFor="email">
                Email:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validEmail ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validEmail || !email ? "hide" : "invalid"}
                />
              </label>

              <input
                type="email"
                className="form-control"
                placeholder="your-email@gmail.com"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="emailnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
            </Form.Field>

            <p
              id="emailnote"
              className={
                emailFocus && email && !validEmail
                  ? "instructions"
                  : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Valid email address format required.
            </p>
          </div>

          <div className="form-group last mb-3">
            <Form.Field>
              <label htmlFor="password">
                Password:
                <FontAwesomeIcon
                  icon={faCheck}
                  className={validPwd ? "valid" : "hide"}
                />
                <FontAwesomeIcon
                  icon={faTimes}
                  className={validPwd || !pwd ? "hide" : "invalid"}
                />
              </label>

              <input
                type="password"
                className="form-control"
                placeholder="Your Password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
            </Form.Field>
            <p
              id="pwdnote"
              className={
                pwdFocus && pwd && !validPwd ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>
          </div>

          <div className="d-flex mb-10 align-items-center">
            <span className="ml-auto">
              <a href="#" className="forgot-pass">
                Forget your password ?
              </a>
            </span>
          </div>

          <Button
            type="submit"
            className="signup"
            disabled={!validPwd || !validEmail}
          >
            Log in
          </Button>

        
        </Form>
      </div>

      <div className="logbg image">
        <img
          src="close-up-popcorn-near-clapperboard-film-bobbin.jpg"
          alt="Cinema"
        ></img>
      </div>

      {/* <div className="col-md-6">
        <img className="signupimg " src="cinema.jpg" alt="Cinema" />
      </div> */}
    </div>
  )
  ;
}

export default Login;
