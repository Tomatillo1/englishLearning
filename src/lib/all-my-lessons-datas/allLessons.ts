import { lessonBathroomItems } from '$lib/all-my-lessons-datas/bathroom';
import { lessonKitchenObjects } from '$lib/all-my-lessons-datas/kitchen';
import { lessonBedroomItems } from '$lib/all-my-lessons-datas/bedroom';
import { lessonKitchenUtensils } from '$lib/all-my-lessons-datas/kitchen-utensils';
import { lessonLivingRoom } from './livingroom';
import { lessonGardenTools } from './garden';
import { lessonClothes } from './clothes';
import { lessonWeather } from './weather';

export const allLessons = {
	bathroom: { title: 'Bathroom', lesson: lessonBathroomItems },
	kitchen: { title: 'Kitchen', lesson: lessonKitchenObjects },
	bedroom: { title: 'Bedroom', lesson: lessonBedroomItems },
	'kitchen-utensils': { title: 'Kitchen utensils', lesson: lessonKitchenUtensils },
	livingroom: { title: 'Living room', lesson: lessonLivingRoom },
	garden: { title: 'Garden', lesson: lessonGardenTools },
	clothes: { title: 'Clothes', lesson: lessonClothes },
	weather: { title: 'Weather', lesson: lessonWeather }
};

export type Theme = keyof typeof allLessons;
