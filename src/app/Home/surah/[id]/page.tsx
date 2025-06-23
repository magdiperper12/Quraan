import AyahList from '@/src/components/AyahList';
import { SurahType } from '@/src/types';

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function SurahPage({ params }: PageProps) {
	const { id } = await params; // ✅ لاحظ استخدام await
	const res = await fetch(
		`https://api.alquran.cloud/v1/surah/${id}/ar.alafasy`,
		{ cache: 'no-store' }
	);

	const data = await res.json();
	const surah: SurahType = data.data;

	return (
		<div className='container mx-auto p-4'>
			<h1 className='text-2xl font-bold mb-4'>
				{surah.name} - {surah.englishName}
			</h1>
			<AyahList ayahs={surah.ayahs} />
		</div>
	);
}
