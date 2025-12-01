interface Answer {
	answer: string;
	trueOrFalse: boolean;
}

interface Question {
	question: string;
	answers: Answer[];
}
interface Word {
	word: string;
	caption: string;
}

export interface LessonsPlan {
	lessonWords: Word[];
	lessonQuestions: Question[];

}