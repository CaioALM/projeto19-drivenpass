
import { Credentials } from '@prisma/client';

export type CredentialInsert = Omit<Credentials, 'id'>;

export type CredentialBody = Omit<CredentialInsert, 'userId'>;

export type CredentialResponse = Omit<Credentials, 'userId'>;


