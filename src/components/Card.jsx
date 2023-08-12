import React from 'react';

const Card = () => {
    return (
        <div className='inline-flex flex-col items-start justify-start border rounded-lg shadow w-80 h-96 bg-slate-300 bg-opacity-20 border-slate-100'>
            <div className='inline-flex items-start justify-start gap-px px-3 pt-3'>
                <img
                    className='rounded-md w-72 h-72'
                    src='https://via.placeholder.com/281x294'
                />
            </div>
            <div className='flex flex-col items-start self-stretch justify-start gap-px px-3 py-6 h-36'>
                <div className='flex flex-col items-start self-stretch justify-start h-24 gap-4'>
                    <div className='self-stretch text-base font-bold leading-snug text-slate-100'>
                        Hogwarts Legacy
                    </div>
                    <div className='inline-flex items-start self-stretch justify-between gap-4'>
                        <div className='flex items-start justify-start gap-px rounded-md'>
                            <div className='text-xs font-medium leading-none text-center uppercase text-slate-100'>
                                Avalanche Software
                            </div>
                        </div>
                        <div className='text-xs font-medium leading-none text-center uppercase text-slate-100'>
                            2023
                        </div>
                    </div>
                    <div className='inline-flex items-center self-stretch justify-between gap-4'>
                        <div className='flex items-center justify-start h-5 gap-1 grow shrink basis-0'>
                            <div className='text-sm font-light leading-tight text-sky-300'>
                                89/100
                            </div>
                        </div>
                        <div className='flex items-center justify-between h-5 gap-px grow shrink basis-0'>
                            <div className='flex items-center justify-center gap-px'>
                                <div className='relative w-5 h-5' />
                            </div>
                        </div>
                        <div className='inline-flex flex-col items-end justify-between h-6 gap-px grow shrink basis-0'>
                            <div className='relative w-5 h-4'>
                                <div className='absolute top-0 left-0 w-5 h-4'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
