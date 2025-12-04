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
}

// Todo : add lesson homepage
export const lessonDisplay: Lesson[] = [
	{
		id: 1,
		link: '/lessons/kitchen-utensils',
		imageLink: '/lessons-images/kitchen-utensils.webp',
		name: 'Kitchen utensils'
	},
	{ id: 2, link: '/lessons/bedroom', imageLink: '/lessons-images/bedroom.webp', name: 'Bedroom' },
	{
		id: 3,
		link: '/lessons/bathroom',
		imageLink: '/lessons-images/bathroom.webp',
		name: 'Bathroom'
	},
	{
		id: 4,
		link: '/lessons/livingroom',
		imageLink: '/lessons-images/livingroom.webp',
		name: 'Living room'
	},
	{ id: 5, link: '/lessons/kitchen', imageLink: '/lessons-images/kitchen.webp', name: 'Kitchen' },
	{ id: 6, link: '/lessons/garden', imageLink: '/lessons-images/garden.webp', name: 'Garden' },
	{ id: 7, link: '/lessons/clothes', imageLink: '/lessons-images/clothes.webp', name: 'Clothes' },
	{ id: 8, link: '/lessons/weather', imageLink: '/lessons-images/weather.webp', name: 'Weather' }
];
