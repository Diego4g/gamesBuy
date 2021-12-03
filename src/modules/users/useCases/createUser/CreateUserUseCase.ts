import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";



@injectable()
class CreateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) { }

    async execute({ name, email, nickName, password }: ICreateUserDTO): Promise<void> {

        const userEmailAlreadyExists = await this.usersRepository.findByEmail(email)

        if (userEmailAlreadyExists) {
            throw new AppError("Email Already Exists!")
        }

        const userNickNameAlreadyExists = await this.usersRepository.findByNickName(nickName)

        if (userNickNameAlreadyExists) {
            throw new AppError("User nickName already exists!")
        }

        await this.usersRepository.create({
            name,
            email,
            nickName,
            password
        })
    }
}

export { CreateUserUseCase }