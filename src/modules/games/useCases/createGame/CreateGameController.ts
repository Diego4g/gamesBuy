import { Response, Request } from "express";
import { container } from "tsyringe";
import { CreateGameUseCase } from "./CreateGameUseCase";



class CreateGameController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { name, category } = request.body;

        const createGameUseCase = container.resolve(CreateGameUseCase);

        await createGameUseCase.execute({
            name,
            category
        })

        return response.status(201).send()
    }

}

export { CreateGameController }