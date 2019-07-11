import React from 'react'

const Banner = () => (
    <div className="main-banner img-container l-section" id="main-banner">
      <div className="ed-grid lg-grid-6 ">
        <div className="lg-cols-4 lg-x-2">
          <img className="main-banner__img" src='http://www.hdfondos.eu/pictures/2013/1029/2/city-highway-in-long-exposure-pics-14160.jpg' alt='imagen'></img>
          <div className="main-banner__data s-center">
            <p className="t2 s-mb-0">Cusos Disponibles</p>
            <p>Nunca dejes de aprender</p>
            <a href="localhost:3000" className='button'>Subscribirse</a>
          </div>
        </div>
      </div>
    </div>
)

export default Banner;