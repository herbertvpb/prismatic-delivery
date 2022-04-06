import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface ICreateCustomer {
  username: string;
  password: string;
}

export class CreateCustomerUseCase {
  async execute({ username, password }: ICreateCustomer) {
    const customersAlreadyExists = await prisma.customers.findFirst({
      where: {
        username: {
          mode: "insensitive",
        },
      },
    });

    if (customersAlreadyExists) {
      throw new Error("Customers already exists");
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
