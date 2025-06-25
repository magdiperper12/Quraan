import { sahabaData } from '@/src/data/sahabaData';
import Link from 'next/link';

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function SahabiPage({ params }: PageProps) {
	const { id } = await params; // ننتظر المعاملات
	const sahabi = sahabaData.find((s) => s.id === id);

	if (!sahabi) {
		return (
			<main className='min-h-screen  bg-green-50 p-6 flex flex-col items-center'>
				<p className='text-green-800'>لم يتم العثور على الصحابي.</p>
				<Link
					href='/Home/sahaba'
					className='text-green-700 underline mt-4'>
					← العودة إلى القائمة
				</Link>
			</main>
		);
	}

	return (
		<main className=' min-h-screen dark:bg-gray-950 bg-green-50 p-2 md:p-6 flex flex-col items-center'>
			<div className='bg-white dark:bg-gray-800 p-2 md:p-6 rounded-2xl shadow-md max-w-6xl  w-full text-gray-900 dark:text-gray-100'>
				<div className='flex items-center justify-between mb-6 flex-col'>
					<h1 className='text-3xl font-bold text-green-700 dark:text-green-500 mb-2'>
						{sahabi.personalInfo.fullName}
					</h1>
					<p className='text-green-500 dark:text-green-300 mb-4'>
						{sahabi.islamAndFaith.islamStory || 'قصة إسلامه غير متوفرة.'}
					</p>
				</div>

				<div className=' grid grid-cols-1 lg:grid-cols-2 text-xl gap-5 gap-y-10 w-full mx-auto px-1 md:px-4  lg:px-8'>
					{/* قسم المعلومات الشخصية */}
					<section className='bg-white dark:bg-gray-700 rounded-lg shadow-lg p-4 md:p-6  sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							المعلومات الشخصية والتعريفية
						</h2>
						<ul className='space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed'>
							<li>
								<span className='font-semibold'>الاسم الكامل:</span>{' '}
								{sahabi.personalInfo.fullName}
							</li>
							{sahabi.personalInfo.birthYearAndPlace && (
								<li>
									<span className='font-semibold'>سنة ومكان الميلاد:</span>{' '}
									{sahabi.personalInfo.birthYearAndPlace}
								</li>
							)}
							{sahabi.personalInfo.deathYearAndPlace && (
								<li>
									<span className='font-semibold'>سنة ومكان الوفاة:</span>{' '}
									{sahabi.personalInfo.deathYearAndPlace}
								</li>
							)}
							{sahabi.personalInfo.ageAtDeath && (
								<li>
									<span className='font-semibold'>العمر عند الوفاة:</span>{' '}
									{sahabi.personalInfo.ageAtDeath} سنة
								</li>
							)}
							{sahabi.personalInfo.physicalDescription && (
								<li>
									<span className='font-semibold'>الطول والهيئة:</span>{' '}
									{sahabi.personalInfo.physicalDescription}
								</li>
							)}
							{sahabi.personalInfo.tribeAndClan && (
								<li>
									<span className='font-semibold'>القبيلة والعشيرة:</span>{' '}
									{sahabi.personalInfo.tribeAndClan}
								</li>
							)}
						</ul>
					</section>

					{/* قسم الإسلام والإيمان */}
					<section className='bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							الإسلام والإيمان
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{sahabi.islamAndFaith.islamStory && (
								<p>
									<span className='font-semibold'>قصة إسلامه:</span>{' '}
									{sahabi.islamAndFaith.islamStory}
								</p>
							)}

							{sahabi.islamAndFaith.migrations &&
								sahabi.islamAndFaith.migrations.length > 0 && (
									<div>
										<span className='font-semibold mb-2 inline-block'>
											الهجرات:
										</span>
										<ul className='list-disc list-inside ml-5 space-y-1'>
											{sahabi.islamAndFaith.migrations.map((m, i) => (
												<li key={i}>{m}</li>
											))}
										</ul>
									</div>
								)}

							{sahabi.islamAndFaith.notableFaithMoments &&
								sahabi.islamAndFaith.notableFaithMoments.length > 0 && (
									<div>
										<span className='font-semibold mb-2 inline-block'>
											مواقف إيمانية بارزة:
										</span>
										<ul className='list-disc list-inside ml-5 space-y-1'>
											{sahabi.islamAndFaith.notableFaithMoments.map((m, i) => (
												<li key={i}>{m}</li>
											))}
										</ul>
									</div>
								)}
						</div>
					</section>

					{/* قسم الجانب العلمي */}
					<section className='bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							الجانب العلمي
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{sahabi.knowledgeAndScholarship.hadiths && (
								<>
									<p>
										<span className='font-semibold'>عدد الأحاديث المروية:</span>{' '}
										{sahabi.knowledgeAndScholarship.hadiths.count || 0}
									</p>

									{sahabi.knowledgeAndScholarship.hadiths.famousHadiths && (
										<div>
											<span className='font-semibold mb-1 inline-block'>
												أشهر الأحاديث:
											</span>
											<ul className='list-disc list-inside ml-5 space-y-1'>
												{sahabi.knowledgeAndScholarship.hadiths.famousHadiths.map(
													(h, i) => (
														<li key={i}>{h}</li>
													)
												)}
											</ul>
										</div>
									)}

									{sahabi.knowledgeAndScholarship.hadiths.narratedBy && (
										<div>
											<span className='font-semibold mb-1 inline-block'>
												رُوي عنهم من:
											</span>
											<ul className='list-disc list-inside ml-5 space-y-1'>
												{sahabi.knowledgeAndScholarship.hadiths.narratedBy.map(
													(h, i) => (
														<li key={i}>{h}</li>
													)
												)}
											</ul>
										</div>
									)}

									{sahabi.knowledgeAndScholarship.hadiths.narratedTo && (
										<div>
											<span className='font-semibold mb-1 inline-block'>
												روى لهم:
											</span>
											<ul className='list-disc list-inside ml-5 space-y-1'>
												{sahabi.knowledgeAndScholarship.hadiths.narratedTo.map(
													(h, i) => (
														<li key={i}>{h}</li>
													)
												)}
											</ul>
										</div>
									)}
								</>
							)}

							{sahabi.knowledgeAndScholarship.teachers && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										أبرز شيوخه:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.knowledgeAndScholarship.teachers.map((t, i) => (
											<li key={i}>{t}</li>
										))}
									</ul>
								</div>
							)}

							{sahabi.knowledgeAndScholarship.students && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										أبرز من أخذ عنه من التابعين:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.knowledgeAndScholarship.students.map((t, i) => (
											<li key={i}>{t}</li>
										))}
									</ul>
								</div>
							)}

							{sahabi.knowledgeAndScholarship.famousFatwas && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										فتاويه وأراؤه المشهورة:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.knowledgeAndScholarship.famousFatwas.map((f, i) => (
											<li key={i}>{f}</li>
										))}
									</ul>
								</div>
							)}

							{sahabi.knowledgeAndScholarship.contributions && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										دوره في نقل العلم والحديث:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.knowledgeAndScholarship.contributions.map(
											(c, i) => (
												<li key={i}>{c}</li>
											)
										)}
									</ul>
								</div>
							)}
						</div>
					</section>

					{/* قسم الجانب الجهادي والعملي */}
					<section className='bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							الجانب الجهادي والعملي
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{sahabi.jihadAndService.battles && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										غزواته ومواقفه الشجاعة:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.jihadAndService.battles.map((b, i) => (
											<li key={i}>{b}</li>
										))}
									</ul>
								</div>
							)}
							{sahabi.jihadAndService.administrativeRoles && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										أعماله السياسية والإدارية:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.jihadAndService.administrativeRoles.map((a, i) => (
											<li key={i}>{a}</li>
										))}
									</ul>
								</div>
							)}
							{sahabi.jihadAndService.roleInConquests && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										دوره في الفتوحات الإسلامية:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.jihadAndService.roleInConquests.map((r, i) => (
											<li key={i}>{r}</li>
										))}
									</ul>
								</div>
							)}
							{sahabi.jihadAndService.braveryTitles && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										ألقابه بسبب شجاعته:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.jihadAndService.braveryTitles.map((t, i) => (
											<li key={i}>{t}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</section>

					{/* قسم الجانب الشخصي والاجتماعي */}
					<section className='bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							الجانب الشخصي والاجتماعي
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{sahabi.personalAndSocialLife.family && (
								<p>
									<span className='font-semibold'>أسرته وأبناؤه وزوجاته:</span>{' '}
									{sahabi.personalAndSocialLife.family}
								</p>
							)}
							{sahabi.personalAndSocialLife.characterTraits && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										أخلاقه وصفاته:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.personalAndSocialLife.characterTraits.map(
											(c, i) => (
												<li key={i}>{c}</li>
											)
										)}
									</ul>
								</div>
							)}
							{sahabi.personalAndSocialLife.socialEvents && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										مواقف اجتماعية مشهورة:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.personalAndSocialLife.socialEvents.map((s, i) => (
											<li key={i}>{s}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</section>

					{/* قسم القصص والأحداث المؤثرة */}
					<section className='bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							القصص والأحداث المؤثرة
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{sahabi.notableStories.withProphet && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										مواقف مؤثرة مع الرسول ﷺ:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.notableStories.withProphet.map((m, i) => (
											<li key={i}>{m}</li>
										))}
									</ul>
								</div>
							)}
							{sahabi.notableStories.withCompanions && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										مواقف مع الصحابة الآخرين:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.notableStories.withCompanions.map((m, i) => (
											<li key={i}>{m}</li>
										))}
									</ul>
								</div>
							)}
							{sahabi.notableStories.miracles && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										كرامات أو مواقف استثنائية:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{sahabi.notableStories.miracles.map((m, i) => (
											<li key={i}>{m}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</section>

					{/* قسم الرتبة والمكانة */}
					<section className='bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							الرتبة والمكانة
						</h2>
						<ul className='list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 leading-relaxed'>
							<li>
								<span className='font-semibold'>من السابقين الأولين:</span>{' '}
								{sahabi.statusAndRank.earliestConvert ? 'نعم' : 'لا'}
							</li>
							<li>
								<span className='font-semibold'>
									من العشرة المبشرين بالجنة:
								</span>{' '}
								{sahabi.statusAndRank.tenPromisedHeaven ? 'نعم' : 'لا'}
							</li>
							<li>
								<span className='font-semibold'>من أهل بدر:</span>{' '}
								{sahabi.statusAndRank.peopleOfBadr ? 'نعم' : 'لا'}
							</li>
							<li>
								<span className='font-semibold'>من أصحاب بيعة الرضوان:</span>{' '}
								{sahabi.statusAndRank.bayatRidwan ? 'نعم' : 'لا'}
							</li>
							{sahabi.statusAndRank.statusWithProphet && (
								<li>
									<span className='font-semibold'>مكانته عند الرسول ﷺ:</span>{' '}
									{sahabi.statusAndRank.statusWithProphet}
								</li>
							)}
						</ul>
					</section>
				</div>

				<Link
					href='/Home/sahaba'
					className=' justify-center items-center   m-auto p-7 text-xl flex mt-6 text-green-700 dark:text-green-400 underline'>
					← العودة إلى قائمة الصحابة
				</Link>
			</div>
		</main>
	);
}
