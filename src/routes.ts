import { Router } from "express";
import { AuthenticateCustomerController } from "./modules/account/authenticateCustomer/AuthenticateCustomerController";
import { CreateCustomerController } from "./modules/customers/useCases/createCustomer/CreateCustomerController";
import { CreateDeliverymanController } from "./modules/deliverymen/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateCustomerController = new AuthenticateCustomerController();

routes.post("/auth/", authenticateCustomerController.handle);
routes.post("/customer", createCustomerController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);

export { routes };
