'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { TiThMenu } from 'react-icons/ti';
import { IoClose } from 'react-icons/io5';
import Dark from './Dark';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import Lang from './Lang';
const Header = () => {
	const { t, i18n } = useTranslation();
	const [isOpen, setIsOpen] = useState(false);
	if (!i18n.isInitialized) return null;

	const navLinks = [
		{ name: t('home'), href: '/' },
		{ name: t('Salat'), href: '/Home/salat' },
		{ name: t('Tasmee'), href: '/Home/tasmee' },
		{ name: t('sahaba'), href: '/Home/sahaba' },
		{ name: t('films'), href: '/Home/films' },
		{ name: t('zakaa'), href: '/Home/zakaa' },
		{ name: t('salehin'), href: '/Home/salehin' },
	];
	return (
		<header className='backdrop-blur-lg dark:bg-black/10 bg-white/10  fixed   w-full pb-2   text-darkprimary  dark:text-white  shadow-lg'>
			<div className='mx-auto flex h-16  pt-1 items-center justify-between px-4 sm:px-6 lg:px-8'>
				<Link href='/'>
					<Image
						src='/image/horeselogo.png'
						alt='Logo'
						width={80}
						height={80}
						priority
					/>
				</Link>
				{/* Desktop Navigation */}
				<nav className='hidden lg:flex items-center gap-6  font-bold text-xl'>
					{navLinks.map((link, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, x: -30 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.3, delay: 0.2 * i }}>
							<Link
								className='hover:text-yellow-400 transition focus:text-yellow-500  px-3'
								href={link.href}>
								{link.name}
							</Link>
						</motion.div>
					))}
				</nav>

				{/* Right actions */}
				<div className='flex items-center gap-4'>
					<Dark />
					<Lang />
					{/* Mobile Menu Button */}
					<button
						className='lg:hidden  p-2 text-darkprimary text-2xl dark:text-gray-100'
						onClick={() => setIsOpen(!isOpen)}>
						{isOpen ? (
							<div>
								<IoClose />
							</div>
						) : (
							<div>
								<TiThMenu />
							</div>
						)}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.nav
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className='fixed z-50  w-full left-0 top-0 lg:hidden px-4 pt-4 pb-6 space-y-10 bg-secoundry dark:bg-darkprimary min-h-screen'>
						<button
							className='lg:hidden fixed left-4 top-4  p-2 text-darkprimary text-3xl dark:text-gray-100'
							onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? (
								<div>
									<IoClose />
								</div>
							) : (
								<div>
									<TiThMenu />
								</div>
							)}
						</button>
						{navLinks.map((link, i) => (
							<motion.div
								key={i}
								initial={{ opacity: 0, x: -30 }}
								whileInView={{ opacity: 1, x: 0 }}
								transition={{ duration: 0.3, delay: 0.2 * i }}
								className='ps-5'>
								<Link
									className='hover:text-third transition focus:text-yellow-500 text-2xl font-bold'
									href={link.href}>
									<button onClick={() => setIsOpen(!isOpen)}>
										{link.name}
									</button>
								</Link>
							</motion.div>
						))}
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
};

export default Header;
