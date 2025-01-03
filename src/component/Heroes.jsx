import React from 'react'

function Heroes({title="Become a software engineer",subtitle='Find the job that fit your skill set'}) {
    return (
        <>

            <div className="jumbotron jumbotron-fluid bg-primary text-white d-flex justify-content-center align-items-center" style={{ height: "250px" }}>
                <div className="container text-center">
                    <h1 className="display-4">{title}</h1>
                    <p className="lead">{subtitle}</p>
                </div>
            </div>


        </>

    )
}

export default Heroes