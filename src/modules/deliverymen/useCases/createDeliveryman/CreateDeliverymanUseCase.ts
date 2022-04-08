import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateDeliveryman {
  username: string;
  password: string;
}

export class CreateDeliverymanUseCase {
  async execute({ username, password }: ICreateDeliveryman) {
    const deliverymanAlreadyExists = await prisma.deliveryMen.findFirst({
      where: {
        username: {
          equals: username,
          mode: "insensitive",
        },
      },
    });

    if (deliverymanAlreadyExists) {
      throw new Error("Deliveryman already exists");
    }

    const encryptedPassword = await hash(password, 10);

    const deliveryman = await prisma.deliveryMen.create({
      data: {
        username,
        password: encryptedPassword,
      },
    });

    return deliveryman;
  }
}
