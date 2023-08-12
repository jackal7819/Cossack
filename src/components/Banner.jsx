import '../index.css';

import React from 'react';
import search from '../assets/search.svg';

const Banner = () => {
    return (
        <div className='flex items-center justify-center max-w-[1440px] h-[800px] m-auto bg-image'>
            <div className='inline-flex flex-col items-center justify-start gap-10 tracking-widest text-slate-100'>
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
                        class='flex-grow outline-none px-4 text-xs font-medium leading-tight bg-transparent'
                        placeholder='Введіть назву гри'
                        value='Введіть назву гри'
                    />
                    <img src={search} alt='search' className='cursor-pointer' />
                </div>
                <div className='flex gap-20 text-xl leading-7 text-red-50'>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-4xl font-bold leading-10'>1465</p>
                        <p>Офіційних</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-4xl font-bold leading-10'>28</p>
                        <p>Напівофіційних</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <p className='text-4xl font-bold leading-10'>248</p>
                        <p>Неофіційних</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
