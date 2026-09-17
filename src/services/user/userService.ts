import { db } from "./../../prisma/db.js";
import { createHmac,randomBytes} from "node:crypto";
import JWT from "jsonwebtoken";


const JWT_token = "my_secret"
export interface createUserPayload {
  first_name: string;
  email: string;
  password: string;
}
export interface loginUserPayload {
  email: string;
  password: string;
}
interface LoginUserRecord {
  id: string;
  email: string;
  first_name: string;
  last_name: string | null;
  password: string;
  salt: string;
}

class userService {

  public static generatesalt(salt: string,password: string){
    const hashed = createHmac('sha256',salt).update(password).digest("hex");
    return hashed;
  }
  public static async createUser(payload: createUserPayload) {
    const { first_name, email, password } = payload;
    const salt = randomBytes(32).toString("hex");
    const hashed = userService.generatesalt(salt,password);
    const users = db.orm.public?.User;

    if (!users) {
      throw new Error("The public User model is unavailable");
    }

    return users.create({
      first_name,
      email,
      password : hashed,
      salt,
    });
  }
  public static async findUserByEmail(email:string){
    const user = await db.orm.public?.User?.first({email : email}) as LoginUserRecord | null | undefined;
    if (!user) {
      throw new Error("user not found");
    }
    return user;
  }
  public static async loginUser(payload: loginUserPayload) {
    const {email, password} = payload;
    const userDetails = await userService.findUserByEmail(email);
    const passwordHashed = userService.generatesalt(userDetails.salt, password);
    if(passwordHashed === userDetails.password){
      const token = JWT.sign({id: userDetails.id, email: userDetails.email,firstname: userDetails.first_name,lastName : userDetails.last_name},JWT_token)
      return token;
    }

    throw new Error("Invalid email or password");
  }

  public static decodeToken(token: string) {
    const token_decoded = JWT.verify(token, JWT_token);
    return token_decoded;
  } 
  public static async getUserById(id: string){
    const user = await db.orm.public?.User?.first({id : id})
    return user;
  }
}

export default userService;
