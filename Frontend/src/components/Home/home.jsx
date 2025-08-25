import "./home.css";
import Typed from "typed.js";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    const typed = new Typed("#element", {
      strings: [
        "<i >Connect</i>",
        "<i>Create</i>",
        "<i>Innovate</i>",
        "<i>Build</i>",
        "<i>Inspire</i>",

      ],
      typeSpeed: 80,
      loop: true,
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);
  return (
    <>
      <div className="homebg">
        <div className="leftHome">
          <span id="element" style={{ fontSize: '4rem' }}></span> <br />
          <p className="homeP">
            Share your ideas, collaborate with others, and bring amazing
            projects to life.
          </p>
          <br />
          <br />
          <button>Post Your Idea</button>
        </div>

        <div className="rightHome">
          <img src="./images/img.png" alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default Home;
