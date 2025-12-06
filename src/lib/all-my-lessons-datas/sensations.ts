import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonSensations: LessonsPlan = {
	lessonWords: [
		{ word: 'hot', caption: 'Feeling high temperature.' },
		{ word: 'cold', caption: 'Feeling low temperature.' },
		{ word: 'hungry', caption: 'Needing food.' },
		{ word: 'thirsty', caption: 'Needing water.' },
		{ word: 'sleepy', caption: 'Needing sleep.' },
		{ word: 'energetic', caption: 'Feeling full of energy.' },
		{ word: 'sick', caption: 'Not feeling well.' },
		{ word: 'dizzy', caption: 'Feeling like the room is spinning.' },
		{ word: 'weak', caption: 'Feeling low strength.' },
		{ word: 'strong', caption: 'Feeling powerful.' },
		{ word: 'relaxed', caption: 'Feeling calm in the body.' },
		{ word: 'tense', caption: 'Feeling tight in the body.' },
		{ word: 'in pain', caption: 'Feeling physical pain.' },
		{ word: 'itchy', caption: 'Feeling need to scratch.' },
		{ word: 'numb', caption: 'No physical feeling.' },
		{ word: 'sore', caption: 'Feeling hurt.' },
		{ word: 'covered in sweat', caption: 'Wet from heat or effort.' },
		{ word: 'out of breath', caption: 'Breathing with difficulty.' },
		{ word: 'freezing', caption: 'Extremely cold.' },
		{ word: 'overheated', caption: 'Too hot.' }
	],

	lessonQuestions: [
		{
			question: 'You need food.',
			answers: [
				{ answer: 'hungry', trueOrFalse: true },
				{ answer: 'thirsty', trueOrFalse: false },
				{ answer: 'cold', trueOrFalse: false }
			]
		},
		{
			question: 'You need water.',
			answers: [
				{ answer: 'sleepy', trueOrFalse: false },
				{ answer: 'thirsty', trueOrFalse: true },
				{ answer: 'weak', trueOrFalse: false }
			]
		},
		{
			question: 'Your body needs rest.',
			answers: [
				{ answer: 'energetic', trueOrFalse: false },
				{ answer: 'sick', trueOrFalse: false },
				{ answer: 'sleepy', trueOrFalse: true }
			]
		},
		{
			question: 'You feel too much heat.',
			answers: [
				{ answer: 'hot', trueOrFalse: true },
				{ answer: 'freezing', trueOrFalse: false },
				{ answer: 'cold', trueOrFalse: false }
			]
		},
		{
			question: 'You feel very cold.',
			answers: [
				{ answer: 'cold', trueOrFalse: false },
				{ answer: 'freezing', trueOrFalse: true },
				{ answer: 'overheated', trueOrFalse: false }
			]
		},
		{
			question: 'You feel no energy.',
			answers: [
				{ answer: 'weak', trueOrFalse: true },
				{ answer: 'strong', trueOrFalse: false },
				{ answer: 'energetic', trueOrFalse: false }
			]
		},
		{
			question: 'You feel powerful.',
			answers: [
				{ answer: 'strong', trueOrFalse: true },
				{ answer: 'sore', trueOrFalse: false },
				{ answer: 'sick', trueOrFalse: false }
			]
		},
		{
			question: 'You feel calm in your muscles.',
			answers: [
				{ answer: 'tense', trueOrFalse: false },
				{ answer: 'relaxed', trueOrFalse: true },
				{ answer: 'out of breath', trueOrFalse: false }
			]
		},
		{
			question: 'Your body feels tight.',
			answers: [
				{ answer: 'numb', trueOrFalse: false },
				{ answer: 'itchy', trueOrFalse: false },
				{ answer: 'tense', trueOrFalse: true }
			]
		},
		{
			question: 'You feel physical pain.',
			answers: [
				{ answer: 'in pain', trueOrFalse: true },
				{ answer: 'energetic', trueOrFalse: false },
				{ answer: 'relaxed', trueOrFalse: false }
			]
		},
		{
			question: 'You feel like scratching.',
			answers: [
				{ answer: 'numb', trueOrFalse: false },
				{ answer: 'itchy', trueOrFalse: true },
				{ answer: 'sick', trueOrFalse: false }
			]
		},
		{
			question: 'You feel nothing in a body part.',
			answers: [
				{ answer: 'sore', trueOrFalse: false },
				{ answer: 'numb', trueOrFalse: true },
				{ answer: 'tense', trueOrFalse: false }
			]
		},
		{
			question: 'Your muscles hurt.',
			answers: [
				{ answer: 'weak', trueOrFalse: false },
				{ answer: 'sore', trueOrFalse: true },
				{ answer: 'energetic', trueOrFalse: false }
			]
		},
		{
			question: 'You are wet from heat.',
			answers: [
				{ answer: 'freezing', trueOrFalse: false },
				{ answer: 'overheated', trueOrFalse: false },
				{ answer: 'covered in sweat', trueOrFalse: true }
			]
		},
		{
			question: 'You struggle to breathe.',
			answers: [
				{ answer: 'out of breath', trueOrFalse: true },
				{ answer: 'calm', trueOrFalse: false },
				{ answer: 'sick', trueOrFalse: false }
			]
		},
		{
			question: 'You feel too hot.',
			answers: [
				{ answer: 'overheated', trueOrFalse: true },
				{ answer: 'cold', trueOrFalse: false },
				{ answer: 'numb', trueOrFalse: false }
			]
		},
		{
			question: 'You feel ill.',
			answers: [
				{ answer: 'sick', trueOrFalse: true },
				{ answer: 'strong', trueOrFalse: false },
				{ answer: 'relaxed', trueOrFalse: false }
			]
		},
		{
			question: 'Your head feels like it is spinning.',
			answers: [
				{ answer: 'dizzy', trueOrFalse: true },
				{ answer: 'hungry', trueOrFalse: false },
				{ answer: 'sleepy', trueOrFalse: false }
			]
		},
		{
			question: 'You feel full of power.',
			answers: [
				{ answer: 'weak', trueOrFalse: false },
				{ answer: 'strong', trueOrFalse: true },
				{ answer: 'sore', trueOrFalse: false }
			]
		},
		{
			question: 'You have lots of energy.',
			answers: [
				{ answer: 'energetic', trueOrFalse: true },
				{ answer: 'sleepy', trueOrFalse: false },
				{ answer: 'numb', trueOrFalse: false }
			]
		}
	]
};
