export interface SurahType {
	number: number;
	englishName: string;
	name: string;
	ayahs: AyahType[];
}

export interface AyahType {
	number: number;
	text: string;
	audio: string;
}
