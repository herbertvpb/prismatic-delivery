import { Router } from "express";
import { ensureAuthenticatedCustomer } from "./middlewares/ensureAuthenticatedCustomer";
import { AuthenticateCustomerController } from "./modules/account/authenticateCustomer/AuthenticateCustomerController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateCustomerController } from "./modules/customers/useCases/createCustomer/CreateCustomerController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliverymen/useCases/createDeliveryman/CreateDeliverymanController";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const authenticateCustomerController = new AuthenticateCustomerController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();

routes.post("/customer", createCustomerController.handle);
routes.post("/customer/auth/", authenticateCustomerController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/deliveryman/auth/", authenticateDeliverymanController.handle);

routes.post(
  "/delivery",
  ensureAuthenticatedCustomer,
  createDeliveryController.handle
);

export { routes };
