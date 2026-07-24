import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function EditProfile() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        bio: "",
        github: "",
        linkedin: "",
        portfolio: "",
    });
const API = import.meta.env.VITE_API_URL;
    useEffect(() => {
        const fetchProfile = async () => {
            const res = await axios.get(
                `${API}/user/profile`,
                {
                    withCredentials: true,
                }
            );

            setFormData({
                name: res.data.user.name || "",
                bio: res.data.user.bio || "",
                github: res.data.user.github || "",
                linkedin: res.data.user.linkedin || "",
                portfolio: res.data.user.portfolio || "",
            });
        };

        fetchProfile();
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    //   const API = import.meta.env.VITE_API_URL;
    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.put(
              `${API}/user/profile`,
            formData,
            {
                withCredentials: true,
            }
        );

        navigate("/profile");
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 shadow mx-auto" style={{ maxWidth: "600px" }}>
                <h2>Edit Profile</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        className="form-control mb-3"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                    />

                    <textarea
                        className="form-control mb-3"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        placeholder="Bio"
                    />

                    <input
                        className="form-control mb-3"
                        name="github"
                        value={formData.github}
                        onChange={handleChange}
                        placeholder="GitHub URL"
                    />

                    <input
                        className="form-control mb-3"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleChange}
                        placeholder="LinkedIn URL"
                    />

                    <input
                        className="form-control mb-3"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleChange}
                        placeholder="Portfolio URL"
                    />

                    <button className="btn btn-primary w-100">
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
}

export default EditProfile;