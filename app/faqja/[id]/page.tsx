/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image';
import { Metadata } from 'next';
import Pagination from '../_components/Pagination';
// import PlayQuran from '../_components/PlayQuran';

// Define metadata dynamically for each page
export async function generateMetadata({ params }: any): Promise<Metadata> {
	const { id } = params; // ✅ Removed unnecessary await

	return {
		title: `Faqja ${id} - Lexo Kuran`,
		description: `This is the Quran page number ${id}.`,
	};
}

export async function generateStaticParams() {
	return Array.from({ length: 604 }, (_, i) => ({
		id: String(i + 1).padStart(3, '0'), // Converts 1 → '001', 2 → '002', ..., 604 → '604'
	}));
}

const QuranPage = async ({ params }: any): Promise<any> => {
	const { id } = await params;

	return (
		<div className='flex flex-col justify-center items-center max-w-7xl gap-4 mx-auto px-4'>
			<h1>Quran page - {id}</h1>
			{/* <PlayQuran id={id} /> */}
			<div className='px-3 md:px-6'>
				<Image src={`/img/quran/${id}.jpg`} className='bg-cover w-full h-full md:w-[700px] md:h-[1100px]' alt='quran page' width={700} height={1100} />
			</div>

			<Pagination currentPage={Number(id)} />

			<div className='overflow-hidden relative'>
				<Image src={`/img/page-under-construction.png`} alt='' width={500} height={700} />
			</div>
		</div>
	);
};

export default QuranPage;
