import { lessonBathroomItems } from '$lib/all-my-lessons-datas/bathroom';
import { lessonKitchenObjects } from '$lib/all-my-lessons-datas/kitchen';
import { lessonBedroomItems } from '$lib/all-my-lessons-datas/bedroom';
import { lessonKitchenUtensils } from '$lib/all-my-lessons-datas/kitchen-utensils';
import { lessonLivingRoom } from './livingroom';
import { lessonGardenTools } from './garden';
import { lessonClothes } from './clothes';
import { lessonWeather } from './weather';
import { lessonCleaning } from './cleaning';
import { lessonEmotions } from './emotions';
import { lessonSensations } from './sensations';
import { lessonVegetables } from './vegetables';
import { lessonFruits } from './fruits';
import { lessonWeatherAdvanced } from './weatherAdvanced';

export const allLessons = {
	bathroom: { title: 'Bathroom', lesson: lessonBathroomItems },
	kitchen: { title: 'Kitchen', lesson: lessonKitchenObjects },
	bedroom: { title: 'Bedroom', lesson: lessonBedroomItems },
	'kitchen-utensils': { title: 'Kitchen utensils', lesson: lessonKitchenUtensils },
	livingroom: { title: 'Living room', lesson: lessonLivingRoom },
	garden: { title: 'Garden', lesson: lessonGardenTools },
	clothes: { title: 'Clothes', lesson: lessonClothes },
	cleaning: { title: 'Cleaning', lesson: lessonCleaning },
	emotions: { title: 'Emotions', lesson: lessonEmotions },
	sensations: { title: 'Sensations', lesson: lessonSensations },
	vegetables: { title: 'Vegetables', lesson: lessonVegetables },
	fruits: { title: 'Fruits', lesson: lessonFruits },
	weather: { title: 'Weather', lesson: lessonWeather },
	'weather-advanced': { title: 'Weather', lesson: lessonWeatherAdvanced }
};

export type Theme = keyof typeof allLessons;
