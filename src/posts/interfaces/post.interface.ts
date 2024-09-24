/* eslint-disable prettier/prettier */
export interface Post {
  id?: number; // Ako je ID automatski generiran od strane baze
  user: string;
  title: string;
  content: string;
  image?: string; // Ovaj polje je opcionalno
  createdAt?: Date; // Ako želiš da se datumi automatski postave
}
