import { Sahabi } from '../types';

export const sahabaData: Sahabi[] = [
	{
		id: 'abu-bakr',
		personalInfo: {
			fullName: 'أبو بكر عبد الله بن عثمان التيمي القرشي (أبو بكر الصديق)',
			birthYearAndPlace: 'ولد بمكة سنة 573م تقريبًا',
			deathYearAndPlace: 'توفي بالمدينة سنة 13 هـ',
			ageAtDeath: 63,
			physicalDescription: 'رقيق الجسم، نحيف، خفيف العارضين',
			tribeAndClan: 'من بني تيم من قريش',
		},
		islamAndFaith: {
			islamStory:
				'كان أول من آمن بالنبي ﷺ من الرجال. صاحب النبي ﷺ في الهجرة وصاحبه في الغار.',
			migrations: ['الهجرة إلى المدينة'],
			notableFaithMoments: [
				'موقفه الشجاع عند وفاة الرسول ﷺ وثباته على الحق',
				'إنفاقه ماله كله في سبيل الله',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 142,
				famousHadiths: [
					'ما من عبد مسلم يصلي لله أربعين يومًا...',
					'ما من رجل مسلم يصوم يومًا تطوعًا...',
				],
				narratedBy: ['عائشة رضي الله عنها', 'عبد الرحمن بن أبي بكر'],
				narratedTo: ['عمر بن الخطاب'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['عمر بن الخطاب', 'عبد الرحمن بن أبي بكر'],
			famousFatwas: ['فتاويه في قضايا الخلافة وبيت المال'],
			contributions: [
				'جمع القرآن بأمره بعد حروب الردة',
				'الفتاوى في أمور الدين',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: ['الخليفة الأول للمسلمين'],
			roleInConquests: ['أرسل الجيوش لفتح الشام والعراق'],
			braveryTitles: ['الصديق'],
		},
		personalAndSocialLife: {
			family:
				'زوجاته: قتيلة بنت عبد العزى، أم رومان، حبيبة بنت خارجة. من أولاده: عائشة وعبد الرحمن.',
			characterTraits: ['الكرم', 'الصدق', 'الحلم', 'الورع'],
			socialEvents: ['مناصرته للضعفاء والعبيد', 'شراؤه بلال بن رباح وأعتقه'],
		},
		notableStories: {
			withProphet: [
				'صحبته في الهجرة إلى المدينة ومكوثه معه في غار ثور',
				'ثباته يوم وفاة النبي ﷺ وتثبيت المسلمين',
			],
			withCompanions: ['مساندته لعمر بن الخطاب ووصاياه له عند الوفاة'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'أحب الرجال إلى الرسول ﷺ، وأخصّ أصحابه',
		},
	},

	{
		id: 'omar',
		personalInfo: {
			fullName: 'عمر بن الخطاب العدوي القرشي (أمير المؤمنين عمر الفاروق)',
			birthYearAndPlace: 'ولد بمكة سنة 584م تقريبًا',
			deathYearAndPlace: 'استشهد بالمدينة سنة 23 هـ على يد أبو لؤلؤة المجوسي',
			ageAtDeath: 63,
			physicalDescription: 'طويل القامة، أصلع، أشيب، جهوري الصوت، قوي البنية',
			tribeAndClan: 'من بني عدي من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أسلم في السنة السادسة من البعثة بعد أن سمع آيات من سورة طه من أخته فاطمة بنت الخطاب وزوجها سعيد بن زيد، وكان من أشد أعداء الإسلام ثم صار من أشد أنصاره.',
			migrations: ['الهجرة إلى المدينة جهراً وأعلنها على رؤوس قريش'],
			notableFaithMoments: [
				'جهره بإسلامه أمام قريش رغم عدائهم',
				'موقفه الحازم بعد وفاة النبي ﷺ وبيعة أبي بكر بالخلافة',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 537,
				famousHadiths: [
					'إنما الأعمال بالنيات',
					'ما من مسلم يشهد أن لا إله إلا الله...',
				],
				narratedBy: ['عبد الله بن عباس', 'عبد الله بن عمر'],
				narratedTo: ['أبو موسى الأشعري', 'أبو هريرة'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['عبد الله بن عباس', 'سعيد بن زيد'],
			famousFatwas: ['رأيه في فرض ديوان الجند', 'رأيه بجمع القرآن'],
			contributions: [
				'وضع أسس الدولة الإسلامية ومؤسساتها',
				'أول من دوّن الدواوين وخصص الرواتب للجند',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: ['الخليفة الثاني للمسلمين'],
			roleInConquests: ['فتوح الشام والعراق ومصر وبلاد فارس'],
			braveryTitles: ['الفاروق لفرقانه بين الحق والباطل'],
		},
		personalAndSocialLife: {
			family:
				'زوجاته: زينب بنت مظعون، أم كلثوم بنت علي، جميلة بنت ثابت، عاتكة بنت زيد. من أولاده: حفصة، عبد الله، عبيد الله، زيد، عاصم.',
			characterTraits: ['العدل', 'الزهد', 'القوة في الحق', 'الورع'],
			socialEvents: [
				'تفقده لأحوال الرعية ليلاً سراً',
				'موقفه من المجاعة عام الرمادة ومواساته للناس',
			],
		},
		notableStories: {
			withProphet: [
				'دفاعه القوي عن النبي ﷺ أمام قريش',
				'موافقات عمر مع الوحي مثل الحجاب وأسرى بدر',
			],
			withCompanions: [
				'مشاوراته الدائمة مع أبي بكر',
				'اختياره لمجلس شورى من الستة بعده',
			],
			miracles: ['رؤية سارية الجبل وتوجيهه للجيش من المدينة'],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: true,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'من أقرب الصحابة إلى قلب النبي ﷺ وأحبهم إليه',
		},
	},

	{
		id: 'othman',
		personalInfo: {
			fullName: 'عثمان بن عفان الأموي القرشي (ذو النورين)',
			birthYearAndPlace: 'ولد بمكة سنة 576م تقريبًا',
			deathYearAndPlace: 'استشهد بالمدينة سنة 35 هـ على يد الخوارج',
			ageAtDeath: 82,
			physicalDescription: 'جميل الوجه، رقيق البشرة، كثّ اللحية، واسع العينين',
			tribeAndClan: 'من بني أمية من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أسلم على يد أبي بكر الصديق رضي الله عنه، وكان من السابقين الأولين للإسلام، وهاجر الهجرتين إلى الحبشة ثم إلى المدينة.',
			migrations: ['هجرة إلى الحبشة ثم إلى المدينة المنورة'],
			notableFaithMoments: [
				'بذله أمواله لتجهيز جيش العسرة (غزوة تبوك)',
				'شراؤه لبئر رومة وجعلها وقفًا للمسلمين',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 146,
				famousHadiths: [
					'خيركم من تعلم القرآن وعلمه',
					'ما من مسلم يتوضأ فيحسن وضوءه ثم يصلي ركعتين...',
				],
				narratedBy: ['أبو هريرة', 'أنس بن مالك'],
				narratedTo: ['سعيد بن زيد', 'عبد الله بن عمر'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['عبد الله بن عباس', 'سعيد بن زيد'],
			famousFatwas: ['فتاويه في قضايا الحج والزواج والمواريث'],
			contributions: [
				'جمع القرآن الكريم ونسخ المصاحف وتوحيد رسمه',
				'الإفتاء للناس وتعليمهم أحكام الدين',
			],
		},
		jihadAndService: {
			battles: ['غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: ['الخليفة الثالث للمسلمين'],
			roleInConquests: ['فتوح أرمينية وأذربيجان وخراسان وشمال إفريقيا'],
			braveryTitles: ['ذو النورين لزواجه من ابنتي الرسول ﷺ (رُقيّة وأم كلثوم)'],
		},
		personalAndSocialLife: {
			family:
				'زوجاته: رُقيّة بنت النبي ﷺ ثم أم كلثوم بنت النبي ﷺ، ونايلة بنت الفرافصة، وغيرهن. من أولاده: عبد الله وأبان وعثمان.',
			characterTraits: ['الحياء', 'الكرم', 'الورع', 'الزهد'],
			socialEvents: [
				'إكرامه للمحتاجين والعطشى بشرائه بئر رومة ووقفه على المسلمين',
				'مساعدته المستمرة للمهاجرين والأنصار بماله وجاهه',
			],
		},
		notableStories: {
			withProphet: [
				'زواجه من ابنتي الرسول ﷺ ومكانته بين الصحابة',
				'تجهيزه لجيش العسرة حتى قال النبي ﷺ: «ما ضرّ عثمان ما فعل بعد اليوم»',
			],
			withCompanions: [
				'موقفه من عمر وأبي بكر وملازمته لهم وخدمتهم',
				'حرصه على جمع كلمة المسلمين على مصحف واحد',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: false, // لم يشهد بدرًا لتمريضه زوجته رقيّة
			bayatRidwan: true,
			statusWithProphet: 'من أحب الصحابة إلى قلب الرسول ﷺ وأحد أصهاره',
		},
	},

	{
		id: 'ali',
		personalInfo: {
			fullName:
				'علي بن أبي طالب بن عبد المطلب الهاشمي القرشي (أبو الحسن، وأبو تراب)',
			birthYearAndPlace: 'ولد بمكة داخل الكعبة سنة 600م تقريبًا',
			deathYearAndPlace: 'استشهد بالكوفة سنة 40 هـ على يد عبد الرحمن بن ملجم',
			ageAtDeath: 63,
			physicalDescription:
				'ربعة القامة، أصلع الرأس، كثّ اللحية، عريض المنكبين، أسمر اللون',
			tribeAndClan: 'من بني هاشم من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أول من أسلم من الصبيان، وكان تربّى في بيت النبي ﷺ منذ صغره. فداه بنفسه ليلة الهجرة وشارك في جميع المشاهد.',
			migrations: ['هجرته إلى المدينة بعد مبيتة في فراش النبي ﷺ'],
			notableFaithMoments: [
				'فداؤه للنبي ﷺ ليلة الهجرة ومواجهته المشركين',
				'مبايعته أبا بكر وعمر وعثمان وصبره على الفتن',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 586,
				famousHadiths: [
					'أنا مدينة العلم وعلي بابها',
					'لا يحبك إلا مؤمن ولا يبغضك إلا منافق',
				],
				narratedBy: ['الحسن والحسين', 'عبد الله بن عباس'],
				narratedTo: ['أبو الأسود الدؤلي', 'الشعبي'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['ابن عباس', 'عبد الله بن مسعود', 'محمد بن الحنفية'],
			famousFatwas: ['فتاويه في القضاء والحكم بين الناس'],
			contributions: [
				'أحد فقهاء الصحابة وأعلمهم بالقضاء',
				'شرح وتفسير القرآن الكريم وكان من أئمة اللغة والأدب',
			],
		},
		jihadAndService: {
			battles: [
				'غزوة بدر',
				'غزوة أحد',
				'غزوة الخندق',
				'غزوة خيبر (فاتح خيبر)',
				'غزوة حنين',
			],
			administrativeRoles: ['رابع الخلفاء الراشدين'],
			roleInConquests: [
				'تابع فتوحات الشام والعراق',
				'أرسل القادة لنشر الإسلام',
			],
			braveryTitles: ['أسد الله الغالب', 'حيدر الكرار'],
		},
		personalAndSocialLife: {
			family:
				'زوجاته: فاطمة بنت الرسول ﷺ، وأم البنين الكلابية، وأم حبيبة بنت ربيعة. من أولاده: الحسن والحسين وزينب وأم كلثوم.',
			characterTraits: ['الشجاعة', 'الزهد', 'البلاغة', 'الحلم', 'الكرم'],
			socialEvents: [
				'مواساته للفقراء والمحتاجين',
				'حرصه على وحدة الأمة حتى في أحرج الظروف',
			],
		},
		notableStories: {
			withProphet: [
				'ملازمته للنبي ﷺ ومشاركته في كل المشاهد إلا تبوك',
				'نومه على فراش النبي ﷺ ليلة الهجرة',
			],
			withCompanions: [
				'حرصه على حقن الدماء بين الصحابة بعد الفتنة',
				'شهادته عند وفاة عمر رضي الله عنه',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet:
				'من أقرب الصحابة إلى قلب الرسول ﷺ، وابن عمه وزوج ابنته وأحد أهل بيته',
		},
	},

	{
		id: 'talhah-ibn-ubaidullah',
		personalInfo: {
			fullName: 'طلحة بن عبيد الله بن عثمان التيمي القرشي (أبو محمد)',
			birthYearAndPlace: 'وُلد بمكة سنة 596م تقريبًا',
			deathYearAndPlace: 'استشهد قرب البصرة في موقعة الجمل سنة 36 هـ',
			ageAtDeath: 62,
			physicalDescription: 'أبيض الوجه، حسن الشعر، واسع الصدر، معتدل القامة',
			tribeAndClan: 'من بني تيم من قريش',
		},
		islamAndFaith: {
			islamStory: 'أسلم على يد أبي بكر الصديق وكان من السابقين إلى الإسلام.',
			migrations: ['هاجر إلى المدينة المنورة'],
			notableFaithMoments: [
				'دفاعه عن الرسول ﷺ يوم أُحد حتى شُلّت يده',
				'ثباته على الإيمان رغم أذى المشركين له',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 38,
				famousHadiths: ['حديثه عن ثواب الجهاد والدفاع عن رسول الله ﷺ'],
				narratedBy: ['أبناؤه محمد وعمران', 'قيس بن أبي حازم'],
				narratedTo: ['أبوه عبيد الله وأصحابه من التابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['أبناؤه والتابعون من بعده'],
			famousFatwas: ['معروف بحكمته وفتاويه بين الصحابة'],
			contributions: ['أحد العشرة المبشرين بالجنة وأحد أهل الشورى الستة'],
		},
		jihadAndService: {
			battles: ['غزوة أحد', 'غزوة الخندق', 'غزوة خيبر'],
			administrativeRoles: ['أحد مستشاري الخلفاء الراشدين'],
			roleInConquests: ['شارك في نشر الإسلام والفتوحات الأولى'],
			braveryTitles: ['الفيّاض (لكثرة عطائه)', 'طلحة الخير'],
		},
		personalAndSocialLife: {
			family:
				'من زوجاته: أم كلثوم بنت أبي بكر، سُعدى بنت عوف. من أولاده: محمد وعمران وعائشة.',
			characterTraits: ['الكرم', 'الجود', 'الحياء', 'الوفاء'],
			socialEvents: [
				'كان معروفًا بإنفاقه على المسلمين وتحرير العبيد',
				'تفقده لأهل الحاجة حتى سُمي بطلحة الجواد',
			],
		},
		notableStories: {
			withProphet: [
				'ثبت مع الرسول ﷺ يوم أُحد وأصيب بجروح كثيرة دفاعًا عنه',
				'بشّره الرسول ﷺ بالجنة لبلائه وشجاعته',
			],
			withCompanions: ['موقفه من مقتل عثمان ثم مشاركته في معركة الجمل'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: false,
			bayatRidwan: true,
			statusWithProphet:
				'من خيرة صحابة الرسول ﷺ وأحد المبشرين بالجنة، وأثنى عليه الرسول يوم أُحد وقال: «طلحة شهيد يمشي على الأرض»',
		},
	},

	{
		id: 'zubayr-ibn-al-awwam',
		personalInfo: {
			fullName: 'الزبير بن العوام بن خويلد الأسدي القرشي (أبو عبد الله)',
			birthYearAndPlace: 'وُلد بمكة سنة 28 قبل الهجرة تقريبًا',
			deathYearAndPlace: 'استشهد سنة 36 هـ بوادي السباع بالقرب من البصرة',
			ageAtDeath: 64,
			physicalDescription: 'طويل القامة، أسمر اللون، قوي البنية',
			tribeAndClan: 'من بني أسد من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أسلم صغيرًا على يد أبي بكر الصديق رضي الله عنه، وكان من أوائل من دخلوا الإسلام. هاجر إلى الحبشة ثم إلى المدينة، وجاهد مع الرسول ﷺ.',
			migrations: ['هجر إلى الحبشة الهجرتين ثم إلى المدينة المنورة'],
			notableFaithMoments: [
				'من السابقين الأولين إلى الإسلام',
				'شهد جميع المشاهد مع الرسول ﷺ وكان من أبطالها',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 38,
				famousHadiths: ['ما من نبي إلا وله حواريّ، وحواريّ الزبير'],
				narratedBy: ['ابنه عبد الله بن الزبير'],
				narratedTo: ['عروة بن الزبير', 'عبد الله بن عمر'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['ابنه عبد الله بن الزبير', 'أبناءه وأبناء عمومته من التابعين'],
			famousFatwas: ['فتاويه قليلة نظرًا لانشغاله بالجهاد'],
			contributions: [
				'من كبار المقاتلين والفرسان في جيش المسلمين',
				'كان من كتاب رسول الله ﷺ أحيانًا',
			],
		},
		jihadAndService: {
			battles: ['بدر', 'أحد', 'الخندق', 'اليرموك'],
			administrativeRoles: ['أحد الستة الذين عيّنهم عمر للشورى بعده'],
			roleInConquests: ['شارك في فتوحات الشام ومصر'],
			braveryTitles: ['حواريّ رسول الله ﷺ', 'أول من سلّ سيفه في سبيل الله'],
		},
		personalAndSocialLife: {
			family:
				'من زوجاته أسماء بنت أبي بكر وأم كلثوم بنت عقبة. من أولاده عبد الله وعروة ومصعب.',
			characterTraits: ['الكرم', 'الشجاعة', 'الإقدام', 'الوفاء'],
			socialEvents: [
				'أسلم مبكرًا وهو فتى لم يتجاوز الخامسة عشرة',
				'شهد البيعة للرسول ﷺ تحت الشجرة',
			],
		},
		notableStories: {
			withProphet: [
				'أول من سلّ سيفه نصرةً للرسول ﷺ عندما أشيع أن قريشًا قتلت النبي',
				'ملازمته للرسول ﷺ طوال حياته وجهاده المشهور معه',
			],
			withCompanions: [
				'موقفه الشجاع إلى جانب علي بن أبي طالب رضي الله عنه',
				'علاقته الوثيقة بأبي بكر وعمر وعثمان',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'حواريّ الرسول ﷺ وأحد العشرة المبشرين بالجنة',
		},
	},

	{
		id: 'saad-ibn-abi-waqqas',
		personalInfo: {
			fullName: 'سعد بن مالك بن أهيب الزهري القرشي (أبو إسحاق)',
			birthYearAndPlace: 'وُلد بمكة سنة 23 قبل الهجرة تقريبًا',
			deathYearAndPlace: 'توفي بالعقيق قرب المدينة سنة 55 هـ',
			ageAtDeath: 78,
			physicalDescription: 'متوسط القامة، قوي البنية، واسع المنكبين',
			tribeAndClan: 'من بني زهرة من قريش',
		},
		islamAndFaith: {
			islamStory:
				'من السابقين الأولين إلى الإسلام، أسلم على يد أبي بكر الصديق وهو في السابعة عشرة من عمره.',
			migrations: ['هاجر إلى المدينة المنورة'],
			notableFaithMoments: [
				'أول من رمى بسهم في سبيل الله',
				'ثبت مع النبي ﷺ يوم أُحد وكان من الرماة المهرة',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 271,
				famousHadiths: [
					'ادعوا الله وأنتم موقنون بالإجابة',
					'ما من مسلم يدعو بدعوة ليس فيها إثم ولا قطيعة رحم إلا أعطاه الله بها إحدى ثلاث...',
				],
				narratedBy: ['عبد الله بن عمر', 'جابر بن عبد الله'],
				narratedTo: ['أبناؤه وعامة التابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['أبناؤه وأبناء عمومته من التابعين'],
			famousFatwas: ['فصل بين المتخاصمين بالعدل في الكوفة'],
			contributions: [
				'من الرماة المشهورين وأحد قادة الجيوش الإسلامية',
				'شارك في جمع القرآن والفتاوى أثناء خلافة عثمان وعلي',
			],
		},
		jihadAndService: {
			battles: ['بدر', 'أحد', 'الخندق', 'القادسية'],
			administrativeRoles: ['أمير الكوفة من قبل عمر بن الخطاب'],
			roleInConquests: ['فتح العراق وشارك في معركة القادسية'],
			braveryTitles: ['أول من رمى بسهم في سبيل الله', 'فارس الإسلام'],
		},
		personalAndSocialLife: {
			family:
				'من زوجاته خولة بنت حكيم ومارية بنت قيس. من أولاده محمد وعامر وعمر ومصعب.',
			characterTraits: ['الورع', 'الكرم', 'الشجاعة', 'الحلم'],
			socialEvents: [
				'اعتزل الفتنة بين علي ومعاوية واختار الحياد',
				'أوصى بأن يُكفّن في جُبّة كان يرتديها يوم بدر',
			],
		},
		notableStories: {
			withProphet: [
				'فداه الرسول ﷺ بأبويه يوم أُحد، وقال له: ارمِ سعد، فداك أبي وأمي',
				'ثبّته الرسول ﷺ وأعطاه كنانته يوم أُحد وأوصاه بالدعاء',
			],
			withCompanions: [
				'أخوة إيمانية قوية جمعته بالزبير بن العوام وعبد الرحمن بن عوف',
				'موقفه من خلافة عثمان ودعمه للحق حتى آخر حياته',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet:
				'خال رسول الله ﷺ وأحد الستة الذين عيّنهم عمر للشورى وأحد العشرة المبشرين بالجنة',
		},
	},

	{
		id: 'abu-ubaydah-ibn-al-jarrah',
		personalInfo: {
			fullName: 'أبو عبيدة عامر بن عبد الله بن الجراح الفهري القرشي',
			birthYearAndPlace: 'ولد بمكة سنة 40 قبل الهجرة تقريبًا',
			deathYearAndPlace: 'توفي في طاعون عمواس بالشام سنة 18 هـ',
			ageAtDeath: 58,
			physicalDescription: 'طويل القامة، نحيل الجسم، خفيف اللحية، مشرق الوجه',
			tribeAndClan: 'من بني فهر من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أسلم على يد أبي بكر الصديق رضي الله عنه من السابقين الأولين، وكان من المهاجرين إلى الحبشة ثم إلى المدينة.',
			migrations: ['هاجر إلى الحبشة ثم إلى المدينة المنورة'],
			notableFaithMoments: [
				'ثبت في أُحد ونزع الحلقتين من وجه النبي ﷺ بأسنانه',
				'كان من أهل بدر وأحد العشرة المبشرين بالجنة',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 14,
				famousHadiths: ['كل أمة لها أمين، وأمين هذه الأمة أبو عبيدة بن الجراح'],
				narratedBy: ['أبو سعيد الخدري', 'جابر بن عبد الله'],
				narratedTo: ['التابعين من أهل الشام'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['عدد من التابعين من أهل الشام'],
			famousFatwas: ['فتاويه في الجهاد والحكم بين الناس'],
			contributions: ['كان من أمناء الأمة وأهل الشورى لعمر بن الخطاب'],
		},
		jihadAndService: {
			battles: ['بدر', 'أحد', 'الخندق', 'اليرموك'],
			administrativeRoles: ['أمير الشام من قبل الخليفة عمر بن الخطاب'],
			roleInConquests: [
				'قاد الجيوش لفتح الشام وحقق النصر في معركة اليرموك',
				'فتح بيت المقدس وصالح أهلها على الأمان',
			],
			braveryTitles: ['أمين الأمة'],
		},
		personalAndSocialLife: {
			family: 'من زوجاته هند بنت جابر، وليس له ذرية مشهورة.',
			characterTraits: ['التواضع', 'الزهد', 'الورع', 'الحلم'],
			socialEvents: [
				'رفض الترف رغم إمارة الشام، وعاش حياة بسيطة وزاهدة',
				'عرف بأمانته وأدبه وحسن خلقه مع المسلمين وغير المسلمين',
			],
		},
		notableStories: {
			withProphet: [
				'نزعه الحلقتين من خوذة الرسول ﷺ بأُحد فخلع ثناياه الأماميتين',
				'وصفه النبي ﷺ بأنه أمين الأمة',
			],
			withCompanions: [
				'أوصى به عمر بن الخطاب خليفة من بعده أثناء وفاته',
				'كان قريبًا من أبي بكر وعمر وأمينًا لسرّهما',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet:
				'أمين الأمة وأحد العشرة المبشرين بالجنة وأحد كبار المهاجرين',
		},
	},

	{
		id: 'abdur-rahman-ibn-awf',
		personalInfo: {
			fullName: 'عبد الرحمن بن عوف القرشي العدوي',
			birthYearAndPlace: 'وُلد بمكة المكرمة حوالي سنة 580م',
			deathYearAndPlace: 'توفي بالمدينة سنة 32 هـ',
			ageAtDeath: 72,
			physicalDescription: 'رجل طويل القامة، أبيض البشرة، حسن الهيئة',
			tribeAndClan: 'من بني عبد شمس من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مبكرًا وكان من السابقين الأولين، هاجر إلى الحبشة ثم إلى المدينة مع المهاجرين.',
			migrations: ['هاجر إلى الحبشة ثم إلى المدينة'],
			notableFaithMoments: [
				'شارك في بيعة العقبة الأولى والثانية',
				'ساهم بسخاء في دعم الإسلام والمسلمين بالمال',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 80,
				famousHadiths: [
					'من كان في حاجة أخيه كان الله في حاجته',
					'الصدق منجاة والكذب مهواة',
				],
				narratedBy: ['سعد بن أبي وقاص', 'عبد الله بن عباس'],
				narratedTo: ['التابعين وأهل المدينة'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['العديد من التابعين في المدينة'],
			famousFatwas: ['فتاويه في التجارة والعدل'],
			contributions: [
				'كان من كبار التجار ودعم الجيوش الإسلامية',
				'ساهم في تأسيس العديد من المؤسسات الإسلامية المالية',
			],
		},
		jihadAndService: {
			battles: ['بدر', 'أحد', 'الخندق'],
			administrativeRoles: ['واحد من الستة الذين عينهم عمر للشورى'],
			roleInConquests: ['ساهم في دعم الجيوش وإدارة الأموال'],
			braveryTitles: ['واحد من العشرة المبشرين بالجنة'],
		},
		personalAndSocialLife: {
			family:
				'من زوجاته سلمه بنت عوف، وله العديد من الأبناء منهم عبد الله، وحفصة، وزينب.',
			characterTraits: ['الكرم', 'الصدق', 'الحكمة', 'الشجاعة'],
			socialEvents: [
				'كان معروفًا بدعمه للفقراء والمحتاجين',
				'ساهم في حل النزاعات بين الصحابة',
			],
		},
		notableStories: {
			withProphet: [
				'كان من المهاجرين الأوائل وصاحب النبي ﷺ في الهجرة',
				'روى العديد من الأحاديث النبوية وكان له دور كبير في نشرها',
			],
			withCompanions: [
				'كان قريبًا من أبو بكر وعمر وعثمان في الأمور السياسية والمالية',
				'شارك في مجلس الشورى لتحديد خليفة المسلمين',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet:
				'أحد العشرة المبشرين بالجنة وأحد كبار الصحابة المقربين',
		},
	},

	{
		id: 'khalid-ibn-walid',
		personalInfo: {
			fullName: 'خالد بن الوليد بن المغيرة المخزومي القرشي (أبو سليمان)',
			birthYearAndPlace: 'وُلد بمكة سنة 584م تقريبًا',
			deathYearAndPlace: 'توفي بحمص سنة 21 هـ',
			ageAtDeath: 57,
			physicalDescription: 'طويل القامة، قوي البنية، مهيب الطلعة، حاد النظر',
			tribeAndClan: 'من بني مخزوم من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أسلم قبل فتح مكة بعد صلح الحديبية، وكان من أشد أعداء المسلمين ثم أصبح من أبطال الإسلام.',
			migrations: [],
			notableFaithMoments: [
				'تحوله من قائد جيش المشركين إلى سيف من سيوف الله',
				'استبساله في المعارك رغم كثرة الجراح التي أصيب بها',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 18,
				famousHadiths: ['من شهد أن لا إله إلا الله دخل الجنة'],
				narratedBy: ['جابر بن عبد الله الأنصاري'],
				narratedTo: ['أبو وائل شقيق بن سلمة'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['أصحابه من التابعين'],
			famousFatwas: [],
			contributions: ['من أبرز القادة العسكريين الذين نشروا الإسلام بفتوحاته'],
		},
		jihadAndService: {
			battles: ['غزوة مؤتة', 'فتح مكة', 'اليرموك', 'أجنادين', 'اليمامة'],
			administrativeRoles: ['قائد جيوش المسلمين في الشام والعراق بأمر الخلفاء'],
			roleInConquests: [
				'فتح العراق وأجزاء واسعة من الشام',
				'قائد معركة اليرموك الفاصلة ضد الروم',
			],
			braveryTitles: ['سيف الله المسلول'],
		},
		personalAndSocialLife: {
			family:
				'من زوجاته: أم تميم الثقفية، وأم عمرو بنت أنس. من أولاده عبد الرحمن وسليمان.',
			characterTraits: ['الشجاعة', 'الحزم', 'الدهاء العسكري', 'الكرم'],
			socialEvents: ['عزله عمر بن الخطاب من القيادة فقبل الأمر بدون اعتراض'],
		},
		notableStories: {
			withProphet: [
				'استشاره النبي ﷺ وولّاه قيادة بعض المعارك',
				'حمل راية الإسلام بشجاعة بعد مؤتة وأعاد الجيش سالمًا',
			],
			withCompanions: ['مساندته لأبي بكر وعمر في حروب الردة وفتوح الشام'],
			miracles: ['شربه السم أمام أعدائه ليظهر توكله على الله فلم يصبه أذى'],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet:
				'لقّبه الرسول ﷺ بسيف الله المسلول وأثنى على شجاعته وعبقريته العسكرية',
		},
	},

	{
		id: 'abu-hurayrah',
		personalInfo: {
			fullName: 'أبو هريرة عبد الرحمن بن صخر الدوسي (أبو هريرة)',
			birthYearAndPlace: 'وُلد بقبيلة دوس باليمن سنة 19 قبل الهجرة تقريبًا',
			deathYearAndPlace: 'توفي بالمدينة المنورة سنة 59 هـ',
			ageAtDeath: 78,
			physicalDescription: 'كان أسمر اللون، واسع الصدر، متوسط القامة',
			tribeAndClan: 'من قبيلة دوس من أزد اليمن',
		},
		islamAndFaith: {
			islamStory:
				'أسلم على يد الطفيل بن عمرو الدوسي وهاجر إلى المدينة سنة 7 هـ بعد فتح خيبر، ولازم الرسول ﷺ ملازمة شديدة حتى وفاته.',
			migrations: ['هاجر من اليمن إلى المدينة المنورة'],
			notableFaithMoments: [
				'ملازمته الرسول ﷺ طوال حياته لأخذ العلم والحديث',
				'دعاء الرسول ﷺ له بالحفظ وعدم نسيان العلم',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 5374,
				famousHadiths: [
					'«كل أمتي يدخلون الجنة إلا من أبى»',
					'«من لا يشكر الناس لا يشكر الله»',
				],
				narratedBy: [
					'أبو صالح السمان',
					'سعيد بن المسيب',
					'أبو سلمة بن عبد الرحمن',
				],
				narratedTo: [
					'الإمام مالك',
					'الإمام أحمد',
					'الإمام البخاري',
					'الإمام مسلم',
				],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['سعيد بن المسيب', 'أبو سلمة بن عبد الرحمن', 'همام بن منبه'],
			famousFatwas: ['كان يفتي الناس بالمدينة المنورة في عهد الخلفاء'],
			contributions: [
				'أكثر الصحابة رواية للحديث بسبب ملازمته للرسول ﷺ',
				'نقل علم الحديث إلى التابعين ثم إلى الأمة',
			],
		},
		jihadAndService: {
			battles: ['غزوة خيبر'],
			administrativeRoles: ['ولّاه عمر بن الخطاب إمارة البحرين'],
			roleInConquests: ['مشاركته في بعض فتوحات الإسلام الأولى'],
			braveryTitles: ['راوية الإسلام الأول'],
		},
		personalAndSocialLife: {
			family:
				'لم يُذكر من زوجاته وأولاده الكثير، لكن له بنت زوجها لسعيد بن المسيب',
			characterTraits: ['الورع', 'الزهد', 'حب العلم', 'كثرة العبادة'],
			socialEvents: [
				'كان معروفًا بإطعام أهل الصفة ومجالستهم',
				'يحثّ على صلة الرحم والإحسان إلى الجيران',
			],
		},
		notableStories: {
			withProphet: [
				'ملازمته للرسول ﷺ وحمله همّ رواية الحديث',
				'دعوته للرسول ﷺ أن يدعو لأمه بالهداية فاستجاب الله ذلك',
			],
			withCompanions: [
				'احترامه الشديد لأبي بكر وعمر وعثمان وعلي رضي الله عنهم',
			],
			miracles: ['دعا الرسول ﷺ له بعدم نسيان الحديث فاستجاب الله ذلك'],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet:
				'دعا له الرسول ﷺ ألا ينسى شيئًا سمعه منه، وكان أكثر الصحابة رواية للحديث النبوي الشريف',
		},
	},

	{
		id: 'al-abbas-ibn-abdul-muttalib',
		personalInfo: {
			fullName: 'العباس بن عبد المطلب بن هاشم',
			birthYearAndPlace: 'وُلد بمكة حوالي سنة 566م',
			deathYearAndPlace: 'توفي في المدينة سنة 32 هـ',
			ageAtDeath: 66,
			physicalDescription: 'رجل قوي، طويل، شديد البأس، حسن الهيئة',
			tribeAndClan: 'من بني هاشم من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أسلم في وقت متأخر نسبيًا بعد صلح الحديبية، ودعم النبي ﷺ وأظهر ولاءً كبيرًا للإسلام.',
			migrations: ['هاجر إلى المدينة'],
			notableFaithMoments: [
				'كان من أنصار النبي ﷺ خلال فتوحات مكة',
				'وقف مع المسلمين في المعارك وأظهر شجاعة كبيرة',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 10,
				famousHadiths: ['أحاديث عن دعم النبي ﷺ وشجاعته في الغزوات'],
				narratedBy: ['الصحابة والتابعين'],
				narratedTo: ['الجيل التالي من المسلمين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الصحابة والتابعين'],
			famousFatwas: ['فتاويه في الأمور المتعلقة بحماية النبي ﷺ وأهل بيته'],
			contributions: [
				'حماية النبي ﷺ ودعمه في المواقف الحرجة',
				'ساهم في عدة غزوات ومعارك',
			],
		},
		jihadAndService: {
			battles: ['فتح مكة', 'حُنين', 'طريق الشام'],
			administrativeRoles: ['حامي النبي وأحد كبار قريش'],
			roleInConquests: ['ساهم في فتوحات مكة وحماية النبي ﷺ'],
			braveryTitles: ['عم النبي ﷺ', 'حامي الرسول'],
		},
		personalAndSocialLife: {
			family:
				'زوجته أم حكيم بنت الحارث، وله أبناء من بينهم عبد الله العباسي مؤسس الدولة العباسية.',
			characterTraits: ['الشجاعة', 'الولاء', 'الكرم', 'الحكمة'],
			socialEvents: [
				'وقف إلى جانب النبي ﷺ في الأوقات العصيبة',
				'كان له دور في إكرام ضيوف النبي ﷺ',
			],
		},
		notableStories: {
			withProphet: [
				'دعم النبي ﷺ في غزوة بدر وفتح مكة',
				'كان له دور في حفظ أمن النبي ﷺ وأهله',
			],
			withCompanions: [
				'عرف بولائه الكبير للإسلام وأصحاب النبي ﷺ',
				'ساهم في حل الخلافات بين القبائل',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'عم النبي ﷺ وحامي بيته وأحد كبار الصحابة المقربين',
		},
	},

	{
		id: 'musab-ibn-umayr',
		personalInfo: {
			fullName: 'مصعب بن عمير بن عبد الله',
			birthYearAndPlace: 'وُلد بمكة في القرن السادس الميلادي',
			deathYearAndPlace: 'استشهد في معركة أحد سنة 3 هـ',
			ageAtDeath: 30, // تقدير تقريبي
			physicalDescription: 'وسيم، حسن الهيئة، ذا وقار وجلال',
			tribeAndClan: 'من بني عبد الأشهل من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أسلم في مكة وكان من أوائل الشباب الذين اعتنقوا الإسلام، واجه مضايقات شديدة من أهل مكة.',
			migrations: ['هاجر إلى المدينة'],
			notableFaithMoments: [
				'أول سفير للنبي ﷺ إلى أهل المدينة يعلمهم الإسلام',
				'أسس المسجد ودرّس الصحابة أول تعاليم الإسلام في المدينة',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 5,
				famousHadiths: ['تعاليمه للسنة والسلوك الإسلامي في المدينة'],
				narratedBy: ['الصحابة في المدينة'],
				narratedTo: ['الأنصار والمهاجرين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الأنصار وأهل المدينة'],
			famousFatwas: ['تعليم الإسلام وتبليغه في المدينة'],
			contributions: [
				'نشر الإسلام وتعليم المسلمين في المدينة قبل الهجرة',
				'رفع الروح المعنوية للمهاجرين والأنصار',
			],
		},
		jihadAndService: {
			battles: ['غزوة أحد'],
			administrativeRoles: ['أول سفير للنبي ﷺ في المدينة'],
			roleInConquests: ['مساندة النبي ﷺ في غزوة أحد'],
			braveryTitles: ['سفير النبي ﷺ', 'المعلم الأول للمدينة'],
		},
		personalAndSocialLife: {
			family: 'من أشهر أفراد أسرته عمته أم عمارة.',
			characterTraits: ['التواضع', 'الشجاعة', 'الصبر', 'الإيثار'],
			socialEvents: [
				'واجه اضطهاد قريش لكنه صبر وثابر',
				'كان مثالًا في التواضع والالتزام بالإسلام',
			],
		},
		notableStories: {
			withProphet: [
				'تم اختياره كسفير للنبي ﷺ إلى أهل المدينة ليعلمهم الإسلام',
				'استشهد وهو يدافع عن النبي ﷺ في غزوة أحد',
			],
			withCompanions: [
				'كان له دور بارز في تعليم الأنصار',
				'عرف بحبه وتواضعه مع الصحابة والأنصار',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: false,
			statusWithProphet: 'أول سفير للنبي ﷺ وأحد أعظم المعلمين في بداية الإسلام',
		},
	},

	{
		id: 'bilal-ibn-rabah',
		personalInfo: {
			fullName: 'بلال بن رباح الحبشي',
			birthYearAndPlace: 'وُلد في مكة حوالي 580م',
			deathYearAndPlace: 'توفي في دمشق حوالي 20 هـ',
			ageAtDeath: 60,
			physicalDescription: 'أسود البشرة، قوي البنية، شجاع',
			tribeAndClan: 'أصل حبشي، كان عبدًا قبل الإسلام',
		},
		islamAndFaith: {
			islamStory:
				'أسلم سرًا في مكة على يد عبد الله بن مسعود وتعرض لأشد التعذيب بسبب إيمانه، وكان أول مؤذن في الإسلام.',
			migrations: ['هاجر إلى الحبشة ثم إلى المدينة'],
			notableFaithMoments: [
				'ثباته على الإسلام رغم التعذيب الشديد',
				'رفع الأذان لأول مرة في الإسلام',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 3,
				famousHadiths: ['أحاديث تتعلق بالإيمان والصبر والشجاعة'],
				narratedBy: ['الصحابة'],
				narratedTo: ['الجيل التالي من المسلمين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الصحابة والتابعين'],
			famousFatwas: ['لم يُعرف عنه إصدار فتاوى لكنه كان رمزًا للإيمان والصبر'],
			contributions: [
				'رفع الأذان لأول مرة في الإسلام',
				'كان صوت الأذان رمزًا للإسلام',
			],
		},
		jihadAndService: {
			battles: ['شارك في عدة غزوات مع النبي ﷺ'],
			administrativeRoles: ['المؤذن الأول للنبي ﷺ'],
			roleInConquests: ['مساندة النبي ﷺ وأداء دوره كالمؤذن في المعارك'],
			braveryTitles: ['أول مؤذن في الإسلام'],
		},
		personalAndSocialLife: {
			family: 'كان له أولاد وأحفاد، ومن أشهر ذريته الصحابي عمرو بن العاص.',
			characterTraits: ['الصبر', 'الثبات', 'الإخلاص', 'الشجاعة'],
			socialEvents: [
				'كان مثالًا في التحمل والثبات على الدين رغم التعذيب',
				'كان قريبًا من النبي ﷺ وأحب الناس إليه',
			],
		},
		notableStories: {
			withProphet: [
				'تعذيبه الشديد من قبل المشركين في مكة بسبب إسلامه',
				'اختياره مؤذنًا للنبي ﷺ ورفع الأذان لأول مرة',
			],
			withCompanions: [
				'كان محبوبًا من الصحابة وذو مكانة عالية بينهم',
				'شارك في تعليم الناس الإسلام بالأذان والدعوة',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: false,
			statusWithProphet: 'المؤذن الأول للنبي ﷺ وأحد المخلصين له',
		},
	},

	{
		id: 'saad-ibn-muadh',
		personalInfo: {
			fullName: 'سعد بن معاذ الأنصاري الخزرجي',
			birthYearAndPlace: 'وُلد في المدينة المنورة قبل البعثة النبوية',
			deathYearAndPlace:
				'توفي في المدينة المنورة سنة 20 هـ متأثرًا بجراحه بعد غزوة الخندق',
			ageAtDeath: 58, // تقدير تقريبي
			physicalDescription: 'قوي البنية، شجاع، حسن الهيئة',
			tribeAndClan: 'من قبيلة الأوس الأنصارية',
		},
		islamAndFaith: {
			islamStory:
				'أسلم في بداية الدعوة وناصر النبي ﷺ بشدة، وكان من أبرز الأنصار الذين وقفوا مع النبي في المدينة.',
			migrations: [],
			notableFaithMoments: [
				'أخذ بيد الأنصار لدعم النبي ﷺ',
				'توسط للصلح بين الأنصار والمهاجرين',
				'ثباته في مواقف الشدائد خاصة في غزوة الخندق',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 2,
				famousHadiths: ['أحاديث تتعلق بمواقف القتال والعدل'],
				narratedBy: ['الصحابة'],
				narratedTo: ['الأنصار والمهاجرين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الأنصار'],
			famousFatwas: ['شارك في الفتاوى والقرارات السياسية للمدينة'],
			contributions: [
				'كان قائدًا للأنصار في غزوات متعددة',
				'لعب دورًا مهمًا في تطبيق الشريعة في المدينة',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: ['قائد الأنصار', 'عضو في مجلس المدينة'],
			roleInConquests: ['ساهم في تخطيط ودعم المعارك ضد المشركين'],
			braveryTitles: ['سيد الأنصار', 'شهيد غزوة الخندق'],
		},
		personalAndSocialLife: {
			family: 'له أبناء وأحفاد من الأنصار المعروفين',
			characterTraits: ['الشجاعة', 'العدل', 'الكرم', 'القيادة'],
			socialEvents: [
				'كان وسيطًا في المصالحات بين القبائل',
				'عرف بحكمته وحسن تعامله مع الناس',
			],
		},
		notableStories: {
			withProphet: [
				'استشار النبي ﷺ في أمور المدينة وأحداث المعارك',
				'مواقفه البطولية في الدفاع عن المدينة',
			],
			withCompanions: [
				'كان صديقًا مقربًا للصحابة وزعيمًا لهم',
				'مشاركته الفعالة في بيعة الرضوان',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'من زعماء الأنصار وأحد المقربين للنبي ﷺ',
		},
	},

	{
		id: 'abu-al-darda',
		personalInfo: {
			fullName: 'عباد بن الصامت، المعروف بأبي الدرداء',
			birthYearAndPlace: 'ولد في المدينة المنورة قبل البعثة النبوية',
			deathYearAndPlace: 'توفي في المدينة المنورة حوالي سنة 30 هـ',
			ageAtDeath: 70, // تقدير تقريبي
			physicalDescription: 'شخصية متزنة، متواضع، زاهد في الدنيا',
			tribeAndClan: 'من بني عمرو بن عوف من قبيلة الخزرج الأنصارية',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مبكرًا في المدينة، واعتُبر من السابقين في الإسلام بين الأنصار.',
			migrations: [],
			notableFaithMoments: [
				'تفرغه للعلم والدعوة بعد إسلامه',
				'ثباته على الدين وزهده في الدنيا',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 173,
				famousHadiths: [
					'أحاديث عن فضل العلم وحقوق الجار',
					"حديث: 'مثل الذي يذكر ربه والذي لا يذكره كمثل الحي والميت'",
				],
				narratedBy: ['الصحابة', 'التابعين'],
				narratedTo: ['الجيل التالي من العلماء'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['ابن مسعود', 'الزهري'],
			famousFatwas: ['آراء في الفقه والعبادات والتعامل مع الناس'],
			contributions: [
				'من كبار علماء الصحابة في تفسير القرآن والحديث',
				'أسهم في تعليم الصحابة والتابعين',
			],
		},
		jihadAndService: {
			battles: ['شارك في بعض الغزوات مع النبي ﷺ'],
			administrativeRoles: ['مفتي المدينة في عهد الخلفاء الراشدين'],
			roleInConquests: ['ساهم في تثبيت الدين في المدينة ونشر العلم'],
			braveryTitles: ['رائد العلم والتقوى'],
		},
		personalAndSocialLife: {
			family: 'له أبناء وأحفاد عرفوا بالعلم والتقوى',
			characterTraits: ['التواضع', 'الزهد', 'الورع', 'العلمية'],
			socialEvents: [
				'كان محبوبًا من الصحابة لتواضعه وعلمه',
				'أثرى المجتمع الإسلامي بعلمه ودعوته',
			],
		},
		notableStories: {
			withProphet: [
				'تعلم العلم مباشرة من النبي ﷺ',
				'مشاركته في نشر العلم وتعليم الصحابة',
			],
			withCompanions: [
				'كان مرجعًا علميًا لهم',
				'تناقلوا عنه الأحاديث والآراء الفقهية',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'من كبار العلماء المحدثين في عهد النبي ﷺ والخلفاء',
		},
	},

	{
		id: 'aseed-ibn-hudhayr',
		personalInfo: {
			fullName: 'أسيد بن حضير الأنصاري',
			birthYearAndPlace: 'وُلد في المدينة المنورة قبل البعثة النبوية',
			deathYearAndPlace:
				'توفي في المدينة المنورة بعد فتح مكة (تقدير حوالي 9 هـ)',
			ageAtDeath: 65, // تقدير تقريبي
			physicalDescription: 'شجاع، قوي البنية، حسن الهيئة',
			tribeAndClan: 'من قبيلة الخزرج الأنصارية',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مبكرًا وناصر النبي ﷺ في المدينة، وشارك في البيعة على العقبة.',
			migrations: [],
			notableFaithMoments: [
				'وقفه الشجاع مع النبي ﷺ في مواقف الدعوة',
				'مشاركته في الدفاع عن الإسلام في المدينة',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 5,
				famousHadiths: ['أحاديث عن الصبر والثبات في سبيل الله'],
				narratedBy: ['الصحابة'],
				narratedTo: ['الأنصار'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الأنصار'],
			famousFatwas: [],
			contributions: [
				'كان من المساندين للنبي ﷺ في المدينة',
				'ساهم في تثبيت دعائم الإسلام بين الأنصار',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد'],
			administrativeRoles: ['زعيم من زعماء الأنصار'],
			roleInConquests: ['شارك في الدفاع عن المدينة ونصرة الإسلام'],
			braveryTitles: ['من كبار الأنصار وشجعانهم'],
		},
		personalAndSocialLife: {
			family: 'له أسر معروفة في المدينة',
			characterTraits: ['الشجاعة', 'الثبات', 'الصدق'],
			socialEvents: ['كان محبوبًا وموقرًا بين الأنصار'],
		},
		notableStories: {
			withProphet: [
				'شارك في البيعة على العقبة مع النبي ﷺ',
				'دوره في تثبيت المؤمنين وتوحيد صفوف الأنصار',
			],
			withCompanions: ['كان من أعمدة الأنصار وداعمًا للصحابة الآخرين'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'من زعماء الأنصار المقربين للنبي ﷺ',
		},
	},

	{
		id: 'abu-talha-al-ansari',
		personalInfo: {
			fullName: 'طلحة بن عبيد الله الأنصاري',
			birthYearAndPlace: 'وُلد في المدينة المنورة',
			deathYearAndPlace: 'توفي في المدينة المنورة عام 34 هـ',
			ageAtDeath: 75, // تقدير تقريبي
			physicalDescription:
				'شجاع، قوي البنية، حسن الهيئة، كان من السابقين في الإسلام',
			tribeAndClan: 'من قبيلة الخزرج الأنصارية',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مبكرًا وشارك في بيعة العقبة، وكان من السابقين في الإسلام بين الأنصار.',
			migrations: [],
			notableFaithMoments: [
				'شارك في معركة بدر مع النبي ﷺ',
				'كان من أصحاب النبي المخلصين وثبت على دينه طوال حياته',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 15,
				famousHadiths: ['أحاديث عن الصبر والشجاعة في سبيل الله'],
				narratedBy: ['الصحابة'],
				narratedTo: ['الأنصار والتابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الأنصار'],
			famousFatwas: [],
			contributions: [
				'كان من الداعمين للإسلام في المدينة',
				'ساهم في تعليم الصحابة والأنصار',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: [],
			roleInConquests: ['شارك في الدفاع عن المدينة في الغزوات المختلفة'],
			braveryTitles: ['من فرسان الأنصار وشجعانهم'],
		},
		personalAndSocialLife: {
			family: 'له عدة أبناء، وكان محبوبًا في المجتمع الإسلامي',
			characterTraits: ['الشجاعة', 'الكرم', 'الوفاء'],
			socialEvents: [
				'كان من الداعمين للمحتاجين والضعفاء',
				'شارك في مواقف الإصلاح الاجتماعي بين المسلمين',
			],
		},
		notableStories: {
			withProphet: [
				'شارك في البيعة على العقبة ودعم النبي ﷺ في بداية الدعوة',
				'وقف معه في المواقف الصعبة للدعوة الإسلامية',
			],
			withCompanions: ['كان من أصدقاء النبي ﷺ ومن أعمدة الصحابة في المدينة'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'من السابقين المخلصين للنبي ﷺ وأحد قادة الأنصار',
		},
	},

	{
		id: 'saeed-ibn-zaid',
		personalInfo: {
			fullName: 'سعيد بن زيد بن عمرو الأنصاري',
			birthYearAndPlace: 'وُلد في المدينة المنورة',
			deathYearAndPlace: 'توفي في المدينة المنورة حوالي 55 هـ',
			ageAtDeath: 65, // تقدير تقريبي
			physicalDescription: 'شديد البنية، طويل القامة، حسن الهيئة',
			tribeAndClan: 'من قبيلة الخزرج الأنصارية',
		},
		islamAndFaith: {
			islamStory:
				'كان من أوائل من أسلم من الأنصار، شارك في بيعة العقبة الثانية مع النبي ﷺ.',
			migrations: [],
			notableFaithMoments: [
				'تثبته على الدين رغم التعذيب في بداية الإسلام',
				'مشاركته في بيعة الرضوان',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 8,
				famousHadiths: ['أحاديث عن التواضع والتقوى'],
				narratedBy: ['الصحابة'],
				narratedTo: ['الأنصار والتابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الأنصار'],
			famousFatwas: [],
			contributions: [
				'نقل تعاليم النبي ﷺ بين الأنصار',
				'ساهم في تثبيت العقيدة في المدينة',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: [],
			roleInConquests: ['شارك في الغزوات مع النبي ﷺ وثبت مواقعه'],
			braveryTitles: ['من السابقين الأبطال في الإسلام'],
		},
		personalAndSocialLife: {
			family: 'زوجته أسماء بنت عُميس، له أبناء وبنات',
			characterTraits: ['الصدق', 'الشجاعة', 'التواضع'],
			socialEvents: ['شارك في العديد من مواقف الإصلاح الاجتماعي بين المسلمين'],
		},
		notableStories: {
			withProphet: [
				'كان من المشاركين في البيعة على العقبة مع النبي ﷺ',
				'وقف إلى جانب النبي ﷺ في كافة الغزوات',
			],
			withCompanions: ['كان من الأنصار الداعمين للرسول ﷺ وللصحابة الآخرين'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'من السابقين الصادقين وأحد العشرة المبشرين بالجنة',
		},
	},

	{
		id: 'hamza-ibn-abdul-muttalib',
		personalInfo: {
			fullName: 'حمزة بن عبد المطلب بن هاشم',
			birthYearAndPlace: 'وُلد بمكة حوالي عام 568م',
			deathYearAndPlace: 'استشهد في غزوة أحد سنة 3 هـ بالمدينة المنورة',
			ageAtDeath: 55, // تقدير تقريبي
			physicalDescription:
				'قوي البنية، أسد في الشجاعة، طويل القامة، حسن الهيئة',
			tribeAndClan: 'من قريش، بني هاشم',
		},
		islamAndFaith: {
			islamStory:
				'أسلم بعد سماعه بخبر النبي ﷺ، وكان من أوائل المدافعين عن الإسلام.',
			migrations: [],
			notableFaithMoments: [
				'دفاعه الشجاع عن النبي ﷺ والدين في مكة',
				'شجاعته في معركة أحد حتى استشهد وهو يدافع عن الإسلام',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 5,
				famousHadiths: ['أحاديث عن الشجاعة والثبات'],
				narratedBy: ['الصحابة'],
				narratedTo: ['الأنصار والتابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الصحابة والتابعين'],
			famousFatwas: [],
			contributions: [
				'كان مثلاً في الشجاعة والفروسية في سبيل الله',
				'دوره في تثبيت أركان الإسلام في بدايته',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد'],
			administrativeRoles: [],
			roleInConquests: [
				'كان قائدًا في غزوات بدر وأحد، ورمزًا للشجاعة الإسلامية',
			],
			braveryTitles: ['أسد الله', 'أسد رسوله'],
		},
		personalAndSocialLife: {
			family: 'كان عمه للنبي ﷺ، وله عدة أبناء وبنات',
			characterTraits: ['الشجاعة', 'الإباء', 'الكرم'],
			socialEvents: ['موقفه البطولي في الدفاع عن النبي ﷺ والمهاجرين'],
		},
		notableStories: {
			withProphet: [
				'كان من أقرب الناس للنبي ﷺ وأعزهم',
				'دفاعه عنه في مكة وفي المعارك',
			],
			withCompanions: ['كان مثلاً يُحتذى به في الشجاعة بين الصحابة'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: false,
			statusWithProphet: 'أخو النبي ﷺ وأحد أشد الناس دفاعًا عنه',
		},
	},

	{
		id: 'abdullah-ibn-masoud',
		personalInfo: {
			fullName: 'عبد الله بن مسعود القرشي العدوي',
			birthYearAndPlace: 'ولد بمكة المكرمة حوالي عام 594م',
			deathYearAndPlace: 'توفي بالمدينة المنورة سنة 32 هـ',
			ageAtDeath: 70, // تقريباً
			physicalDescription: 'قصير القامة، نحيف، حسن الصوت في تلاوة القرآن',
			tribeAndClan: 'من قبيلة قريش، بني عبد الدار',
		},
		islamAndFaith: {
			islamStory:
				'كان من أوائل من أسلم، وسمع النبي ﷺ وهو في مكة، وأظهر ثباتًا قويًا في إيمانه رغم الاضطهاد.',
			migrations: ['الهجرة إلى المدينة المنورة'],
			notableFaithMoments: [
				'من حفظة القرآن الكريم وأول من جمع القرآن كتابةً',
				'كان مع النبي ﷺ في الغزوات وكان قارئًا متمكنًا للقرآن',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 300,
				famousHadiths: ['أحاديث عن التوحيد وأحكام الصلاة'],
				narratedBy: ['النبي محمد ﷺ'],
				narratedTo: ['الصحابة والتابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الصحابة والتابعين'],
			famousFatwas: ['فتاوى في مسائل العقيدة والعبادة'],
			contributions: [
				'كان من أوائل من جمع القرآن في مصحف',
				'علم القرآن للناس وكان من القراء العشرة المعتمدين',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: [],
			roleInConquests: ['شارك في الغزوات مع النبي ﷺ وثبت مواقعه'],
			braveryTitles: ['قارئ القرآن', 'من السابقين الصادقين'],
		},
		personalAndSocialLife: {
			family: 'كان متزوجًا وله أبناء',
			characterTraits: ['الزهد', 'الورع', 'الصدق'],
			socialEvents: ['كان من المصلحين بين الصحابة'],
		},
		notableStories: {
			withProphet: [
				'كان من المقرّبين للنبي ﷺ',
				'تعليم الصحابة القرآن وشرح معانيه',
			],
			withCompanions: ['كان معلمًا ومرشدًا للصحابة الآخرين'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'كان من أوائل المقرّبين إلى النبي ﷺ وأحد أفضل القرّاء',
		},
	},

	{
		id: 'abdullah-ibn-umar',
		personalInfo: {
			fullName: 'عبد الله بن عمر بن الخطاب العدوي القرشي',
			birthYearAndPlace: 'ولد بمكة حوالي عام 610م',
			deathYearAndPlace: 'توفي بالمدينة المنورة سنة 73 هـ',
			ageAtDeath: 63, // تقريبًا
			physicalDescription: 'كان متوسط الطول، حسن الهيئة، شديد الورع',
			tribeAndClan: 'من قبيلة قريش، بني عدي',
		},
		islamAndFaith: {
			islamStory:
				'أسلم في شبابه، وكان من الصحابة الذين عاصروا النبي ﷺ، وتميز بورعه وتقواه.',
			migrations: ['الهجرة إلى المدينة'],
			notableFaithMoments: [
				'كان متابعًا دقيقًا للسنة، ونقل الكثير من الأحاديث',
				'كان ملتزمًا بالعبادات واتباع النبي ﷺ',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 2200,
				famousHadiths: ['أحاديث عن الصلاة، الصيام، والزكاة'],
				narratedBy: ['النبي محمد ﷺ'],
				narratedTo: ['الصحابة والتابعين'],
			},
			teachers: ['النبي محمد ﷺ', 'عمر بن الخطاب'],
			students: ['الصحابة والتابعين'],
			famousFatwas: ['فتاوى في العبادات والمعاملات'],
			contributions: [
				'نقل عددًا كبيرًا من الأحاديث الصحيحة',
				'كان قدوة في الورع والعبادة',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: [],
			roleInConquests: ['شارك في الغزوات مع النبي ﷺ وثبت في مواقعه'],
			braveryTitles: ['الزاهد الورع'],
		},
		personalAndSocialLife: {
			family: 'ابن الخليفة عمر بن الخطاب، وكان معروفًا بورعه وتقواه',
			characterTraits: ['الورع', 'الزهد', 'الصدق'],
			socialEvents: ['كان ملتزمًا بسنة النبي ﷺ ويدعو لذلك'],
		},
		notableStories: {
			withProphet: [
				'كان من أكثر الصحابة نقلًا للأحاديث عن النبي ﷺ',
				'تميز بالتواضع والتقوى',
			],
			withCompanions: ['كان مرجعًا في الفقه والحديث بين الصحابة'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'من كبار الصحابة، وكان له مكانة علمية وروحية عالية',
		},
	},

	{
		id: 'khalid-ibn-saad',
		personalInfo: {
			fullName: 'خالد بن سعد بن عبد الله الأنصاري',
			birthYearAndPlace: 'ولد بالمدينة المنورة في السنة 17 قبل الهجرة تقريبًا',
			deathYearAndPlace: 'توفي في المدينة المنورة سنة 55 هـ',
			ageAtDeath: 72, // تقريبًا
			physicalDescription: 'قوي البنية، طويل القامة، حسن الهيئة',
			tribeAndClan: 'من قبيلة الأوس الأنصارية',
		},
		islamAndFaith: {
			islamStory:
				'أسلم في بداية الدعوة، وكان من أهل المدينة الذين آمنوا بالنبي ﷺ وناصروا الإسلام بشدة.',
			migrations: ['بقي في المدينة طوال حياته'],
			notableFaithMoments: [
				'شارك في بيعة العقبة الثانية',
				'كان من المخلصين الذين دافعوا عن المدينة في الغزوات',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 150,
				famousHadiths: ['أحاديث نقلها عن النبي ﷺ في مواضيع متعددة'],
				narratedBy: ['النبي محمد ﷺ'],
				narratedTo: ['الصحابة والتابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الصحابة والتابعين'],
			famousFatwas: ['له فتاوى معروفة بين الصحابة'],
			contributions: [
				'كان من قادة الأنصار في فترة الخلفاء الراشدين',
				'ساهم في نشر الإسلام وتعليم الناس',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: ['أحد قادة الأنصار'],
			roleInConquests: ['شارك في تثبيت الإسلام في المدينة وخارجها'],
			braveryTitles: ['من كبار قادة الأنصار'],
		},
		personalAndSocialLife: {
			family: 'كان له أسرته وأبناءه في المدينة',
			characterTraits: ['الشجاعة', 'الوفاء', 'الحكمة'],
			socialEvents: ['كان من الذين يعينون الفقراء والمحتاجين'],
		},
		notableStories: {
			withProphet: ['كان من الذين آمنوا بالنبي ﷺ ودافعوا عنه في المدينة'],
			withCompanions: ['كان له دور بارز في دعم الصحابة وقيادة الأنصار'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'كان من الأنصار المخلصين وأحد كبار الصحابة في المدينة',
		},
	},

	{
		id: 'hudhayfah-ibn-al-yaman',
		personalInfo: {
			fullName: 'حذيفة بن اليمان الأنصاري',
			birthYearAndPlace: 'ولد بالمدينة المنورة في السنة 10 قبل الهجرة تقريبًا',
			deathYearAndPlace: 'توفي بالمدينة المنورة سنة 36 هـ',
			ageAtDeath: 46, // تقريبا
			physicalDescription: 'شديد البنية، قوي، مشهور بذكائه وحكمته',
			tribeAndClan: 'من قبيلة الأوس الأنصارية',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مبكرًا وكان من أوائل الأنصار الذين آمنوا برسول الله ﷺ، شارك في معظم الغزوات.',
			migrations: ['بقي في المدينة مع النبي ﷺ'],
			notableFaithMoments: [
				'وكُلف بمعرفة المنافقين وحركاتهم في المدينة',
				'كان من أسرار النبي ﷺ وأحب أصحابه',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 70,
				famousHadiths: [
					'أحاديث عن النفاق وكيفية التعامل معه',
					'أحاديث عن الغزوات والفتوحات',
				],
				narratedBy: ['النبي محمد ﷺ'],
				narratedTo: ['الصحابة والتابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الصحابة والتابعين'],
			famousFatwas: ['له آراء وفتاوى في مواجهة النفاق والفتن'],
			contributions: [
				'كشف أسرار المنافقين للنبي ﷺ',
				'شارك في عدة غزوات مع النبي ﷺ',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق', 'فتح مكة'],
			administrativeRoles: [],
			roleInConquests: ['شارك في الفتوحات الإسلامية بعد وفاة النبي ﷺ'],
			braveryTitles: ['صاحب السر للنبي ﷺ'],
		},
		personalAndSocialLife: {
			family: 'زوجته وأولاده في المدينة',
			characterTraits: ['الذكاء', 'الوفاء', 'الشجاعة', 'الصدق'],
			socialEvents: ['كان من أوثق الصحابة للنبي ﷺ في حفظ أسراره'],
		},
		notableStories: {
			withProphet: [
				'وكُلف بمعرفة حركة المنافقين وأسرارهم في المدينة',
				"كان قريبًا جدًا من النبي ﷺ وكان يُدعى بـ'صاحب السر'",
			],
			withCompanions: ['كان مستشارًا مهمًا للصحابة في الأمور الأمنية والدينية'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'من المقربين للنبي ﷺ وكان من أوثق أصحابه',
		},
	},

	{
		id: 'anas-ibn-al-nadr',
		personalInfo: {
			fullName: 'أنس بن النضر بن مالك الأنصاري',
			birthYearAndPlace: 'ولد في المدينة المنورة في السنة 1 قبل الهجرة تقريبًا',
			deathYearAndPlace: 'توفي في المدينة المنورة سنة 54 هـ',
			ageAtDeath: 55, // تقريبًا
			physicalDescription: 'قوي البنية، ذو هيئة مهيبة، حسن الخلق',
			tribeAndClan: 'من قبيلة الأوس الأنصارية',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مع أهل المدينة منذ بداية الدعوة، وكان من المخلصين للنبي ﷺ وشارك في غزواته.',
			migrations: ['بقي في المدينة طوال حياته'],
			notableFaithMoments: [
				'شارك في بيعة العقبة الثانية',
				'صبر وتحمل في معارك بدر وأحد والخندق',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 30,
				famousHadiths: ['أحاديث عن السلوك والأخلاق الإسلامية'],
				narratedBy: ['النبي محمد ﷺ'],
				narratedTo: ['الصحابة والتابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الصحابة والتابعين'],
			famousFatwas: [],
			contributions: [
				'خدم النبي ﷺ خدمة طويلة كمرافق ومساعد',
				'نقل علوم النبي ﷺ للصحابة والتابعين',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: [],
			roleInConquests: ['شارك في الفتوحات الإسلامية'],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'كان له أبناء وأسرته في المدينة',
			characterTraits: ['الوفاء', 'الصبر', 'التواضع'],
			socialEvents: ['كان محبوبًا بين الناس وأهل المدينة'],
		},
		notableStories: {
			withProphet: ['كان خادم النبي ﷺ ومرافقه المخلص في حياته اليومية'],
			withCompanions: [
				'كان له دور كبير في دعم الصحابة والمجتمع الإسلامي بالمدينة',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'كان من المرافقين المقربين للنبي ﷺ',
		},
	},

	{
		id: 'salman-al-farsi',
		personalInfo: {
			fullName: 'سلمان بن عبد الله الأنصاري الفارسي',
			birthYearAndPlace: 'ولد في بلاد فارس حوالي سنة 568م',
			deathYearAndPlace: 'توفي في المدينة المنورة حوالي سنة 35 هـ',
			ageAtDeath: 67, // تقريبًا
			physicalDescription: 'رجل متوسط القامة، قوي البنية، ذكي وحكيم',
			tribeAndClan: 'من الفرس، أسلم بعد بحث طويل عن الحق',
		},
		islamAndFaith: {
			islamStory:
				'بحث طويل عن الدين الحقيقي حتى وصل إلى الإسلام وأسلم في المدينة، وأصبح من أوثق الصحابة للنبي ﷺ.',
			migrations: ['هاجر إلى المدينة مع النبي ﷺ وأصحابه'],
			notableFaithMoments: [
				'اقترح حفر الخندق في غزوة الخندق بناءً على معرفته العسكرية',
				'كان مثالاً على الاجتهاد والبحث عن الحق في الدين',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 23,
				famousHadiths: ['أحاديث عن الإخلاص والصبر والتقوى'],
				narratedBy: ['النبي محمد ﷺ'],
				narratedTo: ['الصحابة والتابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الصحابة والتابعين'],
			famousFatwas: [],
			contributions: [
				'ساهم في توجيه المسلمين في غزوة الخندق',
				'نقل خبراته ومعرفته من الحضارات السابقة إلى الإسلام',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: [],
			roleInConquests: ['شارك في الفتوحات الإسلامية بعد وفاة النبي ﷺ'],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'تزوج في المدينة وأنجب أبناء',
			characterTraits: ['الحكمة', 'الصبر', 'الاجتهاد', 'الصدق'],
			socialEvents: ['كان محبوبا ومثالاً في الصدق والاجتهاد بين الصحابة'],
		},
		notableStories: {
			withProphet: [
				'كان مستشارًا للنبي ﷺ في أمور عدة بسبب معرفته وحكمته',
				'اقترح حفر الخندق أثناء غزوة الأحزاب مما ساهم في نصر المسلمين',
			],
			withCompanions: ['كان له مكانة كبيرة بين الصحابة لعلمه وثقافته'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'كان من المخلصين وأحب الصحابة للنبي ﷺ',
		},
	},

	{
		id: 'muadh-ibn-jabal',
		personalInfo: {
			fullName: 'معاذ بن جبل الأنصاري',
			birthYearAndPlace: 'ولد في المدينة المنورة حوالي سنة 603م',
			deathYearAndPlace: 'توفي في المدينة المنورة حوالي سنة 18 هـ',
			ageAtDeath: 45, // تقريبًا
			physicalDescription: 'رجل متوسط القامة، حسن الهيئة، ذو عقل وفهم عميق',
			tribeAndClan: 'من قبيلة الأوس الأنصارية',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مبكرًا وكان من أهل العلم والإيمان الراسخ، عُرف بحبه للعلم وطلبه.',
			migrations: ['بقي في المدينة طوال حياته'],
			notableFaithMoments: [
				'كان من حفاظ القرآن وعلوم الدين',
				'شارك في بيعة العقبة الثانية',
				'عُرف بحكمته في الفتوى والإفتاء',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 150,
				famousHadiths: ['أحاديث في الفقه والعبادة'],
				narratedBy: ['النبي محمد ﷺ'],
				narratedTo: ['الصحابة والتابعين'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الصحابة والتابعين'],
			famousFatwas: ['أشهر الفتاوى في مسائل الدين والعبادة'],
			contributions: [
				'تعليم الصحابة والتابعين علوم الدين',
				'كان من كبار الفقهاء في المدينة',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: ['أُرسل قاضيًا وواعظًا إلى اليمن'],
			roleInConquests: ['شارك في فتوحات اليمن وساهم في نشر الإسلام'],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'كان له أبناء وأسرته في المدينة',
			characterTraits: ['العلم', 'التقوى', 'الصدق', 'الحكمة'],
			socialEvents: ['كان محبوبا بين الصحابة وكان مستشار النبي ﷺ في الفقه'],
		},
		notableStories: {
			withProphet: ['عُرف بحبه للنبي ﷺ واتباعه لأوامره بدقة'],
			withCompanions: ['كان مرجعًا في العلم بين الصحابة والتابعين'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'كان من أحب الصحابة للنبي ﷺ وأكثرهم علماً',
		},
	},

	{
		id: 'abdullah-ibn-abbas',
		personalInfo: {
			fullName: 'عبد الله بن عباس بن عبد المطلب القرشي الهاشمي',
			birthYearAndPlace: 'ولد بمكة المكرمة سنة 3 قبل الهجرة (619م تقريبًا)',
			deathYearAndPlace: 'توفي بالطائف سنة 68 هـ',
			ageAtDeath: 71,
			physicalDescription:
				'كان حسن الهيئة، مهيب الطلعة، مائلًا إلى الطول، أبيض مشربًا بالحمرة',
			tribeAndClan: 'من بني هاشم من قريش، ابن عم الرسول ﷺ',
		},
		islamAndFaith: {
			islamStory:
				'أسلم وهو صغير السن قبل الهجرة، وكان من أكثر الصحابة علمًا وحفظًا لحديث النبي ﷺ.',
			migrations: ['هاجر إلى المدينة المنورة مع أهله بعد فتح مكة'],
			notableFaithMoments: [
				'دعا له النبي ﷺ بالعلم والحكمة',
				"لقّبه الرسول ﷺ بـ'ترجمان القرآن'",
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 1660,
				famousHadiths: ['أحاديث كثيرة في التفسير وأحكام الدين'],
				narratedBy: ['النبي محمد ﷺ'],
				narratedTo: ['سعيد بن جبير', 'عكرمة مولى ابن عباس'],
			},
			teachers: ['النبي محمد ﷺ', 'عمر بن الخطاب', 'علي بن أبي طالب'],
			students: ['سعيد بن جبير', 'عكرمة', 'طاووس'],
			famousFatwas: ['فتاويه المشهورة في تفسير القرآن والأحكام الشرعية'],
			contributions: [
				'كان من أشهر مفسري القرآن الكريم',
				'أول من أسس علم التفسير',
				"أطلق عليه 'حبر الأمة وترجمان القرآن'",
			],
		},
		jihadAndService: {
			battles: ['شارك في بعض الغزوات بعد فتح مكة'],
			administrativeRoles: ['والي البصرة بأمر من علي بن أبي طالب'],
			roleInConquests: ['أسهم في نشر العلم وتثبيت الدين في العراق'],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'كان له أبناء وأحفاد صالحون من أعلام التابعين',
			characterTraits: ['الكرم', 'الحلم', 'الورع', 'الحرص على طلب العلم'],
			socialEvents: [
				'كان مقصدًا للطلاب والعلماء من كل مكان',
				'جالسه كبار الصحابة وعلماء التابعين',
			],
		},
		notableStories: {
			withProphet: [
				"دعا له الرسول ﷺ قائلاً: 'اللهم فقهه في الدين وعلّمه التأويل'",
			],
			withCompanions: [
				'اشتهر بنقاشه العلمي مع كبار الصحابة وتفسيره للقرآن أمامهم',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'من أحب الصحابة إلى الرسول ﷺ وأوثق المفسرين',
		},
	},

	{
		id: 'abu-salama-ibn-abd-alasad',
		personalInfo: {
			fullName: 'أبو سلمة عبد الله بن عبد الأسد بن هلال المخزومي القرشي',
			birthYearAndPlace: 'ولد بمكة المكرمة قبل الهجرة بنحو 24 سنة',
			deathYearAndPlace:
				'توفي بالمدينة المنورة سنة 4 هـ متأثراً بجراحه بعد غزوة أُحد',
			ageAtDeath: 58,
			physicalDescription: 'رُوي أنه كان حسن الوجه، قوي البنية',
			tribeAndClan: 'من بني مخزوم من قريش',
		},
		islamAndFaith: {
			islamStory:
				'من السابقين إلى الإسلام، أسلم وزوجته أم سلمة رضي الله عنها مبكرًا، وهاجر إلى الحبشة ثم إلى المدينة.',
			migrations: [
				'هاجر إلى الحبشة الهجرتين الأولى والثانية',
				'هاجر إلى المدينة المنورة',
			],
			notableFaithMoments: [
				'ثبت على الإسلام رغم أذى قومه',
				'كان من المؤمنين الأوائل الذين صبروا على الاضطهاد',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 10,
				famousHadiths: ['روى بعض الأحاديث القليلة بسبب وفاته المبكرة'],
				narratedBy: ['ابنه سلمة بن أبي سلمة'],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: [
				'أحد أوائل من جهروا بالدعوة الإسلامية',
				'شارك في تثبيت المسلمين بمكة قبل الهجرة',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد'],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: ['كان معروفًا بشجاعته وإقدامه'],
		},
		personalAndSocialLife: {
			family: 'زوجته أم سلمة هند بنت أبي أمية، وابنه سلمة',
			characterTraits: ['الإقدام', 'الوفاء', 'الحرص على نصرة الدين'],
			socialEvents: ['هاجر بأسرته للهروب من أذى المشركين'],
		},
		notableStories: {
			withProphet: ['من أحب الصحابة إلى الرسول ﷺ وكان يدعو له بالخير'],
			withCompanions: [
				'كان من المهاجرين الأولين الذين يشاركون إخوانهم الأنصار مالهم وبيوتهم',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: false,
			statusWithProphet: 'أحد السابقين الأولين، موضع ثقة الرسول ﷺ',
		},
	},

	{
		id: 'hatim-ibn-asid',
		personalInfo: {
			fullName: 'حاتم بن أسيد المحاربي',
			birthYearAndPlace: 'وُلد بمكة المكرمة قبل الهجرة ببضع سنوات',
			deathYearAndPlace: 'توفي بالمدينة المنورة، تاريخ وفاته غير معروف بدقة',
			ageAtDeath: undefined,
			physicalDescription: 'كان متوسط القامة، حسن الهيئة',
			tribeAndClan: 'من بني محارب من قريش',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مبكرًا على يد النبي ﷺ وهاجر إلى المدينة، وشهد بعض المشاهد مع رسول الله ﷺ.',
			migrations: ['هاجر إلى المدينة المنورة'],
			notableFaithMoments: [
				'صبر على أذى المشركين في مكة قبل الهجرة',
				'شارك في الدفاع عن الإسلام مبكرًا',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 2,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['رواياته القليلة للحديث'],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد'],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'لا تتوفر تفصيلات عن أسرته وأبنائه',
			characterTraits: ['الإخلاص', 'التفاني'],
			socialEvents: [],
		},
		notableStories: {
			withProphet: ['مشاركته مع الرسول ﷺ في بعض الغزوات'],
			withCompanions: [],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: false,
			statusWithProphet: 'من صحابة النبي ﷺ الأوائل، جاهد وصبر على الدين',
		},
	},

	{
		id: 'saad-ibn-ubadah',
		personalInfo: {
			fullName: 'سعد بن عبادة بن دليم الخزرجي الأنصاري',
			birthYearAndPlace: 'وُلد بالمدينة المنورة قبل الهجرة بعدة عقود',
			deathYearAndPlace: 'توفي بحوران بالشام سنة 15 هـ',
			ageAtDeath: undefined,
			physicalDescription: 'جسيم الجسم، طويل القامة، مهيب الطلعة',
			tribeAndClan: 'من بني ساعدة من الخزرج',
		},
		islamAndFaith: {
			islamStory:
				'أسلم على يد مصعب بن عمير قبل الهجرة، وكان من النقباء الاثني عشر، وشهد بيعة العقبة الكبرى.',
			migrations: [],
			notableFaithMoments: [
				'كان من النقباء الذين بايعوا النبي ﷺ في بيعة العقبة',
				'من أوائل الأنصار الذين نصروا الإسلام وأكرموا المهاجرين',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 5,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['مواقفه المشهورة دفاعًا عن الإسلام والنبي ﷺ'],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: ['سيد الخزرج وزعيم الأنصار'],
			roleInConquests: [],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family:
				'له أولاد من بينهم قيس بن سعد بن عبادة، وكان من الكرماء المشهورين.',
			characterTraits: ['الكرم', 'النجدة', 'الوفاء'],
			socialEvents: ['استضاف المهاجرين وكرمهم أشد الإكرام'],
		},
		notableStories: {
			withProphet: [
				'موقفه مع النبي ﷺ عندما أراد قسم الغنائم',
				'استشارته النبي ﷺ في شؤون الأنصار',
			],
			withCompanions: ['موقفه مع سعد بن معاذ في بيعة العقبة'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'كان من كبار سادة الأنصار وأحبهم إلى النبي ﷺ',
		},
	},

	{
		id: 'abu-dujana',
		personalInfo: {
			fullName: 'أبو دجانة سماك بن خرشة الساعدي الأنصاري',
			birthYearAndPlace: 'وُلد بالمدينة المنورة قبل الهجرة بسنوات',
			deathYearAndPlace: 'استشهد في معركة اليمامة سنة 12 هـ',
			ageAtDeath: undefined,
			physicalDescription: 'شجاع قوي البنية، مهيب الطلعة',
			tribeAndClan: 'من بني ساعدة من الخزرج',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مبكرًا وشهد بيعة العقبة، وكان من السابقين إلى الإسلام من الأنصار.',
			migrations: [],
			notableFaithMoments: [
				'أعطاه النبي ﷺ سيفه يوم أُحد فأبلى بلاءً حسنًا',
				'كان من الأبطال الذين ثبتوا يوم أُحد دفاعًا عن الرسول ﷺ',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['الذبّ عن النبي ﷺ في المعارك وثباته في ميادين القتال'],
		},
		jihadAndService: {
			battles: [
				'غزوة بدر',
				'غزوة أحد',
				'غزوة الخندق',
				'غزوة خيبر',
				'معركة اليمامة',
			],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: ['صاحب العصابة الحمراء'],
		},
		personalAndSocialLife: {
			family: undefined,
			characterTraits: ['الشجاعة', 'الإقدام', 'الوفاء'],
			socialEvents: ['مشهور بمواقفه البطولية في المعارك'],
		},
		notableStories: {
			withProphet: [
				'أخذ سيف النبي ﷺ يوم أُحد وأظهر من الشجاعة ما شهد له الرسول ﷺ',
			],
			withCompanions: [
				'ثبّت المسلمين يوم أُحد وشجّعهم على القتال حين اشتدّ الكرب',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'كان من أبطال الأنصار، معروفًا بإقدامه وتفانيه',
		},
	},

	{
		id: 'hanzala-ibn-abi-amir',
		personalInfo: {
			fullName: 'حَنْظَلة بن أبي عامر الأنصاري الأوسي (غسيل الملائكة)',
			birthYearAndPlace: 'وُلد بالمدينة المنورة قبل الهجرة بسنوات',
			deathYearAndPlace: 'استشهد في غزوة أُحد سنة 3 هـ',
			ageAtDeath: 24,
			physicalDescription: 'شابّ قوي، مهيب الطلعة، شجاع ومقدام',
			tribeAndClan: 'من بني عمرو بن عوف من الأوس',
		},
		islamAndFaith: {
			islamStory:
				'أسلم مبكرًا من الأنصار وكان من المخلصين لدين الله تعالى ونصرة نبيه ﷺ.',
			migrations: [],
			notableFaithMoments: [
				'ترك ليلة زفافه للالتحاق بالنبي ﷺ في غزوة أُحد من شدة إيمانه وحرصه على الجهاد',
				'استشهد وهو جنب، فغسلته الملائكة بأمر من الله تعالى',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['ضرب أروع الأمثلة في التضحية والفداء من أجل نصرة الدين'],
		},
		jihadAndService: {
			battles: ['غزوة أُحد'],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: ['غسيل الملائكة'],
		},
		personalAndSocialLife: {
			family: 'زوجته جميلة بنت عبد الله بن أُبي بن سلول، تزوجها ليلة استشهاده',
			characterTraits: ['الورع', 'الإقدام', 'الحياء'],
			socialEvents: ['موقفه ليلة زفافه وتركه لها للجهاد مباشرة'],
		},
		notableStories: {
			withProphet: [
				'أخبر النبي ﷺ أصحابه بأن الملائكة غسلوا حنظلة بعد استشهاده',
			],
			withCompanions: [
				'أحبّه المسلمون بعد أن سمعوا خبر تكريم الله له من فوق سبع سماوات',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'من شهد له النبي ﷺ وأخبر بغسله من قبل الملائكة',
		},
	},

	{
		id: 'saad-ibn-al-rabi',
		personalInfo: {
			fullName: 'سعد بن الربيع بن عمرو الخزرجي الأنصاري',
			birthYearAndPlace: 'وُلد بالمدينة المنورة قبل الهجرة بسنوات',
			deathYearAndPlace: 'استشهد في غزوة أُحد سنة 3 هـ',
			ageAtDeath: 37,
			physicalDescription: 'كان شجاعًا، مهيب الطلعة، قائدًا مقدامًا',
			tribeAndClan: 'من بني الحارث بن الخزرج من الأنصار',
		},
		islamAndFaith: {
			islamStory:
				'أسلم على يد مصعب بن عمير رضي الله عنه، وكان من نقباء الأنصار الاثني عشر.',
			migrations: [],
			notableFaithMoments: [
				'أخا النبي ﷺ بينه وبين عبد الرحمن بن عوف عند الهجرة وأراد أن يشاطره ماله وأهله إكرامًا لأخيه المهاجري',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['كان من نقباء الأنصار الذين ضمنوا النصرة لرسول الله ﷺ'],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أُحد'],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family:
				'عُرف بكرمه وجوده، وكان من أسياد قومه من الأنصار. آخى النبي ﷺ بينه وبين عبد الرحمن بن عوف',
			characterTraits: ['الكرم', 'الإيثار', 'الوفاء'],
			socialEvents: [
				'عرض على عبد الرحمن بن عوف شطر ماله وأهله بعد الهجرة إلى المدينة',
			],
		},
		notableStories: {
			withProphet: ['أوصى الأنصار بالدفاع عن النبي ﷺ حتى آخر نفسٍ له في أُحد'],
			withCompanions: [
				'وجد في آخر رمق من حياته بعد أُحد وأبلغ سلامه إلى الرسول ﷺ وأوصى أصحابه بالدفاع عنه',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: false,
			statusWithProphet:
				'من النقباء الاثني عشر، وأحد أبطال أُحد الذين دافعوا عن رسول الله ﷺ حتى استشهد',
		},
	},

	{
		id: 'al-numan-ibn-malik',
		personalInfo: {
			fullName: 'النعمان بن مالك بن ثعلبة الخزرجي الأنصاري',
			birthYearAndPlace: 'وُلد بالمدينة المنورة قبل الهجرة بعدة سنوات',
			deathYearAndPlace: 'استشهد في غزوة أُحد سنة 3 هـ',
			ageAtDeath: undefined,
			physicalDescription: 'رجل قوي البنية، شجاع مقدام',
			tribeAndClan: 'من بني سلمة من الخزرج من الأنصار',
		},
		islamAndFaith: {
			islamStory: 'أسلم على يد مصعب بن عمير رضي الله عنه قبل الهجرة النبوية',
			migrations: [],
			notableFaithMoments: [
				'شهد بيعة العقبة الثانية وأعطى العهد على نصرة الرسول ﷺ',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: [
				'كان من السابقين إلى الإسلام وممن ثبتوا على الحق حتى استشهاده',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أُحد'],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: ['من أبطال أُحد'],
		},
		personalAndSocialLife: {
			family: 'كان من خيرة شباب الأنصار وأحد فرسانهم، محبوبًا بين قومه',
			characterTraits: ['الصدق', 'الإقدام', 'الوفاء بالعهد'],
			socialEvents: [
				'مواقفه المشهورة في نصرة الدين والدفاع عن الرسول ﷺ وأصحابه',
			],
		},
		notableStories: {
			withProphet: ['دافع عن رسول الله ﷺ ببسالة حتى استشهد في أُحد'],
			withCompanions: ['أثنى عليه الصحابة لشجاعته ومواقفه المشرفة'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: false,
			statusWithProphet:
				'أحد شهداء أُحد الأبطال وأحد السابقين إلى الإسلام من الأنصار',
		},
	},

	{
		id: 'abu-ayub-al-ansari',
		personalInfo: {
			fullName: 'أبو أيوب خالد بن زيد بن كليب الخزرجي الأنصاري',
			birthYearAndPlace: 'وُلد بالمدينة المنورة قبل الهجرة بنحو 40 عامًا',
			deathYearAndPlace: 'توفي على أسوار القسطنطينية سنة 52 هـ',
			ageAtDeath: 70,
			physicalDescription: 'رجلٌ طويلٌ أبيض البشرة، واسع العينين',
			tribeAndClan: 'من بني النجار من الخزرج من الأنصار',
		},
		islamAndFaith: {
			islamStory:
				'أسلم على يد مصعب بن عمير رضي الله عنه، وشهد بيعة العقبة الثانية',
			migrations: [],
			notableFaithMoments: [
				'استضاف النبي ﷺ في داره عند مقدمه إلى المدينة',
				'ثابت على الحق وكان من أوائل من نصر النبي ﷺ',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 155,
				famousHadiths: [
					"حديث 'من صام رمضان ثم أتبعه ستًا من شوال كان كصيام الدهر'",
				],
				narratedBy: ['جابر بن عبد الله', 'البراء بن عازب'],
				narratedTo: ['سعيد بن المسيب', 'عروة بن الزبير'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['سعيد بن المسيب', 'عروة بن الزبير'],
			famousFatwas: ['أفتى الناس في أمور الدين بعد وفاة النبي ﷺ'],
			contributions: [
				'من رواة الحديث النبوي',
				'استقبال النبي ﷺ عند هجرته إلى المدينة',
			],
		},
		jihadAndService: {
			battles: [
				'غزوة بدر',
				'غزوة أحد',
				'غزوة الخندق',
				'غزوة خيبر',
				'غزوات ما بعد ذلك حتى فتح القسطنطينية',
			],
			administrativeRoles: [],
			roleInConquests: ['خرج للجهاد حتى بلغ القسطنطينية وتوفي على أسوارها'],
			braveryTitles: ['الفارس المجاهد'],
		},
		personalAndSocialLife: {
			family: 'من أسر الأنصار المشهورة وأعظم بيوتهم',
			characterTraits: ['الكرم', 'التواضع', 'الإخلاص'],
			socialEvents: [
				'استضافة الرسول ﷺ عند قدومه إلى المدينة',
				'كرم ضيافته للضيوف والمجاهدين',
			],
		},
		notableStories: {
			withProphet: [
				'نزول الرسول ﷺ في داره عند الهجرة النبوية حتى بنى المسجد النبوي',
				'ملازمته للرسول ﷺ في سائر أحواله',
			],
			withCompanions: ['محبة الصحابة له بسبب خدمته للرسول ﷺ وكرمه المشهود'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'من خواص أصحاب رسول الله ﷺ وممن أحبه وأكرمه',
		},
	},

	{
		id: 'al-hasan-ibn-ali',
		personalInfo: {
			fullName: 'الحسن بن علي بن أبي طالب الهاشمي القرشي',
			birthYearAndPlace: 'وُلد بالمدينة سنة 3 هـ',
			deathYearAndPlace: 'توفي بالمدينة سنة 50 هـ مسمومًا',
			ageAtDeath: 47,
			physicalDescription:
				'حسن الخلق، حسن الهيئة، معتدل القامة، كان شديد الشبه بالنبي ﷺ',
			tribeAndClan: 'من بني هاشم، آل بيت النبي ﷺ',
		},
		islamAndFaith: {
			islamStory:
				'ابن خليفة وأحد أبرز سادة أهل البيت، نشأ في بيت النبوة وتربى على يدي النبي ﷺ',
			migrations: [],
			notableFaithMoments: [
				'المسؤول عن حفظ السلام بعد وفاة الخليفة عثمان رضي الله عنه',
				'تنازل عن الخلافة حفاظًا على وحدة الأمة الإسلامية',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 23,
				famousHadiths: ['قال النبي ﷺ: الحسن والحسين سيدا شباب أهل الجنة'],
				narratedBy: ['جابر بن عبد الله', 'عبد الله بن عباس'],
				narratedTo: ['عبد الله بن عمر', 'مالك بن أنس'],
			},
			teachers: ['النبي محمد ﷺ', 'علي بن أبي طالب'],
			students: ['مالك بن أنس', 'عبد الله بن عباس'],
			famousFatwas: ['توجيهات للحفاظ على وحدة المسلمين وحقوقهم'],
			contributions: ['دور في صيانة الأمة بعد الفتنة الكبرى'],
		},
		jihadAndService: {
			battles: ['غزوة الجمل', 'معارك في الفتنة الكبرى'],
			administrativeRoles: ['الخليفة الخامس في المسلمين لفترة قصيرة'],
			roleInConquests: [],
			braveryTitles: ['سيد شباب أهل الجنة'],
		},
		personalAndSocialLife: {
			family: 'زوجته فاطمة بنت الحسن وأبناءه، من نسل النبي ﷺ',
			characterTraits: ['الحلم', 'الحكمة', 'التسامح', 'الصبر'],
			socialEvents: [
				'مواقفه مع أهل المدينة للحفاظ على السلم',
				'التنازل عن الحكم لتجنب الفتنة',
			],
		},
		notableStories: {
			withProphet: [
				'حب النبي ﷺ له وذكره في أحاديث شريفة',
				'تربيته في بيت النبوة',
			],
			withCompanions: ['احترام الصحابة له وتقديرهم له'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'الحسن حفيد النبي ﷺ وأحد أهل بيته المحترمين',
		},
	},

	{
		id: 'al-husayn-ibn-ali',
		personalInfo: {
			fullName: 'الحسين بن علي بن أبي طالب الهاشمي القرشي',
			birthYearAndPlace: 'وُلد بالمدينة سنة 4 هـ',
			deathYearAndPlace: 'استشهد في كربلاء سنة 61 هـ',
			ageAtDeath: 57,
			physicalDescription: 'شديد الشبه بالنبي ﷺ، ذو هيئة مهيبة، قوي البنية',
			tribeAndClan: 'من بني هاشم، آل بيت النبي ﷺ',
		},
		islamAndFaith: {
			islamStory:
				'ابن خليفة وأحد أبرز سادة أهل البيت، تربى في بيت النبوة وتعلم على يدي النبي ﷺ',
			migrations: [],
			notableFaithMoments: [
				'ثباته على الحق في وجه الظلم',
				'رفضه البيعة ليزيد بن معاوية حفاظًا على الدين والعدل',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 15,
				famousHadiths: ['حدث عن النبي ﷺ عدة أحاديث وأحاديثه تعتبر مصدر علم'],
				narratedBy: ['علي بن الحسين زين العابدين', 'عبد الله بن عباس'],
				narratedTo: ['علي بن الحسين', 'عبد الله بن عمر'],
			},
			teachers: ['النبي محمد ﷺ', 'علي بن أبي طالب'],
			students: ['زين العابدين', 'عبد الله بن عباس'],
			famousFatwas: ['مواقف واضحة في الحق والعدل'],
			contributions: ['رمز للثبات والشجاعة في الإسلام'],
		},
		jihadAndService: {
			battles: ['معركة كربلاء'],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: ['سيد الشهداء', 'أسد الله الغالب'],
		},
		personalAndSocialLife: {
			family: 'زوجته رقية وأولاده، من نسل النبي ﷺ',
			characterTraits: ['الشجاعة', 'الصبر', 'العدل', 'الإيثار'],
			socialEvents: ['موقفه البطولي في كربلاء', 'رفض الظلم والفساد'],
		},
		notableStories: {
			withProphet: [
				'تربيته في بيت النبي ﷺ وحبه له',
				'ذكره في أحاديث عن فضله ومكانته',
			],
			withCompanions: ['احترام الصحابة له وتقديرهم'],
			miracles: ['كرامات وقصص عن استشهاده وتأثيره في الأمة'],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'الحسين حفيد النبي ﷺ وأحد أهل بيته المحترمين',
		},
	},

	{
		id: 'abu-musa-al-ashari',
		personalInfo: {
			fullName: 'رَاسِخ بْن عَبْد اللَّهِ بْن قَيس الأشعري (أبو موسى الأشعري)',
			birthYearAndPlace: 'وُلد في اليمن قبل الإسلام',
			deathYearAndPlace: 'توفي سنة 52 هـ في الكوفة',
			ageAtDeath: undefined,
			physicalDescription: 'قليل الكلام، حسن الصوت، متواضع الهيئة',
			tribeAndClan: 'من قبيلة الأشعريين اليمنية',
		},
		islamAndFaith: {
			islamStory:
				'أسلم في بداية الدعوة وأسلم على يد النبي ﷺ، وهاجر إلى المدينة',
			migrations: ['الهجرة إلى المدينة'],
			notableFaithMoments: [
				'كان من القراء المحترمين للقرآن',
				'شارك في بيعة الرضوان',
				'مواقفه الحكيمة في حفظ الشريعة',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 100,
				famousHadiths: ['روى أحاديث كثيرة عن النبي ﷺ بأسلوب دقيق'],
				narratedBy: ['ابن عباس', 'النعمان بن بشير'],
				narratedTo: ['الشافعي', 'مالك بن أنس'],
			},
			teachers: ['النبي محمد ﷺ'],
			students: ['الشافعي', 'مالك بن أنس'],
			famousFatwas: ['فتاوى في مسائل الفقه والعبادات'],
			contributions: [
				'أحد الصحابة القراء للقرآن',
				'شارك في تأسيس القضاء في الكوفة',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر', 'غزوة أحد', 'غزوة الخندق'],
			administrativeRoles: ['والي الكوفة'],
			roleInConquests: ['شارك في فتح العراق'],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'زوجته وأولاده، لم تذكر التفاصيل بدقة',
			characterTraits: ['التواضع', 'الورع', 'التقوى'],
			socialEvents: ['كان وسيطًا في حل النزاعات بين الصحابة'],
		},
		notableStories: {
			withProphet: [
				'كان من القراء الذين قرأ عليهم النبي ﷺ',
				'شارك في بيعة الرضوان',
			],
			withCompanions: ['كان له دور في حل الخلافات بين الصحابة'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: true,
			bayatRidwan: true,
			statusWithProphet: 'من الصحابة الثقات والقرّاء المحترمين',
		},
	},

	{
		id: 'amr-bin-al-as',
		personalInfo: {
			fullName: 'عمرو بن العاص بن وائل الثقفي القرشي',
			birthYearAndPlace: 'وُلد بمكة حوالي سنة 583م',
			deathYearAndPlace: 'توفي بالمدينة سنة 43 هـ',
			ageAtDeath: 80,
			physicalDescription: 'قوي البنية، طويل القامة، حسن الهيئة',
			tribeAndClan: 'من قريش، بني مخزوم',
		},
		islamAndFaith: {
			islamStory: 'أسلم قبل فتح مكة وشارك في فتح مصر كقائد عسكري',
			migrations: ['هاجر إلى المدينة بعد إسلامه'],
			notableFaithMoments: [
				'قيادته لفتح مصر وإدارته لها',
				'دوره السياسي في عهد الخلفاء الراشدين',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 20,
				famousHadiths: ['روى عددًا محدودًا من الأحاديث الصحيحة'],
				narratedBy: ['مالك بن أنس'],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: ['فتاوى سياسية وإدارية'],
			contributions: [
				'فتح مصر وأسس فيها الحكم الإسلامي',
				'نقل الإسلام إلى شمال أفريقيا',
			],
		},
		jihadAndService: {
			battles: ['غزوة بدر (قبل إسلامه)', 'فتح مصر'],
			administrativeRoles: ['والي مصر في عهد عمر وعثمان'],
			roleInConquests: ['فتح مصر وإرساء النظام الإسلامي هناك'],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'زوجاته وأبناؤه، منهم عبد الله بن عمرو بن العاص',
			characterTraits: ['الذكاء السياسي', 'الحنكة', 'الدهاء'],
			socialEvents: ['دوره في الصلح بين الصحابة'],
		},
		notableStories: {
			withProphet: ['شارك في كثير من الأحداث في عهد النبي ﷺ'],
			withCompanions: ['كان له دور بارز في السياسة الإسلامية بعد وفاة النبي ﷺ'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'صحابي مجاهد وقائد عسكري وسياسي مهم',
		},
	},

	{
		id: 'othman-bin-talha',
		personalInfo: {
			fullName: 'عثمان بن طلحه بن عبيد الله',
			birthYearAndPlace: 'ولد في مكة في بداية القرن الهجري الأول',
			deathYearAndPlace: 'توفي في المدينة سنة 61 هـ',
			ageAtDeath: undefined,
			physicalDescription: 'وصفه التاريخ بأنه رجل قوي وشجاع',
			tribeAndClan: 'من قبيلة قريش، بني عبد الدار',
		},
		islamAndFaith: {
			islamStory: 'أسلم في عهد النبي ﷺ وشارك في بيعة الرضوان',
			migrations: ['هاجر إلى المدينة'],
			notableFaithMoments: [
				'كان من الذين شهدوا بيعة الرضوان مع النبي ﷺ',
				'وقف بحزم في معركة الجمل',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: [],
		},
		jihadAndService: {
			battles: ['معركة الجمل'],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'زوجته وأولاده غير مذكورين بدقة',
			characterTraits: ['الشجاعة', 'الوفاء'],
			socialEvents: [],
		},
		notableStories: {
			withProphet: ['شهد بيعة الرضوان'],
			withCompanions: ['شارك بفعالية في معركة الجمل'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: true,
			statusWithProphet: 'صحابي مقاتل وشجاع',
		},
	},

	{
		id: 'abu-sufyan-bin-harb',
		personalInfo: {
			fullName: 'أبو سفيان بن حرب بن عبد العزى',
			birthYearAndPlace: 'وُلد بمكة حوالي سنة 560م',
			deathYearAndPlace: 'توفي بالمدينة سنة 35 هـ',
			ageAtDeath: 95,
			physicalDescription: 'قوي البنية، طويل القامة، حسن الهيئة',
			tribeAndClan: 'من قريش، بني عبد الدار',
		},
		islamAndFaith: {
			islamStory:
				'كان من أعظم أعداء الإسلام في البداية، ثم أسلم بعد فتح مكة واعتنق الإسلام بصدق',
			migrations: ['لم يهاجر مع النبي ﷺ، بل أسلم بعد فتح مكة'],
			notableFaithMoments: [
				'قاد قريش في عدة معارك ضد المسلمين قبل إسلامه',
				'شارك في فتح مكة بعد إسلامه بصفته من قادة المسلمين',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['دوره السياسي في استقرار الدولة الإسلامية بعد الفتح'],
		},
		jihadAndService: {
			battles: [
				'غزوة بدر (كخصم للإسلام)',
				'غزوة أحد (كخصم للإسلام)',
				'فتح مكة (كقائد مسلم)',
			],
			administrativeRoles: ['والي دمشق في عهد الخليفة عمر بن الخطاب'],
			roleInConquests: ['إدارة شؤون الشام'],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family:
				'زوجته هند بنت عتبة وأبناؤه: عبد الله بن أبي سفيان، معاوية بن أبي سفيان',
			characterTraits: ['الحنكة السياسية', 'الدهاء', 'القدرة على التفاوض'],
			socialEvents: ['تحول من عدو إلى قائد مسلم بارز'],
		},
		notableStories: {
			withProphet: [
				'تغير موقفه من عداء إلى إسلام',
				'تعامل النبي ﷺ معه بعد إسلامه برحمة وحكمة',
			],
			withCompanions: ['عمل مع الخلفاء الراشدين خاصة معاوية'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'عدو سابق ثم صحابي بعد إسلامه',
		},
	},

	{
		id: 'muawiya-bin-abi-sufyan',
		personalInfo: {
			fullName: 'معاوية بن أبي سفيان بن حرب',
			birthYearAndPlace: 'وُلد في مكة حوالي سنة 602م',
			deathYearAndPlace: 'توفي في دمشق سنة 60 هـ',
			ageAtDeath: 58,
			physicalDescription: 'طويل القامة، أشقر، حسن الهيئة، قوي البنية',
			tribeAndClan: 'من قريش، بني عبد الدار',
		},
		islamAndFaith: {
			islamStory:
				'أسلم في السنة السادسة للهجرة، وكان من الذين شهدوا بيعة الرضوان',
			migrations: ['هاجر إلى المدينة مع المسلمين'],
			notableFaithMoments: [
				'شارك في عدة معارك مع المسلمين بعد إسلامه',
				'كان واليًا للشام في عهد عمر بن الخطاب',
				'أسس الدولة الأموية وأصبح أول خلفائها',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['تأسيس الدولة الأموية وتنظيم شؤون الحكم'],
		},
		jihadAndService: {
			battles: ['معركة صفين', 'معركة الجمل'],
			administrativeRoles: ['والي الشام', 'أول خليفة أموي'],
			roleInConquests: ['توسيع الدولة الإسلامية في الشام وبلاد فارس'],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'زوجته ميمونة بنت الحارث وأولاده: يزيد بن معاوية، معاوية الثاني',
			characterTraits: ['الحنكة السياسية', 'الدهاء', 'الشجاعة'],
			socialEvents: ['كان له دور بارز في تأسيس الدولة الأموية'],
		},
		notableStories: {
			withProphet: ['شهد بيعة الرضوان مع النبي ﷺ'],
			withCompanions: [
				'تعاون مع الخلفاء الراشدين خاصة عمر وعثمان',
				'واجه معارك داخلية مع الصحابة مثل معركة الجمل وصفين',
			],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: true,
			statusWithProphet: 'صحابي وحاكم بارز',
		},
	},

	{
		id: 'jaafar-bin-abi-talib',
		personalInfo: {
			fullName: 'جعفر بن أبي طالب بن عبد المطلب',
			birthYearAndPlace: 'وُلد بمكة حوالي سنة 590م',
			deathYearAndPlace: 'توفي في مؤتة سنة 8 هـ (629م)',
			ageAtDeath: 39,
			physicalDescription: 'قوي البنية، واسع الكتفين، شجاع',
			tribeAndClan: 'من قريش، بني هاشم',
		},
		islamAndFaith: {
			islamStory: 'أسلم مبكرًا وهاجر إلى الحبشة مع المسلمين في الهجرة الأولى',
			migrations: ['الهجرة إلى الحبشة', 'الهجرة إلى المدينة'],
			notableFaithMoments: [
				'كان من المبشرين بالجنة',
				'لقب بـ«ذو الجناحين» بسبب مواقفه البطولية',
				'شهد معركة مؤتة واستشهد فيها دفاعًا عن الإسلام',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['كان مثالاً للشجاعة والتضحية في سبيل الله'],
		},
		jihadAndService: {
			battles: ['معركة مؤتة'],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: ['ذو الجناحين'],
		},
		personalAndSocialLife: {
			family: 'زوجته زينب بنت خزيمة',
			characterTraits: ['الشجاعة', 'الكرم', 'الوفاء'],
			socialEvents: ['كان قائدًا لمجموعة المهاجرين في الحبشة'],
		},
		notableStories: {
			withProphet: ['كان قريبًا جدًا من النبي ﷺ وأحد أقاربه المقربين'],
			withCompanions: ['كان من أول من آمن بالنبي وشجاعته ملهمة للصحابة'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: true,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'أحد أشجع الصحابة وأخو الإمام علي رضي الله عنه',
		},
	},

	{
		id: 'abdullah-bin-alzubair',
		personalInfo: {
			fullName: 'عبد الله بن الزبير بن العوام',
			birthYearAndPlace: 'وُلد بالمدينة سنة 24 هـ (645م)',
			deathYearAndPlace: 'توفي بمكة سنة 73 هـ (692م)',
			ageAtDeath: 49,
			physicalDescription: 'رشيق، طويل، حسن الهيئة',
			tribeAndClan: 'من قريش، بني عبد الدار',
		},
		islamAndFaith: {
			islamStory:
				'نشأ في بيت الصحابة الكرام، وكان من الصغار المؤمنين بدين الله',
			migrations: [],
			notableFaithMoments: [
				'شارك في الدفاع عن الإسلام وقيادة المسلمين بعد وفاة النبي ﷺ',
				'رفض الخلافة الأموية وقاتل من أجل حفظ الإسلام في عهده',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['عائشة بنت أبي بكر', 'الرسول محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['حكم مكة لفترة طويلة ورفض الحكم الأموي'],
		},
		jihadAndService: {
			battles: ['الفتنة الكبرى', 'ثورة ضد الأمويين'],
			administrativeRoles: ['حاكم مكة المكرمة'],
			roleInConquests: [],
			braveryTitles: [],
		},
		personalAndSocialLife: {
			family: 'ابن الزبير بن العوام وأمّه أسماء بنت أبي بكر',
			characterTraits: ['الشجاعة', 'العدل', 'الإخلاص'],
			socialEvents: ['كان نموذجًا في مقاومة الظلم والفساد'],
		},
		notableStories: {
			withProphet: ['نشأ في ظل الصحابة وأصحاب النبي'],
			withCompanions: ['كان محبوبًا لدى الصحابة الكبار مثل عمر وعلي'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'ابن صحابي جليل وكان من أهل بيت النبي ﷺ',
		},
	},

	{
		id: 'abu-jandal-bin-suhail',
		personalInfo: {
			fullName: 'أبو جندل بن سهيل بن عمرو',
			birthYearAndPlace: 'ولد في مكة قبل الإسلام (تاريخ غير محدد بدقة)',
			deathYearAndPlace: 'توفي بالمدينة بعد الهجرة (تاريخ غير محدد بدقة)',
			ageAtDeath: undefined,
			physicalDescription: 'شجاع، قوي البنية، معاق بسبب الأسر',
			tribeAndClan: 'من قريش، بني عمرو',
		},
		islamAndFaith: {
			islamStory:
				'أسلم في مكة وكان من أوائل المدافعين عن النبي ﷺ رغم تعرضه للأذى',
			migrations: ['هاجر إلى المدينة بعد أن تم أسر والده وأسرته بسبب إسلامهم'],
			notableFaithMoments: [
				'عانى من الأسر في مكة لكنه ظل متمسكًا بدينه',
				'ساهم في حماية المسلمين في المدينة',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['مثّل صمود وإخلاص للمسلمين رغم المعاناة'],
		},
		jihadAndService: {
			battles: [],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: ['شجاع وصامد في وجه الظلم'],
		},
		personalAndSocialLife: {
			family: 'ابن سهيل بن عمرو، عانى مع والده وأسرته بسبب إسلامهم',
			characterTraits: ['الشجاعة', 'الصبر', 'الثبات'],
			socialEvents: ['كان رمزًا للصمود في وجه أعداء الإسلام'],
		},
		notableStories: {
			withProphet: ['كان قريبًا من النبي ﷺ وناصره في الشدائد'],
			withCompanions: ['كان مثالًا للصبر والشجاعة بين الصحابة'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: true,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'من المدافعين الصادقين عن الإسلام وأحد أوائل المؤمنين',
		},
	},

	{
		id: 'suhail-bin-amr',
		personalInfo: {
			fullName: 'سهيل بن عمرو بن عمرو بن عائذ',
			birthYearAndPlace: 'ولد بمكة قبل الإسلام (تاريخ غير محدد بدقة)',
			deathYearAndPlace: 'توفي بالمدينة بعد الإسلام (تاريخ غير محدد بدقة)',
			ageAtDeath: undefined,
			physicalDescription: 'شديد الطول، حسن الهيئة، ذو هيبة وجلالة',
			tribeAndClan: 'من قريش، بني زهرة',
		},
		islamAndFaith: {
			islamStory: 'كان من قادة قريش، وبعد فتح مكة أسلم وآمن برسالة النبي ﷺ',
			migrations: [],
			notableFaithMoments: [
				'ساهم في صلح الحديبية كمفاوض ذكي',
				'وقف مع المسلمين بعد إسلامه ودعم الدين',
			],
		},
		knowledgeAndScholarship: {
			hadiths: {
				count: 0,
				famousHadiths: [],
				narratedBy: [],
				narratedTo: [],
			},
			teachers: ['النبي محمد ﷺ'],
			students: [],
			famousFatwas: [],
			contributions: ['ساهم في نشر الإسلام بعد إسلامه'],
		},
		jihadAndService: {
			battles: [],
			administrativeRoles: [],
			roleInConquests: [],
			braveryTitles: ['ذو الهيبة والوقار بين قريش'],
		},
		personalAndSocialLife: {
			family: 'من أسرة ذات مكانة عالية في قريش',
			characterTraits: ['الحكمة', 'الوقار', 'الشجاعة'],
			socialEvents: ['كان وسيطًا ومفاوضًا في أحداث مهمة'],
		},
		notableStories: {
			withProphet: ['شارك في مفاوضات صلح الحديبية'],
			withCompanions: ['كان محترمًا بين الصحابة بعد إسلامه'],
			miracles: [],
		},
		statusAndRank: {
			earliestConvert: false,
			tenPromisedHeaven: false,
			peopleOfBadr: false,
			bayatRidwan: false,
			statusWithProphet: 'أحد قادة قريش الذين أسلموا ودعموا الدعوة',
		},
	},

    
];
