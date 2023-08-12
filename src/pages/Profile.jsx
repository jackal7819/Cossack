import React from 'react';

const Profile = () => {
    return (
        <div className='inline-flex flex-col items-start justify-start gap-10 w-96 h-96'>
            <div className='inline-flex items-center justify-start gap-96'>
                <div className='flex items-center justify-start gap-5'>
                    <img
                        className='w-20 h-20 rounded-full'
                        src='https://via.placeholder.com/88x88'
                    />
                    <div className='inline-flex flex-col items-start justify-start gap-2'>
                        <div className='text-base font-bold leading-snug text-slate-100'>
                            Artur723
                        </div>
                    </div>
                    <div className='relative w-6 h-6' />
                </div>
                <div className='flex items-center justify-center gap-px py-2 border rounded-lg px-9 border-rose-900'>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='text-base font-light leading-snug text-slate-100'>
                            Видалити профіль
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-start justify-start gap-10'>
                <div className='inline-flex items-center justify-center gap-2'>
                    <div className='inline-flex flex-col items-start justify-start'>
                        <div className='text-base font-light leading-snug text-slate-100'>
                            Улюблене
                        </div>
                        <div className='self-stretch h-px bg-slate-100' />
                    </div>
                    <div className='inline-flex flex-col items-start justify-center gap-2'>
                        <div className='text-xl font-normal leading-7 text-slate-100'>
                            /
                        </div>
                    </div>
                    <div className='flex items-start justify-start'>
                        <div className='text-base font-light leading-snug text-slate-100'>
                            Нещодавно переглянуті
                        </div>
                    </div>
                </div>
                <div className='inline-flex items-start justify-start gap-5'>
                    <div className='inline-flex flex-col items-start justify-start border rounded-lg shadow w-80 bg-slate-300 bg-opacity-20 border-slate-100'>
                        <div className='inline-flex items-start justify-start gap-px px-3 pt-3'>
                            <img
                                className='rounded-md w-72 h-72'
                                src='https://via.placeholder.com/281x294'
                            />
                        </div>
                        <div className='flex flex-col items-start self-stretch justify-start gap-px px-3 py-6 h-36'>
                            <div className='flex flex-col items-start self-stretch justify-start h-24 gap-4'>
                                <div className='self-stretch text-base font-bold leading-snug text-slate-100'>
                                    The Elder Scrolls V: Skyrim
                                </div>
                                <div className='inline-flex items-start self-stretch justify-between gap-4'>
                                    <div className='flex items-start justify-start gap-px rounded-md'>
                                        <div className='text-xs font-medium leading-none text-center uppercase text-slate-100'>
                                            Bethesda Game Studios
                                        </div>
                                    </div>
                                    <div className='text-xs font-medium leading-none text-center uppercase text-slate-100'>
                                        2011
                                    </div>
                                </div>
                                <div className='inline-flex items-center self-stretch justify-between gap-4'>
                                    <div className='flex items-center justify-start h-5 gap-1 grow shrink basis-0'>
                                        <div className='text-sm font-light leading-tight text-sky-300'>
                                            95/100
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
                    <div className='inline-flex flex-col items-start justify-start border rounded-lg shadow w-80 bg-slate-300 bg-opacity-20 border-slate-100'>
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
                    <div className='inline-flex flex-col items-start justify-start border rounded-lg shadow w-80 bg-slate-300 bg-opacity-20 border-slate-100'>
                        <div className='inline-flex items-start justify-start gap-px px-3 pt-3'>
                            <img
                                className='rounded-md w-72 h-72'
                                src='https://via.placeholder.com/281x294'
                            />
                        </div>
                        <div className='flex flex-col items-start self-stretch justify-start gap-px px-3 py-6 h-36'>
                            <div className='flex flex-col items-start self-stretch justify-start h-24 gap-4'>
                                <div className='self-stretch text-base font-bold leading-snug text-slate-100'>
                                    Control Ultimate Edition
                                </div>
                                <div className='inline-flex items-start self-stretch justify-between gap-4'>
                                    <div className='flex items-start justify-start gap-px rounded-md'>
                                        <div className='text-xs font-medium leading-none text-center uppercase text-slate-100'>
                                            Remedy Entertainment
                                        </div>
                                    </div>
                                    <div className='text-xs font-medium leading-none text-center uppercase text-slate-100'>
                                        2020
                                    </div>
                                </div>
                                <div className='inline-flex items-center self-stretch justify-between gap-4'>
                                    <div className='flex items-center justify-start h-5 gap-1 grow shrink basis-0'>
                                        <div className='text-sm font-light leading-tight text-sky-300'>
                                            81/100
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
                </div>
            </div>
        </div>
    );
};

export default Profile;
