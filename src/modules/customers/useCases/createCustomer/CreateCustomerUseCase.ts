import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateCustomer {
  username: string;
  password: string;
}

export class CreateCustomerUseCase {
  async execute({ username, password }: ICreateCustomer) {
    const customerAlreadyExists = await prisma.customers.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (customerAlreadyExists) {
      throw new Error("Customer already exists");
    }

    const encryptedPassword = await hash(password, 10);

    const customer = await prisma.customers.create({
      data: {
        username,
        password: encryptedPassword,
      },
    });

    return customer;
  }
}
