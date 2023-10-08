import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from "react-router-dom";

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [types, setTypes] = useState([]);
    const { typeid } = useParams();
    const [selectedDay, setSelectedDay] = useState(''); // Initial day
    const [availableDays, setAvailableDays] = useState([]);

    useEffect(() => {
        axios
            .get(`https://651d8b9844e393af2d59fb79.mockapi.io/types/${typeid}/movies`)
            .then((response) => {
                setMovies(response.data);

                // Extract unique showtime days from movie data
                const uniqueDays = Array.from(
                    new Set(
                        response.data.flatMap((movie) =>
                            movie.showtimes.map((showtime) => showtime.day)
                        )
                    )
                );
                setAvailableDays(uniqueDays);
                setSelectedDay(uniqueDays[0] || ''); // Set the initial day to the first available day
            });
    }, [typeid]);

    useEffect(() => {
        axios
            .get(`https://651d8b9844e393af2d59fb79.mockapi.io/types/${typeid}`)
            .then((response) => {
                setTypes(response.data);
            });
    }, [typeid]);

    // Function to filter showtimes based on selected day
    const filterShowtimesByDay = (movie) => {
        return movie.showtimes.filter((showtime) => showtime.day === selectedDay);
    };

    return (
        <div className="container section negative-margin">
            <div className="row">
                <div className="col-sm-12">
                    <div className="live-search">
                        <input type="text" id="search" placeholder="Type to search" />
                        <i className="material-icons">search</i>
                    </div>

                    <div className="tabs movies">
                        <div>
                            {movies.map((data) => {
                                const filteredShowtimes = filterShowtimesByDay(data);

                                return (
                                    <div className="row movie-tabs" key={data.id}>
                                        <div className="col-md-2 col-sm-3">
                                            <a href="single-movie.html">
                                                <img src={data.image} alt="Movie title" />
                                            </a>
                                        </div>
                                        <div className="col-md-10 col-sm-9">
                                            <span className="title">{types.name}</span>
                                            <h3 className="no-underline">{data.name}</h3>
                                            <p>{data.description}</p>
                                            <div className='col-md-6'>
                                                <label>Available days</label>
                                                <select
                                                    className='form-control'
                                                    value={selectedDay}
                                                    onChange={(e) => setSelectedDay(e.target.value)}
                                                >
                                                    {availableDays.map((day, index) => (
                                                        <option key={index} value={day}>
                                                            {day}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>
                                            <div className='row'>
                                                <div className="col-md-8 col-sm-9">
                                                    <hr className="space-10" />
                                                    <span className="viewing-times">
                                                        <i className="material-icons">access_time</i>
                                                        Viewing times
                                                    </span>
                                                    {filteredShowtimes.map((showtime, index) => (
                                                        <div key={index}>
                                                            {showtime.time.map((time, timeIndex) => (
                                                                <span key={timeIndex} className="time past">
                                                                    {time}
                                                                </span>

                                                            ))}
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className="col-md-6">
                                                    <Link
                                                        className='btn btn-primary'
                                                        style={{ color: 'white', marginTop: '20px' }}
                                                        to={`/allmovies/${types.id}/single/${data.id}`}
                                                    >
                                                        Book Now
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
