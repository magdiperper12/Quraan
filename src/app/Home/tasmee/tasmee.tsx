'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Ayatasmee, { AyahType } from './ayatasmee';

interface TasmeeClientProps {
	id: string;
}

const TasmeeClient = ({ id }: TasmeeClientProps) => {
	const [loading, setLoading] = useState(true);
	const [ayahs, setAyahs] = useState<AyahType[]>([]);
	const [surahName, setSurahName] = useState('');

	useEffect(() => {
		setLoading(true);

		fetch(`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`, {
			cache: 'no-store',
		})
			.then((res) => res.json())
			.then((data) => {
				setSurahName(data.data.name);
				const ayahsData = data.data.ayahs.map((ayah: any) => ({
					number: ayah.number,
					numberInSurah: ayah.numberInSurah,
					text: ayah.text,
					audio: ayah.audio,
				}));
				setAyahs(ayahsData);
				setLoading(false);
			})
			.catch((e) => {
				console.error('Error loading surah:', e);
				setLoading(false);
			});
	}, [id]);

	if (loading) {
		return (
			<div className='flex justify-center items-center min-h-screen bg-white dark:bg-gray-900'>
				<p className='text-lg'>جاري تحميل السورة ...</p>
			</div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='container mx-auto pt-20 p-4 min-h-screen text-gray-900 dark:text-gray-100 dark:bg-black/50 bg-white/50'>
			<h1 className='text-3xl flex justify-center items-center font-bold mb-6'>
				{surahName}
			</h1>

			<Ayatasmee
				ayahs={ayahs}
				surahName={surahName}
			/>
		</motion.div>
	);
};

export default TasmeeClient;
