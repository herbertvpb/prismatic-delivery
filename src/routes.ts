import { Router } from "express";
import { ensureAuthenticatedCustomer } from "./middlewares/ensureAuthenticatedCustomer";
import { AuthenticateCustomerController } from "./modules/account/authenticateCustomer/AuthenticateCustomerController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateCustomerController } from "./modules/customers/useCases/createCustomer/CreateCustomerController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { CreateDeliverymanController } from "./modules/deliverymen/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAvailableDeliveriesController } from "./modules/deliveries/useCases/findAvailableDeliveries/FindAvailableDeliveriesController";
import { ensureAuthenticatedDeliveryman } from "./middlewares/ensureAuthenticatedDeliveryman";
import { AssignDeliverymanController } from "./modules/deliveries/useCases/assignDeliveryman/AssignDeliverymanController";
import { FindCustomerDeliveriesController } from "./modules/customers/useCases/findDeliveries/FindCustomerDeliveriesController";
import { FindDeliverymanDeliveriesController } from "./modules/deliverymen/useCases/findDeliveries/FindDeliverymanDeliveriesController";
import { ConcludeDeliveryController } from "./modules/deliveries/useCases/concludeDelivery/ConcludeDeliveryController";

const routes = Router();

const createCustomerController = new CreateCustomerController();
const authenticateCustomerController = new AuthenticateCustomerController();
const findCustomerDeliveriesController = new FindCustomerDeliveriesController();

const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const findDeliverymanDeliveriesController =
  new FindDeliverymanDeliveriesController();

const createDeliveryController = new CreateDeliveryController();
const findAvailableDeliveriesController =
  new FindAvailableDeliveriesController();
const assignDeliverymanController = new AssignDeliverymanController();
const concludeDeliveryController = new ConcludeDeliveryController();

routes.post("/customer", createCustomerController.handle);
routes.post("/customer/auth/", authenticateCustomerController.handle);
routes.get(
  "/customer/deliveries/",
  ensureAuthenticatedCustomer,
  findCustomerDeliveriesController.handle
);

routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/deliveryman/auth/", authenticateDeliverymanController.handle);
routes.get(
  "/deliveryman/deliveries/",
  ensureAuthenticatedDeliveryman,
  findDeliverymanDeliveriesController.handle
);

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
routes.put(
  "/delivery/:id/assign-deliveryman",
  ensureAuthenticatedDeliveryman,
  assignDeliverymanController.handle
);
routes.put(
  "/delivery/:id/conclude-delivery",
  ensureAuthenticatedDeliveryman,
  concludeDeliveryController.handle
);

export { routes };
