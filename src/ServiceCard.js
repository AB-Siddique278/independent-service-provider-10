import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, id, picture, detail, price } = service;


    return (
        <div>

          

            <div className="col">
                <div className="card h-100">
                    <img src={picture} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <h5>price:$ {price}</h5>
                            <p className="card-text">{detail}</p>

                            
                            

                            <Link to="/servicedetail">


                                <Button variant="primary">Go for service details</Button>

                            </Link>
                        </div>
                        
                </div>
                
            </div>


        </div>
    );
};

export default ServiceCard;