import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonWeatherAdvanced: LessonsPlan = {
	lessonWords: [
		{ word: 'precipitation', caption: 'Rain, snow or ice falling.' },
		{ word: 'atmospheric pressure', caption: 'Weight of the air.' },
		{ word: 'overcast', caption: 'Sky completely covered with clouds.' },
		{ word: 'gust', caption: 'Sudden strong wind.' },
		{ word: 'drought', caption: 'Long period without rain.' },
		{ word: 'freezing rain', caption: 'Rain that becomes ice on surfaces.' },
		{ word: 'hail', caption: 'Small balls of ice from the sky.' },
		{ word: 'monsoon', caption: 'Season of heavy rain.' },
		{ word: 'evaporation', caption: 'Water changing into gas.' },
		{ word: 'condensation', caption: 'Gas changing into water.' },
		{ word: 'barometer', caption: 'Tool to measure air pressure.' },
		{ word: 'UV index', caption: 'Level of sun radiation.' },
		{ word: 'cold front', caption: 'Cold air pushing warm air.' },
		{ word: 'warm front', caption: 'Warm air replacing cold air.' },
		{ word: 'wind chill', caption: 'How cold it feels with wind.' },
		{ word: 'dew', caption: 'Water on grass in the morning.' },
		{ word: 'black ice', caption: 'Invisible ice on roads.' },
		{ word: 'microclimate', caption: 'Local climate in a small area.' },
		{ word: 'jet stream', caption: 'Strong fast air current.' },
		{ word: 'air mass', caption: 'Large body of air with same temperature.' }
	],

	lessonQuestions: [
		{
			question: 'Rain, snow or hail falling from the sky.',
			answers: [
				{ answer: 'precipitation', trueOrFalse: true },
				{ answer: 'condensation', trueOrFalse: false },
				{ answer: 'dew', trueOrFalse: false }
			]
		},
		{
			question: 'The weight of the air around us.',
			answers: [
				{ answer: 'UV index', trueOrFalse: false },
				{ answer: 'atmospheric pressure', trueOrFalse: true },
				{ answer: 'wind chill', trueOrFalse: false }
			]
		},
		{
			question: 'A sky totally covered with clouds.',
			answers: [
				{ answer: 'overcast', trueOrFalse: true },
				{ answer: 'monsoon', trueOrFalse: false },
				{ answer: 'hail', trueOrFalse: false }
			]
		},
		{
			question: 'A sudden strong wind.',
			answers: [
				{ answer: 'gust', trueOrFalse: true },
				{ answer: 'dew', trueOrFalse: false },
				{ answer: 'air mass', trueOrFalse: false }
			]
		},
		{
			question: 'A very long time without rain.',
			answers: [
				{ answer: 'condensation', trueOrFalse: false },
				{ answer: 'drought', trueOrFalse: true },
				{ answer: 'monsoon', trueOrFalse: false }
			]
		},
		{
			question: 'Rain that freezes on the ground.',
			answers: [
				{ answer: 'hail', trueOrFalse: false },
				{ answer: 'freezing rain', trueOrFalse: true },
				{ answer: 'dew', trueOrFalse: false }
			]
		},
		{
			question: 'Small balls of ice from the sky.',
			answers: [
				{ answer: 'snow', trueOrFalse: false },
				{ answer: 'freezing rain', trueOrFalse: false },
				{ answer: 'hail', trueOrFalse: true }
			]
		},
		{
			question: 'Season with very heavy rain.',
			answers: [
				{ answer: 'drought', trueOrFalse: false },
				{ answer: 'monsoon', trueOrFalse: true },
				{ answer: 'overcast', trueOrFalse: false }
			]
		},
		{
			question: 'Water turning into gas.',
			answers: [
				{ answer: 'evaporation', trueOrFalse: true },
				{ answer: 'condensation', trueOrFalse: false },
				{ answer: 'precipitation', trueOrFalse: false }
			]
		},
		{
			question: 'Gas turning into water.',
			answers: [
				{ answer: 'dew', trueOrFalse: false },
				{ answer: 'condensation', trueOrFalse: true },
				{ answer: 'evaporation', trueOrFalse: false }
			]
		},
		{
			question: 'Tool used to measure air pressure.',
			answers: [
				{ answer: 'barometer', trueOrFalse: true },
				{ answer: 'thermometer', trueOrFalse: false },
				{ answer: 'hygrometer', trueOrFalse: false }
			]
		},
		{
			question: 'Level of dangerous sun radiation.',
			answers: [
				{ answer: 'wind chill', trueOrFalse: false },
				{ answer: 'UV index', trueOrFalse: true },
				{ answer: 'air mass', trueOrFalse: false }
			]
		},
		{
			question: 'When cold air pushes warm air.',
			answers: [
				{ answer: 'warm front', trueOrFalse: false },
				{ answer: 'cold front', trueOrFalse: true },
				{ answer: 'jet stream', trueOrFalse: false }
			]
		},
		{
			question: 'When warm air replaces cold air.',
			answers: [
				{ answer: 'condensation', trueOrFalse: false },
				{ answer: 'warm front', trueOrFalse: true },
				{ answer: 'drought', trueOrFalse: false }
			]
		},
		{
			question: 'How cold it feels because of wind.',
			answers: [
				{ answer: 'wind chill', trueOrFalse: true },
				{ answer: 'UV index', trueOrFalse: false },
				{ answer: 'gust', trueOrFalse: false }
			]
		},
		{
			question: 'Water drops on grass in the morning.',
			answers: [
				{ answer: 'dew', trueOrFalse: true },
				{ answer: 'hail', trueOrFalse: false },
				{ answer: 'steam', trueOrFalse: false }
			]
		},
		{
			question: 'Invisible ice on the road.',
			answers: [
				{ answer: 'freezing rain', trueOrFalse: false },
				{ answer: 'black ice', trueOrFalse: true },
				{ answer: 'dew', trueOrFalse: false }
			]
		},
		{
			question: 'Climate in a very small area.',
			answers: [
				{ answer: 'jet stream', trueOrFalse: false },
				{ answer: 'microclimate', trueOrFalse: true },
				{ answer: 'air mass', trueOrFalse: false }
			]
		},
		{
			question: 'Very fast air current high in the sky.',
			answers: [
				{ answer: 'gust', trueOrFalse: false },
				{ answer: 'jet stream', trueOrFalse: true },
				{ answer: 'wind chill', trueOrFalse: false }
			]
		},
		{
			question: 'A huge body of air with same temperature.',
			answers: [
				{ answer: 'air mass', trueOrFalse: true },
				{ answer: 'UV index', trueOrFalse: false },
				{ answer: 'monsoon', trueOrFalse: false }
			]
		}
	]
};
