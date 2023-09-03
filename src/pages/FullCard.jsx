import React, { Fragment } from 'react';

import Card from '../components/Card';
import Footer from '../components/Footer';

const games = [
    {
        id: 1,
        title: 'The Witcher 3 - Wild Hunt',
        company: 'CD Project Red',
        year: 2015,
        rating: 92,
        image: '/assets/witcher.jpg',
    },
    {
        id: 2,
        title: 'Hogwarts Legacy',
        company: 'Avalanche Software',
        year: 2022,
        rating: 89,
        image: '/assets/hogwarts.jpg',
    },
    {
        id: 3,
        title: 'The Elder Scrolls V: Skyrim',
        company: 'Bethesda Game Studios',
        year: 2014,
        rating: 95,
        image: '/assets/skyrim.jpg',
    },
    {
        id: 4,
        title: 'Control - Ultimate Edition',
        company: 'Remedy Entertainment',
        year: 2018,
        rating: 81,
        image: '/assets/control.jpg',
    },
];

const FullCard = () => {
    return (
        <Fragment>
            <div className='flex flex-col items-center gap-48 bg-black max-w-[1440px] bg-opacity-50 m-auto text-slate-100 pl-20 pr-20 pt-20'>
                <div className='flex flex-col gap-10'>
                    <h2 className='text-3xl font-bold uppercase'>
                        The Witcher 3: Wild Hunt
                    </h2>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-10'>
                            <img
                                className='rounded-lg'
                                src='/assets/witcher0.jpg'
                            />
                            <div className='flex justify-between gap-5'>
                                <img
                                    className='rounded-lg'
                                    src='/assets/witcher1.jpg'
                                />
                                <img
                                    className='rounded-lg'
                                    src='/assets/witcher2.jpg'
                                />
                                <img
                                    className='rounded-lg'
                                    src='/assets/witcher3.jpg'
                                />
                                <img
                                    className='rounded-lg'
                                    src='/assets/witcher4.jpg'
                                />
                            </div>
                            <div className='flex flex-col gap-10'>
                                <p>
                                    The Witcher 3: Wild Hunt - комп'ютерна
                                    рольова гра за мотивами серії романів
                                    "Відьмак" польського письменника Анджея
                                    Сапковського, продовження ігор "Відьмак" і
                                    "Відьмак 2: Вбивці королів". Заключна
                                    частина трилогії. Гравцеві знову відводиться
                                    роль Геральта, відьмака, що вбиває монстрів.
                                    Після подій другої частини Геральт повертає
                                    втрачені спогади, і опиняється на
                                    роздоріжжі. У Північних королівствах вирує
                                    війна, а Йеннефер, подруга Геральта, яка
                                    несподівано повернулася, просить його
                                    допомогти з пошуками Цирилли,
                                    Дитя-несподіванки, яка може зупинити
                                    пришестя Дикого Полювання. Геральт вирушає в
                                    небезпечну подорож розореними війною
                                    землями, щоб знайти Цирі та розтрощити Дике
                                    Полювання раз і назавжди.
                                </p>
                                <div className='flex flex-col gap-10'>
                                    <p className='text-xl'>
                                        Коментарії та відгуки
                                    </p>
                                    <div className='flex flex-col gap-10'>
                                        <div className='flex flex-col gap-5'>
                                            <div className='flex items-center gap-20'>
                                                <div className='flex items-center gap-2'>
                                                    <img
                                                        className='w-10 h-10 rounded-full'
                                                        src='/assets/photo.jpg'
                                                    />
                                                    <p className='font-bold'>
                                                        Michael
                                                    </p>
                                                </div>
                                                <div className='flex gap-1'>
                                                    <img
                                                        src='/assets/star-full.svg'
                                                        alt='star'
                                                    />
                                                    <img
                                                        src='/assets/star-full.svg'
                                                        alt='star'
                                                    />
                                                    <img
                                                        src='/assets/star-full.svg'
                                                        alt='star'
                                                    />
                                                    <img
                                                        src='/assets/star-empty.svg'
                                                        alt='star'
                                                    />
                                                    <img
                                                        src='/assets/star-empty.svg'
                                                        alt='star'
                                                    />
                                                </div>
                                            </div>
                                            <form className='flex flex-col w-4/5 gap-5 ml-auto'>
                                                <textarea
                                                    className='w-full h-24 px-4 py-3 text-xs leading-tight bg-opacity-50 border border-opacity-50 rounded-lg placeholder-slate-200 bg-slate-300 border-slate-300'
                                                    placeholder='Поділися своїм враженням про гру...'
                                                    value='Поділися своїм враженням про гру...'
                                                />
                                                <button
                                                    type='submit'
                                                    className='py-2 border rounded-lg w-60 px-9 border-sky-400'>
                                                    Додати коментар
                                                </button>
                                            </form>
                                        </div>
                                        <div className='flex flex-col gap-5'>
                                            <div className='flex gap-5'>
                                                <div className='flex gap-2'>
                                                    <img
                                                        className='w-10 h-10 rounded-full'
                                                        src='/assets/photoa.jpg'
                                                    />
                                                    <div className='flex flex-col gap-2'>
                                                        <p className='font-bold'>
                                                            Adam76
                                                        </p>
                                                        <div className='flex gap-1'>
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-full.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-full.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-full.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-empty.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-empty.svg'
                                                                alt='star'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='w-4/5 ml-auto text-xs'>
                                                    Я люблю Відьмак 3, але
                                                    тільки якщо прибрати з гри
                                                    вплив Цирі. Ось, ну не
                                                    полюбив я її, ось і все.
                                                    Вважай вся книжкова сага
                                                    була про неї, а тепер і
                                                    майже весь сюжет третьої
                                                    частини. Гра гарна, але Цирі
                                                    дуже сильно вбиває її, вже
                                                    вибачте.
                                                </p>
                                            </div>
                                            <div className='flex gap-5'>
                                                <div className='flex gap-2'>
                                                    <img
                                                        className='w-10 h-10 rounded-full'
                                                        src='/assets/photon.jpg'
                                                    />
                                                    <div className='flex flex-col gap-2'>
                                                        <div className='font-bold'>
                                                            Norbert
                                                        </div>
                                                        <div className='flex gap-1'>
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-full.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-full.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-full.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-empty.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-empty.svg'
                                                                alt='star'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='w-4/5 ml-auto text-xs'>
                                                    Практично ідеальна рпг, яка
                                                    задала планку якості на 15
                                                    років вперед. Поки що ми
                                                    можемо бачити те, що досі
                                                    нікому не вдалося навіть
                                                    наблизитися до настільки
                                                    сильної гри. Були жалюгідні
                                                    потуги асасинів, але нікому
                                                    це поки не під силу.
                                                </p>
                                            </div>
                                            <div className='flex gap-5'>
                                                <div className='flex gap-2'>
                                                    <img
                                                        className='w-10 h-10 rounded-full'
                                                        src='/assets/photom.jpg'
                                                    />
                                                    <div className='flex flex-col gap-2'>
                                                        <div className='font-bold'>
                                                            Michael3
                                                        </div>
                                                        <div className='flex gap-1'>
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-full.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-full.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-empty.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-empty.svg'
                                                                alt='star'
                                                            />
                                                            <img
                                                                className='w-3'
                                                                src='/assets/star-empty.svg'
                                                                alt='star'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className='w-4/5 ml-auto text-xs'>
                                                    У світі відьмака настільки
                                                    все добре гармонує одне з
                                                    одним, що занурюєшся в нього
                                                    всією душею. Особливо
                                                    хочеться відзначити чудовий
                                                    звуковий супровід у грі.
                                                    команда, яка працювала над
                                                    ним, - великі молодці. у
                                                    кожній локації є своя
                                                    звукова доріжка, яка прямо
                                                    таки передає настрій кожної
                                                    місцевості.
                                                </p>
                                            </div>
                                            <button className='py-2 ml-48 border rounded-lg w-60 px-9 border-sky-400'>
                                                Розгорнути всі (23)
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-10'>
                            <div className='flex flex-col gap-4 font-light'>
                                <div className='flex gap-5'>
                                    <div className='flex flex-col gap-4'>
                                        <p>Розробник:</p>
                                        <p>Дата виходу:</p>
                                        <p>Локалізація:</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p>CD PROJECT RED</p>
                                        <p>2023</p>
                                        <p>Субтитри</p>
                                    </div>
                                </div>
                                <div className='flex gap-5'>
                                    <p>Платформи:</p>
                                    <div className='flex gap-3'>
                                        <img
                                            src='/assets/xbox.svg'
                                            alt='xbox'
                                        />
                                        <img
                                            src='/assets/nintendo.svg'
                                            alt='nintendo'
                                        />
                                        <img src='/assets/pc.svg' alt='pc' />
                                        <img
                                            src='/assets/playstation.svg'
                                            alt='playstation'
                                        />
                                    </div>
                                </div>
                                <div className='flex gap-12'>
                                    <p>Рейтинг:</p>
                                    <p className='text-sky-300'>92/100</p>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <p className='w-[335px]'>
                                        Популярні мітки для цього продукту:
                                    </p>
                                    <div className='flex flex-wrap gap-3 text-xs font-medium leading-none text-center uppercase text-slate-100'>
                                        <div className='px-3 py-1 border rounded-md bg-zinc-700 border-zinc-300'>
                                            <p>Рольова гра</p>
                                        </div>
                                        <div className='px-3 py-1 border rounded-md bg-zinc-700 border-zinc-300'>
                                            <p>Бойовик</p>
                                        </div>
                                        <div className='px-3 py-1 border rounded-md bg-zinc-700 border-zinc-300'>
                                            <p>Відкритий світ</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-10 text-slate-100'>
                    <div className='flex items-center gap-2'>
                        <h2 className='text-xl'>Схожі гри</h2>
                        <img src='/assets/bigger.svg' alt='bigger' />
                    </div>
                    <div className='flex gap-5'>
                        {games.map((game) => (
                            <Card key={games.id} {...game} />
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default FullCard;
