import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Searvices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('../fackData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
        <div className="p-20">
            <h1 className="text-4xl font-bold m-5 text-center">Our Searvices</h1>
            {
                services.map(service => <Service key={service.id} service = {service}></Service>)
            }
            
        </div>
    );
};

export default Searvices;