'use client';

import React, { useState } from 'react';

const zakaaContent = {
	verse:
		'قال الله تعالى: (إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ فَرِيضَةً مِنَ اللَّهِ وَاللَّهُ عَلِيمٌ حَكِيمٌ) (سورة التوبة: 60)',
	meaning:
		'يوجد في الإسلام خمسة أركان أساسية وهي؛ شهادة ألَّا إله إلا الله وأن محمداً رسول الله، وإقامة الصلاة، وإيتاء الزكاة، وصوم شهر رمضان، والحج لما اِستطاع إليه سبيلا. ومن الواجب على كل مسلم أن يلتزم بهذه الأركان الخمسة. الزكاة هي الركن الثالث من أركان الإسلام الذي يأمر الإنسان بالتصدق وإعطاء جزء من المال للفقراء والمحتاجين. وهي عمل خيري إلزامي يهدف إلى دعم الفئات الأكثر فقراً في المجتمع. لأن التبرع بالمال للفقراء ينقي مال الأغنياء ويكفي الفقراء وعائلاتهم بتلبية اِحتياجاتهم الأساسية.',
	conditions: [
		'الإسلام',
		'الحرية',
		'الحلال',
		'الملك التام',
		'النماء',
		'الحول',
		'الفائض عن الحوائج الأصلية',
		'النصاب',
		'أن لا يكون على المال دين',
	],
	zakaaTypes: [
		'زكاة المال',
		'زكاة الذهب',
		'زكاة الزرع والثمار',
		'زكاة الأصول',
		'زكاة الأسهم والاستثمار',
		'زكاة المعاش والأموال المدخرة',
	],
	recipients: [
		'الفقراء',
		'المساكين',
		'العاملون عليها',
		'المؤلفة قلوبهم',
		'في الرقاب',
		'الغارمين',
		'في سبيل الله',
		'ابن السبيل',
	],
	nonEligible: [
		'الغني القادر على الكسب',
		'الأصول والفروع والزوجة',
		'الكافرون غير المؤلفة قلوبهم',
		'الفاسق المبتدع',
	],
	effects: {
		individual: [
			'تطهير من الشح وعبودية المال',
			'تدريب على الإحسان والإنفاق',
			'شكر لله وتزكية للنفس',
		],
		society: [
			'تقليل الفقر وتحقيق المساواة',
			'تنشيط الحركة الاقتصادية',
			'تقليل الفوارق والقضاء على التسول',
		],
	},
	faq: {
		question: 'ما حكم الزكاة وما هي شروطها؟',
		answer:
			'أن يكون الشخص مسلماً حراً، المال حلالاً مملوكاً تاماً، فيه نماء، حال عليه الحول، فائض عن الحاجات الأصلية، بلغ النصاب، خالٍ من الديون.',
	},
};

const ZakaaPage = () => {
	const [amount, setAmount] = useState('');
	const [zakaa, setZakaa] = useState<number | null>(null);
	const [darkMode, setDarkMode] = useState(false);

	const calculateZakaa = () => {
		const value = parseFloat(amount);
		if (!isNaN(value)) {
			setZakaa(value * 0.025);
		} else {
			setZakaa(null);
		}
	};

	return (
		<div
			className={`min-h-screen p-6 transition-colors duration-300 text-xl 'bg-gray-900 dark:text-white  text-gray-900`}>
			{/* العنوان */}
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl md:text-3xl font-extrabold tracking-tight'>
					زكاة المال
				</h1>
			</div>

			{/* آلة حساب الزكاة */}
			<div className='bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-lg max-w-xl w-full mx-auto'>
				<label className='block mb-3 font-medium text-lg'>
					أدخل المبلغ الكلي (بالعملة المحلية):
				</label>
				<input
					type='number'
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					className='w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
					placeholder='مثال: 10000'
				/>
				<button
					onClick={calculateZakaa}
					className='mt-4 w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200 text-white py-2.5 px-4 rounded-lg font-semibold'>
					احسب الزكاة
				</button>

				{zakaa !== null && (
					<div className='mt-4 text-lg font-semibold text-green-600 dark:text-green-400'>
						مقدار الزكاة الواجبة: {zakaa.toFixed(2)}
					</div>
				)}
			</div>

			{/* المعلومات الشرعية والتوعوية */}
			<section className='mt-12 max-w-6xl w-full mx-auto space-y-6 dark:bg-black/80 bg-white/80  '>
				<p className='text-lg font-semibold'>{zakaaContent.verse}</p>
				<p>{zakaaContent.meaning}</p>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 '>
					{/* شروط الزكاة */}
					<div>
						<h2 className='text-xl font-bold mb-3'>شروط الزكاة:</h2>
						<ul className='list-disc pl-6 space-y-1'>
							{zakaaContent.conditions.map((cond, i) => (
								<li key={i}>{cond}</li>
							))}
						</ul>
					</div>

					{/* أنواع الزكاة */}
					<div>
						<h2 className='text-xl font-bold mb-3'>أنواع الزكاة:</h2>
						<ul className='list-disc pl-6 space-y-1'>
							{zakaaContent.zakaaTypes.map((type, i) => (
								<li key={i}>{type}</li>
							))}
						</ul>
					</div>

					{/* مصارف الزكاة */}
					<div>
						<h2 className='text-xl font-bold mb-3'>
							مصارف الزكاة (المستحقون):
						</h2>
						<ul className='list-disc pl-6 space-y-1'>
							{zakaaContent.recipients.map((rec, i) => (
								<li key={i}>{rec}</li>
							))}
						</ul>
					</div>

					{/* غير المستحقين */}
					<div>
						<h2 className='text-xl font-bold mb-3'>غير المستحقين للزكاة:</h2>
						<ul className='list-disc pl-6 space-y-1'>
							{zakaaContent.nonEligible.map((n, i) => (
								<li key={i}>{n}</li>
							))}
						</ul>
					</div>

					{/* أثر الزكاة على الفرد */}
					<div>
						<h2 className='text-xl font-bold mb-3'>أثر الزكاة على الفرد:</h2>
						<ul className='list-disc pl-6 space-y-1'>
							{zakaaContent.effects.individual.map((e, i) => (
								<li key={i}>{e}</li>
							))}
						</ul>
					</div>

					{/* أثر الزكاة على المجتمع */}
					<div>
						<h2 className='text-xl font-bold mb-3'>أثر الزكاة على المجتمع:</h2>
						<ul className='list-disc pl-6 space-y-1'>
							{zakaaContent.effects.society.map((e, i) => (
								<li key={i}>{e}</li>
							))}
						</ul>
					</div>

					{/* الأسئلة الشائعة */}
					<div className='md:col-span-2'>
						<h2 className='text-xl font-bold mb-3'>الأسئلة الشائعة:</h2>
						<p>
							<strong>{zakaaContent.faq.question}</strong>
						</p>
						<p>{zakaaContent.faq.answer}</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default ZakaaPage;
