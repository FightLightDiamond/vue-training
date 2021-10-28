import {ITodo} from "../contract.casl";

class Entity {
    constructor(attrs: any) {
        Object.assign(this, attrs)
    }
}

export class User extends Entity {
    id!: number
    role!: string
}

export class Todo {
    constructor(attrs: ITodo) {
        Object.assign(this, attrs)
    }
}