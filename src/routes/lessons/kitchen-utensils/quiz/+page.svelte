<script lang="ts">
	import Quiz from '$lib/all-composants/Quiz.svelte';
	import { lessonKitchenUtensils } from '$lib/all-my-lessons-datas/kitchen-utensils';

	const kitchenQuestions = lessonKitchenUtensils.lessonQuestions
</script>
<main class="h-screen flex flex-col">
	<h1>Quiz</h1>
	<section class="flex flex-col justify-center items-center h-full pb-8">
		<Quiz questionsList={kitchenQuestions} />
	</section>
</main>
<style>
    h1 {
        text-align: center;
        padding-top: 1rem;
        font-size: 1.5rem;
    }
</style>