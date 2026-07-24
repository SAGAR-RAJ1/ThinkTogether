//! It shows all your ideas that you have posted
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./myIdea.css";
import Idea from "../IdeaCard/Idea";

function MyIdea() {
  const [ideas, setideas] = useState("");
  const API = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchMyIdeas = async () => {
      try {
        const res = await axios.get(`${API}/ideas/my`, {
          withCredentials: true,
        });

        setideas(res.data.ideas);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMyIdeas();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/ideas/${id}`, {
        withCredentials: true,
      });

      setideas((prev) => prev.filter((idea) => idea._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container mt-5 ">
        <h2 className="mb-5" id="ideaCont">
          My Ideas
        </h2>{" "}
        <hr /> <br /> <br />
        <div className="ideas">
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {ideas.length === 0 ? (
              <p>
                <i style={{background:"#F5F5F5"}}>Add Some Ideas First...</i>
              </p>
            ) : (
              ideas.map((idea) => (
                <div key={idea._id} className="d-flex flex-column align-items-center">
                  <Idea
                    link={idea.image.url}
                    title={idea.title}
                    desc={idea.description}
                    id={idea._id}
                  />

                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => handleDelete(idea._id)}
                  >
                    Delete
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyIdea;
