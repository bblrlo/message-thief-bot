-- CreateTable
CREATE TABLE "Treasure" (
    "id" SERIAL NOT NULL,
    "chat_id" INTEGER NOT NULL,
    "chat_type" TEXT NOT NULL,
    "sender" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "Treasure_pkey" PRIMARY KEY ("id")
);
