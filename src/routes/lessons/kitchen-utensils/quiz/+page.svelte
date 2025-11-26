<script lang="ts">
	import Quiz from '$lib/all-composants/Quiz.svelte';
	import { lessonKitchenUtensils } from '$lib/all-my-lessons-datas/kitchen-utensils';
	import { resolve } from '$app/paths';

	const kitchenQuestions = lessonKitchenUtensils.lessonQuestions
	let displayResult: number | undefined = $state(undefined);
	const onQuizFinished = (result: number) => displayResult = result;
</script>

<main class="h-screen flex flex-col">
	<h1>Quiz</h1>
	{#if displayResult !== undefined}
		<section class="flex flex-col justify-center items-center h-full pb-8 gap-3 ">
			<h2 class="text-lg font-bold underline">Results</h2>
			<p class="text-base">Your result is :</p>
			<p class="font-bold italic border-2 px-4 py-1">{displayResult}/10</p>
			<button onclick={displayResult = undefined} class="border-2 border-black px-4 py-1 italic rounded-full">Do you want to try again ?</button>
		</section>
	{:else}
	<section class="flex flex-col justify-center items-center h-full pb-8">
		<Quiz questionsList={kitchenQuestions} onQuizFinished={onQuizFinished}/>
	</section>
	{/if}
</main>
<style>
    h1 {
        text-align: center;
        padding-top: 1rem;
        font-size: 1.5rem;
    }
</style>