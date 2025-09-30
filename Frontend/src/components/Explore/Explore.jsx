import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./Explore.css";
const Explore = () => {
  const { id } = useParams(); // Get idea id from route

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
              <h5 className="card-title">{idea.title}</h5>
              <p className="card-text">{idea.description}</p>
              <Link to="/" className="btn btn-primary">Back to Home</Link>
            </div>
          </div>
                ))}
      </div>
  </>
  );
};

export default Explore;