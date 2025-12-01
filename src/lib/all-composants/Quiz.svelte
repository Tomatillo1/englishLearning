<script lang="ts">
	import { X } from '@lucide/svelte';
	import { Check } from '@lucide/svelte';
	type Props = {
		questionsList: {
			question: string;
			answers: {
				answer: string;
				trueOrFalse: boolean;
			}[];
		}[];
		onQuizFinished: (result: number) => void;
	};
	let props: Props = $props();

	let whichQuestionDisplay = $state(0);
	let allQuestionsNumber: number[] = [];

	function getListOfNumber(): number[] {
		let questionNumber;
		do {
			questionNumber = Math.floor(Math.random() * 20) + 1;
			if (allQuestionsNumber.includes(questionNumber) === false) {
				allQuestionsNumber.push(questionNumber);
			}
		} while (allQuestionsNumber.length < 10);
		whichQuestionDisplay = allQuestionsNumber[0] - 1;
		return allQuestionsNumber;
	}
	getListOfNumber();

	interface DisplayTheQuestion {
		caption: string;
		answers: {
			answer: string;
			boolean: boolean;
		}[];
	}

	let howManyQuestionsDone = $state(1);
	let index = $state(0);

	let displayTheQuestion: DisplayTheQuestion = $derived({
		caption: props.questionsList[whichQuestionDisplay].question,
		answers: [
			{ answer: props.questionsList[whichQuestionDisplay].answers[0].answer, boolean: props.questionsList[whichQuestionDisplay].answers[0].trueOrFalse },
			{ answer: props.questionsList[whichQuestionDisplay].answers[1].answer, boolean: props.questionsList[whichQuestionDisplay].answers[1].trueOrFalse },
			{ answer: props.questionsList[whichQuestionDisplay].answers[2].answer, boolean: props.questionsList[whichQuestionDisplay].answers[2].trueOrFalse }
		]
	});
	let finalResult = $state(0)
	let selectedAnswer: Answer | undefined = $state(undefined);
	const nextQuestion = () => {
		if (howManyQuestionsDone < 10) {
			selectedAnswer = undefined;
			howManyQuestionsDone++;
			index++;
			whichQuestionDisplay = allQuestionsNumber[index] - 1;
			return whichQuestionDisplay;
		} else {
			props.onQuizFinished(finalResult);
		}
	}

	interface Answer {
		answer: string;
		boolean: boolean;
	}


	const onAnswerClicked = (button: Answer) => {
		selectedAnswer = button;
		if (button.boolean === true) {
			finalResult++;
		}
	}
</script>
<header class="flex flex-col w-full">
	<div class="flex flex-row items-center text-red-800 w-full justify-between">
		<h1 class="text-3xl font-bold text-sky-950">Quiz</h1>
		<p class="font-bold text-xl">{howManyQuestionsDone}/10</p>
	</div>
	<div class="mt-4 w-full h-4 rounded-full bg-gray-200 overflow-hidden">
		<div class="h-full rounded-full bg-red-700 overflow-hidden transition-all duration-300" style="width: {howManyQuestionsDone * 10}%"></div>
	</div>
</header>
<main class="h-screen flex flex-col w-full justify-center pt-8 pb-12">
<section class="flex flex-col px-8 bg-white border-2 border-gray-100 rounded-2xl h-full justify-center">
	<h2 class="text-center text-xl font-bold">{displayTheQuestion.caption}</h2>
	<div class="flex flex-col w-full gap-4 pt-4 items-center">
		{#each displayTheQuestion.answers as button (button.answer)}
			<button onclick={() => onAnswerClicked(button)} disabled={selectedAnswer !== undefined} class="flex flex-row justify-between items-center border-2 border-gray-100 rounded-2xl w-full text-start py-4 px-4 text-lg" class:bg-green-200={selectedAnswer?.answer === button.answer && button.boolean} class:border-green-500={selectedAnswer?.answer === button.answer && button.boolean} class:bg-red-500={selectedAnswer?.answer === button.answer && !button.boolean} class:text-white={selectedAnswer?.answer === button.answer && !button.boolean} class:border-green-400={selectedAnswer !== undefined && selectedAnswer?.answer !== button.answer && button.boolean} class:bg-green-100={selectedAnswer !== undefined && selectedAnswer?.answer !== button.answer && button.boolean}>
				{button.answer}
				{#if selectedAnswer?.answer === button.answer && !button.boolean}
					<X class="stroke-white border-1 border-white rounded-full p-1"/>
				{:else if selectedAnswer?.answer === button.answer && button.boolean}
					<Check class="stroke-green-500 border-1 border-green-500 rounded-full p-1"/>
				{:else if selectedAnswer !== undefined && selectedAnswer?.answer !== button.answer && button.boolean}
					<Check class="stroke-green-500 border-1 border-green-500 rounded-full p-1"/>
				{/if}
				</button>
		{/each}
		<button onclick={nextQuestion} disabled={selectedAnswer === undefined} class="mt-2 bg-sky-950 text-white rounded-lg font-bold w-2/3 py-2">{howManyQuestionsDone === 10 ? "Finish" : "Next"}</button>
	</div>
</section>
</main>
<style>

</style>