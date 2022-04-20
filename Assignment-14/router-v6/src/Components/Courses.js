import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Courses = () => {
    return (
        <div className='container'>
            <h1>My Courses</h1>
            <p className='lead'>
                These are the details about all of our courses and bundles.
            </p>
            <Link className='btn btn-primary me-2' to='/courses/allcourses'>Courses</Link>
            <Link className='btn btn-danger' to='/courses/bundles'>Bundles</Link>
            <Outlet />
        </div>
    )
}

export default Courses
