import { Request, Response } from "express";
import { FindCustomerDeliveriesUseCase } from "./FindCustomerDeliveriesUseCase";

export class FindCustomerDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_customer } = request;

    const findCustomerDeliveriesUseCase = new FindCustomerDeliveriesUseCase();
    const result = await findCustomerDeliveriesUseCase.execute({
      id_customer,
    });

    return response.json(result);
  }
}
