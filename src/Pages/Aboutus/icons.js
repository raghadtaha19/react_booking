import React from 'react';

const Icons = () => {
  return (
    <>
      {/* Section */}
      <div className="container section achievements">
        <div className="row">
          <div className="col-sm-12">
            <h2>Our Achievements</h2>
            <hr className="space-40" />
            <div className="row">
              <div className="col-sm-4">
                <div className="icon-box">
                  <i className="material-icons">star</i>
                  <h4>Upcoming Features</h4>
                  <p  >
                    We are constantly working to enhance your cinema experience. Stay tuned for exciting upcoming features that will make booking tickets even easier and more convenient.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="icon-box">
                  <i className="material-icons">event_note</i>
                  <h4>Special Events</h4>
                  <p >
                    In the near future, we plan to host special events, exclusive screenings, and movie premieres. Join us for these memorable cinema moments.
                  </p>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="icon-box">
                  <i className="material-icons">movie</i>
                  <h4>Rewards Program</h4>
                  <p >
                    We're working on a rewards program that will offer you fantastic perks and discounts for your loyalty. Watch out for updates on this exciting program.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section */}
      <div className="container section history">
  <div className="row">
  <h2>Our Journey</h2>
      <hr className="space-40" />
    <div className="col-sm-6">
      
      
      <img src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" width="700px" alt="" />
    </div>
    <div className="col-sm-6">
      <h2  style={{ marginTop: '70px' }} className="no-underline">From Inception to Innovation</h2>
      <p className='about' style={{ marginTop: '65px' }}>
        Our journey began with a vision – to simplify the process of booking cinema tickets and create an exceptional movie-going experience. Over the years, we have evolved and grown, thanks to the support and trust of our loyal customers.
        We started as a small team of movie enthusiasts and developers, and today, we are proud to offer a user-friendly platform that brings cinema closer to you. We have continually added new features, improved our services, and expanded our movie selection.
      </p>
      
    </div>
  </div>
</div>

    </>
  );
};

export default Icons;