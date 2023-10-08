import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

const History = () => {

	const userSession = JSON.parse(sessionStorage.getItem('myData'));
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the list of items when the component mounts
    axios
      .get("https://651c0dd4194f77f2a5af4f26.mockapi.io/movieBooking")
      .then((response) => setMovies(response.data))
      .catch((error) => console.error(error));
  }, []);

  const filteredData = movies.filter((item) => item.userID === userSession.id);

  return (
  
<div className="container section" style={{paddingTop:"1px"}}>
			<div className="row">
				<div className="col-sm-12" id="afterHeader">
					<h2>Your Booking</h2>
					{filteredData.map((movie) => {
						return (
							<div className="movie-slide col-md-4">
								<div className="movie-poster">
									<a href="#">
										<img
											src={movie.image}
											alt="Movie title"
											style={{width:"100%", height: '300px',borderRadius:'15px', margin:"10px" }}
                      className="profileimg"
										/>
									</a>
								</div >
                {/* <div className="row">
								<h4 style={{marginLeft: '15px', marginTop: '10px', fontWeight: 'bold'}} className="no-underline col-sm-4">{movie.nameMovie}</h4>
								<h4 style={{marginLeft: '15px', marginTop: '10px', fontWeight: 'bold' }} className="no-underline col-sm-3">{movie.status}</h4>
                </div> */}
							</div>
						);
					})}
				</div>
			</div>
		</div>
  )
}

export default History