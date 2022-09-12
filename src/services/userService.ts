import bcrypt from "bcrypt";
import * as userRepository from '../repositories/userRepository.js';
import jwt from 'jsonwebtoken'

export async function signUp(email: string, password: string) {
    const passwordHash = bcrypt.hashSync(password, 10);

    const user = await userRepository.getUserByEmail(email);
    if (user) {
        throw { code: "Conflict", message: "Email already registered"}
    }

    await userRepository.createNewUser(email, passwordHash);
}

export async function signIn(email: string, password: string) {

    const user = await userRepository.getUserByEmail(email);
    if (!user) {
        throw { code: "Unauthorized", message: "Incorrect email or password"};
    }

    const isValid = bcrypt.compareSync(password, user.password);
 
    if (!isValid) {
        throw { code: "Unauthorized", message: "Incorrect email or password"};
    }
    const { id } = user;
    const token = jwt.sign(String(id) , process.env.JWT_TOKEN);
   
    
    return token;
}