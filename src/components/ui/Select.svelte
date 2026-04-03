<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { CheckIcon, ChevronDownIcon } from '@lucide/svelte';
	import { cn } from '../../lib/cn';

	type Value = string | number;

	interface Props extends HTMLAttributes<HTMLDivElement> {
		value: Value;
		position?: 'popper';
		options: Array<{ label: string; value: Value }>;
		disabled?: boolean;
	}

	let {
		value = $bindable(),
		position = 'popper',
		disabled = false,
		options,
		class: classe,
		id,
		placeholder = '',
		...props
	}: Props = $props();
	let open: boolean = $state(false);
	let label = $derived(options?.find((o) => o.value === value)?.label || placeholder);
	let elementSelect: HTMLDivElement | undefined = $state();

	const onclick = () => {
		open = !open;
	};

	const onselect = (v: Value) => {
		value = v;
		open = !open;
	};

	const gereClicBody = (e: MouseEvent) => {
		if (elementSelect && !elementSelect.contains(e.target as Node)) open = false;
	};
</script>

<svelte:body onclick={gereClicBody} />
<div bind:this={elementSelect} class={cn('relative w-full', classe)} {...props}>
	<button
		data-size="default"
		type="button"
		role="combobox"
		aria-controls={id}
		aria-expanded={open}
		aria-autocomplete="none"
		dir="ltr"
		data-state="closed"
		class="bg-input-background flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border border-input px-3 py-2 text-sm whitespace-nowrap transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[placeholder]:text-muted-foreground data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 dark:bg-input/30 dark:hover:bg-input/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground"
		{onclick}
		{id}
		{disabled}
	>
		<span class:opacity-60={!value}>{label}</span>
		<ChevronDownIcon class="size-4 opacity-50" />
	</button>
	{#if open}
		<div
			class={cn(
				'absolute z-50 max-h-(--radix-select-content-available-height) w-full min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border bg-popover text-popover-foreground shadow-md data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
				position === 'popper' &&
					'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
				classe
			)}
		>
			{#each options as option (option.value)}
				<button
					class="relative flex w-full cursor-pointer items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2"
					onclick={() => onselect(option.value)}
				>
					{#if option.value === value}
						<span class="absolute right-2 flex size-3.5 items-center justify-center">
							<CheckIcon class="size-4" />
						</span>
					{/if}
					<span>{option.label}</span>
				</button>
			{/each}
		</div>
	{/if}
</div>
