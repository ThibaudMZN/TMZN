import type { Component } from 'svelte';
import type { Controls } from './controls';

export type Article = {
	slug: string;
	title: string;
	date: Date;
	description: string;
	component: Component;
	controls: Controls;
};

export type Articles = Array<Article>;
