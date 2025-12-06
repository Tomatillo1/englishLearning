import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonFruits: LessonsPlan = {
	lessonWords: [
		{ word: 'apple', caption: 'A red or green fruit.' },
		{ word: 'banana', caption: 'A long yellow fruit.' },
		{ word: 'orange', caption: 'A round citrus fruit.' },
		{ word: 'strawberry', caption: 'A small red fruit with seeds.' },
		{ word: 'grape', caption: 'A small round fruit in bunches.' },
		{ word: 'pear', caption: 'A green fruit with a narrow top.' },
		{ word: 'peach', caption: 'A soft fruit with fuzzy skin.' },
		{ word: 'cherry', caption: 'A small red stone fruit.' },
		{ word: 'pineapple', caption: 'A tropical fruit with spikes.' },
		{ word: 'lemon', caption: 'A sour yellow citrus fruit.' },
		{ word: 'watermelon', caption: 'A big green fruit with red inside.' },
		{ word: 'mango', caption: 'A sweet tropical fruit.' },
		{ word: 'kiwi', caption: 'A small brown fruit with green inside.' },
		{ word: 'blueberry', caption: 'A small blue fruit.' },
		{ word: 'raspberry', caption: 'A soft red berry.' },
		{ word: 'plum', caption: 'A small purple fruit.' },
		{ word: 'apricot', caption: 'A small orange stone fruit.' },
		{ word: 'coconut', caption: 'A hard tropical fruit with milk.' },
		{ word: 'fig', caption: 'A soft sweet fruit.' },
		{ word: 'pomegranate', caption: 'A fruit full of red seeds.' }
	],

	lessonQuestions: [
		{
			question: 'A red or green fruit.',
			answers: [
				{ answer: 'apple', trueOrFalse: true },
				{ answer: 'banana', trueOrFalse: false },
				{ answer: 'lemon', trueOrFalse: false }
			]
		},
		{
			question: 'A long yellow fruit.',
			answers: [
				{ answer: 'pear', trueOrFalse: false },
				{ answer: 'banana', trueOrFalse: true },
				{ answer: 'plum', trueOrFalse: false }
			]
		},
		{
			question: 'A sour yellow citrus fruit.',
			answers: [
				{ answer: 'orange', trueOrFalse: false },
				{ answer: 'apple', trueOrFalse: false },
				{ answer: 'lemon', trueOrFalse: true }
			]
		},
		{
			question: 'A small red fruit with seeds.',
			answers: [
				{ answer: 'cherry', trueOrFalse: false },
				{ answer: 'strawberry', trueOrFalse: true },
				{ answer: 'grape', trueOrFalse: false }
			]
		},
		{
			question: 'A small round fruit in bunches.',
			answers: [
				{ answer: 'grape', trueOrFalse: true },
				{ answer: 'fig', trueOrFalse: false },
				{ answer: 'kiwi', trueOrFalse: false }
			]
		},
		{
			question: 'A tropical fruit with spikes.',
			answers: [
				{ answer: 'pineapple', trueOrFalse: true },
				{ answer: 'coconut', trueOrFalse: false },
				{ answer: 'mango', trueOrFalse: false }
			]
		},
		{
			question: 'A big green fruit with red inside.',
			answers: [
				{ answer: 'melon', trueOrFalse: false },
				{ answer: 'watermelon', trueOrFalse: true },
				{ answer: 'peach', trueOrFalse: false }
			]
		},
		{
			question: 'A sweet tropical fruit.',
			answers: [
				{ answer: 'plum', trueOrFalse: false },
				{ answer: 'pear', trueOrFalse: false },
				{ answer: 'mango', trueOrFalse: true }
			]
		},
		{
			question: 'A small brown fruit with green inside.',
			answers: [
				{ answer: 'kiwi', trueOrFalse: true },
				{ answer: 'fig', trueOrFalse: false },
				{ answer: 'lemon', trueOrFalse: false }
			]
		},
		{
			question: 'A small blue fruit.',
			answers: [
				{ answer: 'grape', trueOrFalse: false },
				{ answer: 'blueberry', trueOrFalse: true },
				{ answer: 'plum', trueOrFalse: false }
			]
		},
		{
			question: 'A soft red berry.',
			answers: [
				{ answer: 'raspberry', trueOrFalse: true },
				{ answer: 'cherry', trueOrFalse: false },
				{ answer: 'apple', trueOrFalse: false }
			]
		},
		{
			question: 'A small purple fruit.',
			answers: [
				{ answer: 'plum', trueOrFalse: true },
				{ answer: 'fig', trueOrFalse: false },
				{ answer: 'lemon', trueOrFalse: false }
			]
		},
		{
			question: 'A fruit with hard shell and milk.',
			answers: [
				{ answer: 'pear', trueOrFalse: false },
				{ answer: 'coconut', trueOrFalse: true },
				{ answer: 'apricot', trueOrFalse: false }
			]
		},
		{
			question: 'A small orange stone fruit.',
			answers: [
				{ answer: 'apricot', trueOrFalse: true },
				{ answer: 'plum', trueOrFalse: false },
				{ answer: 'banana', trueOrFalse: false }
			]
		},
		{
			question: 'A fruit full of red seeds.',
			answers: [
				{ answer: 'grape', trueOrFalse: false },
				{ answer: 'fig', trueOrFalse: false },
				{ answer: 'pomegranate', trueOrFalse: true }
			]
		},
		{
			question: 'A fuzzy soft fruit.',
			answers: [
				{ answer: 'peach', trueOrFalse: true },
				{ answer: 'apple', trueOrFalse: false },
				{ answer: 'lemon', trueOrFalse: false }
			]
		},
		{
			question: 'A citrus fruit that is round and orange.',
			answers: [
				{ answer: 'orange', trueOrFalse: true },
				{ answer: 'banana', trueOrFalse: false },
				{ answer: 'kiwi', trueOrFalse: false }
			]
		},
		{
			question: 'A very sweet soft fruit.',
			answers: [
				{ answer: 'lemon', trueOrFalse: false },
				{ answer: 'fig', trueOrFalse: true },
				{ answer: 'pear', trueOrFalse: false }
			]
		},
		{
			question: 'A fruit often eaten in summer that is huge.',
			answers: [
				{ answer: 'banana', trueOrFalse: false },
				{ answer: 'watermelon', trueOrFalse: true },
				{ answer: 'peach', trueOrFalse: false }
			]
		},
		{
			question: 'A tiny red fruit with a pit.',
			answers: [
				{ answer: 'grape', trueOrFalse: false },
				{ answer: 'cherry', trueOrFalse: true },
				{ answer: 'plum', trueOrFalse: false }
			]
		}
	]
};
