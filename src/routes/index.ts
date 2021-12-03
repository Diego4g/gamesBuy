import { Router } from "express"
import { gamesRoutes } from "./game.routes";
import { usersRoutes } from "./user.routes";


const router = Router();

router.use("/users", usersRoutes)
router.use("/games", gamesRoutes)

export { router }