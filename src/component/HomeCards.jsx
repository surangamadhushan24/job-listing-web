import React from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

function HomeCards() {
    return (
        <>
            <div className='row mt-5'>
                <div className='col-6'>
                    <Card>

                        <div className="card-body">
                            <h5 className="card-title">For Developers</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/jobs" className="btn btn-primary">Browse Job</Link>
                        </div>
                    </Card>
                </div>



                <div className='col-6'>
                    <Card >
                        <div className="card-body">
                            <h5 className="card-title">For Employers</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <Link to="/add-jobs" className="btn btn-dark">Add Job</Link>
                        </div>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default HomeCards;



