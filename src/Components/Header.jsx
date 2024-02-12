import React from 'react'
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';

function Header() {
  return (
    <div>
       <MDBNavbar light bgColor='black'>
        <MDBContainer fluid>
       
          <MDBNavbarBrand className='text-primary fs-1'>
          <i  class="fa-solid fa-clapperboard text-light"></i>
            Movie Details
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  )
}

export default Header