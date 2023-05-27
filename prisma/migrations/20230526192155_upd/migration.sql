/*
  Warnings:

  - You are about to drop the column `sender` on the `Treasure` table. All the data in the column will be lost.
  - Added the required column `sender_id` to the `Treasure` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Treasure" DROP COLUMN "sender",
ADD COLUMN     "sender_id" BIGINT NOT NULL;
