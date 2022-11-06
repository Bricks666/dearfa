export interface Post {
	readonly id: number;
	readonly date: Date;
	readonly authorId: number;
	readonly content: string;
	readonly likeCount: number;
	readonly liked: boolean;
}
