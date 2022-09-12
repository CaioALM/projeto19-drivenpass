
import {Request, Response} from "express"
import { string } from "joi"
import * as noteServices from "../services/noteService.js"

export async function createNote(req:Request, res: Response) {
    const {title, note} = req.body
    const { userId } = res.locals
    await noteServices.newNote({userId, title, note})
    res.sendStatus(201)
}

export async function getNotes(req:Request, res: Response) {
    const { userId } = res.locals
    const notes = await noteServices.getNotes(userId)
    res.status(200).send(notes)
}

export async function getNote(req:Request, res: Response) {
    const noteId  = Number(req.params.id)
    const { userId } = res.locals
    const note = await noteServices.getNote(userId , noteId)
    res.status(200).send(note)
}

export async function deleteNote(req:Request, res: Response) {
    const noteId  = Number(req.params.id)
    const { userId } = res.locals
    await noteServices.deleteNote(Number(userId), Number(noteId))
    res.sendStatus(200)
}