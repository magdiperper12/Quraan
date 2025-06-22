'use client';

import React from 'react';
import Hero from './Home/Hero';
import ParticlesComponent from '../components/tsparticles';

function Collection() {
	return (
		<main className=' pt-32 pb-28  overflow-x-hidden'>
			<ParticlesComponent id='Particles' />
			<div className='my-16 mt-40'>
				<Hero />
			</div>
		</main>
	);
}

export default Collection;
