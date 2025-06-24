'use client';
import Films from '@/src/components/films/Films';
import { nashid } from '@/src/data/nashidData';
import React from 'react';

const page = () => {
	return <Films videos={nashid} />;
};

export default page;
