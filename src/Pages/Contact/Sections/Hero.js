import React from "react";

const Hero = () => {
  return (
    <div
      id="content_hero"
      style={{ backgroundImage: "url('assets/images/contactHero.jpg')", padding: '50px', }}
    >
      <div class="container">
        <div
          class="row blurb scrollme animateme"
          data-when="exit"
          data-from="0"
          data-to="1"
          data-opacity="0"
          data-translatey="100"
        >
          <div class="col-md-9">
            <span class="title">Have any questions?</span>
            <h1>Please contact us</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;