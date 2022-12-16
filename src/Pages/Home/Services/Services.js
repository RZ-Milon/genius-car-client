import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <p className='text-2xl font-bold text-orange-600'>Services</p>
                <h2 className='text-5xl font-bold'>Our Service Area</h2>
                <p className='mt-5'>The majority have suffered alteration in some form, by injected humour, or randomised <br />
                words which don't look even slightly believable. </p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <button className="border-[1px] border-[#FF3811] rounded-[5px] font-semibold text-[18px] px-5 py-3 text-[#FF3811] hover:bg-orange-500 hover:text-white"><Link to="/">More Services</Link></button>
            </div>
        </div>
    );
};

export default Services;