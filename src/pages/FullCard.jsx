import React, { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { useQuery } from '@tanstack/react-query';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player/youtube';

const FullCard = () => {
    const { gameId } = useParams();

    const { isLoading, isError, error, data } = useQuery(
        ['game'],
        () => axios.get(`/api/games/${gameId}`),
        { select: ({ data }) => data.gamePage }
    );

    if (isLoading) {
        return <div className='text-white'>Loading...</div>;
    }

    if (isError) {
        return <div className='text-white'>Error: {error.message}</div>;
    }

    // Images

    const limitedImages = data.screenshoots.slice(0, 4);

    // Sort Localizations

    const language = 'Ukrainian';
    const filteredLocalizations = data.localizations.filter(
        (item) => item.language === language
    );

    let localizationUa = '';
    if (filteredLocalizations.length > 0) {
        const types = filteredLocalizations.map((item) => item.type);
        localizationUa = types.join(', ');
    } else {
        localizationUa = `No data available for ${language}`;
    }

    // Websites

    const websiteOfficial = data.websites.find(
        (site) => site.category === 'official'
    );

    const websiteWikipedia = data.websites.find(
        (site) => site.category === 'wikipedia'
    );

    const websiteStore = data.websites.find((site) => site.category === 'gog');

    console.log(data);
    console.log(websiteOfficial.url);

    return (
        <Fragment>
            <div className='flex flex-col items-center gap-48 bg-black max-w-[1440px] bg-opacity-50 m-auto text-slate-100 pl-20 pr-20 pt-20'>
                <div className='flex flex-col gap-10'>
                    <h2 className='text-3xl font-bold uppercase'>
                        {data.name}
                    </h2>
                    <div className='flex gap-5'>
                        <div className='flex flex-col gap-10'>
                            <div className='h-[400px] w-[800px]'>
                                <ReactPlayer
                                    url={data.videos[0]}
                                    width='100%'
                                    height='100%'
                                    controls
                                />
                            </div>
                            <div className='flex flex-wrap gap-5'>
                                {limitedImages.map((image) => (
                                    <div key={image} className='w-1/5'>
                                        <img
                                            src={image}
                                            alt={image}
                                            className='w-full h-auto rounded-lg'
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center gap-10'>
                            <div className='flex flex-col gap-4 font-light'>
                                <div className='flex gap-5'>
                                    <div className='flex flex-col gap-4'>
                                        <p>Розробник:</p>
                                        <p>Дата виходу:</p>
                                        <p>Локалізація:</p>
                                    </div>
                                    <div className='flex flex-col gap-4'>
                                        <p>{data.developers}</p>
                                        <p>{data.releaseDate}</p>
                                        <p className='lowercase'>
                                            {localizationUa}
                                        </p>
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
                                    <p className='text-sky-300'>
                                        {Math.round(data.rating)}/100
                                    </p>
                                </div>
                                {websiteOfficial && (
                                    <div className='flex gap-14'>
                                        <p>Official:</p>
                                        <a
                                            href={websiteOfficial.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-sky-300'>
                                            {websiteOfficial.url}
                                        </a>
                                    </div>
                                )}
                                {websiteWikipedia && (
                                    <div className='flex gap-9'>
                                        <p>Wikipedia:</p>
                                        <a
                                            href={websiteWikipedia.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-sky-300'>
                                            About the Game
                                        </a>
                                    </div>
                                )}
                                {websiteStore && (
                                    <div className='flex gap-20'>
                                        <p>Store:</p>
                                        <a
                                            href={websiteStore.url}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-sky-300'>
                                            Buy the Game
                                        </a>
                                    </div>
                                )}
                                <div className='flex flex-col gap-4'>
                                    <p className='w-[335px]'>Жанри:</p>
                                    <div className='flex flex-wrap gap-3 text-xs font-medium leading-none text-center uppercase text-slate-100'>
                                        {data.genres.map((genre) => (
                                            <div
                                                key={genre}
                                                className='px-3 py-1 border rounded-md bg-zinc-700 border-zinc-300'>
                                                <p>{genre}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <p>{data.summary}</p>
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default FullCard;
