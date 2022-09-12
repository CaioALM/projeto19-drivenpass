import * as notesRepository from '../repositories/noteRepository.js'
import { Notes } from '@prisma/client';
import { NoteInsert } from '../types/notesTypes.js';


async function checkIfNoteExistis(userId: number, title:string): Promise<void>{
    const result: Notes | null = await notesRepository.findUserNote(userId, title)

    if(result){
        throw { code: "Conflict", message: "User already registered this note title"}
    }
}

export async function newNote({userId, title, note}: NoteInsert){
    await checkIfNoteExistis(Number(userId), title)
    await notesRepository.insert(title, note, Number(userId))
}

export async function getNotes(userId:number) {
    return await notesRepository.findNotes(Number(userId))
}

export async function getNote(userId:number, credentialId:number) {
    const result = await notesRepository.findNote(Number(userId), Number(credentialId))
    if(result === null){
        throw { code: "Conflict", message: "Cannot find"}
    }
    return result;
}

export async function deleteNote(userId: number, noteId:number) {
    const result = await notesRepository.findNote(Number(userId), Number(noteId))
    if(result === null){
        throw { code: "Conflict", message: "Cannot find"}
    }
    return await notesRepository.deleteNoteById(noteId)
}