'use client';

import { salhinData } from '@/src/data/salehin';
import Link from 'next/link';

interface PageProps {
	params: Promise<{ id: string }>;
}

export default async function SalhinPage({ params }: PageProps) {
	const { id } = await params;
	const salih = salhinData.find((s) => s.id === id);

	if (!salih) {
		return (
			<main className='min-h-screen bg-green-50 p-6 flex flex-col items-center'>
				<p className='text-green-800'>لم يتم العثور على الصالح.</p>
				<Link
					href='/Home/salhin'
					className='text-green-700 underline mt-4'>
					← العودة إلى القائمة
				</Link>
			</main>
		);
	}

	return (
		<main className='min-h-screen   p-2 md:p-6 flex flex-col items-center'>
			<div className='bg-white dark:bg-gray-900 p-2 md:p-6 rounded-2xl shadow-md max-w-6xl w-full text-gray-900 dark:text-gray-100'>
				<div className='flex items-center justify-between mb-6 flex-col'>
					<h1 className='text-3xl font-bold text-green-700 dark:text-green-500 mb-2'>
						{salih.personalInfo.fullName}
					</h1>
					<p className='text-green-500 dark:text-green-300 mb-4'>
						{salih.islamAndFaith.islamStory || 'قصة إسلامه غير متوفرة.'}
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 text-xl gap-5 gap-y-10 w-full mx-auto px-1 md:px-4 lg:px-8'>
					{/* المعلومات الشخصية */}
					<section className='bg-white dark:bg-gray-950 rounded-lg shadow-lg p-4 md:p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							المعلومات الشخصية والتعريفية
						</h2>
						<ul className='space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed'>
							<li>
								<span className='font-semibold'>الاسم الكامل:</span>{' '}
								{salih.personalInfo.fullName}
							</li>
							{salih.personalInfo.birthYearAndPlace && (
								<li>
									<span className='font-semibold'>سنة ومكان الميلاد:</span>{' '}
									{salih.personalInfo.birthYearAndPlace}
								</li>
							)}
							{salih.personalInfo.deathYearAndPlace && (
								<li>
									<span className='font-semibold'>سنة ومكان الوفاة:</span>{' '}
									{salih.personalInfo.deathYearAndPlace}
								</li>
							)}
							{salih.personalInfo.ageAtDeath && (
								<li>
									<span className='font-semibold'>العمر عند الوفاة:</span>{' '}
									{salih.personalInfo.ageAtDeath} سنة
								</li>
							)}
							{salih.personalInfo.physicalDescription && (
								<li>
									<span className='font-semibold'>الطول والهيئة:</span>{' '}
									{salih.personalInfo.physicalDescription}
								</li>
							)}
							{salih.personalInfo.tribeAndClan && (
								<li>
									<span className='font-semibold'>القبيلة والعشيرة:</span>{' '}
									{salih.personalInfo.tribeAndClan}
								</li>
							)}
						</ul>
					</section>

					{/* الإسلام والإيمان */}
					<section className='bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							الإسلام والإيمان
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{salih.islamAndFaith.islamStory && (
								<p>
									<span className='font-semibold'>قصة إسلامه:</span>{' '}
									{salih.islamAndFaith.islamStory}
								</p>
							)}

							{salih.islamAndFaith.migrations &&
								salih.islamAndFaith.migrations.length > 0 && (
									<div>
										<span className='font-semibold mb-2 inline-block'>
											الهجرات:
										</span>
										<ul className='list-disc list-inside ml-5 space-y-1'>
											{salih.islamAndFaith.migrations.map((m, i) => (
												<li key={i}>{m}</li>
											))}
										</ul>
									</div>
								)}

							{salih.islamAndFaith.notableFaithMoments &&
								salih.islamAndFaith.notableFaithMoments.length > 0 && (
									<div>
										<span className='font-semibold mb-2 inline-block'>
											مواقف إيمانية بارزة:
										</span>
										<ul className='list-disc list-inside ml-5 space-y-1'>
											{salih.islamAndFaith.notableFaithMoments.map((m, i) => (
												<li key={i}>{m}</li>
											))}
										</ul>
									</div>
								)}
						</div>
					</section>

					{/* الجانب العلمي */}
					<section className='bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							الجانب العلمي
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{salih.knowledgeAndScholarship.hadiths && (
								<>
									<p>
										<span className='font-semibold'>عدد الأحاديث المروية:</span>{' '}
										{salih.knowledgeAndScholarship.hadiths.count || 0}
									</p>

									{salih.knowledgeAndScholarship.hadiths.famousHadiths && (
										<div>
											<span className='font-semibold mb-1 inline-block'>
												أشهر الأحاديث:
											</span>
											<ul className='list-disc list-inside ml-5 space-y-1'>
												{salih.knowledgeAndScholarship.hadiths.famousHadiths.map(
													(h, i) => (
														<li key={i}>{h}</li>
													)
												)}
											</ul>
										</div>
									)}

									{salih.knowledgeAndScholarship.hadiths.narratedBy && (
										<div>
											<span className='font-semibold mb-1 inline-block'>
												رُوي عنهم من:
											</span>
											<ul className='list-disc list-inside ml-5 space-y-1'>
												{salih.knowledgeAndScholarship.hadiths.narratedBy.map(
													(h, i) => (
														<li key={i}>{h}</li>
													)
												)}
											</ul>
										</div>
									)}

									{salih.knowledgeAndScholarship.hadiths.narratedTo && (
										<div>
											<span className='font-semibold mb-1 inline-block'>
												روى لهم:
											</span>
											<ul className='list-disc list-inside ml-5 space-y-1'>
												{salih.knowledgeAndScholarship.hadiths.narratedTo.map(
													(h, i) => (
														<li key={i}>{h}</li>
													)
												)}
											</ul>
										</div>
									)}
								</>
							)}

							{salih.knowledgeAndScholarship.teachers && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										أبرز شيوخه:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.knowledgeAndScholarship.teachers.map((t, i) => (
											<li key={i}>{t}</li>
										))}
									</ul>
								</div>
							)}

							{salih.knowledgeAndScholarship.students && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										أبرز من أخذ عنه من التابعين:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.knowledgeAndScholarship.students.map((t, i) => (
											<li key={i}>{t}</li>
										))}
									</ul>
								</div>
							)}

							{salih.knowledgeAndScholarship.famousFatwas && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										فتاويه وأراؤه المشهورة:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.knowledgeAndScholarship.famousFatwas.map((f, i) => (
											<li key={i}>{f}</li>
										))}
									</ul>
								</div>
							)}

							{salih.knowledgeAndScholarship.contributions && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										دوره في نقل العلم والحديث:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.knowledgeAndScholarship.contributions.map((c, i) => (
											<li key={i}>{c}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</section>

					{/* الجانب الجهادي والعملي */}
					<section className='bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							الجانب الجهادي والعملي
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{salih.jihadAndService.battles && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										غزواته ومواقفه الشجاعة:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.jihadAndService.battles.map((b, i) => (
											<li key={i}>{b}</li>
										))}
									</ul>
								</div>
							)}
							{salih.jihadAndService.administrativeRoles && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										أعماله السياسية والإدارية:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.jihadAndService.administrativeRoles.map((a, i) => (
											<li key={i}>{a}</li>
										))}
									</ul>
								</div>
							)}
							{salih.jihadAndService.roleInConquests && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										دوره في الفتوحات الإسلامية:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.jihadAndService.roleInConquests.map((r, i) => (
											<li key={i}>{r}</li>
										))}
									</ul>
								</div>
							)}
							{salih.jihadAndService.braveryTitles && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										ألقابه بسبب شجاعته:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.jihadAndService.braveryTitles.map((t, i) => (
											<li key={i}>{t}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</section>

					{/* الجانب الشخصي والاجتماعي */}
					<section className='bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							الجانب الشخصي والاجتماعي
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{salih.personalAndSocialLife.family && (
								<p>
									<span className='font-semibold'>أسرته وأبناؤه وزوجاته:</span>{' '}
									{salih.personalAndSocialLife.family}
								</p>
							)}
							{salih.personalAndSocialLife.characterTraits && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										أخلاقه وصفاته:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.personalAndSocialLife.characterTraits.map((c, i) => (
											<li key={i}>{c}</li>
										))}
									</ul>
								</div>
							)}
							{salih.personalAndSocialLife.socialEvents && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										مواقف اجتماعية مشهورة:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.personalAndSocialLife.socialEvents.map((s, i) => (
											<li key={i}>{s}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</section>

					{/* القصص والأحداث المؤثرة */}
					<section className='bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6 sm:p-8'>
						<h2 className='text-3xl font-bold mb-4 border-b-2 border-green-500 pb-2 text-green-800 dark:text-green-400'>
							القصص والأحداث المؤثرة
						</h2>
						<div className='text-gray-700 dark:text-gray-300 leading-relaxed space-y-3'>
							{salih.notableStories.withProphet && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										مواقف مؤثرة مع الرسول ﷺ:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.notableStories.withProphet.map((m, i) => (
											<li key={i}>{m}</li>
										))}
									</ul>
								</div>
							)}
							{salih.notableStories.withCompanions && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										مواقف مع الصحابة الآخرين:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.notableStories.withCompanions.map((m, i) => (
											<li key={i}>{m}</li>
										))}
									</ul>
								</div>
							)}
							{salih.notableStories.miracles && (
								<div>
									<span className='font-semibold mb-1 inline-block'>
										كرامات أو مواقف استثنائية:
									</span>
									<ul className='list-disc list-inside ml-5 space-y-1'>
										{salih.notableStories.miracles.map((m, i) => (
											<li key={i}>{m}</li>
										))}
									</ul>
								</div>
							)}
						</div>
					</section>
				</div>

				<Link
					href='/Home/salhin'
					className='justify-center items-center m-auto p-7 text-xl flex mt-6 text-green-700 dark:text-green-400 underline'>
					← العودة إلى قائمة الصالحين
				</Link>
			</div>
		</main>
	);
}
