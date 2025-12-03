<script lang="ts">
	import { allLessons, type Theme } from '$lib/all-my-lessons-datas/allLessons';
	import DisplayLessonsWords from '$lib/all-composants/DisplayLessonsWords.svelte';
	import ButtonLinkToQuizz from '$lib/all-composants/ButtonLinkToQuiz.svelte';
	import { House } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import type { PageProps } from './$types';
	import { error } from '@sveltejs/kit';

	let props: PageProps = $props();

	let safeTheme: Theme | undefined = $state(undefined);

	const allTheme: Theme[] = Object.keys(allLessons) as Theme[];
	if (allTheme.find((item) => props.params.theme === item)) {
		safeTheme = props.params.theme as Theme;
	} else {
		error(404, 'Theme does not exist');
	}

	const wordsList = allLessons[safeTheme ?? 'bathroom']?.lessonWords;
</script>

<header class="flex flex-col bg-sky-950 text-gray-50 pb-6 pt-4 relative">
	<a href={resolve('/')}>
		<House class="absolute top-3 left-3" />
	</a>
	<section class="flex flex-col items-center">
		<!-- Todo : change lesson name -->
		<h1 class="text-3xl font-bold">Kitchen utensils</h1>
		<p class="italic text-gray-300">Study the vocabulary below</p>
	</section>
</header>
<main class="h-screen flex flex-col w-full relative pt-4">
	<!-- Todo : change link to quiz -->
	{#if safeTheme}
		<ButtonLinkToQuizz linkToQuiz="/lessons/{safeTheme}/quiz" />
	{/if}
	<section class="w-full px-4 pb-20">
		<DisplayLessonsWords {wordsList} />
	</section>
</main>
