<script lang="ts">
	import { RotateCcw } from '@lucide/svelte';
	import type { Controls } from '../lib/controls';
	import Button from './ui/Button.svelte';

	interface Props {
		controls: Controls;
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
</div>
