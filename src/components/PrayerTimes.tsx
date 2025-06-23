'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type Timings = {
	Fajr: string;
	Sunrise?: string;
	Dhuhr: string;
	Asr: string;
	Maghrib: string;
	Isha: string;
	Sunset?: string;
	Imsak?: string;
	Midnight?: string;
	Firstthird?: string;
	Lastthird?: string;
};

export default function PrayerTimesAladhan({
	city = 'Cairo',
	country = 'Egypt',
}: {
	city?: string;
	country?: string;
}) {
	const [timings, setTimings] = useState<Timings | null>(null);
	const [date, setDate] = useState<string>('');

	const arabicNames: Record<string, string> = {
		Fajr: 'الفجر',
		Sunrise: 'الشروق',
		Dhuhr: 'الظهر',
		Asr: 'العصر',
		Maghrib: 'المغرب',
		Isha: 'العشاء',
		Sunset: 'الغروب',
		Imsak: 'الإمساك',
		Midnight: 'منتصف الليل',
		Firstthird: 'الثلث الأول',
		Lastthird: 'الثلث الأخير',
	};

	function convertTo12Hour(time24: string): string {
		const [hourStr, minute] = time24.split(':');
		let hour = parseInt(hourStr);
		const ampm = hour >= 12 ? 'م' : 'ص';
		hour = hour % 12;
		if (hour === 0) hour = 12;
		return `${hour}:${minute} ${ampm}`;
	}

	useEffect(() => {
		fetch(
			`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`
		)
			.then((res) => res.json())
			.then((data) => {
				setTimings(data.data.timings);
				setDate(data.data.date.readable);
			})
			.catch((err) => console.error(err));
	}, [city, country]);

	if (!timings)
		return (
			<p className='text-center text-gray-700 dark:text-gray-300 mt-10'>
				جاري تحميل المواقيت...
			</p>
		);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='max-w-md mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg space-y-6
                 text-gray-900 dark:text-gray-100
                 sm:p-8
                 '>
			<h2 className='text-2xl font-extrabold text-center'>
				مواقيت الصلاة اليوم - <span className='text-indigo-400'>{date}</span>
			</h2>
			<ul className='grid grid-cols-2 gap-4 sm:grid-cols-3 text-center text-lg font-medium'>
				{Object.keys(timings).map((item) => (
					<motion.li
						key={item}
						whileHover={{ scale: 1.1, color: '#6366F1' }}
						className='bg-gray-100 dark:bg-gray-800 rounded-md py-3 shadow-sm
                       flex flex-col justify-center items-center
                       transition-colors duration-300'>
						<span className='text-sm uppercase tracking-wide mb-1'>
							{arabicNames[item] || item}
						</span>
						<span className='font-semibold'>
							{timings[item as keyof Timings]
								? convertTo12Hour(timings[item as keyof Timings] as string)
								: '--'}
						</span>
					</motion.li>
				))}
			</ul>
		</motion.div>
	);
}
