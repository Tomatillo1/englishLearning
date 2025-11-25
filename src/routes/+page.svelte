<script lang="ts">
	import { resolve } from '$app/paths';
	import { lessonDisplay } from '$lib/interfaces/lessons-display';


</script>

<main class="h-screen flex flex-col">
	<h1>EnglishLearning</h1>
	<section id="allTheme">
		{#each lessonDisplay as lesson (lesson.id)}
			<div class="flex flex-col gap-1">
				<a class="theme" href={resolve(lesson.link)}><img src={lesson.imageLink} alt="test"></a>
				<h2 class="text-center text-xs font-bold">{lesson.name}</h2>
			</div>
		{/each}
	</section>
</main>

<style>
	h1 {
			text-align: center;
			padding-top: 1rem;
			font-size: 1.5rem;
	}
	#allTheme {
      display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 1rem;
			padding: 1rem 1rem 0 1rem;
	}
	.theme {
      aspect-ratio: 1 / 1;
      overflow: hidden;
      border-radius: 2rem;
			border: 1px black solid;
	}
	.theme img {
			width: 100%;
			height: 100%;
			object-fit: cover;
	}


</style>