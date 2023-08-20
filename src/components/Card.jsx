import { Link } from 'react-router-dom';
import React from 'react';

const Card = ({ title, company, year, rating, image }) => {
    return (
        <div className='flex flex-col border rounded-lg shadow w-80 bg-slate-300 bg-opacity-20 border-slate-100'>
            <Link to='/card' className='flex px-3 pt-3'>
                <img className='w-full rounded-md' src={image} />
            </Link>
            <div className='flex flex-col self-stretch px-3 py-6 h-36'>
                <div className='flex flex-col self-stretch h-24 gap-4 text-slate-100'>
                    <div className='font-bold'>{title}</div>
                    <div className='flex justify-between gap-4 text-xs font-medium text-center uppercase'>
                        <p>{company}</p>
                        <p>{year}</p>
                    </div>
                    <div className='flex items-center justify-between gap-4'>
                        <span className='flex flex-row gap-1'>
                            <img src={'/assets/star.svg'} alt='star' />
                            <p className='flex mt-1 font-light text-sky-300'>
                                {rating}/100
                            </p>
                        </span>
                        <img src={'/assets/heart.svg'} alt='heart' />
                        <img src={'/assets/crown.svg'} alt='crown' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
