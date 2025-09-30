import React from "react";
import { useEffect, useState } from "react";
import Idea from "../IdeaCard/Idea";

function Ideaspage() {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/ideas")
      .then((res) => res.json())
      .then((data) => setIdeas(data))
      .catch((err) => console.error("Error fetching ideas:", err));
  }, []);
  return (
    <>
      <h4
        style={{ textAlign: "center", background: "#085ED7", color: "white" }}
        className="p-4 fs-2"
      >
        <b style={{ background: "transparent" }}>All Ideas</b>
      </h4>

      <div
        className="container"
        style={{ border: "2px solid blue", height: "auto",borderTopLeftRadius:'10px',borderTopRightRadius:'10px', marginTop:'50px', borderBottom: "none", }}
      >
        {ideas.length === 0 ? (
          <p>
            <i>Loading ideas...</i>
          </p>
        ) : (
          <div className="container d-flex flex-wrap justify-content-center gap-4 my-4">
            {ideas.map((idea) => (
              <Idea
                key={idea._id}
                id={idea._id}
                link={idea.image.url}
                title={idea.title}
                desc={idea.description}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Ideaspage;
