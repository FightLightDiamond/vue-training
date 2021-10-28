import {  Ability, AbilityClass} from '@casl/ability';
import {Todo, User} from "./entities";
export type CRUD = 'create' | 'read' | 'update' | 'delete';
export type TAction = CRUD | 'view' | 'active'

export interface ITodo {
  assign?: number
  status?: string
}

export interface IUser {
  id: number
  role: string
}

export type TSubject = IUser | 'User' | 'Todo' | 'Password' | ITodo | typeof User | User | typeof Todo | Todo

export type TAppAbility = Ability<[TAction, TSubject]>;
export const AppAbility = Ability as AbilityClass<TAppAbility>;
