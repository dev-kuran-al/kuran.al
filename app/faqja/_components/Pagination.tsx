'use client';

import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Pagination({ currentPage }: { currentPage: number }) {
	const [page, setPage] = useState(currentPage);
	const maxPage = 604;
	const minPage = 1;

	const router = useRouter();

	const nextPage = Math.min(page + 1, maxPage);
	const prevPage = Math.max(page - 1, minPage);

	return (
		<div className='flex justify-center items-center gap-4 p-4'>
			<button
				onClick={() => {
					if (page < 100 && page > 9) {
						router.push(`/faqja/0${nextPage}`);
					} else if (page > 0 && page < 10) {
						router.push(`/faqja/00${nextPage}`);
					}
				}}
				className='px-4 py-2 rounded-lg disabled:bg-gray-400'
				disabled={page === maxPage}
			>
				<ArrowLeftCircle />
			</button>
			<span className='px-4 py-2 border rounded-lg'>{page}</span>
			<button
				onClick={() => {
					if (page < 100 && page > 9) {
						router.push(`/faqja/0${prevPage}`);
					} else if (page > 0 && page < 10) {
						router.push(`/faqja/00${prevPage}`);
					}
				}}
				className='px-4 py-2  rounded-lg disabled:bg-gray-400'
				disabled={page === minPage}
			>
				<ArrowRightCircle />
			</button>
		</div>
	);
}
