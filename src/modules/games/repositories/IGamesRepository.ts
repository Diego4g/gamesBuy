import { ICreateGameDTO } from "../dtos/ICreateGameDTO";
import { Game } from "../entities/Game";



interface IGamesRepository {

    create({ name, category }: ICreateGameDTO): Promise<void>;
    findGameByName(name: string): Promise<Game>
}

export { IGamesRepository }