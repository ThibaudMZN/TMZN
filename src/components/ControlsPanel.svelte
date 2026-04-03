<script lang="ts">
	import { RotateCcw } from '@lucide/svelte';
	import Button from './ui/Button.svelte';
	import type { Snippet } from 'svelte';

	interface Props {
		controls: Snippet;
		onreset?: (event: MouseEvent) => void;
	}

	let { controls, onreset }: Props = $props();
</script>

<div class="space-y-5">
	<div class="flex items-center gap-2">
		<Button variant="outline" size="sm" onclick={onreset} class="gap-2">
			<RotateCcw class="h-3.5 w-3.5" />
			Reset
		</Button>
	</div>
	{@render controls()}
</div>
