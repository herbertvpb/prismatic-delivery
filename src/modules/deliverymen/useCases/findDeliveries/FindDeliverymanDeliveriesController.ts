import { Request, Response } from "express";
import { FindDeliverymanDeliveriesUseCase } from "./FindDeliverymanDeliveriesUseCase";

export class FindDeliverymanDeliveriesController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findDeliveriesUseCase = new FindDeliverymanDeliveriesUseCase();
    const result = await findDeliveriesUseCase.execute({
      id_deliveryman,
    });

    return response.json(result);
  }
}
