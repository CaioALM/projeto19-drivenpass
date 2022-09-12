import joi from 'joi';
import { NoteBody } from "../types/notesTypes";

const NoteSchema = joi.object<NoteBody>({
    title: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
});

export default NoteSchema;