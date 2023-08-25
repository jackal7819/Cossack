import React from 'react';
import YearRangeSelector from './YearRangeSelector';
import PlatformFilter from './PlatformFilter';
import DeveloperCountryFilter from './DeveloperCountryFilter';
import GenreFilter from './GenreFilter';
import LocalizationTypeFilter from './LocalizationTypeFilter';

const Sidebar = () => {

    return (
        <div className='w-[950px] text-slate-300'>
            <h2 className='mb-4 text-xl font-semibold'>Фільтри</h2>
            <PlatformFilter/>
            <YearRangeSelector />
            <DeveloperCountryFilter />
            <GenreFilter />
            <LocalizationTypeFilter />
        </div>
    );
};

export default Sidebar;
