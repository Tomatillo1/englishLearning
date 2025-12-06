import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonEmotions: LessonsPlan = {
	lessonWords: [
		{ word: 'happy', caption: 'Feeling joy.' },
		{ word: 'sad', caption: 'Feeling unhappy.' },
		{ word: 'angry', caption: 'Feeling mad.' },
		{ word: 'scared', caption: 'Feeling fear.' },
		{ word: 'excited', caption: 'Feeling very happy and energetic.' },
		{ word: 'bored', caption: 'Feeling uninterested.' },
		{ word: 'nervous', caption: 'Feeling worried.' },
		{ word: 'tired', caption: 'Needing rest.' },
		{ word: 'confused', caption: 'Not understanding.' },
		{ word: 'surprised', caption: 'Feeling shock.' },
		{ word: 'proud', caption: 'Feeling satisfaction.' },
		{ word: 'shy', caption: 'Feeling timid.' },
		{ word: 'calm', caption: 'Feeling relaxed.' },
		{ word: 'jealous', caption: 'Feeling envy.' },
		{ word: 'lonely', caption: 'Feeling alone.' },
		{ word: 'grateful', caption: 'Feeling thankful.' },
		{ word: 'embarrassed', caption: 'Feeling ashamed.' },
		{ word: 'hopeful', caption: 'Expecting something good.' },
		{ word: 'relieved', caption: 'Feeling comfort after stress.' },
		{ word: 'frustrated', caption: 'Feeling blocked or annoyed.' }
	],

	lessonQuestions: [
		{
			question: 'You feel joy.',
			answers: [
				{ answer: 'happy', trueOrFalse: true },
				{ answer: 'angry', trueOrFalse: false },
				{ answer: 'scared', trueOrFalse: false }
			]
		},
		{
			question: 'You feel unhappy.',
			answers: [
				{ answer: 'bored', trueOrFalse: false },
				{ answer: 'sad', trueOrFalse: true },
				{ answer: 'excited', trueOrFalse: false }
			]
		},
		{
			question: 'You feel fear.',
			answers: [
				{ answer: 'proud', trueOrFalse: false },
				{ answer: 'tired', trueOrFalse: false },
				{ answer: 'scared', trueOrFalse: true }
			]
		},
		{
			question: 'You feel a lot of energy and joy.',
			answers: [
				{ answer: 'excited', trueOrFalse: true },
				{ answer: 'lonely', trueOrFalse: false },
				{ answer: 'calm', trueOrFalse: false }
			]
		},
		{
			question: 'You feel no interest.',
			answers: [
				{ answer: 'angry', trueOrFalse: false },
				{ answer: 'bored', trueOrFalse: true },
				{ answer: 'hopeful', trueOrFalse: false }
			]
		},
		{
			question: 'You feel worried.',
			answers: [
				{ answer: 'nervous', trueOrFalse: true },
				{ answer: 'relieved', trueOrFalse: false },
				{ answer: 'proud', trueOrFalse: false }
			]
		},
		{
			question: 'You need rest.',
			answers: [
				{ answer: 'jealous', trueOrFalse: false },
				{ answer: 'tired', trueOrFalse: true },
				{ answer: 'hopeful', trueOrFalse: false }
			]
		},
		{
			question: 'You do not understand.',
			answers: [
				{ answer: 'surprised', trueOrFalse: false },
				{ answer: 'confused', trueOrFalse: true },
				{ answer: 'calm', trueOrFalse: false }
			]
		},
		{
			question: 'You receive unexpected news.',
			answers: [
				{ answer: 'surprised', trueOrFalse: true },
				{ answer: 'sad', trueOrFalse: false },
				{ answer: 'lonely', trueOrFalse: false }
			]
		},
		{
			question: 'You feel good about your success.',
			answers: [
				{ answer: 'proud', trueOrFalse: true },
				{ answer: 'angry', trueOrFalse: false },
				{ answer: 'scared', trueOrFalse: false }
			]
		},
		{
			question: 'You feel timid.',
			answers: [
				{ answer: 'shy', trueOrFalse: true },
				{ answer: 'excited', trueOrFalse: false },
				{ answer: 'grateful', trueOrFalse: false }
			]
		},
		{
			question: 'You feel relaxed.',
			answers: [
				{ answer: 'calm', trueOrFalse: true },
				{ answer: 'frustrated', trueOrFalse: false },
				{ answer: 'jealous', trueOrFalse: false }
			]
		},
		{
			question: 'You want what someone else has.',
			answers: [
				{ answer: 'hopeful', trueOrFalse: false },
				{ answer: 'jealous', trueOrFalse: true },
				{ answer: 'relieved', trueOrFalse: false }
			]
		},
		{
			question: 'You feel alone.',
			answers: [
				{ answer: 'lonely', trueOrFalse: true },
				{ answer: 'happy', trueOrFalse: false },
				{ answer: 'excited', trueOrFalse: false }
			]
		},
		{
			question: 'You feel thankful.',
			answers: [
				{ answer: 'grateful', trueOrFalse: true },
				{ answer: 'shy', trueOrFalse: false },
				{ answer: 'sad', trueOrFalse: false }
			]
		},
		{
			question: 'You feel ashamed.',
			answers: [
				{ answer: 'embarrassed', trueOrFalse: true },
				{ answer: 'proud', trueOrFalse: false },
				{ answer: 'hopeful', trueOrFalse: false }
			]
		},
		{
			question: 'You expect something good.',
			answers: [
				{ answer: 'hopeful', trueOrFalse: true },
				{ answer: 'angry', trueOrFalse: false },
				{ answer: 'bored', trueOrFalse: false }
			]
		},
		{
			question: 'Stress disappears.',
			answers: [
				{ answer: 'calm', trueOrFalse: false },
				{ answer: 'relieved', trueOrFalse: true },
				{ answer: 'scared', trueOrFalse: false }
			]
		},
		{
			question: 'You feel blocked and annoyed.',
			answers: [
				{ answer: 'tired', trueOrFalse: false },
				{ answer: 'happy', trueOrFalse: false },
				{ answer: 'frustrated', trueOrFalse: true }
			]
		},
		{
			question: 'You feel very mad.',
			answers: [
				{ answer: 'angry', trueOrFalse: true },
				{ answer: 'calm', trueOrFalse: false },
				{ answer: 'grateful', trueOrFalse: false }
			]
		}
	]
};
