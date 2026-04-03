<script lang="ts">
	import { cn } from '../../lib/cn';

	type Props = {
		class?: string;
		value: number;
		min: number;
		max: number;
		step: number;
		disabled?: boolean;
		orientation?: 'horizontal' | 'vertical';
	};

	let {
		class: className,
		value = $bindable(),
		min,
		max,
		step,
		disabled = false,
		orientation = 'horizontal'
	}: Props = $props();

	const fillPct = $derived(((value - min) / (max - min)) * 100);
</script>

<div
	data-slot="slider"
	data-orientation={orientation}
	data-disabled={disabled ? '' : undefined}
	class={cn(
		'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
		className
	)}
>
	<div
		data-slot="slider-track"
		data-orientation={orientation}
		class="relative grow overflow-hidden rounded-full bg-muted data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
	>
		<div
			data-slot="slider-range"
			data-orientation={orientation}
			class="absolute bg-primary data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
			style={orientation === 'vertical'
				? `bottom: 0%; top: ${100 - fillPct}%;`
				: `left: 0%; right: ${100 - fillPct}%;`}
		></div>
	</div>

	<input
		type="range"
		data-slot="slider-thumb"
		{min}
		{max}
		{step}
		{disabled}
		bind:value
		class={cn(
			'pointer-events-none absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent',
			'[&::-webkit-slider-thumb]:border-primary [&::-webkit-slider-thumb]:ring-ring/50',
			'[&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:block',
			'[&::-webkit-slider-thumb]:size-4 [&::-webkit-slider-thumb]:shrink-0',
			'[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border',
			'[&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-sm',
			'[&::-webkit-slider-thumb]:appearance-none',
			'[&::-webkit-slider-thumb]:transition-[color,box-shadow]',
			'[&::-webkit-slider-thumb]:hover:ring-4',
			'[&:focus-visible::-webkit-slider-thumb]:ring-4',
			'[&:focus-visible::-webkit-slider-thumb]:outline-none',
			'[&:disabled::-webkit-slider-thumb]:pointer-events-none',
			'[&:disabled::-webkit-slider-thumb]:opacity-50',
			// Firefox
			'[&::-moz-range-thumb]:border-primary [&::-moz-range-thumb]:ring-ring/50',
			'[&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:block',
			'[&::-moz-range-thumb]:size-4 [&::-moz-range-thumb]:shrink-0',
			'[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border',
			'[&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:shadow-sm',
			'[&::-moz-range-thumb]:transition-[color,box-shadow]'
		)}
	/>
</div>
