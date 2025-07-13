import Ayatasmee from '../ayatasmee';

interface AyahType {
	number: number;
	numberInSurah: number;
	text: string;
	audio: string;
}
export default async function SurahPage({
	params,
}: {
	params: { id: string };
}) {
	const { id } = params;

	// نحمل بيانات السورة من API بصوت قارئ افتراضي (مهم: اختر صوت قارئ مناسب، أو الصوت الافتراضي من API)
	const res = await fetch(
		`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`,
		{ cache: 'no-store' }
	);
	const data = await res.json();

	const ayahs: AyahType[] = data.data.ayahs.map((ayah: any) => ({
		number: ayah.number,
		numberInSurah: ayah.numberInSurah,
		text: ayah.text,
		audio: ayah.audio,
	}));

	return (
		<Ayatasmee
			ayahs={ayahs}
			surahName={data.data.name}
		/>
	);
}
