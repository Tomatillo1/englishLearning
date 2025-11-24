<script lang="ts">
	import { lessonKitchenUtensils } from '$lib/all-my-lessons-datas/kitchen-utensils';
	import DisplayLessonsWords from '$lib/all-composants/DisplayLessonsWords.svelte';

	const kitchenWords = lessonKitchenUtensils.lessonWords;

</script>
<main class="h-screen flex flex-col">
	<h1>Kitchen utensils</h1>
	<section class="flex flex-col gap-4 px-4 pb-8">
		<DisplayLessonsWords wordsList={kitchenWords} />
	</section>
</main>
<style>
    h1 {
        text-align: center;
        padding: 1rem 0;
        font-size: 1.5rem;
    }
</style>