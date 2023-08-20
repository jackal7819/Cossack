import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header className='flex items-center justify-between px-20 py-2 bg-black max-w-[1440px] h-14 bg-opacity-100 gap-80 m-auto text-slate-100'>
            <div className='flex items-center gap-2'>
                <img
                    src='src/assets/logo.svg'
                    alt='logo'
                    className='border rounded-full border-slate-600'
                />
                <Link
                    className='text-base font-normal leading-snug'
                    to={'/'}>
                    Cossack
                </Link>
            </div>
            <div className='flex items-center justify-start gap-14'>
                <Link
                    className='text-base font-light leading-snug'
                    to={'/'}>
                    Каталог
                </Link>
                <Link
                    className='text-base font-light leading-snug'
                    to={'/'}>
                    Про Cossack
                </Link>
                <Link
                    className='text-base font-light leading-snug'
                    to={'/'}>
                    Підтримка
                </Link>
            </div>
            <div className='flex items-center justify-start gap-6'>
                <Link
                    className='flex items-center justify-center gap-px'
                    to={'/profile'}>
                    <img src='src/assets/heart.svg' alt='heart' />
                </Link>
                <div className='flex items-start justify-start gap-px px-6 py-2 rounded-lg bg-sky-600'>
                    <Link
                        className='text-base font-light leading-snug'
                        to={'/login'}>
                        Вхід
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
