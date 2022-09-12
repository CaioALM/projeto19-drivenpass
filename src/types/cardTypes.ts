
import { Cards } from "@prisma/client";

export type CardInsert = Omit<Cards, 'id'>;

export type CardBody = Omit<CardInsert, 'userId'>;

export type CardResponse = Omit<Cards, 'userId'>;