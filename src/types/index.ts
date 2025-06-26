export interface SurahType {
	recitation: any;
	number: number;
	englishName: string;
	name: string;
	ayahs: AyahType[];
}

export interface AyahType {
	numberInSurah: number;
	number: number;
	text: string;
	audio: string;
}

// types/Sahabi.ts
export interface Sahabi {
	id: string;
	personalInfo: {
		fullName: string;
		birthYearAndPlace?: string;
		deathYearAndPlace?: string;
		ageAtDeath?: number;
		physicalDescription?: string;
		tribeAndClan?: string;
	};
	islamAndFaith: {
		islamStory?: string;
		migrations?: string[];
		notableFaithMoments?: string[];
	};
	knowledgeAndScholarship: {
		hadiths?: {
			count?: number;
			famousHadiths?: string[];
			narratedBy?: string[];
			narratedTo?: string[];
		};
		teachers?: string[];
		students?: string[];
		famousFatwas?: string[];
		contributions?: string[];
	};
	jihadAndService: {
		battles?: string[];
		administrativeRoles?: string[];
		roleInConquests?: string[];
		braveryTitles?: string[];
	};
	personalAndSocialLife: {
		family?: string;
		characterTraits?: string[];
		socialEvents?: string[];
	};
	notableStories: {
		withProphet?: string[];
		withCompanions?: string[];
		miracles?: string[];
	};
	statusAndRank: {
		earliestConvert?: boolean;
		tenPromisedHeaven?: boolean;
		peopleOfBadr?: boolean;
		bayatRidwan?: boolean;
		statusWithProphet?: string;
	};
}

export interface Video {
	title: string;
	description: string;
	url: string;
}

export interface FilmsProps {
	videos: Video[];
}

export interface salhin {
	id: string;

	personalInfo: {
		fullName: string;
		birthYearAndPlace: string;
		deathYearAndPlace: string;
		ageAtDeath: number;
		physicalDescription: string;
		tribeAndClan: string;
	};

	islamAndFaith: {
		islamStory: string;
		migrations: string[];
		notableFaithMoments: string[];
	};

	knowledgeAndScholarship: {
		hadiths: {
			count: number;
			famousHadiths: string[];
			narratedBy: string[];
			narratedTo: string[];
		};
		teachers: string[];
		students: string[];
		famousFatwas: string[];
		contributions: string[];
	};

	jihadAndService: {
		battles: string[];
		administrativeRoles: string[];
		roleInConquests: string[];
		braveryTitles: string[];
	};

	personalAndSocialLife: {
		family: string;
		characterTraits: string[];
		socialEvents: string[];
	};

	notableStories: {
		withProphet: string[];
		withCompanions: string[];
		miracles: string[];
	};
}
