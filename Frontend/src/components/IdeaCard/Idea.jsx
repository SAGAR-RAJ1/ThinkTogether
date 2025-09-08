import { Link } from "react-router-dom"
import "./Idea.css"
export default function Idea({link,desc,title}) {
  return (
    <div>
   <div className="card border-2" style={{ width: "18rem" }}>
  <img src={link} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{desc}</p>
    <div style={{display:"flex" ,flexDirection:"column",padding:"5px",gap:"10px"}}>

    <Link to="/explore" className="btn btn-primary">Explore</Link>

    </div>
  </div>
</div>
  
      
    </div>
  )
}
