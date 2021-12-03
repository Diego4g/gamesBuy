import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateGameDTO } from "../../dtos/ICreateGameDTO";
import { IGamesRepository } from "../../repositories/IGamesRepository";



@injectable()
class CreateGameUseCase {

    constructor(
        @inject("GamesRepository")
        private gamesRepository: IGamesRepository
    ) { }

    async execute({ name, category }: ICreateGameDTO): Promise<void> {

        const game = await this.gamesRepository.findGameByName(name)

        if (game) {
            throw new AppError("Game already exists!")
        }
        await this.gamesRepository.create({
            name,
            category
        })

    }
}

export { CreateGameUseCase }