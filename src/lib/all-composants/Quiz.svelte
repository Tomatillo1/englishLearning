<script lang="ts">
	import { goto } from '$app/navigation';
	import { resolve } from '$app/paths';

	type Props = {
		questionsList: {
			questionNumber: number;
			question: string;
			answers: {
				answer: string;
				trueOrFalse: boolean;
			}[];
		}[];
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

	let selectedAnswer: Answer | undefined = $state(undefined);
	const nextQuestion = () => {
		if (howManyQuestionsDone < 10) {
			selectedAnswer = undefined;
			howManyQuestionsDone++;
			index++;
			whichQuestionDisplay = allQuestionsNumber[index] - 1;
			return whichQuestionDisplay;
		} else {
			goto(resolve("/lessons/quiz/results"))
		}
	}

	interface Answer {
		answer: string;
		boolean: boolean;
	}

	const onAnswerClicked = (button: Answer) => {
		selectedAnswer = button;
	}

</script>
<main class="flex flex-col justify-center items-center w-full">
	<p class="font-bold">{howManyQuestionsDone}/10</p>
	<h2 class="text-center">{displayTheQuestion.caption}</h2>
	<section class="flex flex-col w-full gap-4 pt-4 items-center">
		{#each displayTheQuestion.answers as button (button.answer)}
			<button onclick={() => onAnswerClicked(button)} disabled={selectedAnswer !== undefined} class="border-2 border-black rounded-full w-2/5" class:bg-green-500={selectedAnswer?.answer === button.answer && button.boolean} class:bg-red-500={selectedAnswer?.answer === button.answer && !button.boolean} class:text-green-500={selectedAnswer !== undefined && selectedAnswer?.answer !== button.answer && button.boolean}>{button.answer}</button>
		{/each}
		<button onclick={nextQuestion} class="border-2 border-black italic rounded-full font-bold w-1/2">{howManyQuestionsDone === 10 ? "Finish" : "Next"}</button>
	</section>
</main>
<style>

</style>