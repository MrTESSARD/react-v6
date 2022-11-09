import React from 'react'

const Tutorials=(props)=>{
    console.log(props)//history push
    setTimeout(() => {
      
        props.history.push("/")
    }, 5000);

    return(
        <div className="container mt-3">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Oups</strong> This page in under construction.
                You will be redirecter to the Docs page in 5 seconds.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <h1>Tutoriel : intro à React</h1>


        </div>
    )
}

export default Tutorials