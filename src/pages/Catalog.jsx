import React, { Fragment, useState } from 'react';

import Card from '../components/Card';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { useQuery } from '@tanstack/react-query';
import axios from '../axios';
import { orderByOptions } from '../data';
import { useFilterContext } from '../components/FilterContext';

const Catalog = () => {
    const { selectedFilters, setSelectedFilters } = useFilterContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [orderBy, setOrderBy] = useState('rating');

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleSortChange = (event) => {
        const selectedValue = event.target.value;
        setOrderBy(selectedValue);
    };

    const handleFilterChange = (filters) => {
        setSelectedFilters(filters);
    };

    const requestData = {
        platforms: selectedFilters.selectedPlatforms,
        developerCountryType: selectedFilters.selectedDeveloperCountryType,
        genres: selectedFilters.selectedGenres,
        localizationTypes: selectedFilters.selectedLocalizationTypes,
        fromYear: selectedFilters.selectedYearRange[0],
        toYear: selectedFilters.selectedYearRange[1],
        orderBy: orderBy,
    };
    console.log(requestData);
    
    const { isLoading, isError, error, data } = useQuery(
        [
            'catalog',
            currentPage,
            selectedFilters.selectedPlatforms,
            selectedFilters.selectedDeveloperCountryType,
            selectedFilters.selectedGenres,
            selectedFilters.selectedLocalizationTypes,
            selectedFilters.selectedYearRange[0],
            selectedFilters.selectedYearRange[1],
            orderBy,
        ],
        () => axios.post(`/api/games/cards?page=${currentPage}`, requestData),
        { select: ({ data }) => data }
    );

    if (isLoading) {
        return <div className='text-white'>Loading...</div>;
    }

    if (isError) {
        return <div className='text-white'>Error: {error.message}</div>;
    }

    const games = data.gameCards;

    const displayPageNumbers = () => {
        const totalPages = data.pagesCount;
        const visiblePages = 1;

        const pageNumbers = [];
        let startPage = Math.max(1, currentPage - visiblePages);
        let endPage = Math.min(totalPages, currentPage + visiblePages);

        if (currentPage - visiblePages > 1) {
            pageNumbers.push(1);
            if (currentPage - visiblePages > 2) {
                pageNumbers.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (currentPage + visiblePages < totalPages) {
            if (currentPage + visiblePages < totalPages - 1) {
                pageNumbers.push('...');
            }
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

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
                        <select
                            className='px-6 py-2 border border-gray-200 rounded-md bg-slate-800'
                            onChange={handleSortChange}
                            value={orderBy}>
                            {Object.entries(orderByOptions).map(
                                ([value, label]) => (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                )
                            )}
                        </select>
                    </div>
                    <div className='flex flex-wrap gap-5'>
                        {games?.map((game) => (
                            <Card key={data.id} {...game} />
                        ))}
                    </div>
                    <div className='flex items-center justify-center my-4'>
                        <ul className='flex space-x-5'>
                            {displayPageNumbers().map((pageNumber, index) => (
                                <li key={index}>
                                    <button
                                        onClick={() =>
                                            handlePageChange(pageNumber)
                                        }
                                        className={`cursor-pointer ${
                                            currentPage === pageNumber
                                                ? 'font-bold'
                                                : ''
                                        }`}>
                                        {pageNumber}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Sidebar onFilterChange={handleFilterChange} />
            </div>
            <Footer />
        </Fragment>
    );
};

export default Catalog;
