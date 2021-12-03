import { getRepository, Repository } from "typeorm";
import { ICreateGameDTO } from "../../dtos/ICreateGameDTO";
import { Game } from "../../entities/Game";
import { IGamesRepository } from "../IGamesRepository";


class GamesRepository implements IGamesRepository {

    private repository: Repository<Game>

    constructor() {
        this.repository = getRepository(Game)
    }

    async create({ name, category }: ICreateGameDTO): Promise<void> {
        const game = this.repository.create({
            name,
            category
        })

        await this.repository.save(game)
    }

    async findGameByName(name: string): Promise<Game> {
        const game = await this.repository.findOne({ name })

        return game
    }


}

export { GamesRepository }