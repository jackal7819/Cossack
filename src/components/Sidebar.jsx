import React from 'react';

const types = [
    'Аркада',
    'Бойовик',
    'Виживання',
    'Відкритий світ',
    'Візуальний роман',
    'Вільний доступ',
    'Вказати й натиснути',
    'ВР',
    'Головоломка',
    'Двобій',
    'Дитяча гра',
    'Жахи',
    'Казуальна гра',
    'Карткова гра',
    'Картярська гра',
    'Масштабна багатоосібна гра',
    'Настільна гра',
    'Перегони',
    'Платформер',
    'Пригоди',
];

const Sidebar = () => {
    return (
        <div className='w-[720px] text-slate-300'>
            <h2 className='mb-4 text-xl font-semibold'>Фільтри</h2>
            <div className='mb-4'>
                <h3 className='mb-2 text-lg font-semibold'>Платформа</h3>
                <ul className='space-y-1'>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            PlayStation
                        </label>
                    </li>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            Xbox
                        </label>
                    </li>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            Nintendo
                        </label>
                    </li>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            PC
                        </label>
                    </li>
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className='mb-2 text-lg font-semibold'>Рік виходу</h3>
                <select className='w-full px-2 py-1 border bg-slate-800'>
                    <option>Все годы</option>
                    <option>2023</option>
                    <option>2022</option>
                    <option>2021</option>
                    <option>2020</option>
                    <option>2019</option>
                    <option>2018</option>
                </select>
            </div>
            <div className='mb-4'>
                <h3 className='mb-2 text-lg font-semibold'>Походження</h3>
                <ul className='space-y-1'>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            Увесь світ
                        </label>
                    </li>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            Лише українські
                        </label>
                    </li>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            Усі без російських
                        </label>
                    </li>
                </ul>
            </div>
            <div className='mb-4'>
                <h3 className='mb-2 text-lg font-semibold'>Жанр</h3>
                <ul className='space-y-1'>
                    {types.map((type) => (
                        <li key={type}>
                            <label className='flex items-center'>
                                <input type='checkbox' className='mr-2' />
                                {type}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className='mb-2 text-lg font-semibold'>Тип локалізації</h3>
                <ul className='space-y-1'>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            Озвучення
                        </label>
                    </li>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            Інтерфейс
                        </label>
                    </li>
                    <li>
                        <label className='flex items-center'>
                            <input type='checkbox' className='mr-2' />
                            Текст
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
