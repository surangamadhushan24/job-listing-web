import React from 'react'
import jobs from '../jobs.json'
import JobListing from './JobListing'

function JobListings() {

  const recentJobs = jobs.slice(0, 3)

  return (
    <>
    <div className="container-fluid bg-primary-subtle  py-5">
    <h2 className='fw-bold text-center mt-5 mb-3'>Browes jobs</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4 " >
     
      {recentJobs.map(job => (
        <JobListing key={job.id} job={job} />
        
      ))}

    </div>
    </div>
    </>
  )
}

export default JobListings