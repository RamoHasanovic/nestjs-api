/* eslint-disable prettier/prettier */
export interface Post {
  id?: number; // Ako je ID automatski generiran od baze
  user: string;
  title: string;
  content: string;
  image?: string; // Ovo polje je opcionalno
  createdAt?: Date; // Da se datumi automatski postave
}
