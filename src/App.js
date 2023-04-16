import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import background from ".//images/70282136-fondo-de-la-celda-azul-la-vida-y-la-biología-la-medicina-científica-la-investigación-molecular-de.webp";
import {  MDBRow, MDBCol } from 'mdb-react-ui-kit';
import styles from './/App.css';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
        <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${background})`, height: '500px' }}
      >
        <MDBNavbar expand='lg' light bgColor='blue'>
        <MDBContainer fluid>
          <MDBNavbarToggler
            onClick={() => setShowBasic(!showBasic)}
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav right className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page' href='#' style={{color: 'white'}}>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' style={{color: 'white'}}>Features</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' style={{color: 'white'}}>Pricig</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#' style={{color: 'white'}}>About</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Únete a la investigación </h1>
              <h4 className='mb-3'>Buscamos personas que quieran cambiar el mundo</h4>
              <MDBBtn  size="lg" style={{color:'white'}}>
                Registrarse
              </MDBBtn>
              <MDBBtn  size="lg" style={{color:'white', marginLeft:'50px',marginTop:'25px'}}>
                Iniciar Sesión
              </MDBBtn>
            </div>
          </div>
        </div>
      </div>
      <div>
      <MDBContainer fluid>
      <MDBRow style={{height:'400px'}}>
        <MDBCol md='4' style={{backgroundColor:'#90CAF9' }}>
          <h1>Sube tus documentos</h1>
        </MDBCol>
        <MDBCol md='4' style={{backgroundColor:'#BBDEFB' }} >
          <h1 className={styles.h1}>Descubre nuevos análisis</h1>
        </MDBCol>
        <MDBCol md='4' style={{backgroundColor:'#E3F2FD' }}>
          <h1>Blog de Información</h1>
        </MDBCol>
      </MDBRow>
      <MDBRow style={{height:'400px', backgroundColor:'white'}}>
        <h1>Aprendizaje Automático</h1>
        <text>Hola esto es una pruea</text>
      </MDBRow>
    </MDBContainer>
      </div>
    </header>
  );
}