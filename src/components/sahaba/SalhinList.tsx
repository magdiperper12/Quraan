'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { salhinData } from '@/src/data/salehin';

export default function SalhinList() {
	const [searchTerm, setSearchTerm] = useState('');

	// تصفية الصالحين حسب النص المدخل في البحث (التحقق من الاسم الكامل)
	const filteredSalhin = salhinData.filter((salih) =>
		salih.personalInfo.fullName.toLowerCase().includes(searchTerm.toLowerCase())
	);

	return (
		<section className='p-6 max-w-7xl mx-auto space-y-6'>
			<h2 className='text-3xl font-bold text-center mb-6 text-green-800 dark:text-green-500'>
				صالحو الأمة
			</h2>
			{/* شريط البحث */}
			<div className='mb-6 flex justify-center'>
				<input
					type='text'
					placeholder='ابحث عن صالح...'
					className='w-full max-w-md p-3 rounded-lg border border-green-700 dark:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-600 dark:bg-gray-700 dark:text-green-100'
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
				/>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
				{filteredSalhin.length > 0 ? (
					filteredSalhin.map((salih, index) => (
						<Link
							href={`/Home/salehin/${salih.id}`}
							key={index}>
							<motion.div
								className='bg-white dark:bg-gray-800 p-2 md:p-6 h-full rounded-2xl shadow-md text-gray-900 dark:text-gray-100 hover:shadow-lg cursor-pointer transition'
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.1 }}>
								<h3 className='text-3xl font-bold text-green-700 dark:text-green-500 mb-2'>
									{salih.personalInfo.fullName}
								</h3>
								<h3 className='text-xl flex justify-center items-center font-bold text-green-700 dark:text-green-300 mb-2'>
									<div>{`( ${salih.id} )`}</div>
								</h3>
								<p className='text-green-500 dark:text-green-100 mb-4'>
									{salih.islamAndFaith.islamStory}
								</p>
							</motion.div>
						</Link>
					))
				) : (
					<p className='text-center col-span-full text-green-700 dark:text-green-400'>
						لا يوجد صالح مطابق للبحث
					</p>
				)}
			</div>
		</section>
	);
}
