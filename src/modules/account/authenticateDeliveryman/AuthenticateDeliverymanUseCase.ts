import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateDeliveryman {
  username: string;
  password: string;
}

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: IAuthenticateDeliveryman) {
    const deliveryman = await prisma.deliveryMen.findFirst({
      where: {
        username,
      },
    });

    if (!deliveryman) {
      throw new Error("Deliveryman doesn't exists");
    }

    const passwordsMatch = await compare(password, deliveryman.password);

    if (!passwordsMatch) {
      throw new Error("Invalid password");
    }

    const token = sign({ username }, "a46d857bc97e7643c1541d52427d7603", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });

    return { token };
  }
}
