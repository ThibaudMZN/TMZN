<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';
	import { cn } from '../../lib/cn';

	interface Props extends HTMLLabelAttributes {
		children: Snippet;
	}

	let { children, class: classe, ...props }: Props = $props();
</script>

<label
	class={cn(
		'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
		classe
	)}
	{...props}
>
	{@render children?.()}
</label>
