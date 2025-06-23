import PrayerTimesAladhan from '@/src/components/PrayerTimes';
import PrayerTimesForMonth from '@/src/components/PrayerTimesForMonth';
import React from 'react';

const page = () => {
	return (
		<div className='pt-20'>
			<PrayerTimesAladhan
				city='Cairo'
				country='Egypt'
			/>
			<PrayerTimesForMonth
				city='Cairo'
				country='Egypt'
				month={6}
				year={2025}
			/>
		</div>
	);
};

export default page;
