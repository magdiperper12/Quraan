import { SurahType } from '@/src/types';
import SurahItem from './SurahItem';

interface Props {
	surahs: SurahType[];
}

const SurahList = ({ surahs }: Props) => (
	<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
		{surahs.map((surah) => (
			<SurahItem
				key={surah.number}
				surah={surah}
			/>
		))}
	</div>
);

export default SurahList;
