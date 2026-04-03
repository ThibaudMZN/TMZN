<script lang="ts">
	import Label from '../ui/Label.svelte';
	import Checkbox from '../ui/Checkbox.svelte';

	interface Props {
		label: string;
		checked: boolean;
	}

	let { label, checked = $bindable() }: Props = $props();
	const id = crypto.randomUUID();
</script>

<div class="flex items-center gap-3">
	<Checkbox {id} bind:checked />
	<Label for={id} class="cursor-pointer text-xs tracking-wider text-muted-foreground uppercase">
		{label}
	</Label>
</div>
