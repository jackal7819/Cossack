import React, { Fragment } from 'react';

import Card from '../components/Card';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useQuery } from '@tanstack/react-query';
import axios from '../axios';

const GamesPage = () => {
    const { isLoading, isError, error, data } = useQuery(
        ['catalog'],
        () => axios.get('/api/games/last-populars'),
        { select: ({ data }) => data.gameCards }
    );

    if (isLoading) {
        return <div className='text-white'>Loading...</div>;
    }

    if (isError) {
        return <div className='text-white'>Error: {error.message}</div>;
    }

    return (
        <Fragment>
            <div className='flex gap-10 bg-black max-w-[1440px] bg-opacity-50 mx-auto text-slate-300 pl-20 pr-20 pt-20 mb-[-95px]'>
                <div className='flex flex-col gap-10'>
                    <div className='flex items-center justify-between'>
                        <h2 className='text-3xl font-semibold'>Каталог ігор</h2>
                        <div className='flex items-center'>
                            <input
                                type='text'
                                placeholder='Введіть назву гри'
                                className='px-6 py-2 mr-2 border rounded-lg text-slate-400'
                            />
                            <button className='px-6 py-2 rounded-lg bg-sky-600'>
                                Пошук
                            </button>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex space-x-4'>
                            <button className='px-6 py-2 border border-gray-200 rounded-md bg-slate-800'>
                                Всі
                            </button>
                            <button className='flex gap-3 px-6 py-2 border border-gray-200 rounded-md bg-slate-600 '>
                                Офіційні
                                <img src='/assets/crowno.svg' alt='crown' />
                            </button>
                            <button className='flex gap-3 px-6 py-2 border border-gray-200 rounded-md bg-slate-800'>
                                Напівофіційні
                                <img src='/assets/crownh.svg' alt='crown' />
                            </button>
                            <button className='flex gap-3 px-6 py-2 border border-gray-200 rounded-md bg-slate-800'>
                                Неофіційні
                                <img src='/assets/crown.svg' alt='crown' />
                            </button>
                        </div>
                        <select className='px-6 py-2 border border-gray-200 rounded-md bg-slate-800'>
                            <option>За датою додавання</option>
                            <option>За датою локалізації</option>
                            <option>За абеткою</option>
                            <option>Популярні</option>
                        </select>
                    </div>
                    <div className='flex flex-wrap gap-5'>
                        {data?.map((game) => (
                            <Card key={data.id} {...game} />
                        ))}
                    </div>
                    <div className='flex items-center justify-center my-4'>
                        <ul className='flex space-x-5'>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>...</li>
                            <li>20</li>
                            <li>
                                <img src='/assets/bigger.svg' alt='bigger' />
                            </li>
                        </ul>
                    </div>
                </div>
                <Sidebar />
            </div>
            <Footer />
        </Fragment>
    );
};

export default GamesPage;
