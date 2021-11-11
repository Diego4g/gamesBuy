import { Router } from "express"
import { CreateUserController } from "../src/modules/users/useCases/createUser/CreateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();

usersRoutes.post("/", createUserController.handle)

export { usersRoutes }