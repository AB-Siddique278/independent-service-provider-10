import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Home.css';
import ServiceCard from './ServiceCard';

const Home = () => {
    const [services, setServices] = useState([])
    useEffect(() => {


        fetch('data.json')
            .then(response => response.json())
            .then(data => setServices(data))



    }, [])
    return (
        <div>
            <Carousel>
                <Carousel.Item className='image'>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ckfZc54/pexels-kumar-saurabh-1456613-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className='d-flex h-100 align-items-center justify-content-center'>
                           <div>
                           <h1>Wedding photography</h1>
                            <p>I do all kinds of wedding photography.</p>
                           </div>

                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/71NRcJh/pexels-kaique-rocha-108148.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1> Pary Photography</h1>
                        <p>I do photography at any kind of party.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Th8GLTW/pexels-zukiman-mohamad-22185-1.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Modeling photography</h1>
                        <p>I do all kinds of modeling photography.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>













            <section>
            <h2 className='text-center my-5'> My Services</h2>

                
                <div className='container'>
                    <div className='row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 d-flex justify-content-center my-5'>
                        {
                            services.map(service => (
                                <ServiceCard

                                    key={service.id}
                                    service={service}




                                ></ServiceCard>



                            ))
                        }

                    </div>
                </div>

            </section>
        </div>
    );
};

export default Home;