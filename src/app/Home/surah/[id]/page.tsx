import SurahClient from '../surahpage';

export default async function SurahPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	return <SurahClient id={id} />;
}
