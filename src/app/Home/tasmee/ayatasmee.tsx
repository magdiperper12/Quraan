'use client';

import React, { useEffect, useState, useRef } from 'react';

export interface AyahType {
	number: number;
	numberInSurah?: number;
	text: string;
	audio: string;
}

interface Props {
	ayahs: AyahType[];
	surahName: string;
}

function toArabicNumber(num: number) {
	return num.toString().replace(/\d/g, (d) => '٠١٢٣٤٥٦٧٨٩'[parseInt(d, 10)]);
}

// 1. مكون عرض عنوان السورة وشريط التقدم
interface SurahHeaderProps {
	surahName: string;
	started: boolean;
	visibleCount: number;
	totalAyahs: number;
}

const SurahHeader = ({
	surahName,
	started,
	visibleCount,
	totalAyahs,
}: SurahHeaderProps) => {
	const progressPercent = Math.floor((visibleCount / totalAyahs) * 100);

	return (
		<div>
			<h1 className='text-4xl sm:text-5xl font-extrabold text-center mb-8 text-gray-900 dark:text-gray-100 tracking-tight select-none'>
				{surahName}
			</h1>
			{started && (
				<div className='w-full mb-8'>
					<div className='relative h-6 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden shadow-inner'>
						<div
							className='absolute top-0 left-0 h-5 bg-gradient-to-r from-green-400 via-green-600 to-green-700 transition-all duration-700 ease-in-out'
							style={{ width: `${progressPercent}%` }}
						/>
					</div>
					<p className='mt-2 text-center text-sm sm:text-base text-gray-700 dark:text-gray-300 font-semibold select-none'>
						الآيات المنجزة:{' '}
						<span className='text-green-600 dark:text-green-400'>
							{visibleCount}
						</span>{' '}
						/ {totalAyahs} ({progressPercent}%)
					</p>
				</div>
			)}
		</div>
	);
};

// 2. مكون عرض الآيات
interface AyahDisplayProps {
	ayahs: AyahType[];
	visibleCount: number;
	ayahRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
}

const AyahDisplay = ({ ayahs, visibleCount, ayahRefs }: AyahDisplayProps) => {
	useEffect(() => {
		if (visibleCount === 0) return;
		const currentSpan = ayahRefs.current[visibleCount - 1];
		if (currentSpan) {
			currentSpan.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}, [visibleCount, ayahRefs]);

	return (
		<div
			dir='rtl'
			className='flex-1 overflow-y-auto px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-inner font-scheherazade text-2xl sm:text-3xl leading-relaxed text-gray-900 dark:text-gray-100 select-text'
			style={{ wordBreak: 'break-word' }}>
			{ayahs.map((ayah, index) => (
				<span
					key={ayah.number}
					ref={(el) => (ayahRefs.current[index] = el)}
					className={`inline-block min-h-[3.5rem] py-1 mb-1 rounded-lg transition-opacity duration-500 ${
						index < visibleCount
							? 'opacity-100 bg-white dark:bg-gray-700 shadow-md px-2'
							: 'opacity-0 pointer-events-none select-none'
					}`}
					aria-hidden={index >= visibleCount}>
					{index < visibleCount && (
						<>
							{ayah.text}
							<span className='mx-2 text-sm sm:text-base align-middle bg-white dark:bg-gray-900 text-black dark:text-gray-100 w-9 h-9 p-1 rounded-full inline-flex justify-center items-center font-semibold shadow-md'>
								﴿{toArabicNumber(ayah.numberInSurah || index + 1)}﴾
							</span>
						</>
					)}
				</span>
			))}
		</div>
	);
};

// 3. مكون أزرار التحكم
interface AyahControlsProps {
	started: boolean;
	paused: boolean;
	visibleCount: number;
	totalAyahs: number;
	onStart: () => void;
	onPauseToggle: () => void;
	onReplay: () => void;
	onPrev: () => void;
	onNextWithoutSound: () => void;
}

const AyahControls = ({
	started,
	paused,
	visibleCount,
	totalAyahs,
	onStart,
	onPauseToggle,
	onReplay,
	onPrev,
	onNextWithoutSound,
}: AyahControlsProps) => {
	return (
		<div className='flex flex-wrap justify-center gap-4 mb-10 mt-12'>
			{!started ? (
				<button
					onClick={onStart}
					className='px-8 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 transition rounded-lg text-white text-lg font-semibold shadow-md shadow-blue-500/30 focus:outline-none focus:ring-4 focus:ring-blue-400'
					aria-label='ابدأ التلاوة'>
					ابدأ
				</button>
			) : (
				<>
					<button
						onClick={onPrev}
						className='px-6 py-2 bg-gray-700 hover:bg-gray-800 active:bg-gray-900 transition rounded-lg text-white font-medium shadow-md shadow-gray-600/30 focus:outline-none focus:ring-4 focus:ring-gray-500'
						aria-label='إعادة الآية السابقة'
						disabled={visibleCount <= 1}
						title={
							visibleCount <= 1 ? 'لا توجد آيات سابقة' : 'إعادة الآية السابقة'
						}>
						⏮️ إعادة الآية السابقة
					</button>
					<button
						onClick={onPauseToggle}
						className='px-6 py-2 bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 transition rounded-lg text-white font-medium shadow-md shadow-yellow-400/40 focus:outline-none focus:ring-4 focus:ring-yellow-300'
						aria-label={paused ? 'استئناف التلاوة' : 'إيقاف مؤقت للتلاوة'}>
						{paused ? '▶️ استئناف' : '⏸️ إيقاف مؤقت'}
					</button>
					<button
						onClick={onReplay}
						className='px-6 py-2 bg-purple-600 hover:bg-purple-700 active:bg-purple-800 transition rounded-lg text-white font-medium shadow-md shadow-purple-500/40 focus:outline-none focus:ring-4 focus:ring-purple-400'
						aria-label='إعادة تشغيل صوت الآية الحالية'>
						🔄 إعادة تشغيل الصوت
					</button>
					<button
						onClick={onNextWithoutSound}
						className='px-6 py-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 transition rounded-lg text-white font-medium shadow-md shadow-indigo-500/40 focus:outline-none focus:ring-4 focus:ring-indigo-400'
						aria-label='الآية التالية بدون صوت'>
						➡️ التالي بدون صوت
					</button>
				</>
			)}
		</div>
	);
};

// المكون الرئيسي الذي يجمع الكل
const Ayatasmee = ({ ayahs, surahName }: Props) => {
	const [visibleCount, setVisibleCount] = useState(0);
	const [started, setStarted] = useState(false);
	const [paused, setPaused] = useState(true);
	const [playAudio, setPlayAudio] = useState(false);

	const audioRef = useRef<HTMLAudioElement | null>(null);
	const ayahRefs = useRef<(HTMLSpanElement | null)[]>([]);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	useEffect(() => {
		if (!started || paused || !playAudio) return;
		if (visibleCount >= ayahs.length) return;

		const currentAyah = ayahs[visibleCount];
		if (!currentAyah || !currentAyah.audio) return;

		if (audioRef.current) {
			audioRef.current.pause();
			audioRef.current = null;
		}
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		const audio = new Audio(currentAyah.audio);
		audioRef.current = audio;
		audio.play();

		const onEnded = () => {
			setVisibleCount((prev) => prev + 1);
		};
		audio.addEventListener('ended', onEnded);

		return () => {
			if (timeoutRef.current) clearTimeout(timeoutRef.current);
			if (audioRef.current) {
				audioRef.current.pause();
			}
		};
	}, [visibleCount, started, paused, playAudio, ayahs]);

	const handlePauseToggle = () => {
		if (paused) {
			setPaused(false);
			setPlayAudio(true);
		} else {
			setPaused(true);
			setPlayAudio(false);
			if (audioRef.current) {
				audioRef.current.pause();
			}
		}
	};

	const handleStart = () => {
		setVisibleCount(1);
		setStarted(true);
		setPaused(true);
		setPlayAudio(false);
	};

	const handleReplay = () => {
		if (audioRef.current) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
		} else if (visibleCount > 0) {
			setPlayAudio(true);
			setPaused(false);
		}
	};

	const handlePrev = () => {
		if (visibleCount > 1) {
			setVisibleCount((prev) => prev - 1);
		}
	};

	const handleNextWithoutSound = () => {
		if (visibleCount < ayahs.length) {
			setVisibleCount((prev) => prev + 1);
		}
	};

	return (
		<div className='max-w-4xl mx-auto p-6 sm:p-8 lg:p-12 bg-white dark:bg-gray-900 rounded-xl shadow-lg flex flex-col min-h-[80vh]'>
			<SurahHeader
				surahName={surahName}
				started={started}
				visibleCount={visibleCount}
				totalAyahs={ayahs.length}
			/>
			<AyahDisplay
				ayahs={ayahs}
				visibleCount={visibleCount}
				ayahRefs={ayahRefs}
			/>
			<AyahControls
				started={started}
				paused={paused}
				visibleCount={visibleCount}
				totalAyahs={ayahs.length}
				onStart={handleStart}
				onPauseToggle={handlePauseToggle}
				onReplay={handleReplay}
				onPrev={handlePrev}
				onNextWithoutSound={handleNextWithoutSound}
			/>
		</div>
	);
};

export default Ayatasmee;
