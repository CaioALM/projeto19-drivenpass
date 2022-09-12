import joi from 'joi'
import { CredentialBody } from "../types/credentialTypes";

const credentialSchema = joi.object<CredentialBody>({
    username: joi.string().required(),
    password: joi.string().required(),
    url: joi.string().uri().required(),
    title: joi.string().required()

});

export default credentialSchema;