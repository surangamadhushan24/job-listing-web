import React from 'react'

function JobListing({job}) {
  return (
    <>
    <div className="col" >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{job.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{job.company.name}</h6>
              <p className="card-text">{job.description}</p>
              <a href={job.link} className="card-link">Apply</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default JobListing