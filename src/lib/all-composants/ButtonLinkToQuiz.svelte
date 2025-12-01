<script lang="ts">
	import { resolve } from '$app/paths';
	import type { AllLinksStartQuiz } from '$lib/interfaces/links-start-quiz';
	import { Trophy } from '@lucide/svelte';
		type Props = {
			linkToQuiz: AllLinksStartQuiz;
		};
		let props: Props = $props();
</script>
	<a class="flex flex-row items-center gap-2 justify-center fixed bg-red-700 text-white py-2 rounded-lg left-4 right-4 bottom-6 font-bold text-base" href={resolve(props.linkToQuiz)}><Trophy class="stroke-white"/>Start quiz</a>
