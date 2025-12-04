// Todo : add link
type AllLinks =
	| '/lessons/kitchen-utensils'
	| '/lessons/bedroom'
	| '/lessons/bathroom'
	| '/lessons/livingroom'
	| '/lessons/kitchen'
	| '/lessons/garden'
	| '/lessons/clothes'
	| '/lessons/weather';

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
		link: '/lessons/weather',
		imageLink: '/lessons-images/weather.webp',
		name: 'Weather',
		difficulty: 'Beginners'
	}
];
