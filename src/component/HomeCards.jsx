import React from 'react'
import Card from './Card';

function HomeCards() {
    return (
        <>
            <div className='row mt-5'>
                <div className='col-6'>
                    <Card>

                        <div className="card-body">
                            <h5 className="card-title">For Developers</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-primary">Browse Job</a>
                        </div>
                    </Card>
                </div>



                <div className='col-6'>
                    <Card >
                        <div className="card-body">
                            <h5 className="card-title">For Employers</h5>
                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" className="btn btn-dark">Add Job</a>
                        </div>
                    </Card>
                </div>
            </div>

        </>
    )
}

export default HomeCards;



