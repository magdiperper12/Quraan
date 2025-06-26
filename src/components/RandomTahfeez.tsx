'use client';

import { useEffect, useState } from 'react';
import { Tahfeez } from '../data/tahfeez';

export default function RandomTahfeez() {
	const [quote, setQuote] = useState<string>('');
	const [speaker, setSpeaker] = useState<string>('');

	useEffect(() => {
		const randomIndex = Math.floor(Math.random() * Tahfeez.length);
		setQuote(Tahfeez[randomIndex].description);
		setSpeaker(Tahfeez[randomIndex].speaker);
	}, []);

	return (
		<>
			<div className='pt-4  text-center text-orange-600 dark:text-orange-400 font-medium text-3xl'>
				<span className=' px-2'>"</span> {quote}{' '}
				<span className=' px-2'>"</span>
			</div>
			<div className=' text-center text-orange-600 dark:text-orange-400 font-medium text-lg'>
				<span className='text-lg px-1'>"</span> {speaker}{' '}
				<span className='text-lg px-1'>"</span>
			</div>
		</>
	);
}
