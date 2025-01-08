import React from 'react'
import Heroes from '../component/Heroes'
import HomeCards from '../component/HomeCards'
import JobListings from '../component/JobListings'
import ViewAllJobs from '../component/ViewAllJobs'

function HomePage() {
  return (
    <>
    <Heroes/>
    <HomeCards/>
    <JobListings  isHome = {true}/>
    <ViewAllJobs/>

    </>
  )
}

export default HomePage