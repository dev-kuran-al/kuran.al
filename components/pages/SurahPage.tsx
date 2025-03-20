import React from 'react';
import { surahs } from '@/constants/surahs';
import PageNotFound from './PageNotFound';
import Link from 'next/link';
import { BetweenHorizonalEnd } from 'lucide-react';

type Props = {
	slug: string;
};

const SurahPage = ({ slug }: Props) => {
	const surah = surahs.find((s) => s.slug === slug);
	console.log('🚀 ~ SurahPage ~ surah:', surah);
	if (!surah) return <PageNotFound message={'Surah not found'} />;
	return (
		<div id='surah-list' className='flex justify-center relative items-center flex-col gap-3 my-10 max-w-7xl mx-auto p-4'>
			<Link href={'/list-suret-e-kuranit'} className='absolute -top-3 left-4 flex justify-center items-center gap-2'>
				<BetweenHorizonalEnd></BetweenHorizonalEnd>
				<p className='text-slate-700 font-semibold'>Lista e sureve</p>
			</Link>
			<div className='flex flex-col md:flex-row justify-center items-center w-full md:w-fit gap-8 p-4 '>
				<div className='p-2 border-2 border-emerald-600 bg-emerald-100/10 backdrop-blur-md  shadow-xl rounded-full w-40 h-40 flex justify-center items-center'>
					<p className='text-[60px] font-arabic '>{surah.arabicName}</p>
				</div>

				<div className='flex flex-col justify-center items-center gap-1 w-full md:w-fit'>
					<h1 className='text-3xl font-semibold mb-2 text-center w-full md:w-fit'>
						{surah.order}. Surja: {surah.nameAl}
					</h1>

					<div className=' flex flex-col md:flex-row gap-3 mb-1 w-full md:w-fit justify-start items-start'>
						<div className='flex  flex-row gap-2 md:gap-1 md:flex-col justify-center items-center'>
							<p className='text-lg font-semibold'>Ajete</p>
							<p className='text-gray-900'>{surah.ayahs}</p>
						</div>
						<div className='py-1'>
							<div className='bg-gray-300 h-full w-0.5 rounded' />
						</div>
						<div className='flex flex-row gap-2 md:gap-1 md:flex-col  justify-center items-center'>
							<p className='text-lg font-semibold'>Vendi i shpalljes</p>
							<p className='text-gray-900'>{surah.place}</p>
						</div>
						<div className='py-1'>
							<div className='bg-gray-300 h-full w-0.5 rounded' />
						</div>
						<div className='flex flex-row gap-2 md:gap-1 md:flex-col  justify-center items-center'>
							<p className='text-lg font-semibold'>Rendi i shpalljes</p>
							<p className='text-gray-900'>{surah.revealOrder}</p>
						</div>
					</div>

					<div className='bg-gray-300 rounded my-2 w-full h-0.5' />
				</div>
			</div>

			<div className='w-full h-0.5 rounded my-10 bg-gray-300' />

			<div>
				<div className=' flex flex-row gap-5'>
					<div className='flex flex-col justify-center items-center'>
						<p className='text-lg font-semibold'>Fjale</p>
						<p className='text-gray-900'>{surah.words}</p>
					</div>

					<div className='py-1'>
						<div className='bg-gray-300 h-full w-0.5 rounded' />
					</div>

					<div className='flex flex-col justify-center items-center'>
						<p className='text-lg font-semibold'>Sasia e Shkronjave</p>
						<p className='text-gray-900'>{surah.chars}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SurahPage;
