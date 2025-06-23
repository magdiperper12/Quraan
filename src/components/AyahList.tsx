import { AyahType } from '@/src/types';
import AudioPlayer from './AudioPlayer';

interface Props {
	ayahs: AyahType[];
}

const AyahList = ({ ayahs }: Props) => (
	<div className='space-y-4'>
		{ayahs.map((ayah) => (
			<div
				key={ayah.number}
				className='p-2 border rounded'>
				<p className='text-xl'>{ayah.text}</p>
				<AudioPlayer audio={ayah.audio} />
			</div>
		))}
	</div>
);

export default AyahList;
