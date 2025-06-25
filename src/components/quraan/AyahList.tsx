'use client';

import { useState, useRef, useEffect } from 'react';
import { AyahType } from '@/src/types';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
	ayahs: AyahType[];
}

const AyahList = ({ ayahs }: Props) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const audioRef = useRef<HTMLAudioElement | null>(null);
	const [loadingAudio, setLoadingAudio] = useState(true);

	useEffect(() => {
		setLoadingAudio(true);
		if (audioRef.current) {
			audioRef.current.play().catch(() => {
				/* التعامل مع أخطاء التشغيل تلقائي */
			});
		}
	}, [currentIndex]);

	const handleEnded = () => {
		if (currentIndex < ayahs.length - 1) {
			setCurrentIndex(currentIndex + 1);
		}
	};

	const handleCanPlay = () => {
		setLoadingAudio(false);
	};

	return (
		<div className='space-y-6 px-2 sm:px-4 md:px-8 max-w-4xl mx-auto'>
			{ayahs.map((ayah, index) => (
				<motion.div
					key={ayah.number}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1, duration: 0.4 }}
					className={`p-4 border rounded-xl shadow-sm bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-700 ${
						index === currentIndex
							? 'ring-2 ring-blue-500 dark:ring-blue-400 bg-blue-50 dark:bg-blue-900'
							: ''
					}`}>
					<p
						dir='rtl'
						className='text-2xl leading-relaxed mb-4 font-scheherazade text-gray-900 dark:text-gray-100'>
						{ayah.text}
					</p>

					{index === currentIndex && (
						<div>
							{loadingAudio && (
								<div className='mb-2 text-center text-gray-500 dark:text-gray-400'>
									تحميل الصوت...
								</div>
							)}

							<audio
								ref={audioRef}
								src={ayah.audio}
								controls
								className='w-full rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-gray-200 dark:bg-gray-700'
								onEnded={handleEnded}
								onCanPlay={handleCanPlay}
								autoPlay>
								متصفحك لا يدعم تشغيل الصوت.
							</audio>
						</div>
					)}
				</motion.div>
			))}
		</div>
	);
};

export default AyahList;
