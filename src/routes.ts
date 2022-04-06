import { Router } from "express";
import { CreateCustomerController } from "./modules/customers/useCases/createCustomer/CreateCustomerController";

const routes = Router();

const createCustomerController = new CreateCustomerController();

routes.post("/customer/", createCustomerController.handle);

export { routes };
