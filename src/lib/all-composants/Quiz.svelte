<script lang="ts">
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

	const nextQuestion = () => {
		if (howManyQuestionsDone < 10) {
			howManyQuestionsDone++;
			index++;
			whichQuestionDisplay = allQuestionsNumber[index] - 1;
			return whichQuestionDisplay;
		} else {
			console.log("Finish !!!");
		}
	}

</script>
<main class="flex flex-col justify-center items-center w-full">
	<p class="font-bold">{howManyQuestionsDone}/10</p>
	<h2>{displayTheQuestion.caption}</h2>
	<section class="flex flex-col w-full gap-4 pt-4 items-center">
		{#each displayTheQuestion.answers as button (button.answer)}
			<button class="border-2 border-black rounded-full w-1/3">{button.answer}</button>
		{/each}
		<button onclick={nextQuestion} class="border-2 border-black italic rounded-full font-bold w-1/2">Next</button>
	</section>
</main>
<style>

</style>