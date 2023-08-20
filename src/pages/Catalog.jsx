import React, { Fragment } from 'react';

import Card from '../components/Card';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const GamesPage = () => {
    const games = [
        {
            id: 1,
            title: 'The Witcher 3 - Wild Hunt',
            company: 'CD Project Red',
            year: 2015,
            rating: 92,
            image: 'src/assets/witcher.jpg',
        },
        {
            id: 2,
            title: 'Hogwarts Legacy',
            company: 'Avalanche Software',
            year: 2022,
            rating: 89,
            image: 'src/assets/hogwarts.jpg',
        },
        {
            id: 3,
            title: 'The Elder Scrolls V: Skyrim',
            company: 'Bethesda Game Studios',
            year: 2014,
            rating: 95,
            image: 'src/assets/skyrim.jpg',
        },
        {
            id: 4,
            title: 'Control - Ultimate Edition',
            company: 'Remedy Entertainment',
            year: 2018,
            rating: 81,
            image: 'src/assets/control.jpg',
        },
        {
            id: 5,
            title: 'The Witcher 3 - Wild Hunt',
            company: 'CD Project Red',
            year: 2015,
            rating: 92,
            image: 'src/assets/witcher.jpg',
        },
        {
            id: 6,
            title: 'Hogwarts Legacy',
            company: 'Avalanche Software',
            year: 2022,
            rating: 89,
            image: 'src/assets/hogwarts.jpg',
        },
        {
            id: 7,
            title: 'The Elder Scrolls V: Skyrim',
            company: 'Bethesda Game Studios',
            year: 2014,
            rating: 95,
            image: 'src/assets/skyrim.jpg',
        },
        {
            id: 8,
            title: 'Control - Ultimate Edition',
            company: 'Remedy Entertainment',
            year: 2018,
            rating: 81,
            image: 'src/assets/control.jpg',
        },
        {
            id: 9,
            title: 'Hogwarts Legacy',
            company: 'Avalanche Software',
            year: 2022,
            rating: 89,
            image: 'src/assets/hogwarts.jpg',
        },
    ];

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
                                <img src="src/assets/crowno.svg" alt="crown" />
                            </button>
                            <button className='flex gap-3 px-6 py-2 border border-gray-200 rounded-md bg-slate-800'>
                                Напівофіційні
                                <img src="src/assets/crownh.svg" alt="crown" />
                            </button>
                            <button className='flex gap-3 px-6 py-2 border border-gray-200 rounded-md bg-slate-800'>
                                Неофіційні
                                <img src="src/assets/crown.svg" alt="crown" />
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
                        {games.map((game) => (
                            <Card key={games.id} {...game} />
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
                                <img src='src/assets/bigger.svg' alt='bigger' />
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
