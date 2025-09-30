import React, { use, useEffect } from 'react'
import "./myIdea.css"
import { useState } from 'react'


function myIdea() {
  // const [Ideas, setIdeas] = useState("")
 
  // useEffect(() => {
    
  //   return () => {
  //     second
  //   }
  // }, [])
  
  return (
   <>
   <div className=" myidea container">
    <h2>Your Ideas....</h2>
    <div className="myidea-card">
        <h3>Idea Title</h3>
        <button className='btn btn-primary'>View Details</button> 
        </div>
   </div>
   </>
  )
}

export default myIdea
