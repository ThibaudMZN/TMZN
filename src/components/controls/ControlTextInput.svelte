<script lang="ts">
	import Label from '../ui/Label.svelte';
	import Input from '../ui/Input.svelte';

	interface Props {
		label: string;
		value: string;
	}

	let { label, value = $bindable() }: Props = $props();
	const id = crypto.randomUUID();
</script>

<div class="space-y-2.5">
	<div class="flex items-center justify-between">
		<Label for={id} class="text-xs tracking-wider text-muted-foreground uppercase">
			{label}
		</Label>
	</div>
	<Input bind:value {id} class="w-full" />
</div>
