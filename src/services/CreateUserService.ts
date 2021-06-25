import { UsersRepositories } from "../repositories/UsersRepositories";
import {getCustomRepository} from "typeorm";
import {hash} from "bcryptjs";

interface IUserRequest{
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}
class CreateUserService{
    async execute({name, email, admin = false, password}: IUserRequest){
        const usersRepository = getCustomRepository(UsersRepositories);

        // verifica se o email está preenchido
        if(!email){
            throw new Error("Email incorreto");
        }
        
        // verifica se o usuário já existe
        const userAlreadyExists = await usersRepository.findOne({
            email,
        });
        if(userAlreadyExists){
            throw new Error("Usuário já existe");
        }

        const passwordHash = await hash(password, 8)

        // cria uma instância
        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        });

        //salva objeto no banco de dados
        await usersRepository.save(user);
        return user;

    }
}

export {CreateUserService}