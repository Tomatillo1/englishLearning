import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonKitchenObjects: LessonsPlan = {
	lessonWords: [
		{ word: "fridge", caption: "A cold appliance for keeping food fresh." },
		{ word: "freezer", caption: "A very cold unit to keep food frozen." },
		{ word: "oven", caption: "Used for baking and roasting food." },
		{ word: "microwave", caption: "Heats food quickly with waves." },
		{ word: "sink", caption: "Used to wash dishes or hands." },
		{ word: "dishwasher", caption: "A machine that washes dishes automatically." },
		{ word: "cupboard", caption: "A cabinet for storing kitchen items." },
		{ word: "pantry", caption: "A small room or closet for food storage." },
		{ word: "counter", caption: "A surface for preparing food." },
		{ word: "trash bin", caption: "A container for garbage." },
		{ word: "cutting board", caption: "A surface for cutting ingredients." },
		{ word: "bowl", caption: "A round container used for mixing or serving." },
		{ word: "plate", caption: "A flat dish to serve food." },
		{ word: "glass", caption: "A container for drinking liquids." },
		{ word: "mug", caption: "A cup for hot drinks like coffee or tea." },
		{ word: "pot", caption: "A deep container used for boiling or cooking." },
		{ word: "baking tray", caption: "A flat tray for baking in the oven." },
		{ word: "kettle", caption: "Heats water for tea or drinks." },
		{ word: "toaster", caption: "Used to toast bread." },
		{ word: "blender", caption: "A device that mixes or purees food." }
	],

	lessonQuestions: [
		{
			question: "Which appliance keeps food cold?",
			answers: [
				{ answer: "fridge", trueOrFalse: true }, // pos 1
				{ answer: "toaster", trueOrFalse: false },
				{ answer: "plate", trueOrFalse: false }
			]
		},
		{
			question: "Which kitchen item freezes food?",
			answers: [
				{ answer: "bowl", trueOrFalse: false },
				{ answer: "freezer", trueOrFalse: true }, // pos 2
				{ answer: "counter", trueOrFalse: false }
			]
		},
		{
			question: "You bake a cake in the...",
			answers: [
				{ answer: "glass", trueOrFalse: false },
				{ answer: "trash bin", trueOrFalse: false },
				{ answer: "oven", trueOrFalse: true } // pos 3
			]
		},
		{
			question: "You heat food quickly in the...",
			answers: [
				{ answer: "microwave", trueOrFalse: true }, // pos 1
				{ answer: "mug", trueOrFalse: false },
				{ answer: "baking tray", trueOrFalse: false }
			]
		},
		{
			question: "Where do you wash dishes?",
			answers: [
				{ answer: "dishwasher", trueOrFalse: false },
				{ answer: "sink", trueOrFalse: true }, // pos 2
				{ answer: "plate", trueOrFalse: false }
			]
		},
		{
			question: "This machine washes dishes automatically.",
			answers: [
				{ answer: "trash bin", trueOrFalse: false },
				{ answer: "dishwasher", trueOrFalse: true }, // pos 2
				{ answer: "cupboard", trueOrFalse: false }
			]
		},
		{
			question: "Food is stored in this closet-like space.",
			answers: [
				{ answer: "pantry", trueOrFalse: true }, // pos 1
				{ answer: "fridge", trueOrFalse: false },
				{ answer: "bowl", trueOrFalse: false }
			]
		},
		{
			question: "Which surface is used to prepare food?",
			answers: [
				{ answer: "counter", trueOrFalse: true }, // pos 1
				{ answer: "microwave", trueOrFalse: false },
				{ answer: "blender", trueOrFalse: false }
			]
		},
		{
			question: "Where do you throw garbage?",
			answers: [
				{ answer: "kettle", trueOrFalse: false },
				{ answer: "blender", trueOrFalse: false },
				{ answer: "trash bin", trueOrFalse: true } // pos 3
			]
		},
		{
			question: "You cut vegetables on the...",
			answers: [
				{ answer: "cutting board", trueOrFalse: true }, // pos 1
				{ answer: "plate", trueOrFalse: false },
				{ answer: "toaster", trueOrFalse: false }
			]
		},
		{
			question: "You serve food on a...",
			answers: [
				{ answer: "plate", trueOrFalse: true }, // pos 1
				{ answer: "trash bin", trueOrFalse: false },
				{ answer: "cupboard", trueOrFalse: false }
			]
		},
		{
			question: "You drink water from a...",
			answers: [
				{ answer: "microwave", trueOrFalse: false },
				{ answer: "glass", trueOrFalse: true }, // pos 2
				{ answer: "oven", trueOrFalse: false }
			]
		},
		{
			question: "You drink coffee from a...",
			answers: [
				{ answer: "mug", trueOrFalse: true }, // pos 1
				{ answer: "cutting board", trueOrFalse: false },
				{ answer: "baking tray", trueOrFalse: false }
			]
		},
		{
			question: "You boil soup in a...",
			answers: [
				{ answer: "baking tray", trueOrFalse: false },
				{ answer: "toaster", trueOrFalse: false },
				{ answer: "pot", trueOrFalse: true } // pos 3
			]
		},
		{
			question: "You bake cookies on a...",
			answers: [
				{ answer: "fridge", trueOrFalse: false },
				{ answer: "baking tray", trueOrFalse: true }, // pos 2
				{ answer: "mug", trueOrFalse: false }
			]
		},
		{
			question: "You heat water with a...",
			answers: [
				{ answer: "kettle", trueOrFalse: true }, // pos 1
				{ answer: "counter", trueOrFalse: false },
				{ answer: "plate", trueOrFalse: false }
			]
		},
		{
			question: "You toast bread with a...",
			answers: [
				{ answer: "freezer", trueOrFalse: false },
				{ answer: "toaster", trueOrFalse: true }, // pos 2
				{ answer: "glass", trueOrFalse: false }
			]
		},
		{
			question: "You blend fruits using a...",
			answers: [
				{ answer: "bowl", trueOrFalse: false },
				{ answer: "blender", trueOrFalse: true }, // pos 2
				{ answer: "mug", trueOrFalse: false }
			]
		},
		{
			question: "You mix ingredients inside a...",
			answers: [
				{ answer: "plate", trueOrFalse: false },
				{ answer: "bowl", trueOrFalse: true }, // pos 2
				{ answer: "blender", trueOrFalse: false }
			]
		},
		{
			question: "You store dishes inside the...",
			answers: [
				{ answer: "dishwasher", trueOrFalse: false },
				{ answer: "cupboard", trueOrFalse: true }, // pos 2
				{ answer: "trash bin", trueOrFalse: false }
			]
		}
	]
};
