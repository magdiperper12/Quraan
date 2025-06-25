'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

type PrayerTimings = {
	Fajr: string;
	Dhuhr: string;
	Asr: string;
	Maghrib: string;
	Isha: string;
	Sunrise?: string;
	Sunset?: string;
	Imsak?: string;
	Midnight?: string;
	Firstthird?: string;
	Lastthird?: string;
};

type DayData = {
	date: { gregorian: { date: string } };
	timings: PrayerTimings;
};

export default function PrayerTimesForMonth({
	city = 'Cairo',
	country = 'Egypt',
	month = 6,
	year = 2025,
}: {
	city?: string;
	country?: string;
	month?: number;
	year?: number;
}) {
	const [days, setDays] = useState<DayData[]>([]);
	const [loading, setLoading] = useState(true);

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
		// بعض الأوقات قد تأتي بصيغة "05:12 (EET)"، فلنأخذ فقط HH:mm
		const timeMatch = time24.match(/^(\d{2}):(\d{2})/);
		if (!timeMatch) return time24; // fallback إذا كان التنسيق غير معروف
		let hour = parseInt(timeMatch[1]);
		const minute = timeMatch[2];
		const ampm = hour >= 12 ? 'م' : 'ص';
		hour = hour % 12;
		if (hour === 0) hour = 12;
		return `${hour}:${minute} ${ampm}`;
	}

	useEffect(() => {
		setLoading(true);
		fetch(
			`https://api.aladhan.com/v1/calendarByCity/${year}/${month}?city=${city}&country=${country}`
		)
			.then((res) => res.json())
			.then((data) => setDays(data.data))
			.catch((e) => console.error(e))
			.finally(() => setLoading(false));
	}, [city, country, month, year]);

	if (loading)
		return (
			<p className='text-center mt-10 text-gray-700 dark:text-gray-300'>
				جاري تحميل أوقات الصلاة...
			</p>
		);

	return (
		<div
			className='max-w-4xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg mt-8
                 text-gray-900 dark:text-gray-100'>
			<h2 className='text-2xl font-bold mb-6 text-center'>
				أوقات الصلاة -{' '}
				<span className='text-indigo-400'>
					{month}/{year}
				</span>
			</h2>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 '>
				{days.map((d, i) => (
					<motion.div
						key={i}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.05 }}
						className='border col-span-1 flex justify-center items-center flex-col border-green-300 dark:border-green-700 p-3 rounded-md
                       hover:bg-green-50 dark:hover:bg-green-800
                    
                       gap-2'>
						<span className='font-semibold text-center  w-full p-2 rounded-xl bg-blue-500'>
							{d.date.gregorian.date}
						</span>

						<div className='grid grid-cols-3  gap-3 text-sm md:gap-5 justify-center md:justify-start'>
							{Object.entries(d.timings).map(([key, value]) => {
								// نظهر فقط الأوقات المهمة من القائمة العربية (الفجر، الظهر، العصر، المغرب، العشاء)
								if (!arabicNames[key]) return null;
								return (
									<span
										key={key}
										className='flex flex-col items-center col-span-1 '>
										{arabicNames[key]}{' '}
										<span className='font-medium'>
											{convertTo12Hour(value)}
										</span>
									</span>
								);
							})}
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
