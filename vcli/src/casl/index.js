import {defineAbility} from "@casl/ability";

const abilityRoles = (role) => {
    return defineAbility((can, cannot) => {
        switch (role) {
            case "guest":
                break
            case "staff":
                can('view', 'Task', {assign: 2})
                can('active', 'Task')
                can('update', 'Password')
                break
            case "admin":
                can('view', 'Task', {assign: 2})
                can('view', 'Task')
                can('active', 'Task')
                can('delete', 'Task')
                can('update', 'Task')
                can('create', 'Task')
                cannot('update', 'Password')
                break
        }
    })
}

const abilityUser = (user) => {
    return defineAbility((can) => {
        can('view', 'Task', { assign: user.id})
    })
}

export {abilityRoles, abilityUser}