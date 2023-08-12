import React from 'react';

const Banner = () => {
    return (
        <div className='relative w-96 h-96'>
            <img
                className='w-96 h-96 left-[-0.16px] top-0 absolute'
                src='https://via.placeholder.com/1440x800'
            />
            <div className='left-[391.50px] top-[232px] absolute flex-col justify-start items-center gap-10 inline-flex'>
                <div className='flex flex-col items-center self-stretch justify-center h-32 gap-5'>
                    <div>
                        <span className='text-3xl font-bold leading-10 uppercase text-slate-100'>
                            Геймплей,
                        </span>
                        <span className='text-3xl font-bold leading-10 uppercase text-red-50'>
                            {' '}
                        </span>
                        <span className='text-3xl font-bold leading-10 text-yellow-400 uppercase'>
                            наповнений
                        </span>
                        <span className='text-3xl font-bold leading-10 uppercase text-sky-300'>
                            {' '}
                        </span>
                        <span className='text-3xl font-bold leading-10 uppercase text-sky-300'>
                            душею!
                        </span>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-2'>
                        <div>
                            <span className='text-xl font-normal leading-7 text-red-50'>
                                Каталог{' '}
                            </span>
                            <span className='text-xl font-normal leading-7 text-slate-100'>
                                української
                            </span>
                            <span className='text-xl font-normal leading-7 text-red-50'>
                                {' '}
                                локалізації
                            </span>
                        </div>
                        <div>
                            <span className='text-xl font-normal leading-7 text-red-50'>
                                Обирай і насолоджуйся{' '}
                            </span>
                            <span className='text-xl font-normal leading-7 text-slate-100'>
                                українізованими
                            </span>
                            <span className='text-xl font-normal leading-7 text-red-50'>
                                {' '}
                                іграми
                            </span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start self-stretch justify-center h-10 gap-2'>
                    <div className='inline-flex items-center self-stretch justify-center gap-px px-4 py-3 bg-opacity-50 border border-opacity-50 rounded-lg h-11 bg-slate-300 border-slate-300'>
                        <div className='flex items-center justify-start h-5 gap-1 grow shrink basis-0'>
                            <div className='text-xs font-medium leading-tight grow shrink basis-0 text-slate-100'>
                                Введіть назву гри
                            </div>
                        </div>
                        <div className='relative w-6 h-6' />
                    </div>
                </div>
                <div className='inline-flex items-start justify-start gap-20'>
                    <div className='inline-flex flex-col items-center justify-center gap-4 px-4'>
                        <div className='text-4xl font-bold leading-10 text-red-50'>
                            1465
                        </div>
                        <div className='text-xl font-normal leading-7 text-red-50'>
                            Офіційних
                        </div>
                    </div>
                    <div className='inline-flex flex-col items-center justify-center gap-4'>
                        <div className='text-4xl font-bold leading-10 text-red-50'>
                            28
                        </div>
                        <div className='text-xl font-normal leading-7 text-red-50'>
                            Напівофіційних
                        </div>
                    </div>
                    <div className='inline-flex flex-col items-center justify-center gap-4'>
                        <div className='text-4xl font-bold leading-10 text-red-50'>
                            248
                        </div>
                        <div className='text-xl font-normal leading-7 text-red-50'>
                            Неофіційних
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
