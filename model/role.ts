
import { User } from "./user";

export class Role{
    role_id!: number;
    role!: string;
    users!: User[] | null;    
}