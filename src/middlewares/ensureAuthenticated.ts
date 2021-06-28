import {Request, Response, NextFunction} from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    // receber o token
    const authToken = request.headers.authorization

    // validar se o token está preenchido
    if(!authToken){
        return response.status(401).end();
    }


    const [,token] = authToken.split(" ");

    try{ 
        // validar se o token é válido
        const {sub} = verify(token, "085fe8d3be2e4a07beced91b9e3be865") as IPayload;

        // Recuperar informações do usuário
        request.user_id = sub;
        return next();
    }catch(err){
        return response.status(401).end();  
    }    
}