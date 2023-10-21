import { Fragment, useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import axios from '../axios';
import { orderByOptions } from '../data';
import { useFilterContext } from '../components/useFilterContext';
import { useQuery } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';

const Catalog = () => {
	const location = useLocation();
	const { selectedFilters, setSelectedFilters } = useFilterContext();
	const [currentPage, setCurrentPage] = useState(1);
	const [pageNumberInput, setPageNumberInput] = useState('1');
	const [orderBy, setOrderBy] = useState('ratingDesc');
	const [searchQuery, setSearchQuery] = useState('');
	const [currentSearchQuery, setCurrentSearchQuery] = useState('');
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(!isSidebarOpen);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
		if (window.innerWidth > 1279) {
			setIsSidebarOpen(true);
		}
	}, []);

	useEffect(() => {
		const queryParams = new URLSearchParams(location.search);
		const query = queryParams.get('search') || '';
		setSearchQuery(query);
		setCurrentSearchQuery(query);
	}, [location]);
	
	useEffect(() => {
		const currentPageFromSession = sessionStorage.getItem('currentPage');
		if (currentPageFromSession) {
			setCurrentPage(parseInt(currentPageFromSession, 10));
		} else {
			setCurrentPage(1);
		}
	}, []);
	console.log(currentPage);
	
	const handlePageChange = (pageNumber) => {
		if (pageNumber === '...') {
			return;
		}
		setCurrentPage(pageNumber);
		sessionStorage.setItem('currentPage', currentPage.toString());
	};

	const handlePageNumberInput = (e) => {
		const inputNumber = e.target.value;
		setPageNumberInput(inputNumber);
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
			currentSearchQuery,
		],
		() =>
			axios.post(
				`/api/games/cards?search=${currentSearchQuery}&page=${currentPage}`,
				requestData
			),
		{ select: ({ data }) => data }
	);

	const handleSearch = () => {
		setCurrentSearchQuery(searchQuery);
		setCurrentPage(1);
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			handleSearch();
			console.log('Поиск начался');
		}
	};

	const handleInputChange = (event) => {
		setSearchQuery(event.target.value);
	};

	const goToPage = () => {
		const pageNumber = parseInt(pageNumberInput);
		if (
			!isNaN(pageNumber) &&
			pageNumber >= 1 &&
			pageNumber <= data.pagesCount
		) {
			handlePageChange(pageNumber);
			setPageNumberInput('');
		}
	};

	if (isLoading) {
		return (
			<div className='flex items-center justify-center bg-footer h-screen-minus-menu max-w-[1440px] m-auto'>
				<img src='/assets/wedges.svg' />
			</div>
		);
	}

	if (isError) {
		return <div className='text-white'>Error: {error.message}</div>;
	}

	const games = data.gameCards;
	const totalPages = data.pagesCount;

	const displayPageNumbers = () => {
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
			<div className='bg-black max-w-[1440px] bg-opacity-50 mx-auto text-slate-300 lg:pl-20 lg:pr-20 pt-20 px-5 relative'>
				<div className='flex flex-col items-center justify-center gap-10'>
					<h2 className='text-3xl font-semibold'>
						Каталог локалізованих ігор
					</h2>
					<button
						className='absolute block w-20 py-2 text-center rounded-lg left-5 top-5 bg-sky-600 xl:hidden'
						onClick={toggleSidebar}>
						{isSidebarOpen ? 'Close' : 'Filter'}
					</button>
					<div className='flex flex-wrap items-center justify-center gap-3'>
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
						<div className='flex items-center'>
							<input
								type='text'
								placeholder='Введіть назву гри'
								className='px-6 py-2 mr-2 border rounded-lg text-slate-700 lg:w-96'
								value={searchQuery}
								onChange={handleInputChange}
								onKeyDown={handleKeyDown}
							/>
							<button
								className='px-6 py-2 rounded-lg bg-sky-600'
								onClick={handleSearch}>
								Пошук
							</button>
						</div>
					</div>
					<div className='flex justify-between w-full gap-10'>
						<div className='flex flex-wrap justify-center flex-1 gap-5'>
							{games?.length > 0 ? (
								games.map((game) => (
									<Card key={game.id} {...game} />
								))
							) : (
								<p className='mx-auto mt-10 text-3xl h-[28vh]'>
									Ігри не знайдено за вашим запитом
								</p>
							)}
						</div>
						{isSidebarOpen && games?.length > 0 && (
							<Sidebar onFilterChange={handleFilterChange} />
						)}
					</div>

					<div className='flex items-center justify-center'>
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
						{totalPages > 1 && (
							<div>
								<input
									type='text'
									value={pageNumberInput}
									onChange={handlePageNumberInput}
									className='w-10 p-1 ml-2 mr-2 rounded text-slate-700'
								/>
								<button onClick={goToPage}>Перейти</button>
							</div>
						)}
					</div>
				</div>
			</div>
			<Footer />
		</Fragment>
	);
};

export default Catalog;
