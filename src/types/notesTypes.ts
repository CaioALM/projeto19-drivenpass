import { Notes } from "@prisma/client";

export type NoteInsert = Omit<Notes, 'id'>;

export type NoteBody = Omit<NoteInsert, 'userId'>;

export type NoteResponse = Omit<Notes, 'userId'>;