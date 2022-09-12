import joi from 'joi';
import { CardBody } from '../types/cardTypes.js'
 
const cardSchema = joi.object<CardBody>({
    number: joi.string().length(16).required(),
    title: joi.string().required(),
    name: joi.string().required(),
    securityCode: joi.string().length(3).required(),
    expirationDate: joi.string().pattern(/^((0[1-9])|(1[0-2]))\/(\d{4})$/, { name: "expirationDate" }).required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().strict(),
    cardType: joi.string().valid("debit", "credit", "debitAndCredit").required(),
  });

  export default cardSchema ;