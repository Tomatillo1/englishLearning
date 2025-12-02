<script lang="ts">
	// Todo : change import data
	import { lessonBathroomItems } from '$lib/all-my-lessons-datas/bathroom';
	import DisplayLessonsWords from '$lib/all-composants/DisplayLessonsWords.svelte';
	import ButtonLinkToQuizz from '$lib/all-composants/ButtonLinkToQuiz.svelte';
	import { House } from '@lucide/svelte';
	import { resolve } from '$app/paths';

	// Todo : change variable name
	const bathRoomWords = lessonBathroomItems.lessonWords;
</script>
<header class="flex flex-col bg-sky-950 text-gray-50 pb-6 pt-4 relative">
	<a href={resolve("/")}>
		<House class="absolute top-3 left-3" />
	</a>
	<section class="flex flex-col items-center">
		<!-- Todo : change lesson name -->
		<h1 class="text-3xl font-bold">Bathroom</h1>
		<p class="italic text-gray-300">Study the vocabulary below</p>
	</section>
</header>
<main class="h-screen flex flex-col w-full relative pt-4">
	<!-- Todo : change link to quiz -->
	<ButtonLinkToQuizz linkToQuiz="/lessons/bathroom/quiz" />
	<section class="w-full px-4 pb-20">
		<!-- Todo : change new variable name -->
		<DisplayLessonsWords wordsList={bathRoomWords} />
	</section>
</main>