/*
  Warnings:

  - You are about to drop the column `email` on the `Item` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Item` table. All the data in the column will be lost.
  - Added the required column `name` to the `Item` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qtyts` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Item" DROP COLUMN "email",
DROP COLUMN "username",
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "qtyts" INTEGER NOT NULL;
