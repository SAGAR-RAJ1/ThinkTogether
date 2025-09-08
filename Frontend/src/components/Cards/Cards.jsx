import "./Cards.css";
import Idea from "../Idea/Idea";
import { useEffect, useState } from "react";

export default function Cards() {
  const [ideas, setIdeas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/ideas")
      .then((res) => res.json())
      .then((data) => setIdeas(data))
      .catch((err) => console.error("Error fetching ideas:", err));
  }, []);

  return (
    <>
      <div className="container mt-5 ">
        <h2 className="mb-5" id="ideaCont">
          The Featured Cards
        </h2>

        <hr />
        <br />
        <br />
        <div className="ideas">
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {ideas.length === 0 ? (
              <p><i>Loading ideas...</i></p>
            ) : (
              ideas
                .slice(0, 8)
                .map((idea) => (
                  <Idea
                    key={idea._id}
                    link={idea.image.url}
                    title={idea.title}
                    desc={idea.description}
                  />
                ))
            )}
          </div>
          {/* <Idea link="./images/img.png" title="sagar" desc="lore dkb ilbgeuwg ufduewug ucviwef7frgbxoug2oknkw bfii dfguofouuofubckubekuhvcueyvvcrogougbfougkvckiuefroyfgkehfku giu"/> */}
        </div>
      </div>
    </>
  );
}
