<script lang="ts">
	import Label from '../ui/Label.svelte';
	import Select from '../ui/Select.svelte';

	interface Props {
		label: string;
		value: string;
		options: Array<{ label: string; value: string }>;
	}

	let { label, options, value = $bindable() }: Props = $props();
	const id = crypto.randomUUID();
</script>

<div class="space-y-2.5">
	<div class="flex items-center justify-between">
		<Label for={id} class="text-xs tracking-wider text-muted-foreground uppercase">
			{label}
		</Label>
	</div>
	<Select bind:value {id} {options} class="w-full" />
</div>
