/*
  Warnings:

  - You are about to drop the column `id_deliverymen` on the `deliveries` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliverymen_fkey";

-- AlterTable
ALTER TABLE "deliveries" DROP COLUMN "id_deliverymen",
ADD COLUMN     "id_deliveryman" TEXT;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliveryman_fkey" FOREIGN KEY ("id_deliveryman") REFERENCES "deliverymen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
