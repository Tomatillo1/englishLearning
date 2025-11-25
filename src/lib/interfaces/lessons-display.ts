type AllLinks =
	| "/lessons/kitchen-utensils"
	| "/lessons/bedroom";

interface Lesson {
		id: number;
		link: AllLinks;
		imageLink: string;
		name: string;
}

export const lessonDisplay: Lesson[] = [
	{id: 1, link: "/lessons/kitchen-utensils", imageLink: "/lessons-images/kitchen-utensils.webp", name: "Kitchen utensils"},
	{id: 2, link: "/lessons/bedroom", imageLink: "/lessons-images/bedroom.webp", name: "Bedroom"},
];