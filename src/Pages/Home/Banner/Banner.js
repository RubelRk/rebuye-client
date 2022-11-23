import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Banner.css';

const Banner = () => {
    return (
        <Carousel>
        <Carousel.Item interval={2000}>
             <div className='img-gradient'>
                 <img
            className="pic d-block w-100"
            src="https://img.freepik.com/free-photo/man-fixing-motorcycle-modern-workshop_158595-8081.jpg?size=626&ext=jpg&ga=GA1.2.1322626284.1665424355&semt=sph"
            alt="First slide"
                    />
            </div>
          <Carousel.Caption>
            <h2>GHOST BIKERS</h2>
            <p>MOTO REPAIR & CUSTOM SERVICES </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
            <div className='img-gradient'>
             <img
            className="pic d-block w-100"
            src="https://img.freepik.com/free-photo/man-fixing-motorcycle-modern-workshop_158595-8087.jpg?size=626&ext=jpg&ga=GA1.2.1322626284.1665424355&semt=sph"
            alt="Second slide"
             />
            </div>
          <Carousel.Caption>
            <h2>OVER 15 YEARS OF EXPERIENCE IN THE CUSTOM BUILDS SCENE</h2>
            <p>There are a lot of soft and hard skills you need to build a custom bike. The good news is you can learn these skills, and have a load of fun.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <div className='img-gradient'>
            <img
            className="pic d-block w-100"
            src="https://img.freepik.com/free-photo/man-fixing-motorcycle-modern-workshop_158595-8107.jpg?size=626&ext=jpg&ga=GA1.2.1322626284.1665424355&semt=sph"
            alt="Third slide"
          />
            </div>
          <Carousel.Caption>
            <h2>CUSTOM BUILDS</h2>
            <p>
            A custom motorcycle is a motorcycle with stylistic and/or structural changes to the 'standard' mass-produced machine offered by major manufacturers.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
};

export default Banner;