import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonWeather: LessonsPlan = {
	lessonWords: [
		{ word: 'sunny', caption: 'Bright with sunshine.' },
		{ word: 'rainy', caption: 'With falling rain.' },
		{ word: 'cloudy', caption: 'Full of clouds.' },
		{ word: 'windy', caption: 'With strong wind.' },
		{ word: 'stormy', caption: 'With thunder and rain.' },
		{ word: 'snowy', caption: 'With falling snow.' },
		{ word: 'foggy', caption: 'With low visibility.' },
		{ word: 'hot', caption: 'With high temperature.' },
		{ word: 'cold', caption: 'With low temperature.' },
		{ word: 'warm', caption: 'Pleasant temperature.' },
		{ word: 'icy', caption: 'Covered with ice.' },
		{ word: 'hurricane', caption: 'A very strong storm.' },
		{ word: 'tornado', caption: 'A spinning storm.' },
		{ word: 'drizzle', caption: 'Light rain.' },
		{ word: 'lightning', caption: 'Bright flash during a storm.' },
		{ word: 'thunder', caption: 'Loud storm sound.' },
		{ word: 'temperature', caption: 'How hot or cold it is.' },
		{ word: 'forecast', caption: 'Weather prediction.' },
		{ word: 'humidity', caption: 'Water in the air.' },
		{ word: 'heatwave', caption: 'Long period of hot weather.' }
	],

	lessonQuestions: [
		{
			question: 'The weather is bright and shiny.',
			answers: [
				{ answer: 'sunny', trueOrFalse: true },
				{ answer: 'foggy', trueOrFalse: false },
				{ answer: 'stormy', trueOrFalse: false }
			]
		},
		{
			question: 'Water falls from the sky.',
			answers: [
				{ answer: 'rainy', trueOrFalse: true },
				{ answer: 'windy', trueOrFalse: false },
				{ answer: 'hot', trueOrFalse: false }
			]
		},
		{
			question: 'The sky is full of clouds.',
			answers: [
				{ answer: 'warm', trueOrFalse: false },
				{ answer: 'sunny', trueOrFalse: false },
				{ answer: 'cloudy', trueOrFalse: true }
			]
		},
		{
			question: 'Strong air movement means it is...',
			answers: [
				{ answer: 'windy', trueOrFalse: true },
				{ answer: 'icy', trueOrFalse: false },
				{ answer: 'snowy', trueOrFalse: false }
			]
		},
		{
			question: 'A loud sound during a storm is...',
			answers: [
				{ answer: 'lightning', trueOrFalse: false },
				{ answer: 'thunder', trueOrFalse: true },
				{ answer: 'drizzle', trueOrFalse: false }
			]
		},
		{
			question: 'A bright flash during a storm is...',
			answers: [
				{ answer: 'thunder', trueOrFalse: false },
				{ answer: 'fog', trueOrFalse: false },
				{ answer: 'lightning', trueOrFalse: true }
			]
		},
		{
			question: 'Light rain is called...',
			answers: [
				{ answer: 'snow', trueOrFalse: false },
				{ answer: 'storm', trueOrFalse: false },
				{ answer: 'drizzle', trueOrFalse: true }
			]
		},
		{
			question: 'Very cold and slippery weather is...',
			answers: [
				{ answer: 'icy', trueOrFalse: true },
				{ answer: 'hot', trueOrFalse: false },
				{ answer: 'windy', trueOrFalse: false }
			]
		},
		{
			question: 'A long period of extreme heat is a...',
			answers: [
				{ answer: 'hurricane', trueOrFalse: false },
				{ answer: 'heatwave', trueOrFalse: true },
				{ answer: 'tornado', trueOrFalse: false }
			]
		},
		{
			question: 'The measure of how hot it is.',
			answers: [
				{ answer: 'humidity', trueOrFalse: false },
				{ answer: 'forecast', trueOrFalse: false },
				{ answer: 'temperature', trueOrFalse: true }
			]
		},
		{
			question: 'The air is full of water.',
			answers: [
				{ answer: 'humidity', trueOrFalse: true },
				{ answer: 'snow', trueOrFalse: false },
				{ answer: 'sun', trueOrFalse: false }
			]
		},
		{
			question: 'A violent tropical storm is a...',
			answers: [
				{ answer: 'hurricane', trueOrFalse: true },
				{ answer: 'wind', trueOrFalse: false },
				{ answer: 'fog', trueOrFalse: false }
			]
		},
		{
			question: 'A spinning storm is a...',
			answers: [
				{ answer: 'storm', trueOrFalse: false },
				{ answer: 'tornado', trueOrFalse: true },
				{ answer: 'rain', trueOrFalse: false }
			]
		},
		{
			question: 'The weather is very cold with snow.',
			answers: [
				{ answer: 'hot', trueOrFalse: false },
				{ answer: 'snowy', trueOrFalse: true },
				{ answer: 'windy', trueOrFalse: false }
			]
		},
		{
			question: 'You cannot see well because of mist.',
			answers: [
				{ answer: 'sunny', trueOrFalse: false },
				{ answer: 'cloudy', trueOrFalse: false },
				{ answer: 'foggy', trueOrFalse: true }
			]
		},
		{
			question: 'The weather is pleasant, not hot or cold.',
			answers: [
				{ answer: 'warm', trueOrFalse: true },
				{ answer: 'icy', trueOrFalse: false },
				{ answer: 'stormy', trueOrFalse: false }
			]
		},
		{
			question: 'The weather prediction is the...',
			answers: [
				{ answer: 'forecast', trueOrFalse: true },
				{ answer: 'temperature', trueOrFalse: false },
				{ answer: 'wind', trueOrFalse: false }
			]
		},
		{
			question: 'Heavy rain and thunder mean it is...',
			answers: [
				{ answer: 'hot', trueOrFalse: false },
				{ answer: 'stormy', trueOrFalse: true },
				{ answer: 'warm', trueOrFalse: false }
			]
		},
		{
			question: 'The weather is very cold.',
			answers: [
				{ answer: 'cold', trueOrFalse: true },
				{ answer: 'sunny', trueOrFalse: false },
				{ answer: 'humid', trueOrFalse: false }
			]
		},
		{
			question: 'The weather is very warm.',
			answers: [
				{ answer: 'windy', trueOrFalse: false },
				{ answer: 'hot', trueOrFalse: true },
				{ answer: 'foggy', trueOrFalse: false }
			]
		}
	]
};
