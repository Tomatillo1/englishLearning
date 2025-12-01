import type { LessonsPlan } from '$lib/interfaces/lessons-plan';

export const lessonBedroomItems: LessonsPlan = {
	lessonWords: [
		{ word: "Bed", caption: "A piece of furniture used for sleeping." },
		{ word: "Pillow", caption: "A soft cushion used for resting your head." },
		{ word: "Blanket", caption: "A covering used to keep warm in bed." },
		{ word: "Wardrobe", caption: "A large cabinet for storing clothes." },
		{ word: "Desk", caption: "A piece of furniture for writing or working." },
		{ word: "Chair", caption: "A seat for one person." },
		{ word: "Nightstand", caption: "A small table beside the bed." },
		{ word: "Lamp", caption: "A device that provides light." },
		{ word: "Bookshelf", caption: "A piece of furniture to hold books." },
		{ word: "Mirror", caption: "A reflective surface to see yourself." },
		{ word: "Curtains", caption: "Fabric to cover windows." },
		{ word: "Rug", caption: "A soft floor covering." },
		{ word: "Dresser", caption: "A cabinet with drawers for clothes." },
		{ word: "Alarm clock", caption: "A clock that wakes you up at a set time." },
		{ word: "Closet", caption: "A small room for storing clothes." },
		{ word: "Shelf", caption: "A flat surface for storing items." },
		{ word: "Chair mat", caption: "A mat to protect the floor under a chair." },
		{ word: "Bedside lamp", caption: "A lamp placed near the bed." },
		{ word: "Laundry basket", caption: "A basket used to hold dirty clothes." },
		{ word: "Desk organizer", caption: "A container to keep desk items tidy." }
	],

	lessonQuestions: [
		{
			question: "What do you sleep on at night?",
			answers: [
				{ answer: "Chair", trueOrFalse: false },
				{ answer: "Desk", trueOrFalse: false },
				{ answer: "Bed", trueOrFalse: true }
			]
		},
		{
			question: "What do you put your head on while sleeping?",
			answers: [
				{ answer: "Blanket", trueOrFalse: false },
				{ answer: "Pillow", trueOrFalse: true },
				{ answer: "Rug", trueOrFalse: false }
			]
		},
		{
			question: "What keeps you warm in bed?",
			answers: [
				{ answer: "Curtains", trueOrFalse: false },
				{ answer: "Blanket", trueOrFalse: true },
				{ answer: "Wardrobe", trueOrFalse: false }
			]
		},
		{
			question: "Where do you store your clothes?",
			answers: [
				{ answer: "Bookshelf", trueOrFalse: false },
				{ answer: "Wardrobe", trueOrFalse: true },
				{ answer: "Desk", trueOrFalse: false }
			]
		},
		{
			question: "Where do you do your homework or work?",
			answers: [
				{ answer: "Desk", trueOrFalse: true },
				{ answer: "Nightstand", trueOrFalse: false },
				{ answer: "Bed", trueOrFalse: false }
			]
		},
		{
			question: "What do you sit on while at a desk?",
			answers: [
				{ answer: "Bed", trueOrFalse: false },
				{ answer: "Chair", trueOrFalse: true },
				{ answer: "Rug", trueOrFalse: false }
			]
		},
		{
			question: "What small table is next to your bed?",
			answers: [
				{ answer: "Nightstand", trueOrFalse: true },
				{ answer: "Dresser", trueOrFalse: false },
				{ answer: "Shelf", trueOrFalse: false }
			]
		},
		{
			question: "What gives you light in the room?",
			answers: [
				{ answer: "Lamp", trueOrFalse: true },
				{ answer: "Closet", trueOrFalse: false },
				{ answer: "Mirror", trueOrFalse: false }
			]
		},
		{
			question: "Where do you keep your books?",
			answers: [
				{ answer: "Drawer", trueOrFalse: false },
				{ answer: "Bed", trueOrFalse: false },
				{ answer: "Bookshelf", trueOrFalse: true }
			]
		},
		{
			question: "What do you use to see your reflection?",
			answers: [
				{ answer: "Mirror", trueOrFalse: true },
				{ answer: "Curtains", trueOrFalse: false },
				{ answer: "Lamp", trueOrFalse: false }
			]
		},
		{
			question: "What covers the windows?",
			answers: [
				{ answer: "Rug", trueOrFalse: false },
				{ answer: "Curtains", trueOrFalse: true },
				{ answer: "Pillow", trueOrFalse: false }
			]
		},
		{
			question: "What is placed on the floor for comfort?",
			answers: [
				{ answer: "Rug", trueOrFalse: true },
				{ answer: "Desk", trueOrFalse: false },
				{ answer: "Bed", trueOrFalse: false }
			]
		},
		{
			question: "What has drawers to store clothes?",
			answers: [
				{ answer: "Wardrobe", trueOrFalse: false },
				{ answer: "Dresser", trueOrFalse: true },
				{ answer: "Chair", trueOrFalse: false }
			]
		},
		{
			question: "What wakes you up in the morning?",
			answers: [
				{ answer: "Lamp", trueOrFalse: false },
				{ answer: "Bookshelf", trueOrFalse: false },
				{ answer: "Alarm clock", trueOrFalse: true }
			]
		},
		{
			question: "Where do you keep clothes in a small room?",
			answers: [
				{ answer: "Desk", trueOrFalse: false },
				{ answer: "Closet", trueOrFalse: true },
				{ answer: "Chair", trueOrFalse: false }
			]
		},
		{
			question: "What flat surface is used to store items?",
			answers: [
				{ answer: "Nightstand", trueOrFalse: false },
				{ answer: "Shelf", trueOrFalse: true },
				{ answer: "Pillow", trueOrFalse: false }
			]
		},
		{
			question: "What protects the floor under a chair?",
			answers: [
				{ answer: "Chair mat", trueOrFalse: true },
				{ answer: "Desk organizer", trueOrFalse: false },
				{ answer: "Rug", trueOrFalse: false }
			]
		},
		{
			question: "What lamp is placed next to your bed?",
			answers: [
				{ answer: "Desk lamp", trueOrFalse: false },
				{ answer: "Bedside lamp", trueOrFalse: true },
				{ answer: "Ceiling lamp", trueOrFalse: false }
			]
		},
		{
			question: "Where do you put your dirty clothes?",
			answers: [
				{ answer: "Wardrobe", trueOrFalse: false },
				{ answer: "Laundry basket", trueOrFalse: true },
				{ answer: "Drawer", trueOrFalse: false }
			]
		},
		{
			question: "What helps keep your desk organized?",
			answers: [
				{ answer: "Bookshelf", trueOrFalse: false },
				{ answer: "Desk organizer", trueOrFalse: true },
				{ answer: "Chair", trueOrFalse: false }
			]
		}
	]
};