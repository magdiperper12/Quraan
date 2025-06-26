import Footer from '../components/basic/Footer';
import Header from '../components/basic/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import BackToTopButton from '../components/basic/BackToTopButton';
import ParticlesComponent from '../components/basic/tsparticles';

const roboto = Roboto({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
	title: 'غزوه',
	description:
		'غزوه هو موقع متخصص لعرض القرآن الكريم بواجهة سهلة وجذابة، يتيح لك قراءة واستماع وتفسير آيات الذكر الحكيم بكل سهولة.',
	openGraph: {
		title: 'موقع غزوه - لقراءة القرآن الكريم وتدبر آياته',
		description:
			'موقع غزوه يقدم لك تجربة فريدة لقراءة القرآن الكريم والاستماع إلى التلاوات والتفاسير مع سهولة التصفح ودقة المحتوى.',
		type: 'website',
		locale: 'ar_EG',
		url: 'https://quraan-s6ns.vercel.app/',
		images: [
			{
				url: '/image/quraan.jpg',
				alt: 'موقع غزوه - لقراءة وتدبر القرآن الكريم',
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'غزوه - القرآن الكريم بين يديك',
		description:
			'موقع غزوه لقراءة واستماع وتدبر القرآن الكريم بواجهة مريحة ومحتوى موثوق ومحدث باستمرار.',
		images: ['/image/quraan.jpg'],
	},
	icons: {
		icon: '/image/quraan.jpg',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang='ar'
			dir='rtl'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='author'
					content='غزوه'
				/>
				<meta
					name='application-name'
					content='غزوه'
				/>
				<link
					rel='canonical'
					href='https://ghazwah.com/'
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'WebSite',
							name: 'غزوه',
							url: 'https://ghazwah.com/',
							logo: 'https://ghazwah.com/image/quraan.jpg',
							sameAs: [
								'https://www.facebook.com/ghazwah',
								'https://www.linkedin.com/company/ghazwah',
								'https://twitter.com/ghazwah',
							],
							description:
								'غزوه هو موقع متخصص لعرض القرآن الكريم بواجهة مريحة وبسيطة، يتيح لك قراءة وتدبر آيات القرآن والاستماع إلى التلاوات من نخبة من القرّاء.',
							address: {
								'@type': 'PostalAddress',
								addressLocality: 'الشرق الأوسط',
								addressCountry: 'EG',
							},
							contactPoint: {
								'@type': 'ContactPoint',
								telephone: '+20-100-000-0000',
								contactType: 'خدمة العملاء',
								areaServed: 'EG',
								availableLanguage: ['العربية', 'الإنجليزية'],
							},
						}),
					}}
				/>
			</head>

			<body
				className={`bg-gradient-to-r relative ${roboto.className} custom-scroll overflow-x-hidden bg-primary dark:bg-darkprimary`}>
				<ParticlesComponent id='Particles' />
				<div className='sticky top-0  z-50'>
					<Header />
				</div>
				<div className='pt-20'>{children}</div>

				<Footer />
				<BackToTopButton />
			</body>
		</html>
	);
}
