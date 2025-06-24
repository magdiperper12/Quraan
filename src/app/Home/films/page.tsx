// ParentComponent.jsx
'use client';
import Films from '@/src/components/films/Films';
import { films } from '@/src/data/filmdata';
import React from 'react';

const page = () => {
	return <Films videos={films} />;
};

export default page;
