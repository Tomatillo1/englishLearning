<script lang="ts">
	type Props = {
		wordsList: {
			word: string;
			caption: string;
		}[];
	};
	let props: Props = $props();
</script>
{#each props.wordsList as wordAndCaption (wordAndCaption.word)}
	<p class="text-sm"><span class="font-bold">{wordAndCaption.word} :</span> <span
		class="italic">{wordAndCaption.caption}</span></p>
{/each}



