import React from "react";

const MainFooter = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <h6>Get in touch</h6>
            <ul>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Give us feedback</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h6>About Movie star</h6>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Find us</a>
              </li>
              <li>
                <a href="#">Schedule</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h6>Legal stuff</h6>
            <ul>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookie policy</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h6>Connect with us</h6>
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="fa fa-facebook"></i> Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="fa fa-twitter"></i> Twitter
                </a>
              </li>
              <li>
                <a href="https://www.google.jo/?gws_rd=ssl">
                  <i className="fa fa-google-plus"></i> Google +
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>
            2023 &copy; Movie Star /{" "}
            <a href="http://www.klevermedia.co.uk">
             All right are save
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
