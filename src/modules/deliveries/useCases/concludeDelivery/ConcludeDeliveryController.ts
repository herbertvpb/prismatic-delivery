import { Request, Response } from "express";
import { ConcludeDeliveryUseCase } from "./ConcludeDeliveryUseCase";

export class ConcludeDeliveryController {
  async handle(request: Request, response: Response) {
    const { id: id_delivery } = request.params;
    const { id_deliveryman } = request;

    const concludeDeliveryUseCase = new ConcludeDeliveryUseCase();
    const result = await concludeDeliveryUseCase.execute({
      id_delivery,
      id_deliveryman,
    });

    return response.json(result);
  }
}
