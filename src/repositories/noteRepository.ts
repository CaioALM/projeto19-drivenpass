
import { prisma } from "../config/database.js";
import { NoteInsert } from "../types/notesTypes.js";
import { Notes } from "@prisma/client";


export async function findUserNote(userId:number, title: string) {
  return await prisma.notes.findUnique({
      where: {
        userId_title: {
          title,
          userId,
        },
      },
    });
  }

export async function insert(title: string, note:string, userId:number ): Promise<void>{
    await prisma.notes.create({ data:{ title, note, userId} });
}

export async function findNotes(userId: number): Promise< Notes[] | null >{
    return await prisma.notes.findMany({where : {userId:userId}});
}

export async function findNote(userId:number, noteId:number): Promise<Notes | null>{
    return await prisma.notes.findFirst({where: { userId:userId,  AND:  { id: noteId }}});
}

export async function deleteNoteById(noteId: number) {
    await prisma.notes.delete({ where: { id: noteId } });
  }