<script lang="ts">
	import Quiz from '$lib/all-composants/Quiz.svelte';
	import { lessonKitchenUtensils } from '$lib/all-my-lessons-datas/kitchen-utensils';
	import { Trophy } from '@lucide/svelte';
	import { RotateCcw } from '@lucide/svelte';
	import { House } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	const kitchenQuestions = lessonKitchenUtensils.lessonQuestions;
	let displayResult: number | undefined = $state(undefined);
	const onQuizFinished = (result: number) => displayResult = result;
</script>


{#if displayResult !== undefined}
	<main class="h-screen w-full flex flex-col p-4">
		<section class="flex flex-col bg-white border-2 border-gray-100 rounded-2xl size-full items-center justify-center pt-4 gap-6">
			<h1 class="text-3xl font-bold text-sky-950">Results</h1>
			<Trophy class="bg-sky-950 stroke-white size-32 p-4 rounded-4xl"/>
			<p class="text-2xl text-sky-950">Your result is :</p>
			<p class="font-bold"><span class="text-red-800 text-5xl">{displayResult}</span><span class="text-sky-950 text-4xl ml-2">/ 10</span></p>
			<div class="flex flex-col w-full gap-6 pt-4 items-center">
				<button onclick={displayResult = undefined} class="flex flex-row justify-center items-center gap-2 w-2/3 text-white text-2xl bg-red-700 rounded-xl px-4 py-2 rounded-full"><RotateCcw class="stroke-white"/>Try again ?</button>
				<a class="flex flex-row justify-center items-center gap-2 w-2/3 text-white text-2xl bg-sky-950 rounded-xl px-4 py-2 rounded-full" href={resolve("/")}><House class="stroke-white"/>Back to themes</a>
			</div>
		</section>
	</main>
{:else}
	<main class="h-screen flex flex-col w-full px-4 pt-4 ">
			<Quiz questionsList={kitchenQuestions} onQuizFinished={onQuizFinished} />
	</main>
{/if}

