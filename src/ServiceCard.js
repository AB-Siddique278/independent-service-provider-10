import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';

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
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <Button variant="primary">Go for service details</Button>
                        </div>
                        
                </div>
                
            </div>


        </div>
    );
};

export default ServiceCard;