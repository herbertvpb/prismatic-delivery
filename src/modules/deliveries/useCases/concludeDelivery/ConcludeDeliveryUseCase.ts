import { prisma } from "../../../../database/prismaClient";

interface IConcludeDelivery {
  id_delivery: string;
  id_deliveryman: string;
}

export class ConcludeDeliveryUseCase {
  async execute({ id_delivery, id_deliveryman }: IConcludeDelivery) {
    const concludedDelivery = prisma.deliveries.updateMany({
      where: {
        id: id_delivery,
        id_deliveryman,
      },
      data: {
        ended_at: new Date(),
      }
    });

    return concludedDelivery;
  }
}
