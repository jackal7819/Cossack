import { Link } from 'react-router-dom';
import React from 'react';

const Header = () => {
    return (
        <header
            className='flex items-center justify-between px-20 py-2 bg-black max-w-[1440px] h-14 bg-opacity-100 gap-80 m-auto text-slate-100'
            id='header'>
            <div className='flex items-center gap-2'>
                <img
                    src='/assets/logo.svg'
                    alt='logo'
                    className='border rounded-full border-slate-600'
                />
                <Link className='text-base font-normal leading-snug' to={'/'}>
                    Cossack
                </Link>
            </div>
            <div className='flex items-center justify-start gap-14'>
                <Link
                    className='text-base font-light leading-snug'
                    to={'/catalog'}>
                    Каталог
                </Link>
                <Link className='text-base font-light leading-snug' to={'/about'}>
                    Про Cossack
                </Link>
                <Link className='text-base font-light leading-snug' to={'/faq'}>
                    FAQ
                </Link>
            </div>
            <div className='flex items-center justify-start gap-6'>
                <Link
                    className='flex items-center justify-center gap-px'
                    to={'/profile'}>
                    <img src='/assets/heart.svg' alt='heart' />
                </Link>
                <button className='px-6 py-2 rounded-lg bg-sky-600'>
                    <Link to={'/login'}>Вхід</Link>
                </button>
            </div>
        </header>
    );
};

export default Header;
