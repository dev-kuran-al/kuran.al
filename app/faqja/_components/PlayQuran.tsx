'use client';

import React from 'react';
import { useState, useRef } from 'react';
import { Play, Pause, SkipForward, SkipBack } from 'lucide-react';

type Props = {
	id: number | string;
};

const PlayQuran = ({ id }: Props) => {
	console.log('🚀 ~ PlayQuran ~ id:', Number(id));
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [isPlaying, setIsPlaying] = useState(false);
	console.log('🚀 ~ QuranPage ~ isPlaying:', isPlaying);

	if (Number(id) > 0 && Number(id) < 605) {
		// TODO add other QARI/Reciters //? make it dynamic
		const audioUrl = `https://download.quranicaudio.com/quran/mostafa_ismaeel/${id}.mp3`;

		const togglePlay = () => {
			if (audioRef.current) {
				if (isPlaying) {
					audioRef.current!.pause();
				} else {
					audioRef.current.play();
				}
				setIsPlaying(!isPlaying);
			}
		};

		const skipTime = (seconds: number) => {
			if (audioRef.current) {
				audioRef.current.currentTime += seconds;
			}
		};

		const playAyah = (startTime: number, duration: number) => {
			if (audioRef.current) {
				audioRef.current.currentTime = startTime;
				audioRef.current.play();
				setIsPlaying(true);

				// Stop the audio after the ayah duration
				setTimeout(() => {
					if (audioRef.current) {
						audioRef.current.pause();
						setIsPlaying(false);
					}
				}, duration * 1000);
			}
		};
		return (
			<div>
				<div className='flex flex-col items-center p-4 bg-gray-900 text-white rounded-lg w-80 shadow-lg'>
					<audio ref={audioRef} src={audioUrl} />
					<h2 className='text-lg font-semibold mb-2'>Surah Al-Fatiha</h2>
					<div className='flex items-center space-x-4'>
						<button onClick={() => skipTime(-5)} className='p-2 bg-gray-700 rounded-full hover:bg-gray-600'>
							<SkipBack size={24} />
						</button>
						<button onClick={togglePlay} className='p-3 bg-blue-500 rounded-full hover:bg-blue-400'>
							{isPlaying ? <Pause size={24} /> : <Play size={24} />}
						</button>
						<button onClick={() => skipTime(5)} className='p-2 bg-gray-700 rounded-full hover:bg-gray-600'>
							<SkipForward size={24} />
						</button>
					</div>
				</div>

				<div className='mt-4'>
					<h3 className='text-md font-semibold'>Ayahs</h3>
					<button onClick={() => playAyah(10, 4)} className='mt-2 p-2 bg-green-500 rounded hover:bg-green-400'>
						Play Ayah 1
					</button>
				</div>
			</div>
		);
	}
	return <div>page not found -{id}</div>;
};

export default PlayQuran;
