import React from 'react';

const Registration = () => {
    return (
        <div className='inline-flex flex-col items-center justify-center gap-10 px-48 py-10 bg-opacity-50 w-96 h-96 bg-slate-300 rounded-3xl'>
            <div className='inline-flex items-center justify-center gap-2'>
                <div className='flex items-start justify-start'>
                    <div className='text-xl font-normal leading-7 text-slate-100'>
                        Вхід
                    </div>
                </div>
                <div className='inline-flex flex-col items-start justify-center gap-2'>
                    <div className='text-xl font-normal leading-7 text-slate-100'>
                        /
                    </div>
                </div>
                <div className='inline-flex flex-col items-start justify-start'>
                    <div className='text-xl font-normal leading-7 text-slate-100'>
                        Реєстрація
                    </div>
                    <div className='self-stretch h-px bg-slate-100' />
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <div className='text-xs font-medium leading-tight text-slate-100'>
                        Нікнейм
                    </div>
                    <div className='inline-flex items-center justify-start gap-px px-4 py-3 bg-opacity-50 border border-opacity-50 rounded-lg w-72 h-11 bg-slate-300 border-slate-300'>
                        <div className='flex items-center justify-start h-5 gap-1 grow shrink basis-0'>
                            <div className='text-xs font-normal leading-tight text-opacity-50 grow shrink basis-0 text-slate-300'>
                                Введіть нікнейм
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <div className='text-xs font-medium leading-tight text-slate-100'>
                        E-mail
                    </div>
                    <div className='inline-flex items-center justify-start gap-px px-4 py-3 bg-opacity-50 border border-opacity-50 rounded-lg w-72 h-11 bg-slate-300 border-slate-300'>
                        <div className='flex items-center justify-start h-5 gap-1 grow shrink basis-0'>
                            <div className='text-xs font-normal leading-tight text-opacity-50 grow shrink basis-0 text-slate-300'>
                                Введіть ел.пошту
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <div className='text-xs font-medium leading-tight text-slate-100'>
                        Пароль
                    </div>
                    <div className='inline-flex items-center justify-start gap-px px-4 py-3 bg-opacity-50 border border-opacity-50 rounded-lg w-72 h-11 bg-slate-300 border-slate-300'>
                        <div className='flex items-center justify-start h-5 gap-1 grow shrink basis-0'>
                            <div className='text-xs font-normal leading-tight text-opacity-50 grow shrink basis-0 text-slate-300'>
                                Введіть пароль
                            </div>
                        </div>
                        <div className='relative w-6 h-6' />
                    </div>
                </div>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <div className='text-xs font-medium leading-tight text-slate-100'>
                        Повторіть пароль
                    </div>
                    <div className='inline-flex items-center justify-start gap-px px-4 py-3 bg-opacity-50 border border-opacity-50 rounded-lg w-72 h-11 bg-slate-300 border-slate-300'>
                        <div className='flex items-center justify-start h-5 gap-1 grow shrink basis-0'>
                            <div className='text-xs font-normal leading-tight text-opacity-50 grow shrink basis-0 text-slate-300'>
                                Повторіть пароль
                            </div>
                        </div>
                        <div className='relative w-6 h-6' />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center gap-5'>
                <div className='inline-flex items-center justify-center gap-px py-2 rounded-lg w-72 h-11 px-9 bg-sky-400'>
                    <div className='text-base font-light leading-snug text-white'>
                        Реєстрація
                    </div>
                </div>
                <div className='inline-flex items-center justify-center gap-px py-2 border rounded-lg w-72 h-11 px-9 border-sky-400'>
                    <div className='flex items-center justify-center gap-2'>
                        <div className='text-base font-light leading-snug text-slate-100'>
                            Вхід через Google
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;
