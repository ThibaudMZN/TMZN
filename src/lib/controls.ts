import type { Component } from 'svelte';

interface SliderControl {
	type: 'slider';
	key: string;
	label: string;
	min: number;
	max: number;
	step: number;
}

interface CheckboxControl {
	type: 'checkbox';
	key: string;
	label: string;
}

interface SelectControl {
	type: 'select';
	key: string;
	label: string;
	options: { value: string; label: string }[];
}

interface ButtonControl {
	type: 'button';
	key: string;
	label: string;
	onClick: () => void;
	icon?: Component;
}

export type Control = SliderControl | CheckboxControl | SelectControl | ButtonControl;

export type Controls = Array<Control>;
