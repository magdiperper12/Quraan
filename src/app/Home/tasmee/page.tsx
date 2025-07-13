'use client';

import { SurahType } from '@/src/types';
import React, { useEffect, useState } from 'react';
import TasmeeSurah from './tasmeeSurah';

const page = () => {
	const [surahs, setSurahs] = useState<SurahType[]>([]); // تخزين السور
	useEffect(() => {
		async function fetchSurahs() {
			try {
				const res = await fetch('https://api.alquran.cloud/v1/surah');
				const data = await res.json();
				setSurahs(data.data); // تحديث الحالة
			} catch (error) {
				console.error('Error fetching surahs:', error);
			}
		}
		fetchSurahs();
	}, []); // تُنفّذ مرة واحدة عند أول تحميل

	return (
		<div>
			<TasmeeSurah surahs={surahs} />
		</div>
	);
};

export default page;
