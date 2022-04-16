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
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1456613/pexels-photo-1456613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/2064505/pexels-photo-2064505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1444441/pexels-photo-1444441.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section>
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