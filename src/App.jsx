import React from 'react';
import Navbar from './component/Navbar';
import Heroes from './component/Heroes';
import HomeCards from './component/HomeCards';
import JobListings from './component/JobListings';




function App() {
    return (
        <>
        <Navbar />
        <Heroes  />
        <HomeCards/>
        <JobListings/>
        
        </>
    );
}

export default App;