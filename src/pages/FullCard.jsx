import React, { Fragment, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../axios';
import { useQuery } from '@tanstack/react-query';
import Footer from '../components/Footer';
import ReactPlayer from 'react-player/youtube';
import GameSummary from '../components/GameSummary';
import Similar from '../components/Similar';

const FullCard = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { gameId } = useParams();

    const { isLoading, isError, error, data } = useQuery(
        ['game', gameId],
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

    const limitedImages = data.screenshoots.slice(0, 6);

    return (
        <Fragment>
            <div className='flex flex-col items-center gap-10 bg-black max-w-[1440px] bg-opacity-50 m-auto text-slate-100 pl-10 pr-10 md:pl-20 md:pr-20 md:pt-20 pt-10'>
                <div className='flex flex-col gap-10'>
                    <h2 className='text-xl font-bold text-center uppercase lg:text-3xl'>
                        {data.name}
                    </h2>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-col items-center gap-10 lg:flex-row'>
                            <div className='w-full aspect-video'>
                                <ReactPlayer
                                    url={
                                        data.videos[0]
                                            ? data.videos[0]
                                            : 'https://www.youtube.com/watch?v=lowuhXBHxAw'
                                    }
                                    width='100%'
                                    height='100%'
                                    controls
                                />
                            </div>
                            <GameSummary data={data} />
                        </div>
                        <div className='flex flex-col gap-10'>
                            <p>{data.summary}</p>
                        </div>
                        <div className='flex flex-wrap justify-center gap-5 xl:justify-around'>
                            {limitedImages.map((image) => (
                                <div key={image} className='w-96'>
                                    <img
                                        src={image}
                                        alt={image}
                                        className='w-full h-auto rounded-lg'
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <Similar data={data} />
            </div>
            <Footer />
        </Fragment>
    );
};

export default FullCard;
