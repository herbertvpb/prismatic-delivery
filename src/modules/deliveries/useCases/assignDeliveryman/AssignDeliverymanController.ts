import { Request, Response } from "express";
import { AssignDeliverymanUseCase } from "./AssignDeliverymanUseCase";

export class AssignDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id: id_delivery } = request.params;
    const { id_deliveryman } = request;

    const assignDeliverymanUseCase = new AssignDeliverymanUseCase();
    const result = await assignDeliverymanUseCase.execute({
      id_delivery,
      id_deliveryman,
    });

    return response.json(result);
  }
}
