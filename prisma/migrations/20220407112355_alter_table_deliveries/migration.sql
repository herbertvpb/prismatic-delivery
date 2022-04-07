-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_deliverymen_fkey";

-- AlterTable
ALTER TABLE "deliveries" ALTER COLUMN "id_deliverymen" DROP NOT NULL,
ALTER COLUMN "ended_at" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "deliveries" ADD CONSTRAINT "deliveries_id_deliverymen_fkey" FOREIGN KEY ("id_deliverymen") REFERENCES "deliverymen"("id") ON DELETE SET NULL ON UPDATE CASCADE;
