/*
  Warnings:

  - Added the required column `date` to the `Treasure` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Treasure" ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "chat_id" SET DATA TYPE BIGINT;
