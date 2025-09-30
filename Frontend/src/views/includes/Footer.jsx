function Footer() {
  return (
    <div>
    <footer className="footer " style={{display:"block"}}>
      <br /><br />
      <hr />
      <h6 style={{textAlign:"center",marginTop:"60px"}}>&copy; 2025 Sagar Raj. All rights reserved.</h6>
      <div className="social-icons  mt-3 p-2" style={{textAlign:"center"}}>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="mx-2 fs-3 ">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="mx-2 fs-3 ">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="mx-2 fs-3">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
    </footer>    </div>
  )
}

export default Footer
