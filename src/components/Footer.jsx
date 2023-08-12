import React from 'react';

const Footer = () => {
    return (
        <div className='inline-flex flex-col items-center justify-start gap-px px-20 pt-20 w-96 h-72'>
            <div className='inline-flex items-center justify-start gap-80'>
                <div className='inline-flex flex-col items-start justify-center gap-4'>
                    <div className='inline-flex items-center justify-start gap-2'>
                        <div className='relative w-10 h-10' />
                        <div className='text-base font-normal leading-snug text-slate-100'>
                            Cossack
                        </div>
                    </div>
                    <div className='inline-flex items-start justify-start gap-4'>
                        <div className='flex items-center justify-center gap-px'>
                            <div className='text-base font-light leading-snug text-slate-100'>
                                Facebook
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-px'>
                            <div className='text-base font-light leading-snug text-slate-100'>
                                Twitter
                            </div>
                        </div>
                        <div className='flex items-center justify-center gap-px'>
                            <div className='text-base font-light leading-snug text-slate-100'>
                                Telegram
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-start justify-center h-56 gap-5 p-20 border-t border-l border-r rounded-tl-lg rounded-tr-lg border-slate-100'>
                    <div className='inline-flex flex-col items-center justify-center w-48 gap-4'>
                        <div className='inline-flex items-center justify-center gap-px'>
                            <div className='text-base font-light leading-snug text-slate-100'>
                                Категорії
                            </div>
                        </div>
                        <div className='text-base font-light leading-snug text-slate-100'>
                            Новинки ігор
                        </div>
                    </div>
                    <div className='inline-flex flex-col items-center justify-center w-48 gap-4'>
                        <div className='text-base font-light leading-snug text-slate-100'>
                            Новини
                        </div>
                        <div className='text-base font-light leading-snug text-slate-100'>
                            Профіль
                        </div>
                    </div>
                    <div className='inline-flex flex-col items-center justify-center w-48 gap-4'>
                        <div className='text-base font-light leading-snug text-slate-100'>
                            Про Cossack
                        </div>
                        <div className='text-base font-light leading-snug text-slate-100'>
                            Підтримка
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
