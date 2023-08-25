import React, { useState, useEffect } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useFilterContext } from './FilterContext';

const YearRangeSelector = () => {
    const { selectedFilters, setSelectedFilters } = useFilterContext();
    const [yearRange, setYearRange] = useState(selectedFilters.selectedYearRange);

    const [delayedYearRange, setDelayedYearRange] = useState(yearRange);

    const handleYearChange = (values) => {
        setYearRange(values);
    };

    useEffect(() => {
        const delayTimer = setTimeout(() => {
            setDelayedYearRange(yearRange);
        }, 1000);

        return () => {
            clearTimeout(delayTimer);
        };
    }, [yearRange]);

    useEffect(() => {
        setSelectedFilters((prevFilters) => ({
            ...prevFilters,
            selectedYearRange: delayedYearRange,
        }));
    }, [delayedYearRange, setSelectedFilters]);

    return (
        <div className='my-4'>
            <div className='mb-2 text-lg font-semibold'>Рік виходу гри</div>
            <Slider
                range
                min={1990}
                max={2023}
                value={yearRange}
                onChange={handleYearChange}
            />
            <div className='flex justify-between mt-4 text-sm'>
                <p className='px-4 py-2 border border-gray-500 rounded-md'>
                    {yearRange[0]}
                </p>
                <div className='w-4 my-4 border-t border-gray-500'></div>
                <p className='px-4 py-2 border border-gray-500 rounded-md'>
                    {yearRange[1]}
                </p>
            </div>
            <div className='my-4 border-t border-gray-500'></div>
        </div>
    );
};

export default YearRangeSelector;
