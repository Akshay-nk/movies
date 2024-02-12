import React, { useEffect, useState } from 'react'
import './movie.css'

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
  } from 'mdb-react-ui-kit';
import axios from 'axios';

function Movie() {
 
    const API_key = "dbf0391c";

    const [search, setSearch] = useState('');
    
    const [movie, setMovie] = useState(null);
    const [eror,setErr]=useState(false)
    
    
  
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.omdbapi.com/?t=${search}&apikey=${API_key}`
        );
        console.log(response.data);
        setMovie(response.data);
        
        
      } catch (err) {
        if (err.response && err.response.status === 404) {
          // movie not found error
          
          setErr(true)
          alert(eror)
          
        } else {
          // Other errors ()
          console.error("Movie API Error:", err);
          setErr(true)
          alert(err)
          
        }
        setMovie(null); // Reset data on error
      }
    };  



    


  return (
    <>
    <div className='main text-center align-items-center bg-dark'>
    <div  className="container1 justify-content-center align-items-center  bg-dark">

  
    <input type="text"  onChange={(e) => setSearch(e.target.value)} placeholder='Enter Your Movie Name' />
<button className="ms-3" onClick={fetchData}>
          Search
          </button>
          </div>

    
    
     { <div className='movies bg-dark'>

         
      <MDBCard className='container bg-dark w-25'>
      <MDBCardImage    src={movie?.Poster}  alt='' />
      <MDBCardBody>
        <MDBCardTitle className='text-light fs-1'>{movie?.Title}</MDBCardTitle>
        <MDBCardText className='text-danger fs-5'>
         {movie?.Genre}
        </MDBCardText >
        <p className='text-success fs-3'> {movie?.Director} </p>
        
      </MDBCardBody>
    </MDBCard>
    </div>}

    







    </div>
    
    
    
    
    
    </>
  )
}

export default Movie