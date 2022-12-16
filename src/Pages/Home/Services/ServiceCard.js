import React from 'react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/solid'

const ServiceCard = ({ service }) => {
    const { img, price, title } = service;
    return (
        <div className="card w-full  border border-gray">
            <figure className='m-6 rounded-lg h-52'><img className='' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className='flex'>
                <p className='text-2xl text-orange-600 font-semibold'>${price}</p>
                <button >
                    <ArrowSmallRightIcon className='w-6 h-6 text-orange-600 hover:scale-x-150'></ArrowSmallRightIcon>
                </button>
                </div>
                
            </div>
        </div>
    );
};

export default ServiceCard;