import React from 'react'
import {Link, useNavigate, useParams } from 'react-router-dom'

const SingleCourse=()=>{
    const {id}=useParams();
    const navigate=useNavigate();
    
    return (
        <div className='card'>
             <div className='card-body'>
                <h5 className='card-title'>Course Name</h5>
                <p className='card-text'>{id}</p>
                <a onClick={()=>navigate("/dashboard",{state:id})}
                class="card-link">More Info</a>
                <Link to="/dashboard" state={"ReactJS Testing"}
                class="card-link">Test Course</Link>
             </div>
        </div>
    )
}
export default SingleCourse