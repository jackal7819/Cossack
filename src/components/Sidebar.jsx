import DeveloperCountryFilter from './DeveloperCountryFilter';
import GenreFilter from './GenreFilter';
import LocalizationTypeFilter from './LocalizationTypeFilter';
import PlatformFilter from './PlatformFilter';
import YearRangeSelector from './YearRangeSelector';
import { useFilterContext } from './useFilterContext';

const Sidebar = () => {
    const { setSelectedFilters } = useFilterContext();
    
	const CancelFilters = () => {
		setSelectedFilters({
            selectedPlatforms: [],
            selectedDeveloperCountryType: 1,
            selectedGenres: [],
            selectedLocalizationTypes: [],
            selectedYearRange: [1990, 2023],
        })
	};

	return (
		<div
			className='fixed top-0 right-0 h-full p-10 overflow-y-auto transition-transform duration-300 transform xl:w-44 xl:relative bg-slate-900 xl:p-0 xl:bg-transparent xl:overflow-hidden text-slate-300'>
			<h2 className='mb-4 text-xl font-semibold'>Фільтри</h2>
			<button
				className='px-6 py-2 mb-4 rounded-lg bg-sky-600'
				onClick={CancelFilters}>
				Скасувати
			</button>
			<PlatformFilter />
			<YearRangeSelector />
			<DeveloperCountryFilter />
			<GenreFilter />
			<LocalizationTypeFilter />
		</div>
	);
};

export default Sidebar;
