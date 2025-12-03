import type { LessonsPlan } from '$lib/interfaces/lessons-plan';
import { lessonBathroomItems } from '$lib/all-my-lessons-datas/bathroom';
import { lessonKitchenObjects } from '$lib/all-my-lessons-datas/kitchen';
import { lessonBedroomItems } from '$lib/all-my-lessons-datas/bedroom';
import { lessonKitchenUtensils } from '$lib/all-my-lessons-datas/kitchen-utensils';
import { lessonLivingRoom } from '$lib/all-my-lessons-datas/livingroom';

export const allLessons	: Record<string, LessonsPlan> = {
	bathroom: lessonBathroomItems,
	kitchen: lessonKitchenObjects,
	bedroom: lessonBedroomItems,
	"kitchen-utensils": lessonKitchenUtensils,
	livingroom: lessonLivingRoom,
}