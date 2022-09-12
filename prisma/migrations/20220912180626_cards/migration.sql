-- CreateEnum
CREATE TYPE "Type" AS ENUM ('debit', 'credit', 'debitAndCredit');

-- CreateTable
CREATE TABLE "Cards" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "number" VARCHAR(16) NOT NULL,
    "name" TEXT NOT NULL,
    "securityCode" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isVirtual" BOOLEAN NOT NULL DEFAULT false,
    "cardType" "Type" NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cards_title_userId_key" ON "Cards"("title", "userId");

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
