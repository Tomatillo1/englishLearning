import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonGardenTools: LessonsPlan = {
	lessonWords: [
		{ word: 'shovel', caption: 'A tool used for digging.' },
		{ word: 'rake', caption: 'A tool for gathering leaves.' },
		{ word: 'hose', caption: 'A flexible tube for watering.' },
		{ word: 'watering can', caption: 'A container for watering plants.' },
		{ word: 'lawn mower', caption: 'A machine that cuts grass.' },
		{ word: 'gloves', caption: 'Hand protection for gardening.' },
		{ word: 'wheelbarrow', caption: 'A container to carry heavy items.' },
		{ word: 'plant pot', caption: 'A container for plants.' },
		{ word: 'seeds', caption: 'Used to grow new plants.' },
		{ word: 'soil', caption: 'Earth used for planting.' },
		{ word: 'pruning shears', caption: 'Scissors for cutting plants.' },
		{ word: 'hedge trimmer', caption: 'A tool for cutting hedges.' },
		{ word: 'fertilizer', caption: 'A product that helps plants grow.' },
		{ word: 'sprinkler', caption: 'A device that sprays water on grass.' },
		{ word: 'garden bench', caption: 'A seat for relaxing outside.' },
		{ word: 'fence', caption: 'A barrier around the garden.' },
		{ word: 'compost', caption: 'Natural waste used to enrich soil.' },
		{ word: 'greenhouse', caption: 'A glass structure for growing plants.' },
		{ word: 'flower bed', caption: 'An area where flowers grow.' },
		{ word: 'lawn', caption: 'A grassy area in a garden.' }
	],

	lessonQuestions: [
		{
			question: 'You dig the ground with a...',
			answers: [
				{ answer: 'rake', trueOrFalse: false },
				{ answer: 'shovel', trueOrFalse: true },
				{ answer: 'hose', trueOrFalse: false }
			]
		},
		{
			question: 'You water plants using a...',
			answers: [
				{ answer: 'watering can', trueOrFalse: true },
				{ answer: 'bench', trueOrFalse: false },
				{ answer: 'fence', trueOrFalse: false }
			]
		},
		{
			question: 'You collect leaves with a...',
			answers: [
				{ answer: 'hose', trueOrFalse: false },
				{ answer: 'mower', trueOrFalse: false },
				{ answer: 'rake', trueOrFalse: true }
			]
		},
		{
			question: 'You cut grass with a...',
			answers: [
				{ answer: 'lawn mower', trueOrFalse: true },
				{ answer: 'gloves', trueOrFalse: false },
				{ answer: 'soil', trueOrFalse: false }
			]
		},
		{
			question: 'You protect your hands with...',
			answers: [
				{ answer: 'gloves', trueOrFalse: true },
				{ answer: 'seeds', trueOrFalse: false },
				{ answer: 'compost', trueOrFalse: false }
			]
		},
		{
			question: 'You carry dirt with a...',
			answers: [
				{ answer: 'wheelbarrow', trueOrFalse: true },
				{ answer: 'sprinkler', trueOrFalse: false },
				{ answer: 'fence', trueOrFalse: false }
			]
		},
		{
			question: 'Plants grow inside a...',
			answers: [
				{ answer: 'greenhouse', trueOrFalse: true },
				{ answer: 'bench', trueOrFalse: false },
				{ answer: 'lawn', trueOrFalse: false }
			]
		},
		{
			question: 'You plant flowers in a...',
			answers: [
				{ answer: 'flower bed', trueOrFalse: true },
				{ answer: 'hose', trueOrFalse: false },
				{ answer: 'trimmer', trueOrFalse: false }
			]
		},
		{
			question: 'You trim plants with...',
			answers: [
				{ answer: 'sprinkler', trueOrFalse: false },
				{ answer: 'pruning shears', trueOrFalse: true },
				{ answer: 'soil', trueOrFalse: false }
			]
		},
		{
			question: 'You sit outside on a...',
			answers: [
				{ answer: 'lawn', trueOrFalse: false },
				{ answer: 'garden bench', trueOrFalse: true },
				{ answer: 'greenhouse', trueOrFalse: false }
			]
		},
		{
			question: 'You grow plants from...',
			answers: [
				{ answer: 'compost', trueOrFalse: false },
				{ answer: 'fence', trueOrFalse: false },
				{ answer: 'seeds', trueOrFalse: true }
			]
		},
		{
			question: 'You improve soil with...',
			answers: [
				{ answer: 'fertilizer', trueOrFalse: true },
				{ answer: 'bench', trueOrFalse: false },
				{ answer: 'hose', trueOrFalse: false }
			]
		},
		{
			question: 'Water sprays on grass with a...',
			answers: [
				{ answer: 'sprinkler', trueOrFalse: true },
				{ answer: 'pot', trueOrFalse: false },
				{ answer: 'bench', trueOrFalse: false }
			]
		},
		{
			question: 'Fresh plants grow in...',
			answers: [
				{ answer: 'compost', trueOrFalse: false },
				{ answer: 'soil', trueOrFalse: true },
				{ answer: 'fence', trueOrFalse: false }
			]
		},
		{
			question: 'You store a plant in a...',
			answers: [
				{ answer: 'plant pot', trueOrFalse: true },
				{ answer: 'lawn', trueOrFalse: false },
				{ answer: 'blade', trueOrFalse: false }
			]
		},
		{
			question: 'You cut hedges using a...',
			answers: [
				{ answer: 'shears', trueOrFalse: false },
				{ answer: 'trimmer', trueOrFalse: true },
				{ answer: 'shovel', trueOrFalse: false }
			]
		},
		{
			question: 'Garden waste becomes...',
			answers: [
				{ answer: 'soil', trueOrFalse: false },
				{ answer: 'compost', trueOrFalse: true },
				{ answer: 'pot', trueOrFalse: false }
			]
		},
		{
			question: 'The grass area is called a...',
			answers: [
				{ answer: 'lawn', trueOrFalse: true },
				{ answer: 'fence', trueOrFalse: false },
				{ answer: 'bench', trueOrFalse: false }
			]
		},
		{
			question: 'The garden is surrounded by a...',
			answers: [
				{ answer: 'soil', trueOrFalse: false },
				{ answer: 'watering can', trueOrFalse: false },
				{ answer: 'fence', trueOrFalse: true }
			]
		},
		{
			question: 'You water plants with a flexible tube called a...',
			answers: [
				{ answer: 'lawn mower', trueOrFalse: false },
				{ answer: 'hose', trueOrFalse: true },
				{ answer: 'bench', trueOrFalse: false }
			]
		}
	]
};
