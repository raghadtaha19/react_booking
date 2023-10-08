import React from "react";

const Hero = () => {
    return (
      <div
        id="content_hero"
        style={{
          backgroundImage: "url('aboutus-YK7CZp3HF-transformed.png')",
            padding: '50px',
          }}      >
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
              <h1>About us</h1>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default Hero;