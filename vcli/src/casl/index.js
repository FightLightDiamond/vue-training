import {defineAbility} from "@casl/ability";

const abilityRoles = (role) => {
    return defineAbility((can) => {
        switch (role) {
            case "guest":
                break
            case "staff":
                can('read', 'Task')
                can('active', 'Task')
                break
            case "admin":
                can('read', 'Task')
                can('active', 'Task')
                can('delete', 'Task')
                can('update', 'Task')
                can('create', 'Task')
                break
        }
    })
}

export {abilityRoles}