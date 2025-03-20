import React from 'react';
import SurahsList from '@/components/landing/SurahsList';
import Image from 'next/image';

const LandingPage = () => {
	return (
		<div className='flex justify-center items-center pt-10 flex-col gap-6'>
			<Image src='/img/quran-caligraphy.png' alt='quran' className='rounded-full p-1' width={500} height={500} />
			<h1 className='text-xl text-center md:text-3xl font-bold'>LexoKuran.al vjen se shpejti</h1>

			<span className='arabicFont text-3xl font-medium'>قُلْ هُوَ اللَّهُ أَحَدٌ</span>

			<SurahsList />
		</div>
	);
};

export default LandingPage;
