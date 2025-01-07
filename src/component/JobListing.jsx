import React from 'react'
import { useState } from 'react'



function JobListing({job}) {

    const[showFullDescription, setShowFullDescription] = useState(false);

    let description = job.description;

    if(!showFullDescription){
        description = description.substring(0, 90) + '...';
    }

  return (
    <>
    <div className="col" >
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{job.title}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{job.company.name}</h6>
              <p className="card-text">{description}</p>
              <button type="button" onClick={() => setShowFullDescription(!showFullDescription)} className="btn btn-link">{showFullDescription?'Less':'More'}</button>

              <a href={job.link} className="btn btn-dark">Apply</a>
            </div>
          </div>
        </div>
    </>
  )
}

export default JobListing