import { Sura } from '@/constants/surahs';
import { Tooltip } from 'antd';
import Link from 'next/link';
import React from 'react';

type Props = {
	surah: Sura;
};

const SurahCard = ({ surah }: Props) => {
	return (
		<Link
			href={`/surja/${surah.slug}`}
			className=' border-2 flex justify-between items-center group rounded-lg w-full px-4 md:px-1 lg:px-3 py-2 hover:bg-orange-50 md:w-[330px] lg:w-[400px] hover:border-orange-200 shadow-md hover:shadow-orange-200 hover:scale-105 relative group'
		>
			<div className='flex gap-3 justify-start items-center'>
				<div className='relative'>
					<div className=' border-4 rounded-lg rotate-45 w-9 h-9 group-hover:border-orange-400 group-hover:bg-orange-400' />
					<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm group-hover:text-white font-semibold'>{surah.order}</div>
				</div>
				<div className='flex flex-col justify-start'>
					<p className='font-bold text-base leading-8 '>{surah.nameAl}</p>
					<p className='font-semibold text-sm text-gray-600'>
						<span className='group-hover:text-orange-400'>
							{surah.order}: {surah.name}{' '}
						</span>
						<span className='text-xs pl-1'> {surah.ayahs} ajete</span>
					</p>
				</div>
			</div>

			<div className='flex flex-col justify-start'>
				<p className='font-arabic flex justify-center items-center text-3xl'>{surah.arabicName}</p>
				<p className='font-hand flex justify-center font-semibold text-gray-600 items-center text-sm'>
					{surah.place} ({surah.revealOrder}.)
				</p>
			</div>
		</Link>
	);
};

export default SurahCard;
