import { Router } from "express";
import { ensureAuthenticatedCustomer } from "./middlewares/ensureAuthenticatedCustomer";
import { AuthenticateCustomerController } from "./modules/account/authenticateCustomer/AuthenticateCustomerController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateCustomerController } from "./modules/customers/useCases/createCustomer/CreateCustomerController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliverymen/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAvailableDeliveriesController } from "./modules/deliveries/useCases/findAvailableDeliveries/FindAvailableDeliveriesController";
import { ensureAuthenticatedDeliveryman } from "./middlewares/ensureAuthenticatedDeliveryman";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const authenticateCustomerController = new AuthenticateCustomerController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();

const createDeliveryController = new CreateDeliveryController();
const findAvailableDeliveriesController = new FindAvailableDeliveriesController();

routes.post("/customer", createCustomerController.handle);
routes.post("/customer/auth/", authenticateCustomerController.handle);

routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/deliveryman/auth/", authenticateDeliverymanController.handle);

routes.post(
  "/delivery",
  ensureAuthenticatedCustomer,
  createDeliveryController.handle
);
routes.get(
  "/delivery/available",
  ensureAuthenticatedDeliveryman,
  findAvailableDeliveriesController.handle
);

export { routes };
