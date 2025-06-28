'use client'; // ✅ هنا فقط

import React, { useEffect, useState } from 'react';
import AyahList, { Reciter } from '@/src/components/quraan/AyahList';
import { motion } from 'framer-motion';

interface SurahClientProps {
	id: string;
}

const SurahClient = ({ id }: SurahClientProps) => {
	const [loading, setLoading] = useState(true);
	const [reciters, setReciters] = useState<Reciter[]>([]);
	const [surahName, setSurahName] = useState('');

	useEffect(() => {
		setLoading(true);

		const recitersData = [
			{ id: 'ar.alafasy', name: 'الشيخ العفاسي', image: '/image/affasy.jpeg' },
			{
				id: 'ar.abdulsamad',
				name: 'الشيخ عبدالباسط عبدالصمد',
				image: '/image/abdelbaset.jpg',
			},
		];

		Promise.all(
			recitersData.map(async (r, index) => {
				const res = await fetch(
					`https://api.alquran.cloud/v1/surah/${id}/${r.id}`,
					{
						cache: 'no-store',
					}
				);
				const data = await res.json();

				// 👇 نخزن اسم السورة من أول قارئ فقط
				if (index === 0) {
					setSurahName(data.data.name); // "الفاتحة" مثلاً
				}

				return {
					id: r.id,
					name: r.name,
					image: r.image,
					ayahs: data.data.ayahs.map((ayah: any) => ({
						number: ayah.number,
						numberInSurah: ayah.numberInSurah,
						text: ayah.text,
						audio: ayah.audio,
					})),
				};
			})
		)

			.then((recitersArray) => {
				setReciters(recitersArray);
				setLoading(false);
			})
			.catch((e) => {
				console.error('Error:', e);
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
			className='container mx-auto pt-20 p-4 min-h-screen text-gray-900 dark:text-gray-100'>
			<h1 className='text-3xl flex justify-center items-center font-bold '>
				{surahName}
			</h1>

			<AyahList reciters={reciters} />
		</motion.div>
	);
};

export default SurahClient;
