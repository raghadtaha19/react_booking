import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { id } = useParams();
  const userSession = JSON.parse(sessionStorage.getItem('myData'));
  const [reviews, setReviews] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [newRating, setNewRating] = useState("");
  const [newMovieId, setMovieId] = useState(id);
  // const [newUserId, setUserId] = useState(1);
  const [newUserName, setUserName] = useState();
  const [newUserImage, setUserImage] = useState();



  const [ratingError, setRatingError] = useState("");
  const ratingRegex = /^[1-5]$/;

  const [movies, setMovies] = useState([]);
  const { typeid } = useParams();
  // const { id } = useParams();

  useEffect(() => {
  
    axios
      .get(`https://651d8b9844e393af2d59fb79.mockapi.io/types/${typeid}/movies/${id}`)
      .then((response) => {
        setMovies(response.data);
      });
  }, [id]);


  useEffect(() => {
    // Fetch the list of items when the component mounts
    axios
      .get("https://651c0dd4194f77f2a5af4f26.mockapi.io/review")
      .then((response) => setReviews(response.data))
      .catch((error) => console.error(error));
  }, []);

  const addItem = () => {

    if (!ratingError ) {
      // Form is valid, proceed with submission
      // Send a POST request to create a new item
      axios
        .post("https://651c0dd4194f77f2a5af4f26.mockapi.io/review", {
          review: newComment,
          rating: newRating,
          // userID: newUserId,
          movieID: newMovieId,
          userName: userSession.user,
          userImage: userSession.image,
        })
        .then((response) => {
          setReviews([...reviews, response.data]);
          setNewComment("");
          setNewRating("");
        })
        .catch((error) => console.error(error));
        
    } else {
      console.log("Form is not valid");
    }
  };

  const handleStarClick = (starValue) => {
    setNewRating(starValue);
  };

  // Filter the review based on the movie id
  const filteredData = reviews.filter((item) => item.movieID === id);

  return (
    <>
      <div className="container section single-movie">
        <div className="row">
          <div className="col-sm-7">
            <h2>Comments</h2>
            <div className="comments">
              {filteredData.map((review) => (
                <div className="row" key={review.id}>
                  <div className="col-sm-2">
                    <img
                      src={review.userImage}
                      className="Luke Barrett"
                      alt="avatar"
                    />
                  </div>
                  <div className="col-sm-9">
                    <span className="date">{review.createdAt}</span>
                    <h4 className="no-underline">{review.userName}</h4>

                    <div className="star-rating">
                      {[1, 2, 3, 4, 5].map((starValue) => (
                        <span
                          key={starValue}
                          className={`star ${starValue <= review.rating ? "active" : ""
                            }`}
                          onClick={() => handleStarClick(starValue)}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p>{review.review}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-sm-4 col-sm-push-1">
            <h2>Leave a comment</h2>
            <Form>
              <div className="form-group">
                <Form.Field>
                  <label>Review *</label>
                  <input
                    type="text"
                    placeholder="New Review"
                    value={newComment}
                    pattern="^[A-Za-z]+$"
                    onChange={(e) => setNewComment(e.target.value)}
                    style={{ width:"100%" }}
                  />
                </Form.Field>

                <Form.Field>
                  <label>Rating *</label>
                  <input
                    type="number"
                    placeholder="Rating"
                    min={1}
                    max={5}
                    style={{ borderRadius:"5px" }}
                    value={newRating}
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setNewRating(inputValue);
                      if (!ratingRegex.test(inputValue)) {
                        setRatingError("Please enter a Rating between 1 and 5");
                      } else {
                        setRatingError("");
                      }
                    }}
                  />
                  {ratingError && (
                    <div className="error text-danger">{ratingError}</div>
                  )}
                </Form.Field>

                {/* <Form.Field>
                  <input
                    type="number"
                    value={newUserId}
                    hidden
                    onChange={(e) => setUserId(e.target.value)}
                  />
                </Form.Field> */}

                <Form.Field>
                  <input
                    type="number"
                    value={newMovieId}
                    hidden
                    onChange={(e) => setMovieId(e.target.value)}
                  />
                </Form.Field>

                <Form.Field>
                  <input
                    type="number"
                    value={newUserName}
                    hidden
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    type="text"
                    value={newUserImage}
                    hidden
                    onChange={(e) => setUserImage(e.target.value)}
                  />
                </Form.Field>
                <Form.Field>
                  <input
                    type="number"
                    value={newMovieId}
                    hidden
                    onChange={(e) => setUserImage(e.target.value)}
                  />
                </Form.Field>
              </div>

              <div className="form-group right-align">
                <Button
                  className="btn btn-ghost"
                  type="submit"
                  disabled={!newComment || !newRating || ratingError || !userSession}
                  onClick={addItem}
                >
                  Add Comment
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <div className="section small-padding border-top">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 cta">
              <p>Need help? Contact our support team on</p>
              <p className="gradient-text">0330 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
