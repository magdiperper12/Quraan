'use client';

import { useState, useRef, useEffect } from 'react';

export interface AyahType {
	number: number;
	numberInSurah?: number;
	text: string;
	audio: string;
}

export interface Reciter {
	id: string;
	name: string;
	image: string;
	ayahs: AyahType[];
}

// دالة لتحويل الرقم إلى أرقام عربية هندية
function toArabicNumber(num: number) {
	return num.toString().replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[parseInt(d, 10)]);
}

interface Props {
	reciters: Reciter[];
}

const AyahList = ({ reciters }: Props) => {
	const [currentReciterIndex, setCurrentReciterIndex] = useState(0);
	const [currentIndex, setCurrentIndex] = useState(0);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [loadingAudio, setLoadingAudio] = useState(true);

	const currentReciter = reciters[currentReciterIndex];
	const ayahs = currentReciter.ayahs;

	useEffect(() => {
		setLoadingAudio(true);
		if (audioRef.current) {
			audioRef.current.play().catch(() => {});
		}
	}, [currentIndex, currentReciterIndex]);

	const handleEnded = () => {
		if (currentIndex < ayahs.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};
	const handleCanPlay = () => setLoadingAudio(false);

	return (
		<div className='max-w-4xl mx-auto p-4'>
			{/* اختيار القارئ */}
			<div className='flex items-center justify-center py-4 gap-4 mb-4'>
				<img
					src={currentReciter.image}
					alt={currentReciter.name}
					className='w-16 h-16 rounded-full border-2 border-blue-500 object-cover'
				/>
				<div className='flex-1'>
					<label className='block mb-2 font-medium text-green-800 dark:text-green-400'>
						اختر القارئ:
					</label>
					<select
						className='w-full p-3 border border-green-500 rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500 transition'
						value={currentReciterIndex}
						onChange={(e) => {
							setCurrentReciterIndex(Number(e.target.value));
							setCurrentIndex(0); // العودة لأول آية عند تغيير القارئ
						}}>
						{reciters.map((rec, index) => (
							<option
								key={rec.id}
								value={index}
								className='bg-white dark:bg-gray-800'>
								{rec.name}
							</option>
						))}
					</select>
				</div>
			</div>

			{/* نصّ السورة */}
			<div
				dir='rtl'
				className='text-2xl leading-relaxed font-scheherazade text-justify'>
				{ayahs.map((ayah, index) => (
					<span
						key={ayah.number}
						className={` ${
							index === currentIndex ? ' text-blue-700 dark:text-blue-400 ' : ''
						}`}>
						{ayah.text}{' '}
						<span className='mx-1 text-sm align-middle bg-white text-black w-8 h-8 p-1 rounded-full'>
							﴿{toArabicNumber(ayah.numberInSurah || index + 1)}﴾
						</span>
					</span>
				))}
			</div>

			{/* تحميل الصوت */}
			{loadingAudio && (
				<div className='my-2 text-center text-gray-500 dark:text-gray-400'>
					تحميل الصوت...
				</div>
			)}

			<audio
				ref={audioRef}
				src={ayahs[currentIndex]?.audio}
				controls
				className='mt-4 w-full rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 dark:bg-gray-700'
				onEnded={handleEnded}
				onCanPlay={handleCanPlay}
				autoPlay
			/>
		</div>
	);
};

export default AyahList;
