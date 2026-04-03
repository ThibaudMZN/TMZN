<script lang="ts">
	import { CheckIcon } from '@lucide/svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import { cn } from '../../lib/cn';

	interface Props extends HTMLButtonAttributes {
		checked: boolean;
	}

	let { class: classe, checked = $bindable(), ...props }: Props = $props();
</script>

<button
	type="button"
	role="checkbox"
	aria-checked={checked}
	data-state={checked ? 'checked' : ''}
	value={checked ? 'on' : 'off'}
	class={cn(
		'peer size-4 shrink-0 cursor-pointer rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 data-[state=checked]:border-primary data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:bg-input/30 dark:aria-invalid:ring-destructive/40 dark:data-[state=checked]:bg-primary',
		classe
	)}
	{...props}
	onclick={() => (checked = !checked)}
>
	<span
		data-state={checked ? 'checked' : ''}
		class="flex items-center justify-center text-current transition-none"
		style="pointer-events: none;"
	>
		{#if checked}
			<CheckIcon class="size-3.5" />
		{/if}
	</span>
</button>
