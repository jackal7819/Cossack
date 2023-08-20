import Card from './Card';
import React from 'react';

const games = [
    {
        id: 1,
        title: 'The Witcher 3 - Wild Hunt',
        company: 'CD Project Red',
        year: 2015,
        rating: 92,
        image: 'assets/witcher.jpg',
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
];

const Bestsellers = () => {
    return (
        <div className='flex flex-col gap-10 text-slate-100'>
            <div className='flex items-center gap-2'>
                <h2 className='text-xl'>Бестселери</h2>
                <img src='src/assets/bigger.svg' alt='bigger' />
            </div>
            <div className='flex gap-5'>
                {games.map((game) => (
                    <Card key={games.id} {...game} />
                ))}
            </div>
        </div>
    );
};

export default Bestsellers;
