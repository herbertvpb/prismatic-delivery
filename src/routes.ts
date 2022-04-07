import { Router } from "express";
import { AuthenticateCustomerController } from "./modules/account/authenticateCustomer/AuthenticateCustomerController";
import { CreateCustomerController } from "./modules/customers/useCases/createCustomer/CreateCustomerController";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const authenticateCustomerController = new AuthenticateCustomerController();

routes.post("/auth/", authenticateCustomerController.handle);
routes.post("/customer", createCustomerController.handle);

export { routes };
