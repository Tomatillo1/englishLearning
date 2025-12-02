import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonBathroomItems: LessonsPlan = {
	lessonWords: [
		{ word: "Toothbrush", caption: "A tool used to clean your teeth." },
		{ word: "Toothpaste", caption: "A gel or cream used with a toothbrush." },
		{ word: "Shampoo", caption: "A liquid soap used to wash hair." },
		{ word: "Soap", caption: "A substance used for washing the body." },
		{ word: "Towel", caption: "A cloth used to dry your body." },
		{ word: "Shower", caption: "A place where you wash standing up." },
		{ word: "Bathtub", caption: "A large container you fill with water to bathe." },
		{ word: "Mirror", caption: "A surface that reflects your image." },
		{ word: "Hairdryer", caption: "A device used to dry hair with warm air." },
		{ word: "Comb", caption: "A tool used to arrange or untangle hair." },
		{ word: "Razor", caption: "A tool used for shaving." },
		{ word: "Toilet", caption: "A fixture used for disposing of waste." },
		{ word: "Toilet paper", caption: "Paper used after using the toilet." },
		{ word: "Sink", caption: "A bowl with a faucet for washing hands or face." },
		{ word: "Faucet", caption: "A device that controls water flow." },
		{ word: "Towel rack", caption: "A bar used to hang towels." },
		{ word: "Shower gel", caption: "A liquid soap for washing the body." },
		{ word: "Toiletries", caption: "Personal care items used in the bathroom." },
		{ word: "Bath mat", caption: "A mat placed on the floor to prevent slipping." },
		{ word: "Laundry basket", caption: "A container for storing dirty clothes." }
	],

	lessonQuestions: [
		{
			question: "What do you use to brush your teeth?",
			answers: [
				{ answer: "Toothbrush", trueOrFalse: true },
				{ answer: "Razor", trueOrFalse: false },
				{ answer: "Comb", trueOrFalse: false }
			]
		},
		{
			question: "What do you put on a toothbrush?",
			answers: [
				{ answer: "Toothpaste", trueOrFalse: true },
				{ answer: "Soap", trueOrFalse: false },
				{ answer: "Shampoo", trueOrFalse: false }
			]
		},
		{
			question: "What do you use to wash your hair?",
			answers: [
				{ answer: "Towel", trueOrFalse: false },
				{ answer: "Shampoo", trueOrFalse: true },
				{ answer: "Toilet paper", trueOrFalse: false }
			]
		},
		{
			question: "What do you use to wash your body?",
			answers: [
				{ answer: "Soap", trueOrFalse: true },
				{ answer: "Mirror", trueOrFalse: false },
				{ answer: "Faucet", trueOrFalse: false }
			]
		},
		{
			question: "What do you use to dry yourself after a shower?",
			answers: [
				{ answer: "Laundry basket", trueOrFalse: false },
				{ answer: "Towel", trueOrFalse: true },
				{ answer: "Razor", trueOrFalse: false }
			]
		},
		{
			question: "Where do you wash standing up?",
			answers: [
				{ answer: "Shower", trueOrFalse: true },
				{ answer: "Sink", trueOrFalse: false },
				{ answer: "Bathtub", trueOrFalse: false }
			]
		},
		{
			question: "Where do you take a bath?",
			answers: [
				{ answer: "Bathtub", trueOrFalse: true },
				{ answer: "Towel rack", trueOrFalse: false },
				{ answer: "Mirror", trueOrFalse: false }
			]
		},
		{
			question: "What do you use to see yourself?",
			answers: [
				{ answer: "Soap", trueOrFalse: false },
				{ answer: "Mirror", trueOrFalse: true },
				{ answer: "Toilet", trueOrFalse: false }
			]
		},
		{
			question: "What helps you dry your hair?",
			answers: [
				{ answer: "Comb", trueOrFalse: false },
				{ answer: "Hairdryer", trueOrFalse: true },
				{ answer: "Shampoo", trueOrFalse: false }
			]
		},
		{
			question: "What do you use to untangle your hair?",
			answers: [
				{ answer: "Comb", trueOrFalse: true },
				{ answer: "Razor", trueOrFalse: false },
				{ answer: "Toothbrush", trueOrFalse: false }
			]
		},
		{
			question: "What do you use for shaving?",
			answers: [
				{ answer: "Razor", trueOrFalse: true },
				{ answer: "Soap", trueOrFalse: false },
				{ answer: "Towel", trueOrFalse: false }
			]
		},
		{
			question: "What do you sit on when using the bathroom?",
			answers: [
				{ answer: "Toilet", trueOrFalse: true },
				{ answer: "Sink", trueOrFalse: false },
				{ answer: "Shower", trueOrFalse: false }
			]
		},
		{
			question: "What paper do you use after going to the toilet?",
			answers: [
				{ answer: "Toilet paper", trueOrFalse: true },
				{ answer: "Towel", trueOrFalse: false },
				{ answer: "Bath mat", trueOrFalse: false }
			]
		},
		{
			question: "What do you use to wash your hands?",
			answers: [
				{ answer: "Sink", trueOrFalse: true },
				{ answer: "Laundry basket", trueOrFalse: false },
				{ answer: "Mirror", trueOrFalse: false }
			]
		},
		{
			question: "What controls the water flow?",
			answers: [
				{ answer: "Faucet", trueOrFalse: true },
				{ answer: "Shower gel", trueOrFalse: false },
				{ answer: "Towel rack", trueOrFalse: false }
			]
		},
		{
			question: "Where do you hang your towels?",
			answers: [
				{ answer: "Toothbrush", trueOrFalse: false },
				{ answer: "Towel rack", trueOrFalse: true },
				{ answer: "Bathtub", trueOrFalse: false }
			]
		},
		{
			question: "What liquid soap is used for your body in the shower?",
			answers: [
				{ answer: "Shower gel", trueOrFalse: true },
				{ answer: "Toothpaste", trueOrFalse: false },
				{ answer: "Laundry basket", trueOrFalse: false }
			]
		},
		{
			question: "What are personal care items called?",
			answers: [
				{ answer: "Toiletries", trueOrFalse: true },
				{ answer: "Curtains", trueOrFalse: false },
				{ answer: "Razor", trueOrFalse: false }
			]
		},
		{
			question: "What do you step on after a shower to avoid slipping?",
			answers: [
				{ answer: "Bath mat", trueOrFalse: true },
				{ answer: "Towel", trueOrFalse: false },
				{ answer: "Toilet", trueOrFalse: false }
			]
		},
		{
			question: "Where do you put dirty clothes?",
			answers: [
				{ answer: "Laundry basket", trueOrFalse: true },
				{ answer: "Faucet", trueOrFalse: false },
				{ answer: "Sink", trueOrFalse: false }
			]
		}
	]
};
