import React from 'react';

const TV = () => {
	return (
		<div
			className={`relative hidden bg-zinc-400  md:flex lg:hidden xl:flex items-center justify-center  bg-`}>
			{/* صورة التلفاز بالخلف */}
			<img
				alt='old tv'
				src='/image/tv-removebg-preview.png'
				className='relative scale-110 z-10 w-[600px] h-auto'
			/>

			{/* الفيديو موضوع فوق شاشة التلفاز بشكل دقيق */}
			<video
				autoPlay
				loop
				muted
				playsInline
				className='absolute scale-105 z-0 w-[600px] overflow-hidden h-[260px] top-[calc(45%-110px)] left-[calc(33%-145px)] rounded-md object-cover shadow-lg'>
				<source
					src='/image/kaba.mp4'
					type='video/mp4'
				/>
				Your browser doesnt support the video tag.
			</video>
		</div>
	);
};

export default TV;
