import { inject, injectable } from "tsyringe";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ name, email, nickName, password }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({
            name,
            email,
            nickName,
            password
        })
    }
}

export { CreateUserUseCase }