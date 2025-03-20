import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
	message?: string;
	buttonLabel?: string;
	buttonLink?: string;
};

const PageNotFound = ({ message = 'Page Not Found!', buttonLabel, buttonLink }: Props) => {
	return (
		<div className='flex flex-col items-center justify-center h-screen text-center bg-gray-100 '>
			<Image src='/img/file-searching.png' alt='Error' width={300} height={300} className='mb-6' />
			<h2 className='text-2xl font-semibold text-gray-800 '>{message}</h2>
			<div className='mt-6 flex gap-4'>
				<Link href='/' className='px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition'>
					Go Home
				</Link>
				{buttonLink ? (
					<Link href={buttonLink} className='px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition'>
						{buttonLabel}
					</Link>
				) : (
					<></>
				)}
			</div>
		</div>
	);
};

export default PageNotFound;
