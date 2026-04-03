<script lang="ts">
	import Label from '../ui/Label.svelte';
	import Slider from '../ui/Slider.svelte';

	interface Props {
		label: string;
		min: number;
		max: number;
		step: number;
		value: number;
	}

	let { label, min, max, step, value = $bindable() }: Props = $props();
</script>

<div class="space-y-2.5">
	<div class="flex items-center justify-between">
		<Label class="text-xs tracking-wider text-muted-foreground uppercase">
			{label}
		</Label>
		<span class="font-mono text-xs text-muted-foreground">
			{value.toFixed(step && step < 1 ? 2 : 0)}
		</span>
	</div>
	<Slider bind:value {min} {max} {step} class="w-full" />
</div>
