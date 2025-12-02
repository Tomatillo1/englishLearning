<script lang="ts">
	import { resolve } from '$app/paths';
	import { lessonDisplay } from '$lib/interfaces/lessons-display';
	import { Star } from '@lucide/svelte';
	import { ChevronRight } from '@lucide/svelte';

</script>

<header class="flex flex-col bg-sky-950 text-gray-50 gap-2 rounded-b-4xl pb-6">
	<section class="flex flex-row gap-4 pt-4 pl-4 items-center">
		<img class="aspect-square object-cover w-1/6 rounded-full overflow-hidden" src="/assets/favicon-el.png"
				 alt="logo-english-learning">
		<div class="flex flex-col">
			<h1 class="text-3xl font-bold">EnglishLearning</h1>
			<p class="italic text-gray-300">Master new vocabulary today</p>
		</div>
	</section>
</header>
<main class="flex flex-col items-center w-full pt-4 pb-8">
	<section class="flex flex-col gap-4 w-full px-4">
		<h2 class="text-start font-bold text-sky-950 text-lg">Learning Paths</h2>
		{#each lessonDisplay as lesson (lesson.id)}
			<a class="flex flex-row gap-4 px-4 py-4 bg-white border-2 border-gray-100 rounded-2xl items-center" href={resolve(lesson.link)}>
				<img class=" w-1/4 aspect-square object-cover overflow-hidden rounded-2xl" src="{lesson.imageLink}" alt="">
				<div class="flex flex-col gap-2">
					<h2 class="text-lg text-sky-950 font-bold">{lesson.name}</h2>
					<div class="flex flex-row gap-2 items-center">
					<p class="bg-gray-100 rounded-lg px-3 py-1 w-fit font-bold text-gray-400 text-xs">20 words</p>
						<Star class="fill-yellow-400 stroke-yellow-400 w-4"/>
						<p class="font-bold text-gray-400 text-xs">Beginners</p>
					</div>
				</div>
				<ChevronRight class="stroke-gray-400 bg-gray-100 rounded-full" />
			</a>
		{/each}
	</section>
</main>
