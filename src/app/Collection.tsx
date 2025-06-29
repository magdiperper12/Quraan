'use client';

import React, { useEffect, useState } from 'react';
import Hero from './Home/Hero';
import { SurahType } from '../types';
import SurahList from '../components/quraan/SurahList';
import TV from '../components/TV';

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
		<main className=' pb-28 overflow-x-hidden'>
			<div className='lg:h-[50vh] xl:h-[70vh] w-11/12 flex flex-col xl:flex-row  justify-center items-center gap-8 '>
				<div className=' w-full xl:w-2/3'>
					<Hero />
				</div>
				<div className='w-full xl:w-1/3 '>
					<TV />
				</div>
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
