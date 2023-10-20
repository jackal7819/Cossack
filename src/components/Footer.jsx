import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='bg-footer max-w-[1440px] m-auto'>
			<div className='flex flex-wrap items-center justify-center gap-20 pt-10 pl-10 pr-10 bg-black bg-opacity-50 md:pl-20 md:pr-20 md:pt-20 xl:justify-between xl:pt-40 text-slate-300 xl:gap-80'>
				<div className='flex flex-col items-center justify-center gap-4 xl:items-start'>
					<Link className='flex items-center gap-2' to={'/#banner'}>
						<img
							src='/assets/logo.svg'
							alt='logo'
							className='border rounded-full border-slate-600'
						/>
						<p className='hidden uppercase sm:inline text-sky-300 hover:underline hover:underline-offset-4'>
							Cossack
						</p>
					</Link>
					<div className='flex gap-4'>
						<Link
							to={
								'https://store.steampowered.com/curator/2498681/'
							}
							target='_blank'
							rel='noopener noreferrer'
                            className='hover:underline hover:underline-offset-4'>
							STEAM
						</Link>
						<Link
							to={'https://boosteroid.com/'}
							target='_blank'
							rel='noopener noreferrer'
                            className='hover:underline hover:underline-offset-4'>
							BOOSTEROID
						</Link>
						<Link
							to={'https://playua.net/novyny/'}
							target='_blank'
							rel='noopener noreferrer'
                            className='hover:underline hover:underline-offset-4'>
							PLAYUA
						</Link>
					</div>
					<p className='text-center'>
						&copy; {new Date().getFullYear()}{' '}
						<span className='uppercase text-sky-300'>Cossack. </span>
                        All rights reserved.
					</p>
				</div>
				<div className='flex flex-wrap justify-between gap-20 p-20 border-t border-l border-r rounded-tl-lg rounded-tr-lg border-slate-100'>
					<div className='inline-flex flex-col items-center justify-center flex-grow gap-4'>
						<Link to={'/catalog'} className='hover:underline hover:underline-offset-4'>Каталог</Link>
						<Link to={'/about'} className='hover:underline hover:underline-offset-4'>
							Про <span className='uppercase text-sky-300'>
								Cossack
							</span>
						</Link>
					</div>
					<div className='inline-flex flex-col items-center justify-center flex-grow gap-4'>
						<Link to={'/#bestsellers'} className='hover:underline hover:underline-offset-4'>Бестселери</Link>
						<Link to={'/#novelties'} className='hover:underline hover:underline-offset-4'>Популярні новинки</Link>
					</div>
					<div className='inline-flex flex-col items-center justify-center flex-grow gap-4'>
						<Link to={'/faq'} className='hover:underline hover:underline-offset-4'>FAQ</Link>
						<Link to={'/profile'} className='hidden hover:underline hover:underline-offset-4'>
							Профіль
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
