import Card from './Card';
import React from 'react';
import axios from '../axios';
import { useQuery } from '@tanstack/react-query';

const Bestsellers = () => {
    const { isLoading, isError, error, data } = useQuery(
        ['bestsellers'],
        () => axios.get('/api/games/recommendations'),
        { select: ({ data }) => data.gameCards }
    );

    if (isLoading) {
        return <div className='text-white'>Loading...</div>;
    }

    if (isError) {
        return <div className='text-white'>Error: {error.message}</div>;
    }

    return (
        <div className='flex flex-col gap-10 text-slate-100' id='bestsellers'>
            <div className='flex items-center gap-2'>
                <h2 className='text-xl'>Бестселери</h2>
                <img src='/assets/bigger.svg' alt='bigger' />
            </div>
            <div className='flex gap-5'>
                {data.map((game) => (
                    <Card key={data.id} {...game} />
                ))}
            </div>
        </div>
    );
};

export default Bestsellers;
