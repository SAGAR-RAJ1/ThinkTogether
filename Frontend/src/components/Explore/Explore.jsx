//! Card Preview k code hai
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Explore.css";
const Explore = () => {
  const { id } = useParams(); // Get idea id from url °

  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    const fetchIdeas = async () => {
      try {
        const res = await fetch("http://localhost:3000/ideas");
        const data = await res.json();
        setIdeas(data);
      } catch (err) {
        console.error("Error fetching ideas:", err);
      }
    };
  
    fetchIdeas();
  }, []);

  return (
  <>
  <div className="container explore">
    <h2>Idea ...Detail</h2>
     {ideas.map((idea) => 
        idea._id.toString() === id.toString() && (
          <div key={idea._id} className="card mb-3">
            <img src={idea.image.url} className="explore-img card-img-top" alt={idea.title} />
            <div className="card-body">
              <h3 className="card-title mb-3">{idea.title}</h3>

              <p className="card-text">{idea.description}</p>

              <hr />

              <p>
                <strong>Posted By:</strong> {idea.owner?.name || idea.owner?.username || "Unknown"}
              </p>

              <p>
                <strong>Email:</strong> {idea.owner?.email || "Not Available"}
              </p>

              <p>
                <strong>Posted On:</strong>{" "}
                {idea.createdAt
                  ? new Date(idea.createdAt).toLocaleDateString()
                  : "Not Available"}
              </p>

              <div className="d-flex gap-2 mt-3 flex-wrap">
                {idea.owner?.github && (
                  <a
                    href={idea.owner.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-dark"
                  >
                    Visit GitHub
                  </a>
                )}

                {idea.owner?.email && (
                  <a
                    href={`mailto:${idea.owner.email}`}
                    className="btn btn-outline-primary"
                  >
                    Contact via Email
                  </a>
                )}

                <Link to="/" className="btn btn-primary">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
                ))}
      </div>
  </>
  );
};

export default Explore;