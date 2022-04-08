import { prisma } from "../../../../database/prismaClient";

interface IFindDeliveries {
  id_customer: string;
}

export class FindDeliveriesUseCase {
  async execute({ id_customer }: IFindDeliveries) {
    const deliveries = prisma.customers.findMany({
      where: {
        id: id_customer,
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
