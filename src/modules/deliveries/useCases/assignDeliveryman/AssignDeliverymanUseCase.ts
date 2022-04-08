import { prisma } from "../../../../database/prismaClient";

interface IAssignDeliveryman {
  id_delivery: string;
  id_deliveryman: string;
}

export class AssignDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IAssignDeliveryman) {
    const deliveryWithAssignedDeliveryman = prisma.deliveries.update({
      where: {
        id: id_delivery,
      },
      data: {
        id_deliveryman
      }
    });

    return deliveryWithAssignedDeliveryman;
  }
}
