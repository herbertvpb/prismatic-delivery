import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateCustomer {
  username: string;
  password: string;
}

export class AuthenticateCustomerUseCase {
  async execute({ username, password }: IAuthenticateCustomer) {
    const customer = await prisma.customers.findFirst({
      where: {
        username,
      },
    });

    if (!customer) {
      throw new Error("Customers doesn't exists");
    }

    const passwordsMatch = await compare(password, customer.password);

    if (!passwordsMatch) {
      throw new Error("Invalid password");
    }

    const token = sign({ username }, "cd363b111009eaef1b3ce79dbc8fb12b", {
      subject: customer.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
