import { prisma } from "../../../../database/prismaClient";

interface IFindDeliverymanDeliveries {
  id_deliveryman: string;
}

export class FindDeliverymanDeliveriesUseCase {
  async execute({ id_deliveryman }: IFindDeliverymanDeliveries) {
    const deliveries = prisma.deliveryMen.findMany({
      where: {
        id: id_deliveryman,
      },
      select: {
        id: true,
        username: true,
        deliveries: true,
      },
    });

    return deliveries;
  }
}
