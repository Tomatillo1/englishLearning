<script lang="ts">
	import { resolve } from '$app/paths';
	import type { AllLinksStartQuiz } from '$lib/interfaces/links-start-quiz';
		type Props = {
			linkToQuizz: AllLinksStartQuiz;
		};
		let props: Props = $props();
</script>
<a class="border-2 border-black px-4 py-1 italic rounded-full" href={resolve(props.linkToQuizz)}>Start quiz</a>
