import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonCleaning: LessonsPlan = {
	lessonWords: [
		{ word: 'broom', caption: 'Used to sweep the floor.' },
		{ word: 'mop', caption: 'Used to wash the floor.' },
		{ word: 'vacuum cleaner', caption: 'Machine for sucking dust.' },
		{ word: 'detergent', caption: 'Product for cleaning.' },
		{ word: 'sponge', caption: 'Soft object for washing.' },
		{ word: 'bucket', caption: 'Container for water.' },
		{ word: 'dustpan', caption: 'Used with a broom.' },
		{ word: 'trash bag', caption: 'Bag for garbage.' },
		{ word: 'window cleaner', caption: 'Product for cleaning glass.' },
		{ word: 'rubber gloves', caption: 'Protect hands from dirt.' },
		{ word: 'disinfectant', caption: 'Kills bacteria.' },
		{ word: 'scrub brush', caption: 'Brush for tough dirt.' },
		{ word: 'paper towel', caption: 'Disposable wiping paper.' },
		{ word: 'laundry detergent', caption: 'Soap for clothes.' },
		{ word: 'washing machine', caption: 'Cleans clothes.' },
		{ word: 'drying rack', caption: 'Holds clothes to dry.' },
		{ word: 'duster', caption: 'Removes dust.' },
		{ word: 'bleach', caption: 'Strong cleaning liquid.' },
		{ word: 'toilet brush', caption: 'Cleans toilets.' },
		{ word: 'air freshener', caption: 'Makes the room smell good.' }
	],

	lessonQuestions: [
		{
			question: 'You sweep the floor with a...',
			answers: [
				{ answer: 'broom', trueOrFalse: true },
				{ answer: 'bucket', trueOrFalse: false },
				{ answer: 'sponge', trueOrFalse: false }
			]
		},
		{
			question: 'You wash the floor with a...',
			answers: [
				{ answer: 'duster', trueOrFalse: false },
				{ answer: 'mop', trueOrFalse: true },
				{ answer: 'trash bag', trueOrFalse: false }
			]
		},
		{
			question: 'You suck dust with a...',
			answers: [
				{ answer: 'vacuum cleaner', trueOrFalse: true },
				{ answer: 'paper towel', trueOrFalse: false },
				{ answer: 'bucket', trueOrFalse: false }
			]
		},
		{
			question: 'You clean with soap called...',
			answers: [
				{ answer: 'detergent', trueOrFalse: true },
				{ answer: 'duster', trueOrFalse: false },
				{ answer: 'rack', trueOrFalse: false }
			]
		},
		{
			question: 'You protect your hands with...',
			answers: [
				{ answer: 'rubber gloves', trueOrFalse: true },
				{ answer: 'bleach', trueOrFalse: false },
				{ answer: 'sponge', trueOrFalse: false }
			]
		},
		{
			question: 'You clean the toilet with a...',
			answers: [
				{ answer: 'toilet brush', trueOrFalse: true },
				{ answer: 'rack', trueOrFalse: false },
				{ answer: 'duster', trueOrFalse: false }
			]
		},
		{
			question: 'You clean windows with...',
			answers: [
				{ answer: 'laundry detergent', trueOrFalse: false },
				{ answer: 'window cleaner', trueOrFalse: true },
				{ answer: 'bucket', trueOrFalse: false }
			]
		},
		{
			question: 'You collect dirt with a broom and a...',
			answers: [
				{ answer: 'mop', trueOrFalse: false },
				{ answer: 'duster', trueOrFalse: false },
				{ answer: 'dustpan', trueOrFalse: true }
			]
		},
		{
			question: 'You wash dishes with a...',
			answers: [
				{ answer: 'sponge', trueOrFalse: true },
				{ answer: 'brush', trueOrFalse: false },
				{ answer: 'rack', trueOrFalse: false }
			]
		},
		{
			question: 'You clean bacteria with...',
			answers: [
				{ answer: 'disinfectant', trueOrFalse: true },
				{ answer: 'water', trueOrFalse: false },
				{ answer: 'air', trueOrFalse: false }
			]
		},
		{
			question: 'You clean hard stains with a...',
			answers: [
				{ answer: 'scrub brush', trueOrFalse: true },
				{ answer: 'paper towel', trueOrFalse: false },
				{ answer: 'duster', trueOrFalse: false }
			]
		},
		{
			question: 'You throw garbage in a...',
			answers: [
				{ answer: 'bucket', trueOrFalse: false },
				{ answer: 'trash bag', trueOrFalse: true },
				{ answer: 'rack', trueOrFalse: false }
			]
		},
		{
			question: 'You wipe surfaces with a...',
			answers: [
				{ answer: 'paper towel', trueOrFalse: true },
				{ answer: 'bleach', trueOrFalse: false },
				{ answer: 'rack', trueOrFalse: false }
			]
		},
		{
			question: 'You wash clothes with...',
			answers: [
				{ answer: 'laundry detergent', trueOrFalse: true },
				{ answer: 'sponge', trueOrFalse: false },
				{ answer: 'duster', trueOrFalse: false }
			]
		},
		{
			question: 'You clean clothes using a...',
			answers: [
				{ answer: 'washing machine', trueOrFalse: true },
				{ answer: 'bucket', trueOrFalse: false },
				{ answer: 'air freshener', trueOrFalse: false }
			]
		},
		{
			question: 'You dry wet clothes on a...',
			answers: [
				{ answer: 'rack', trueOrFalse: false },
				{ answer: 'drying rack', trueOrFalse: true },
				{ answer: 'bleach', trueOrFalse: false }
			]
		},
		{
			question: 'You remove dust with a...',
			answers: [
				{ answer: 'mop', trueOrFalse: false },
				{ answer: 'duster', trueOrFalse: true },
				{ answer: 'bucket', trueOrFalse: false }
			]
		},
		{
			question: 'A strong white cleaner is...',
			answers: [
				{ answer: 'bleach', trueOrFalse: true },
				{ answer: 'sponge', trueOrFalse: false },
				{ answer: 'detergent', trueOrFalse: false }
			]
		},
		{
			question: 'You clean floors with water in a...',
			answers: [
				{ answer: 'bucket', trueOrFalse: true },
				{ answer: 'duster', trueOrFalse: false },
				{ answer: 'air freshener', trueOrFalse: false }
			]
		},
		{
			question: 'You remove bad smells with...',
			answers: [
				{ answer: 'air freshener', trueOrFalse: true },
				{ answer: 'sponge', trueOrFalse: false },
				{ answer: 'brush', trueOrFalse: false }
			]
		}
	]
};
