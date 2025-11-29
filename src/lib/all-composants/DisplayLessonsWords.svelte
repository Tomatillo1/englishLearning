<script lang="ts">
	type Props = {
		wordsList: {
			word: string;
			caption: string;
		}[];
	};
	let props: Props = $props();
</script>
<section class="flex flex-col px-4 py-4 bg-white border-2 border-gray-100 rounded-2xl gap-4">
{#each props.wordsList as wordAndCaption (wordAndCaption.word)}
	<div class="flex flex-col">
		<h2 class="font-bold text-lg">{wordAndCaption.word}</h2>
		<p class="text-gray-600 text-sm">{wordAndCaption.caption}</p>
		<hr class="mt-4 border-gray-200" class:hidden={props.wordsList.indexOf(wordAndCaption) > 18}/>
	</div>
{/each}
</section>