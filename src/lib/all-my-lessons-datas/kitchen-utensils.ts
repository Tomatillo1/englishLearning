import type { LessonsPlan } from '$lib/lessons-plan';

const lessonKitchenUtensils: LessonsPlan = {
	lessonWords: [
		{ word: "Knife", caption: "A sharp tool used to cut food." },
		{ word: "Fork", caption: "A utensil with prongs used to pick up food." },
		{ word: "Spoon", caption: "A round tool used to scoop or stir." },
		{ word: "Cutting board", caption: "A flat surface used to cut ingredients." },
		{ word: "Spatula", caption: "A tool used to flip or spread food." },
		{ word: "Whisk", caption: "A utensil used to mix or beat ingredients." },
		{ word: "Peeler", caption: "A tool used to remove skin from vegetables." },
		{ word: "Tongs", caption: "A tool used to grab and lift food." },
		{ word: "Ladle", caption: "A deep spoon for serving soup." },
		{ word: "Grater", caption: "A tool used to shred cheese or vegetables." },
		{ word: "Colander", caption: "A bowl with holes used to drain water." },
		{ word: "Measuring cups", caption: "Tools used to measure ingredients." },
		{ word: "Measuring spoons", caption: "Small spoons for precise measurements." },
		{ word: "Rolling pin", caption: "A tool used to flatten dough." },
		{ word: "Can opener", caption: "A tool used to open metal cans." },
		{ word: "Bowl", caption: "A container used for mixing or serving." },
		{ word: "Pan", caption: "A shallow vessel used for frying food." },
		{ word: "Pot", caption: "A deep container used for boiling or cooking." },
		{ word: "Oven mitt", caption: "A glove used to handle hot cookware." },
		{ word: "Sieve", caption: "A tool used to separate fine particles." }
	],

	lessonQuestions: [
		{
			questionNumber: 1,
			question: "What do you use to cut vegetables?",
			answers: [
				{ answer: "Fork", trueOrFalse: false },
				{ answer: "Knife", trueOrFalse: true },
				{ answer: "Spoon", trueOrFalse: false }
			]
		},
		{
			questionNumber: 2,
			question: "What utensil do you use to drain pasta?",
			answers: [
				{ answer: "Colander", trueOrFalse: true },
				{ answer: "Spatula", trueOrFalse: false },
				{ answer: "Peeler", trueOrFalse: false }
			]
		},
		{
			questionNumber: 3,
			question: "What tool helps you peel a potato?",
			answers: [
				{ answer: "Peeler", trueOrFalse: true },
				{ answer: "Knife", trueOrFalse: false },
				{ answer: "Ladle", trueOrFalse: false }
			]
		},
		{
			questionNumber: 4,
			question: "What do you use to stir soup?",
			answers: [
				{ answer: "Spoon", trueOrFalse: true },
				{ answer: "Grater", trueOrFalse: false },
				{ answer: "Rolling pin", trueOrFalse: false }
			]
		},
		{
			questionNumber: 5,
			question: "What do you use to flip a pancake?",
			answers: [
				{ answer: "Spatula", trueOrFalse: true },
				{ answer: "Knife", trueOrFalse: false },
				{ answer: "Whisk", trueOrFalse: false }
			]
		},
		{
			questionNumber: 6,
			question: "What utensil helps you mix eggs quickly?",
			answers: [
				{ answer: "Whisk", trueOrFalse: true },
				{ answer: "Fork", trueOrFalse: false },
				{ answer: "Peeler", trueOrFalse: false }
			]
		},
		{
			questionNumber: 7,
			question: "What do you use to remove hot trays from the oven?",
			answers: [
				{ answer: "Oven mitt", trueOrFalse: true },
				{ answer: "Tongs", trueOrFalse: false },
				{ answer: "Cutting board", trueOrFalse: false }
			]
		},
		{
			questionNumber: 8,
			question: "What do you use to shred cheese?",
			answers: [
				{ answer: "Grater", trueOrFalse: true },
				{ answer: "Ladle", trueOrFalse: false },
				{ answer: "Spoon", trueOrFalse: false }
			]
		},
		{
			questionNumber: 9,
			question: "What utensil is best for grabbing hot food?",
			answers: [
				{ answer: "Knife", trueOrFalse: false },
				{ answer: "Tongs", trueOrFalse: true },
				{ answer: "Rolling pin", trueOrFalse: false }
			]
		},
		{
			questionNumber: 10,
			question: "What do you use to measure flour?",
			answers: [
				{ answer: "Measuring cups", trueOrFalse: true },
				{ answer: "Bowl", trueOrFalse: false },
				{ answer: "Fork", trueOrFalse: false }
			]
		},
		{
			questionNumber: 11,
			question: "What do you use to measure spices?",
			answers: [
				{ answer: "Measuring spoons", trueOrFalse: true },
				{ answer: "Spatula", trueOrFalse: false },
				{ answer: "Pan", trueOrFalse: false }
			]
		},
		{
			questionNumber: 12,
			question: "What utensil helps remove water from rice?",
			answers: [
				{ answer: "Sieve", trueOrFalse: true },
				{ answer: "Ladle", trueOrFalse: false },
				{ answer: "Knife", trueOrFalse: false }
			]
		},
		{
			questionNumber: 13,
			question: "What tool is used to open a can of beans?",
			answers: [
				{ answer: "Can opener", trueOrFalse: true },
				{ answer: "Peeler", trueOrFalse: false },
				{ answer: "Spoon", trueOrFalse: false }
			]
		},
		{
			questionNumber: 14,
			question: "What do you use to flatten dough?",
			answers: [
				{ answer: "Rolling pin", trueOrFalse: true },
				{ answer: "Pan", trueOrFalse: false },
				{ answer: "Fork", trueOrFalse: false }
			]
		},
		{
			questionNumber: 15,
			question: "What deep tool is used to serve soup?",
			answers: [
				{ answer: "Ladle", trueOrFalse: true },
				{ answer: "Knife", trueOrFalse: false },
				{ answer: "Tongs", trueOrFalse: false }
			]
		},
		{
			questionNumber: 16,
			question: "What do you use to mix salad ingredients?",
			answers: [
				{ answer: "Bowl", trueOrFalse: true },
				{ answer: "Grater", trueOrFalse: false },
				{ answer: "Peeler", trueOrFalse: false }
			]
		},
		{
			questionNumber: 17,
			question: "What utensil do you use to fry an egg?",
			answers: [
				{ answer: "Pan", trueOrFalse: true },
				{ answer: "Ladle", trueOrFalse: false },
				{ answer: "Sieve", trueOrFalse: false }
			]
		},
		{
			questionNumber: 18,
			question: "What utensil do you use to boil pasta?",
			answers: [
				{ answer: "Pot", trueOrFalse: true },
				{ answer: "Knife", trueOrFalse: false },
				{ answer: "Spoon", trueOrFalse: false }
			]
		},
		{
			questionNumber: 19,
			question: "Which item is a safe surface to cut meat on?",
			answers: [
				{ answer: "Cutting board", trueOrFalse: true },
				{ answer: "Spoon", trueOrFalse: false },
				{ answer: "Peeler", trueOrFalse: false }
			]
		},
		{
			questionNumber: 20,
			question: "What do you use to spread butter on bread?",
			answers: [
				{ answer: "Spatula", trueOrFalse: false },
				{ answer: "Knife", trueOrFalse: true },
				{ answer: "Tongs", trueOrFalse: false }
			]
		}
	]
};