import { Link } from 'react-router-dom';
import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-footer max-w-[1440px] m-auto'>
            <div className='flex items-center justify-between pl-20 pr-20 bg-black bg-opacity-50 pt-72 text-slate-100 gap-80 '>
                <div className='flex flex-col justify-center gap-4'>
                    <div className='flex items-center gap-2'>
                        <img
                            src='src/assets/logo.svg'
                            alt='logo'
                            className='border rounded-full border-slate-600'
                        />
                        <Link to={'/'}>Cossack</Link>
                    </div>
                    <div className='flex gap-4'>
                        <Link
                            to={'https://www.facebook.com/'}
                            target='_blank'
                            rel='noopener noreferrer'>
                            Facebook
                        </Link>
                        <Link
                            to={'https://www.twitter.com/'}
                            target='_blank'
                            rel='noopener noreferrer'>
                            Twitter
                        </Link>
                        <Link
                            to={'https://web.telegram.org/a/'}
                            target='_blank'
                            rel='noopener noreferrer'>
                            Telegram
                        </Link>
                    </div>
                </div>
                <div className='flex justify-between gap-20 p-20 border-t border-l border-r rounded-tl-lg rounded-tr-lg border-slate-100'>
                    <div className='inline-flex flex-col items-center justify-center flex-grow gap-4'>
                        <div className='inline-flex items-center justify-center gap-px'>
                            <Link to={'/'}>Категорії</Link>
                        </div>
                        <Link to={'/'}>Новинки ігор</Link>
                    </div>
                    <div className='inline-flex flex-col items-center justify-center flex-grow gap-4'>
                        <Link to={'/'}>Новини</Link>
                        <Link to={'/'}>Профіль</Link>
                    </div>
                    <div className='inline-flex flex-col items-center justify-center flex-grow gap-4'>
                        <Link to={'/'}>Про Cossack</Link>
                        <Link to={'/'}>Підтримка</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
