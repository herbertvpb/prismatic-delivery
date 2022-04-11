import { prisma } from "../../../../database/prismaClient";

interface IFindCustomerDeliveries {
  id_customer: string;
}

export class FindCustomerDeliveriesUseCase {
  async execute({ id_customer }: IFindCustomerDeliveries) {
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
