import React from 'react'
import { Link } from 'react-router-dom'


function ViewAllJobs() {
  return (
    <>
    <div className="container-fluid bg-primary-subtle  py-5 text-center">
    <Link to="/jobs" className="btn btn-primary">View All jobs</Link>
    </div>

    </>

  )
}

export default ViewAllJobs