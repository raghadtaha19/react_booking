import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';

const MovieDetails = () => {
	const [movies, setMovies] = useState([]);
	const { id } = useParams();
	const { typeid } = useParams();

	let navigate = useNavigate();
	useEffect(() => {
		axios
			.get(`https://651d8b9844e393af2d59fb79.mockapi.io/types/${typeid}/movies/${id}`)
			.then((response) => {
				setMovies(response.data);
			});
	}, [id]);
	const handleBooking = () => {
		const userData = JSON.parse(sessionStorage.getItem('myData'));
		const isLoggedIn = userData ? true : false;

		if (isLoggedIn) {
			// Show a sweet alert to confirm the booking
			Swal.fire({
				title: 'Confirm Booking',
				text: 'Are you sure you want to book this movie?',
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Yes, book it!',
				cancelButtonText: 'Cancel'
			}).then((result) => {
				if (result.isConfirmed) {
					// User confirmed the booking
					axios
						.post('https://651c0dd4194f77f2a5af4f26.mockapi.io/movieBooking', {
							nameMovie: movies.name,
							status: 'booked',
							image: movies.image,
							bookingDate: new Date().toISOString(),
							movieID: id,
							userID: userData.id,
						})
						.then((response) => {
							console.log('Booking successful!', response.data);
							Swal.fire('Booking Successful', 'Your movie has been booked!', 'success');
						})
						.catch((error) => {
							console.error('Error booking the movie:', error);
							Swal.fire('Booking Failed', 'There was an error while booking.', 'error');
						});
				} else {
					// User canceled the booking
					Swal.fire('Booking Canceled', 'Your booking has been canceled.', 'info');
				}
			});
		} else {
			sessionStorage.setItem('movieToBook', id);
			sessionStorage.setItem('category', typeid);
			navigate('/login');
		}
	};
	return (
		<div class="container section single-movie">
			<div class="row">
				<div class="col-sm-7">
					<h2>Synopsis</h2>
					<div class="row">
						<div class="col-sm-5">
							<img src={movies.image} alt="Transformers: The Last Knight" class="poster" />
						</div>
						<div class="col-sm-7">
							<h3 class="no-underline">{movies.name}</h3>
							<p>{movies.description}</p>
							<ul class="movie-info">
								<li><i>Director</i> Michael Bay</li>
								<li><i>Starring</i> Mark Wahlberg, Anthony Hopkins</li>
								<li><i>Release date</i> 23 June 2017</li>
								<li><i>Running time</i> 114 mins</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="col-sm-4 col-sm-push-1">
					<h2>Viewing times</h2>
					<ul className="show-times">
						{movies.showtimes && movies.showtimes.map((showtime, index) => (
							<li key={index}>
								<i>{showtime.day}</i>
								{showtime.time.map((time, timeIndex) => (
									<input onClick={handleBooking} className="time" key={timeIndex} style={{ border: 'none' }} type='submit' value={time} />
								))}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
