'use client';

import React, { useEffect, useState } from 'react';
import Hero from './Home/Hero';
import { SurahType } from '../types';
import ParticlesComponent from '../components/basic/tsparticles';
import SurahList from '../components/quraan/SurahList';
import SahabaList from '../components/sahaba/SahabaList';

function Collection() {
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
		<main className='pt-32 pb-28 overflow-x-hidden'>
			<ParticlesComponent id='Particles' />
			<div className='my-16 mt-40'>
				<Hero />
			</div>

			<h1 className='text-4xl font-bold text-center m-8 text-black dark:text-white '>
				القرآن الكريم
			</h1>
			{/* التحقق من أن السور جاهزة */}
			<SurahList surahs={surahs} />
		</main>
	);
}

export default Collection;
