<script lang="ts">
	import { Code2, Github } from '@lucide/svelte';

	const currentYear = new Date().getFullYear();
	const idMap: Record<string, string> = {
		'À Propos': 'about',
		Services: 'services',
		Projets: 'projects',
		Contact: 'contact'
	};
</script>

<footer class="border-t border-emerald-500/20 bg-black">
	<div class="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 gap-8 md:grid-cols-3">
			<div>
				<div class="mb-4 flex items-center gap-2">
					<Code2 class="h-6 w-6 text-emerald-400" />
					<span
						class="bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-xl font-bold text-transparent"
					>
						TMZN
					</span>
				</div>
				<p class="text-sm text-gray-400">
					Création de solutions logicielles innovantes avec précision et soin.
				</p>
			</div>

			<div>
				<h3 class="mb-4 font-semibold text-white">Liens Rapides</h3>
				<ul class="space-y-2">
					{#each ['À Propos', 'Services', 'Projets', 'Contact'] as item (item)}
						{@const id = idMap[item]}
						<li>
							<a
								href="#{id}"
								class="text-sm text-gray-400 transition-colors hover:text-emerald-400"
							>
								{item}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<div>
				<h3 class="mb-4 font-semibold text-white">Me Suivre</h3>
				<div class="flex gap-4">
					<a
						href="https://github.com/ThibaudMZN"
						target="_blank"
						rel="noopener noreferrer"
						class="group flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-800 transition-all hover:border-emerald-500 hover:bg-emerald-500/20"
					>
						<Github class="h-5 w-5 text-gray-400 transition-colors group-hover:text-emerald-400" />
					</a>
				</div>
			</div>
		</div>

		<div class="mt-8 border-t border-gray-800 pt-8 text-center">
			<p class="text-sm text-gray-400">
				© {currentYear} TMZN. Tous droits réservés.
			</p>
		</div>
	</div>
</footer>
