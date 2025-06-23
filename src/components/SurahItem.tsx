import { SurahType } from '@/src/types';
import Link from 'next/link';

interface Props {
	surah: SurahType;
}

const SurahItem = ({ surah }: Props) => (
	<Link href={`/Home/surah/${surah.number}`}>
		<div className='border p-3 rounded shadow hover:bg-gray-100 cursor-pointer text-center'>
			<div className='font-bold'>{surah.name}</div>
			<div className='text-sm'>{surah.englishName}</div>
		</div>
	</Link>
);

export default SurahItem;
