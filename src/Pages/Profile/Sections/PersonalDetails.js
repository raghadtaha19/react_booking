import React, { useState, useEffect } from "react";
import { Button, Form, FormField } from "semantic-ui-react";
import axios from "axios";

const PersonalDetails = () => {
  const [userData, setUserData] = useState({
    user: "",
    email: "",
    phone: "",
  });

  const userSession = JSON.parse(sessionStorage.getItem('myData'));
  const [editingID, setEditingID] = useState(userSession.id);
  const [editingUser, setEditingUser] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // Fetch the user data when the component mounts
    axios
      .get(`https://651d753144e393af2d59d664.mockapi.io/users/${editingID}`)
      .then((response) => setUserData(response.data))
      .catch((error) => console.error(error));
  }, [editingID]);

  const handleEditUser = (user) => {
    setEditingUser(user);
  };

  const handleUpdateUser = () => {
    const updatedUserData = {
      ...userData,
      image: imageUrl?imageUrl:undefined,
    };

    axios
      .put(
        `https://651d753144e393af2d59d664.mockapi.io/users/${editingID}`,
        updatedUserData
      )
      .then((response) => {
        setUserData(response.data);
        setEditingUser(null);
        // Clear the image URL after updating
        setImageUrl("");
      })
      .catch((error) => console.error("Error updating user:", error));
  };
  return (
    <>
      <div className="container section single-movie">
        <div className="row">
          <Form>
            <div className="col-sm-4">
              <h2>Personal Information</h2>
              <div className="row">
                <div>
                  <img
                    src={userData.image}
                    className="GabrielNorrisImage"
                    alt="image"
                    width="300px"
                    style={{ marginLeft: '40px', height: '250px' }}
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-sm-push-1">
              <h2>Your Profile</h2>

              <div className="form-group">
                <Form.Field>
                  <label>Name: </label>
                  <input
                    type="text"
                    placeholder="enter your name"
                    value={userData.user}
                    readOnly
                    style={{ width: '655px' }}

                  />
                </Form.Field>
              </div>
              <div className="form-group">
                <FormField>
                  <label>Email:</label>
                  <input
                    type="email"
                    placeholder="enter your email"
                    value={userData.email}
                    readOnly
                    style={{ width: '655px' }}
                  />
                </FormField>
              </div>
              <div className="form-group">
                <FormField>
                  <label>Phone:</label>
                  <input
                    type="text"
                    placeholder="enter your phone"
                    value={userData.phone}
                    readOnly
                    style={{ width: '655px' }}
                  />
                </FormField>
              </div>

              <div className="form-group right-align">
                <Button
                  className="btn btn-ghost"
                  type="submit"
                  onClick={() => handleEditUser(userData)}
                >
                  Edit Information
                </Button>
              </div>
            </div>
          </Form>
        </div>

        {editingUser && (
          <div className="edit-section">
            <Form>
              <h2>Edit User</h2>
              <FormField>
                <input
                  type="text"
                  placeholder="enter your name"
                  value={userData.user}
                  onChange={(e) =>
                    setUserData({ ...userData, user: e.target.value })
                  }
                />
              </FormField>
              <FormField>
                <input
                  type="text"
                  placeholder="enter your email"
                  value={userData.email}
                  onChange={(e) =>
                    setUserData({ ...userData, email: e.target.value })
                  }
                />
              </FormField>

              <FormField>
                <input
                  type="text"
                  placeholder="enter your phone number"
                  value={userData.phone}
                  onChange={(e) =>
                    setUserData({ ...userData, phone: e.target.value })
                  }
                />
              </FormField>
              <FormField>
                {/* <label>Profile Image URL:</label> */}
                <input
                  type="text"
                  placeholder="enter image URL"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </FormField>
              <Button
                className="btn btn-ghost"
                onClick={handleUpdateUser}
                style={{ marginTop: "10px" }}
                disabled={!userData.user || !userData.email || !userData.phone}
              >
                Update
              </Button>
            </Form>
          </div>
        )}
      </div>
    </>
  );
};

export default PersonalDetails;
