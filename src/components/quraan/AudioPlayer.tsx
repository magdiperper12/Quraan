interface Props {
	audio: string;
}

const AudioPlayer = ({ audio }: Props) => (
	<audio
		controls
		className='w-full mt-2 rounded-md bg-gray-200 dark:bg-gray-700 outline-none focus:ring-2 focus:ring-blue-500'>
		<source
			src={audio}
			type='audio/mp3'
		/>
		متصفحك لا يدعم تشغيل الصوت.
	</audio>
);

export default AudioPlayer;
