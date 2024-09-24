/* eslint-disable prettier/prettier */
export interface Comment {
  id?: number; // Ako je ID automatski generiran od strane baze
  postId: number;
  user?: string; // Opcionalno, jer možda ne želiš uvijek pružiti korisničko ime
  parentId?: number; // Opcionalno, za rekurzivne komentare
  text: string;
  createdAt?: Date; // Ako želiš da se datumi automatski postave
}
