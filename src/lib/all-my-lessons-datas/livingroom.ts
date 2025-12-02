import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonLivingRoom: LessonsPlan = {
	lessonWords: [
		{ word: "sofa", caption: "A large comfortable seat." },
		{ word: "armchair", caption: "A comfortable single chair." },
		{ word: "coffee table", caption: "A low table in front of the sofa." },
		{ word: "TV", caption: "A screen for watching shows." },
		{ word: "remote control", caption: "A device to change TV channels." },
		{ word: "lamp", caption: "A device that gives light." },
		{ word: "bookshelf", caption: "A shelf for storing books." },
		{ word: "carpet", caption: "A soft floor covering." },
		{ word: "curtains", caption: "Fabric that covers windows." },
		{ word: "painting", caption: "Art that hangs on the wall." },
		{ word: "clock", caption: "A device that shows time." },
		{ word: "side table", caption: "A small table beside a sofa." },
		{ word: "speaker", caption: "A device that plays sound." },
		{ word: "vase", caption: "A container for flowers." },
		{ word: "blanket", caption: "A warm covering to stay cozy." },
		{ word: "cushion", caption: "A soft pillow for comfort." },
		{ word: "fireplace", caption: "A place for making fire indoors." },
		{ word: "ceiling light", caption: "A lamp fixed to the ceiling." },
		{ word: "magazine", caption: "A printed publication to read." },
		{ word: "TV stand", caption: "Furniture that holds the TV." }
	],

	lessonQuestions: [
		{
			question: "You sit on a comfortable large seat called a...",
			answers: [
				{ answer: "sofa", trueOrFalse: true },   // pos1
				{ answer: "vase", trueOrFalse: false },
				{ answer: "clock", trueOrFalse: false }
			]
		},
		{
			question: "You change channels with the...",
			answers: [
				{ answer: "coffee table", trueOrFalse: false },
				{ answer: "remote control", trueOrFalse: true }, // pos2
				{ answer: "lamp", trueOrFalse: false }
			]
		},
		{
			question: "You watch movies on the...",
			answers: [
				{ answer: "curtains", trueOrFalse: false },
				{ answer: "carpet", trueOrFalse: false },
				{ answer: "TV", trueOrFalse: true } // pos3
			]
		},
		{
			question: "A comfortable chair for one person is an...",
			answers: [
				{ answer: "armchair", trueOrFalse: true }, // pos1
				{ answer: "bookshelf", trueOrFalse: false },
				{ answer: "magazine", trueOrFalse: false }
			]
		},
		{
			question: "A low table in front of the couch is a...",
			answers: [
				{ answer: "fireplace", trueOrFalse: false },
				{ answer: "coffee table", trueOrFalse: true }, // pos2
				{ answer: "cushion", trueOrFalse: false }
			]
		},
		{
			question: "This object lights up the room.",
			answers: [
				{ answer: "painting", trueOrFalse: false },
				{ answer: "lamp", trueOrFalse: true }, // pos2
				{ answer: "side table", trueOrFalse: false }
			]
		},
		{
			question: "Books are stored on the...",
			answers: [
				{ answer: "carpet", trueOrFalse: false },
				{ answer: "ceiling light", trueOrFalse: false },
				{ answer: "bookshelf", trueOrFalse: true } // pos3
			]
		},
		{
			question: "A soft covering on the floor is called a...",
			answers: [
				{ answer: "carpet", trueOrFalse: true }, // pos1
				{ answer: "vase", trueOrFalse: false },
				{ answer: "remote control", trueOrFalse: false }
			]
		},
		{
			question: "You block sunlight with...",
			answers: [
				{ answer: "blanket", trueOrFalse: false },
				{ answer: "curtains", trueOrFalse: true }, // pos2
				{ answer: "speaker", trueOrFalse: false }
			]
		},
		{
			question: "Art on the wall is a...",
			answers: [
				{ answer: "painting", trueOrFalse: true }, // pos1
				{ answer: "coffee table", trueOrFalse: false },
				{ answer: "magazine", trueOrFalse: false }
			]
		},
		{
			question: "You know the time thanks to the...",
			answers: [
				{ answer: "sofa", trueOrFalse: false },
				{ answer: "clock", trueOrFalse: true }, // pos2
				{ answer: "bookshelf", trueOrFalse: false }
			]
		},
		{
			question: "A small table next to the sofa is a...",
			answers: [
				{ answer: "fireplace", trueOrFalse: false },
				{ answer: "side table", trueOrFalse: true }, // pos2
				{ answer: "armchair", trueOrFalse: false }
			]
		},
		{
			question: "A device that plays music is a...",
			answers: [
				{ answer: "speaker", trueOrFalse: true }, // pos1
				{ answer: "carpet", trueOrFalse: false },
				{ answer: "painting", trueOrFalse: false }
			]
		},
		{
			question: "A container for flowers is a...",
			answers: [
				{ answer: "vase", trueOrFalse: true }, // pos1
				{ answer: "lamp", trueOrFalse: false },
				{ answer: "TV", trueOrFalse: false }
			]
		},
		{
			question: "A warm covering is a...",
			answers: [
				{ answer: "cushion", trueOrFalse: false },
				{ answer: "blanket", trueOrFalse: true }, // pos2
				{ answer: "side table", trueOrFalse: false }
			]
		},
		{
			question: "A soft pillow on the sofa is a...",
			answers: [
				{ answer: "TV stand", trueOrFalse: false },
				{ answer: "cushion", trueOrFalse: true }, // pos2
				{ answer: "curtains", trueOrFalse: false }
			]
		},
		{
			question: "You can warm the room with a...",
			answers: [
				{ answer: "fireplace", trueOrFalse: true }, // pos1
				{ answer: "magazine", trueOrFalse: false },
				{ answer: "lamp", trueOrFalse: false }
			]
		},
		{
			question: "A light attached to the ceiling is a...",
			answers: [
				{ answer: "ceiling light", trueOrFalse: true }, // pos1
				{ answer: "coffee table", trueOrFalse: false },
				{ answer: "sofa", trueOrFalse: false }
			]
		},
		{
			question: "A publication you can flip through is a...",
			answers: [
				{ answer: "speaker", trueOrFalse: false },
				{ answer: "magazine", trueOrFalse: true }, // pos2
				{ answer: "carpet", trueOrFalse: false }
			]
		},
		{
			question: "The TV is placed on the...",
			answers: [
				{ answer: "TV stand", trueOrFalse: true }, // pos1
				{ answer: "fireplace", trueOrFalse: false },
				{ answer: "vase", trueOrFalse: false }
			]
		}
	]
};