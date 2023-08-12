import { Link } from 'react-router-dom';
import React from 'react';
import heart from '../assets/heart.svg';
import logo from '../assets/logo.svg';

const Header = () => {
    return (
        <header className='flex items-center justify-between px-20 py-2 bg-black max-w-[1440px] h-14 bg-opacity-80 gap-80 m-auto'>
            <div className='flex items-center gap-2'>
                <img
                    src={logo}
                    alt='logo'
                    className='border rounded-full border-slate-600'
                />
                <Link
                    className='text-base font-normal leading-snug text-slate-100'
                    to={'/'}>
                    Cossack
                </Link>
            </div>
            <div className='flex items-center justify-start gap-14'>
                <div className='flex items-center justify-center gap-px'>
                    <Link
                        className='text-base font-light leading-snug text-slate-100'
                        to={'/'}>
                        Каталог
                    </Link>
                </div>
                <div className='flex items-center justify-center gap-px'>
                    <Link
                        className='text-base font-light leading-snug text-slate-100'
                        to={'/'}>
                        Про Cossack
                    </Link>
                </div>
                <div className='flex items-center justify-center gap-px'>
                    <Link
                        className='text-base font-light leading-snug text-slate-100'
                        to={'/'}>
                        Підтримка
                    </Link>
                </div>
            </div>
            <div className='flex items-center justify-start gap-6'>
                <Link
                    className='flex items-center justify-center gap-px'
                    to={'/'}>
                    <img src={heart} alt='heart' />
                </Link>
                <div className='flex items-start justify-start gap-px px-6 py-2 rounded-lg bg-sky-400'>
                    <Link
                        className='text-base font-light leading-snug text-white'
                        to={'/login'}>
                        Вхід
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
