// Todo : add link
type AllLinks =
	| '/lessons/kitchen-utensils'
	| '/lessons/bedroom'
	| '/lessons/bathroom'
	| '/lessons/livingroom'
	| '/lessons/kitchen'
	| '/lessons/garden'
	| '/lessons/clothes'
	| '/lessons/cleaning'
	| '/lessons/emotions'
	| '/lessons/sensations'
	| '/lessons/vegetables'
	| '/lessons/fruits'
	| '/lessons/weather'
	| '/lessons/weather-advanced';

interface Lesson {
	id: number;
	link: AllLinks;
	imageLink: string;
	name: string;
	difficulty: string;
}

export const lessonDisplay: Lesson[] = [
	{
		id: 1,
		link: '/lessons/kitchen-utensils',
		imageLink: '/lessons-images/kitchen-utensils.webp',
		name: 'Kitchen utensils',
		difficulty: 'Beginners'
	},
	{
		id: 2,
		link: '/lessons/bedroom',
		imageLink: '/lessons-images/bedroom.webp',
		name: 'Bedroom',
		difficulty: 'Beginners'
	},
	{
		id: 3,
		link: '/lessons/bathroom',
		imageLink: '/lessons-images/bathroom.webp',
		name: 'Bathroom',
		difficulty: 'Beginners'
	},
	{
		id: 4,
		link: '/lessons/livingroom',
		imageLink: '/lessons-images/livingroom.webp',
		name: 'Living room',
		difficulty: 'Beginners'
	},
	{
		id: 5,
		link: '/lessons/kitchen',
		imageLink: '/lessons-images/kitchen.webp',
		name: 'Kitchen',
		difficulty: 'Beginners'
	},
	{
		id: 6,
		link: '/lessons/garden',
		imageLink: '/lessons-images/garden.webp',
		name: 'Garden',
		difficulty: 'Beginners'
	},
	{
		id: 7,
		link: '/lessons/clothes',
		imageLink: '/lessons-images/clothes.webp',
		name: 'Clothes',
		difficulty: 'Beginners'
	},
	{
		id: 8,
		link: '/lessons/cleaning',
		imageLink: '/lessons-images/cleaning.webp',
		name: 'Cleaning',
		difficulty: 'Beginners'
	},
	{
		id: 9,
		link: '/lessons/emotions',
		imageLink: '/lessons-images/emotions.webp',
		name: 'Emotions',
		difficulty: 'Beginners'
	},
	{
		id: 10,
		link: '/lessons/sensations',
		imageLink: '/lessons-images/sensations.webp',
		name: 'Sensations',
		difficulty: 'Beginners'
	},
	{
		id: 11,
		link: '/lessons/vegetables',
		imageLink: '/lessons-images/vegetables.webp',
		name: 'Vegetables',
		difficulty: 'Beginners'
	},
	{
		id: 12,
		link: '/lessons/fruits',
		imageLink: '/lessons-images/fruits.webp',
		name: 'Fruits',
		difficulty: 'Beginners'
	},
	{
		id: 13,
		link: '/lessons/weather',
		imageLink: '/lessons-images/weather.webp',
		name: 'Weather',
		difficulty: 'Beginners'
	},
	{
		id: 14,
		link: '/lessons/weather-advanced',
		imageLink: '/lessons-images/weather.webp',
		name: 'Weather',
		difficulty: 'Advanced'
	}
];
