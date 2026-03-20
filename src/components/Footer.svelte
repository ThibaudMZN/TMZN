<script lang="ts">
    import {Code2, Github} from '@lucide/svelte';

    const currentYear = new Date().getFullYear();
    const idMap: Record<string, string> = {
        'À Propos': 'about',
        'Services': 'services',
        'Projets': 'projects',
        'Contact': 'contact',
    };
</script>

<footer class="bg-black border-t border-emerald-500/20">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <div class="flex items-center gap-2 mb-4">
                    <Code2 class="w-6 h-6 text-emerald-400"/>
                    <span class="text-xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
                TMZN
              </span>
                </div>
                <p class="text-gray-400 text-sm">
                    Création de solutions logicielles innovantes avec précision et soin.
                </p>
            </div>

            <div>
                <h3 class="text-white font-semibold mb-4">Liens Rapides</h3>
                <ul class="space-y-2">
                    {#each ['À Propos', 'Services', 'Projets', 'Contact'] as item (item)}
                        {@const id = idMap[item]}
                        <li>
                            <a href="#{id}" class="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                                {item}
                            </a>
                        </li>
                    {/each}
                </ul>
            </div>

            <div>
                <h3 class="text-white font-semibold mb-4">Me Suivre</h3>
                <div class="flex gap-4">
                    <a
                            href="https://github.com/ThibaudMZN"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="w-10 h-10 rounded-full bg-gray-800 hover:bg-emerald-500/20 border border-gray-700 hover:border-emerald-500 flex items-center justify-center transition-all group"
                    >
                        <Github class="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors"/>
                    </a>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-800 mt-8 pt-8 text-center">
            <p class="text-gray-400 text-sm">
                © {currentYear} TMZN. Tous droits réservés.
            </p>
        </div>
    </div>
</footer>