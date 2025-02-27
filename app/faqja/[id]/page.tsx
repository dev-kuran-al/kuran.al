import Image from 'next/image';
import { Metadata } from 'next';
import PlayQuran from '../_components/PlayQuran';

type PageProps = {
	params: { id: string }; // ✅ Ensured params is correct
};

// Define metadata dynamically for each page
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
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

const QuranPage = async ({ params }: PageProps) => {
	const { id } = params; // ✅ Removed unnecessary await

	return (
		<div className='flex flex-col justify-center items-center max-w-7xl gap-4 mx-auto'>
			<h1>Quran page - {id}</h1>
			<PlayQuran id={id} />
			<div>
				<Image src={`/img/quran/${id}.jpg`} className='bg-contain w-full h-full md:w-[700px] md:h-[1100px]' alt='quran page' width={700} height={1100} />
			</div>
		</div>
	);
};

export default QuranPage;
