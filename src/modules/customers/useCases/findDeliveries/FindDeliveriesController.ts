import { Request, Response } from "express";
import { FindDeliveriesUseCase } from "./FindDeliveriesUseCase";

export class FindDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_customer } = request;

    const findDeliveriesUseCase = new FindDeliveriesUseCase();
    const result = await findDeliveriesUseCase.execute({
      id_customer,
    });

    return response.json(result);
  }
}
