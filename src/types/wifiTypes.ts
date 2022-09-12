import { Wifis } from "@prisma/client";

export type WifiInsert = Omit<Wifis, 'id'>;

export type WifiBody = Omit<WifiInsert, 'userId'>;

export type WifiResponse = Omit<Wifis, 'userId'>;