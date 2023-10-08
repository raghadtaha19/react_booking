import React from "react";
import { useEffect, useState, useRef } from "react";
import { Button,  Form } from "semantic-ui-react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PHONE_REGEX = /^(079|077|078)\d{7}$/;

function Register() {
  // const [APIData, setAPIData] = useState([]);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  // the false mean return boolean
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [phone, setPhone] = useState("");
  const [validPhone, setValidPhone] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // focus on the HTML element referenced by userRef
  useEffect(() => {
    userRef.current.focus();
  }, []);

  // this mean each time change the user its check the validation
  useEffect(() => {
    // chick if the user write his user name according to the user regix
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidUser(result);
  }, [user]);

  useEffect(() => {
    // chick if the user write his user name according to the user regix
    const result = EMAIL_REGEX.test(email);
    console.log(result);
    console.log(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    // chick if the passwored matched according to the pwd regix
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    //  updates the state variable validPwd with the value of result
    setValidPwd(result);
    // checks if the value of pwd is equal to the value of matchPwd
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    // chick if the user write his user name according to the user regix
    const result = PHONE_REGEX.test(phone);
    console.log(result);
    console.log(phone);
    setValidPhone(result);
  }, [phone]);

  // this for the error message if the user enter wrong info
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd, email, phone]);

  
  const handleSubmit = () => {
    axios.post('https://651d753144e393af2d59d664.mockapi.io/users', { user, pwd, email, phone})
      // .then(response => {
      //   console.log('Created:', response.data);
     
      // })
      .then(response => {
     console.log('Created:', response.data);

        // setReviews([...reviews, response.data]);
        setUser("");
        setEmail("");
        setPwd("");
        setPhone("");
        setMatchPwd("");

        window.location.href = '/login';
        
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
      });
  }
  

  return (
    <div className="half container_register">
      
     
            
              <div className="form_pading form">
                <h3 className="mb-5">
                  Sign Up <strong>MovieStar</strong>
                </h3>
              
                <p
                  ref={errRef}
                  className={errMsg ? "errmsg" : "offscreen"}
                  aria-live="assertive"
                >
                  {" "}
                  {errMsg}{" "}
                </p>
                <Form onSubmit={handleSubmit} className="Formlog">
                  <div className="form-group first">
                  <Form.Field>
                    <label htmlFor="username">
                      Username
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validUser ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validUser || !user ? "hide" : "invalid"}
                      />
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Name"
                      id="username"
                      // userref this to focus on user input
                      ref={userRef}
                      autoComplete="off"
                      onChange={(e) => setUser(e.target.value)}
                      value={user}
                      required
                      // If validUser is true, it means that the content in the associated input field is valid. In this case, aria-invalid is set to "false", indicating that the content is not invalid.
                      // the aria-invaid to indicate whether an input field or element contains invalid data.
                      aria-invalid={validUser ? "false" : "true"}
                      aria-describedby="uidnote"
                      // uidnote this is id for another element
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                    </Form.Field>
                    <p
                      id="uidnote"
                      className={
                        userFocus && user && !validUser
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 characters.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters, numbers, underscores, hyphens allowed.
                    </p>
                  </div>

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
                        pwdFocus && pwd && !validPwd
                          ? "instructions"
                          : "offscreen"
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
                  <div className="form-group last mb-3">
                  <Form.Field>
                    <label htmlFor="confirm_pwd">
                      Confirm Password:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      />
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder=" Confirm Your Password"
                      id="confirm_pwd"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => setMatchFocus(true)}
                      onBlur={() => setMatchFocus(false)}
                    />
                    </Form.Field>
                    <p
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Must match the first password input field.
                    </p>
                  </div>

                  <div className="form-group last mb-3">
                  <Form.Field>
                    <label htmlFor="phone">
                      Phone Number:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validPhone ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validPhone || !phone ? "hide" : "invalid"}
                      />
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your phone number"
                      id="phone"
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      required
                      aria-invalid={validPhone ? "false" : "true"}
                      aria-describedby="phoneNote"
                      onFocus={() => setPhoneFocus(true)}
                      onBlur={() => setPhoneFocus(false)}
                    />
                    </Form.Field>

                    <p
                      id="phoneNote"
                      className={
                        phoneFocus && phone && !validPhone
                          ? "instructions"
                          : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Enter a valid phone number
                    </p>
                  </div>

                  <div className="d-flex mb-10 align-items-center">
                    <span className="ml-auto">
                      <a href="/login" className="forgot-pass">
                        Already a member?Log in
                      </a>
                    </span>
                  </div>
                  {/* <input
                    type="submit"
                    value="Sign UP"
                    className="btn btn-block btn-primary"
                  /> */}
                  <Button
                    type="submit"
                    className="signup"
                    disabled={
                      !validUser ||
                      !validPwd ||
                      !validMatch ||
                      !validPhone ||
                      !validEmail
                    }
                  >
                    Sign Up
                  </Button>
                </Form>
              </div>
            

        <div
        className="logbg image">
        
        <img src="cinema.jpg"   alt="Cinema"></img> 
        </div>
      
      {/* <div className="col-md-6">
        <img className="signupimg " src="cinema.jpg" alt="Cinema" />
      </div> */}
      </div>
    
  );
};

export default Register;
