import { getCustomRepository} from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
    tag_id: string;
    user_sender: string;
    user_receiver: string;
    message: string;
}
class CreateComplimentService{
    async execute({tag_id, user_sender, user_receiver, message}: IComplimentRequest){
        const complimentsRepositories = getCustomRepository(ComplimentsRepositories);
        const usersRespositories = getCustomRepository(UsersRepositories);

        if(user_sender === user_receiver){
            throw new Error("O usuário não pode enviar pra ele mesmo");
        }
        const userReceiverExists = await usersRespositories.findOne(user_receiver);
        if(!userReceiverExists){
            throw new Error("Usuário não existe");
        }

        const compliment = complimentsRepositories.create({
            tag_id,
            user_receiver,
            user_sender,
            message
        });

        await complimentsRepositories.save(compliment);

        return compliment;
    }
}
export {CreateComplimentService};