import { useQuery } from '@tanstack/react-query';
import '../index.css';
import axios from '../axios';
import React from 'react';

const Banner = () => {
    const { isLoading, isError, error, data } = useQuery(
        ['catalog'],
        () => axios.get('/api/games/localizations-count'),
        { select: ({ data }) => data }
    );

    if (isLoading) {
        return <div className='text-white'>Loading...</div>;
    }

    if (isError) {
        return <div className='text-white'>Error: {error.message}</div>;
    }
    return (
        <div className='flex items-center justify-center max-w-[1440px] h-screen m-auto bg-banner'>
            <div className='inline-flex flex-col items-center gap-10 tracking-widest text-slate-100'>
                <div className='flex flex-col items-center self-stretch justify-center h-32'>
                    <p className='mb-5 text-4xl font-bold uppercase'>
                        Геймплей,
                        <span className='text-yellow-400'> наповнений</span>
                        <span className='text-sky-300'> душею!</span>
                    </p>
                    <p className='mb-2 text-xl'>
                        Каталог української локалізації
                    </p>
                    <p className='text-xl'>
                        Обирай і насолоджуйся українізованими іграми
                    </p>
                </div>
                <div class='flex items-center p-2 mb-2 w-full bg-opacity-50 border border-opacity-50 rounded-lg h-11 bg-slate-300 border-slate-300'>
                    <input
                        type='text'
                        class='flex-grow outline-none px-4 text-xs font-medium leading-tight bg-transparent placeholder-slate-100'
                        placeholder='Введіть назву гри'
                        value='Введіть назву гри'
                    />
                    <img src='/assets/search.svg' alt='search' className='cursor-pointer' />
                </div>
                <div className='flex gap-20 text-xl leading-7 text-red-50'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-4xl font-bold leading-10'>{data.official}</p>
                        <p>Офіційних</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-4xl font-bold leading-10'>{data.semiOfficial}</p>
                        <p>Напівофіційних</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-4xl font-bold leading-10'>{data.nonOfficial}</p>
                        <p>Неофіційних</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
