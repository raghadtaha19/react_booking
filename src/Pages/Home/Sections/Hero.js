import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <a href="#afterHeader" className="anchor">
        <img
          src="assets/images/scroll-arrow.svg"
          alt="Scroll down"
          className="scroll"
        />
      </a>

      <div className="container">
        <ol className="carousel-indicators">
          <li data-target="#hero" data-slide-to="0" className="active"></li>
          <li data-target="#hero" data-slide-to="1"></li>
          <li data-target="#hero" data-slide-to="2"></li>
        </ol>
      </div>

      <div className="carousel-inner">
        <div
          className="item active"
          style={{
            backgroundImage: 'url(https://tajcinemas.com/media/1886/the-creator.jpg?center=0.58727810650887569,0.71035940803382669&mode=crop&width=1440&height=665&rnd=133403009760000000)',
            padding: '115px',
          }}
        >
          <div className="container">
            <div
              className="row blurb scrollme animateme"
              data-when="exit"
              data-from="0"
              data-to="1"
              data-opacity="0"
              data-translatey="100"
            >
              <div className="col-md-9">
                <span className="title">Action, Adventure, Drama</span>
                <h1>The Creator</h1>
                <p>
                  Against the backdrop of a war between humans and robots with artificial intelligence, a former soldier finds the secret weapon, a robot in the form of a young child.
                </p>
                <div className="buttons">
                  <span className="certificate">PG</span>
                  <a
                    href="https://youtu.be/MAZuGdi32bk?si=P2jf7F3UVi8Xl0V8"
                    data-vbtype="video"
                    className="venobox btn btn-default"
                  >
                    <i className="material-icons">play_arrow</i>
                    <span>Play trailer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: 'url(https://tajcinemas.com/media/1887/13-exorcisms.jpg?crop=0,0.40975612046347326,0,0.27833018347648919&cropmode=percentage&width=1440&height=665&rnd=133403009640000000)',
            padding: '115px',
          }}
        >
          <div className="container">
            <div
              className="row blurb scrollme animateme"
              data-when="exit"
              data-from="0"
              data-to="1"
              data-opacity="0"
              data-translatey="100"
            >
              <div className="col-md-9">
                <span className="title">Horror, Thriller</span>
                <h1>13 Exorcisms</h1>
                <p>
                  After the strange behavior displayed by teenager Laura Villegas, her parents calls a Vatican-sanctioned exorcist to intervene in the case of demonic possession. From then on, a series of strange pheno.
                </p>
                <div className="buttons">
                  <span className="certificate">15</span>
                  <a
                    href="https://youtu.be/ucudqYg5OdQ?si=r8Wr1QU51YAjATjJ"
                    data-vbtype="video"
                    className="venobox btn btn-default"
                  >
                    <i className="material-icons">play_arrow</i>
                    <span>Play trailer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: 'url(https://tajcinemas.com/media/1888/the-kill-room.jpg?center=0.18906064209274673,0.48202959830866809&mode=crop&width=1440&height=665&rnd=133403009450000000)',
            padding: '115px',
          }}
        >
          <div className="container">
            <div
              className="row blurb scrollme animateme"
              data-when="exit"
              data-from="0"
              data-to="1"
              data-opacity="0"
              data-translatey="100"
            >
              <div className="col-md-9">
                <span className="title">Thriller</span>
                <h1>The Kill Room</h1>
                <p>
                  A hitman, his boss, an art dealer and a money-laundering scheme that accidentally turns the assassin into an overnight avant-garde sensation, one that forces her to play the art world against the unde
                </p>
                <div className="buttons">
                  <span className="certificate">PG</span>
                  <a
                    href="https://youtu.be/Urs2NSkxvEc?si=sa-AXWZ8OIIP_WGr"
                    data-vbtype="video"
                    className="venobox btn btn-default"
                  >
                    <i className="material-icons">play_arrow</i>
                    <span>Play trailer</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
