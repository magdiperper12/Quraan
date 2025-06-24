'use client';

import { SurahType } from '@/src/types';
import { motion, AnimatePresence } from 'framer-motion';
import SurahItem from './SurahItem';

interface Props {
	surahs: SurahType[];
	loading?: boolean; // لو حابب تضيف حالة تحميل هنا
}

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.08,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 10 },
	visible: { opacity: 1, y: 0 },
};

const SurahList = ({ surahs, loading }: Props) => {
	if (loading)
		return (
			<p className='text-center text-gray-700 dark:text-gray-300 mt-10'>
				جاري تحميل السور...
			</p>
		);

	return (
		<motion.div
			className='lg:w-10/12 m-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
                  p-4 rounded-lg'
			variants={containerVariants}
			initial='hidden'
			animate='visible'>
			<AnimatePresence>
				{surahs.map((surah) => (
					<motion.div
						key={surah.number}
						variants={itemVariants}
						layout>
						<SurahItem surah={surah} />
					</motion.div>
				))}
			</AnimatePresence>
		</motion.div>
	);
};

export default SurahList;
