import React from 'react'
import './PostIdea.css'

function PostIdea() {
  return (

    <div  className="container postIdea">
        <h3>ENTER DETAILS</h3>

        <form action="http://localhost:3000/ideas" method="post" className='needs-validation' >
            <input type="text" name="title" id="title" placeholder='Title' required />
            <textarea name="description" id="description" cols="30" rows="10" placeholder='Description' required></textarea>
            <input type="text" name="image" id="image" placeholder='Url' required />
            <button type="submit">Add</button>    

        </form>

    </div>

  )
}

export default PostIdea
