import Footer from '../components/Footer';
import Header from '../components/Header';
import './globals.css';
import { Roboto } from 'next/font/google';
import { Metadata } from 'next';
import BackToTopButton from '../components/BackToTopButton';

const roboto = Roboto({ subsets: ['latin'], weight: '700' });

export const metadata: Metadata = {
	title: ' كودا',
	description:
		'شركة كودا هي شركة رائدة في تقديم خدمات تصميم وبرمجة المواقع الإلكترونية وإنشاء تطبيقات الهاتف. نقدم حلولاً مبتكرة في الذكاء الاصطناعي وتطوير البرمجيات لدعم نجاح الأعمال في كفر الشيخ وطنطا.',
	openGraph: {
		title: 'أفضل شركة برمجيات في كفر الشيخ وطنطا - كودا',
		description:
			'شركة كودا تقدم حلولاً مبتكرة في الذكاء الاصطناعي وتطوير البرمجيات، مع التركيز على تلبية احتياجات الشركات في العالم الرقمي بكفر الشيخ وطنطا.',
		type: 'website',
		locale: 'ar_EG',
		url: 'https://cuda.aiotgroups.com/',
		images: [
			{
				url: '/image/logo.png',
				alt: 'شركة كودا - تطوير البرمجيات والذكاء الاصطناعي',
				width: 800,
				height: 600,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'كودا - حلول البرمجيات والذكاء الاصطناعي في كفر الشيخ وطنطا',
		description:
			'شركة كودا تقدم حلولاً مبتكرة في الذكاء الاصطناعي وتطوير البرمجيات لمساعدة الشركات على النجاح في العالم الرقمي.',
		images: ['/image/logo.png'],
	},
	icons: {
		icon: '/image/logo.png',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='ar'>
			<head>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
				<meta
					name='author'
					content='كودا'
				/>
				<meta
					name='application-name'
					content='كودا'
				/>
				<link
					rel='canonical'
					href='https://cuda.aiotgroups.com/'
				/>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							'@context': 'https://schema.org',
							'@type': 'Organization',
							name: 'كودا',
							url: 'https://www.cuda.com',
							logo: 'https://cuda.aiotgroups.com/image/logo.png',
							sameAs: [
								'https://www.facebook.com/Cuda',
								'https://www.linkedin.com/company/Cuda',
								'https://twitter.com/Cuda',
							],
							description:
								'كودا هي شركة رائدة في تقديم خدمات تصميم وبرمجة المواقع الإلكترونية وإنشاء تطبيقات الهاتف مع حلول في الذكاء الاصطناعي لدعم نجاح الأعمال.',
							address: {
								'@type': 'PostalAddress',
								addressLocality: 'كفر الشيخ',
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
				<div className='sticky top-0  z-50'>
					<Header />
				</div>
				{children}
				<Footer />
				<BackToTopButton />
			</body>
		</html>
	);
}
