import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await axios.get(
                    "http://localhost:3000/user/profile",
                    {
                        withCredentials: true,
                    }
                );

                setUser(res.data.user);
            } catch (err) {
                console.log(err);
            }
        };

        fetchProfile();
    }, []);

    if (!user) {
        return <h2>Loading...</h2>;
    }

   return (
  <div className="container mt-5">
    <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "700px" }}>
      <div className="text-center">

        <img
          src={
            user.profileImage ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png"
          }
          alt="Profile"
          className="rounded-circle mb-3"
          width="140"
          height="140"
        />

        <h2>{user.name || "No Name"}</h2>
        <p className="text-muted">@{user.username}</p>
      </div>

      <hr />

      <h5>Email</h5>
      <p>{user.email}</p>

      <h5>Bio</h5>
      <p>{user.bio || "No bio added yet."}</p>

      <h5>GitHub</h5>
      <p>{user.github || "Not Added"}</p>

      <h5>LinkedIn</h5>
      <p>{user.linkedin || "Not Added"}</p>

      <h5>Portfolio</h5>
      <p>{user.portfolio || "Not Added"}</p>

      <div className="d-flex gap-2 mt-4">

        {user.github && (
          <a
            href={user.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-dark"
          >
            GitHub
          </a>
        )}

        {user.linkedin && (
          <a
            href={user.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            LinkedIn
          </a>
        )}

        {user.portfolio && (
          <a
            href={user.portfolio}
            target="_blank"
            rel="noreferrer"
            className="btn btn-success"
          >
            Portfolio
          </a>
        )}

      </div>

      <button className="btn btn-warning mt-4">
        Edit Profile
      </button>

    </div>
  </div>
);
}

export default Profile;