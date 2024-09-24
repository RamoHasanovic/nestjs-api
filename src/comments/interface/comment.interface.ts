/* eslint-disable prettier/prettier */
export interface Comment {
  id?: number; // Ako je ID automatski generiran od strane baze
  postId: number;
  user?: string; // Opcionalno
  parentId?: number; // Opcionalno
  text: string;
  createdAt?: Date; // Da se datumi automatski postave
}
