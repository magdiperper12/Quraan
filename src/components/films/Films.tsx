'use client';
import { FilmsProps } from '@/src/types';
import React, { useState } from 'react';

const Films: React.FC<FilmsProps> = ({ videos }) => {
	const [selectedVideo, setSelectedVideo] = useState(videos[0]);
	const [searchTerm, setSearchTerm] = useState('');
	const [visibleCount, setVisibleCount] = useState(6); // عدد الفيديوهات المعروضة مبدئيًا

	// فلترة الفيديوهات
	const filteredVideos = videos.filter(
		(video) =>
			video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			video.description.toLowerCase().includes(searchTerm.toLowerCase())
	);

	const visibleVideos = filteredVideos.slice(0, visibleCount); // نأخذ أول عدد من الفيديوهات

	return (
		<div className='min-h-screen max-w-7xl m-auto pt-20 p-4'>
			<h1 className='text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white'>
				فيديوهات من YouTube
			</h1>

			{/* الفيديو الرئيسي */}
			<div className='bg-white dark:bg-gray-800 p-4 rounded-xl shadow-xl mb-6'>
				<iframe
					width='100%'
					height='400'
					src={`${selectedVideo.url}${
						selectedVideo.url.includes('?') ? '&' : '?'
					}autoplay=1`}
					title={selectedVideo.title}
					frameBorder='0'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					allowFullScreen
					className='rounded-lg mb-4'></iframe>
				<h2 className='text-xl font-bold text-gray-900 dark:text-white'>
					{selectedVideo.title}
				</h2>
				<p className='text-gray-600 dark:text-gray-400 mt-2'>
					{selectedVideo.description}
				</p>
			</div>

			<div className='flex justify-start mt-16 items-center gap-4'>
				<h3 className='text-2xl font-bold mb-4 text-gray-900 dark:text-white'>
					مقاطع أخرى
				</h3>
				<input
					type='text'
					placeholder='ابحث باسم الفيديو أو الوصف...'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className='w-full max-w-md p-3 mb-6 rounded-lg border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white'
				/>
			</div>

			{/* قائمة الفيديوهات المفلترة */}
			<div className='grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{visibleVideos.map((video, index) => (
					<div
						key={index}
						onClick={() => setSelectedVideo(video)}
						className='cursor-pointer bg-white dark:bg-gray-800 p-4 rounded-lg shadow hover:shadow-xl transition'>
						<iframe
							width='100%'
							height='180'
							src={video.url}
							title={video.title}
							frameBorder='0'
							allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
							allowFullScreen
							className='rounded-lg mb-2'></iframe>
						<h2 className='text-lg font-bold text-gray-900 dark:text-white'>
							{video.title}
						</h2>
						<p className='text-sm text-gray-500 dark:text-gray-400'>
							{video.description}
						</p>
					</div>
				))}

				{filteredVideos.length === 0 && (
					<p className='text-center w-full col-span-full text-gray-500 dark:text-gray-400'>
						لا توجد فيديوهات مطابقة لبحثك.
					</p>
				)}
			</div>

			{/* زر عرض المزيد */}
			{visibleCount < filteredVideos.length && (
				<div className='mt-8 text-center'>
					<button
						onClick={() => setVisibleCount((prev) => prev + 6)}
						className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition'>
						عرض المزيد
					</button>
				</div>
			)}
		</div>
	);
};

export default Films;
