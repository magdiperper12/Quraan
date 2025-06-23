interface Props {
	audio: string;
}

const AudioPlayer = ({ audio }: Props) => (
	<audio
		controls
		className='w-full mt-2'>
		<source
			src={audio}
			type='audio/mp3'
		/>
		متصفحك لا يدعم تشغيل الصوت.
	</audio>
);

export default AudioPlayer;
