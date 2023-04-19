export interface Student {
	id: string;
	fullName: string;
	birthDate: string;
	performance: performance;
}

export type performance = "неуд" | "уд" | "хор" | "отл" | undefined