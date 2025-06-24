'use client';

import React, { useState, useEffect } from 'react';
import AyahList from '@/src/components/quraan/AyahList';
import { SurahType } from '@/src/types';
import { motion } from 'framer-motion';

interface PageProps {
	params: Promise<{ id: string }>;
}

export default function SurahPage({ params }: PageProps) {
	const { id } = React.use(params); // فك الـ Promise

	const [surah, setSurah] = useState<SurahType | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`, {
			cache: 'no-store',
		})
			.then((res) => res.json())
			.then((data) => {
				setSurah(data.data);
				setLoading(false);
			})
			.catch(() => setLoading(false));
	}, [id]);

	if (loading) {
		return (
			<div className='flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
				<p className='text-lg'>جاري تحميل السورة ...</p>
			</div>
		);
	}

	if (!surah) {
		return (
			<div className='flex justify-center items-center min-h-screen bg-white dark:bg-gray-900 text-red-500'>
				<p>حدث خطأ أثناء تحميل السورة.</p>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='container mx-auto pt-20 p-4 min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
			<h1 className='text-3xl font-bold mb-6 text-center sm:text-left'>
				{surah.name} - {surah.englishName}
			</h1>
			<AyahList ayahs={surah.ayahs} />
		</motion.div>
	);
}
