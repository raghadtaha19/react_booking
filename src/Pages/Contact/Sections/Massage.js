import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import Modal from "react-modal";

Modal.setAppElement("#root");

const Massage = () => {
  const [Massage, setMassage] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const nameRegex = /^[A-Za-z]{2,}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const sendEmail = () => {
    if (!nameError && !emailError) {
      axios
        .post("https://64ba9cdb5e0670a501d67185.mockapi.io/contact", {
          name: name,
          email: email,
          message: message,
        })
        .then((response) => {
          setMassage([...Massage, response.data]);
          setName("");
          setEmail("");
          setMessage("");
          openModal(); // Show the modal when the message is sent
        })
        .catch((error) => console.error(error));
    } else {
      console.log("Form is not valid");
    }
  };

  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    content: {
      position: "static",
      background: "white",
      padding: "20px",
      borderRadius: "5px",
      boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
      textAlign: "center",
      maxWidth: "400px",
      width: "100%",
    },
  };

  return (
    <>
      <div class="container section negative-margin contact">
        <div class="row">
          <div class="col-sm-12">
            <h2>Send a message</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <Form>
              <div class="form-group">
                <Form.Field>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    // onChange={(e) => setName(e.target.value)}

                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setName(inputValue);
                      if (!nameRegex.test(inputValue)) {
                        setNameError("Please enter a valid name");
                      } else {
                        setNameError("");
                      }
                    }}
                  />

                  {nameError && (
                    <div className="error text-danger">{nameError}</div>
                  )}
                </Form.Field>
              </div>

              <div class="form-group">
                <Form.Field>
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder="example@example.com"
                    value={email}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setEmail(inputValue);
                      if (!emailRegex.test(inputValue)) {
                        setEmailError("Please enter a valid email");
                      } else {
                        setEmailError("");
                      }
                    }}
                  />

                  {emailError && (
                    <div className="error text-danger">{emailError}</div>
                  )}
                </Form.Field>
              </div>

              <div class="form-group">
                <Form.Field>
                  <label>Message</label>
                  <textarea
                    rows="5"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </Form.Field>
              </div>

              <div class="form-group right-align">
                <Button
                  className="btn btn-ghost"
                  type="submit"
                  disabled={
                    !name || !email || !message || nameError || emailError
                  }
                  onClick={sendEmail}
                >
                  Send message
                </Button>
              </div>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Message Sent"
                style={modalStyle}
              >
                <h2>Message Sent</h2>
                <p>Your message has been sent successfully.</p>
                <Button
                  className="btn btn-ghost"
                  style={{ color: "white", backgroundColor: "#e76115" }}
                  onClick={closeModal}
                >
                  Close
                </Button>
              </Modal>
            </Form>
          </div>
          <div class="col-sm-5 col-sm-push-1">
            <div class="icon-row">
              <div class="col">
                <span class="circle">
                  <i class="material-icons">place</i>
                </span>
              </div>
              <div class="col">
                <h4 class="no-underline">Address</h4>
                <p>342 Sloane St, London, W1D 3NE</p>
              </div>
            </div>
            <div class="icon-row">
              <div class="col">
                <span class="circle">
                  <i class="material-icons">email</i>
                </span>
              </div>
              <div class="col">
                <h4 class="no-underline">Email</h4>
                <p>info@moviestar.co.uk</p>
              </div>
            </div>
            <div class="icon-row">
              <div class="col">
                <span class="circle">
                  <i class="material-icons">phone in talk</i>
                </span>
              </div>
              <div class="col">
                <h4 class="no-underline">Telephone</h4>
                <p>+44 0330 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="section small-padding border-top">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 cta">
              <p>Need help? Contact our support team on</p>
              <p class="gradient-text">0330 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Massage;
