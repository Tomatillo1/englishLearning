<script lang="ts">
	import { lessonBedroomItems } from '$lib/all-my-lessons-datas/bedroom';
	import DisplayLessonsWords from '$lib/all-composants/DisplayLessonsWords.svelte';
	import ButtonLinkToQuizz from '$lib/all-composants/ButtonLinkToQuiz.svelte';
	import { House } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	// ToDo : rename lesson
	const bedroomWords = lessonBedroomItems.lessonWords;
</script>
<header class="flex flex-col bg-sky-950 text-gray-50 pb-6 pt-4 relative">
	<a href={resolve("/")}>
		<House class="absolute top-3 left-3" />
	</a>
	<section class="flex flex-col items-center">
		<h1 class="text-3xl font-bold">Kitchen utensils</h1>
		<p class="italic text-gray-300">Study the vocabulary below</p>
	</section>
</header>
<main class="h-screen flex flex-col w-full relative pt-4">
	<!-- Todo : modify link -->
	<ButtonLinkToQuizz linkToQuiz="/lessons/bedroom/quiz" />
	<section class="w-full px-4 pb-20">
		<DisplayLessonsWords wordsList={bedroomWords} />
	</section>
</main>