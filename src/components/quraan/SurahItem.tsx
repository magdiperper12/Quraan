import { SurahType } from '@/src/types';
import Link from 'next/link';

interface Props {
	surah: SurahType;
}

const SurahItem = ({ surah }: Props) => (
	<Link href={`/Home/surah/${surah.number}`}>
		<div
			className='
        block border relative border-gray-300 dark:border-gray-700 p-3 rounded shadow-sm
        text-start md:text-center 
        bg-white dark:bg-gray-800
        text-gray-900 dark:text-gray-100
        hover:bg-gray-100 dark:hover:bg-gray-700
        transition-colors duration-300
        cursor-pointer
      '
			aria-label={`الانتقال إلى سورة ${surah.name}`}>
			<div className='text-black absolute top-2 left-2 bg-gray-100 dark:bg-gray-950 dark:text-white w-9 h-9 text-lg flex justify-center items-center rounded-full'>
				{surah.number}
			</div>
			<div className='font-bold text-lg'>{surah.name}</div>
			<div className='text-sm text-gray-600 dark:text-gray-400'>
				{surah.englishName}
			</div>
		</div>
	</Link>
);

export default SurahItem;
