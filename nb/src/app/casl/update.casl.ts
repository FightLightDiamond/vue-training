import {AbilityBuilder} from "@casl/ability";
import {AppAbility} from "./contract.casl";

const updateAbility = (ability: any, user: {
  id: number, role: string
}) => {
  const {can, cannot, rules} = new AbilityBuilder(AppAbility);
  const {role, id} = user

  switch (role) {
    case "guest":
      break
    case "staff":
      can('view', 'Todo', ['stat*'], {
        assign: 3,
        status: {
          $in: ['review', 'published']
        }
      })
      can('active', 'Todo')
      can('update', 'Password')
      break
    case "admin":
      can('view', 'Todo')
      can('active', 'Todo')
      can('delete', 'Todo')
      can('update', 'Todo')
      can('create', 'Todo')
      cannot('update', 'Password')
      break
    case "user":
      can('view', 'Todo', {assign: id}) // authID eq 4
      can('active', 'Todo')
      can('delete', 'Todo')
      can('update', 'Todo')
      can('create', 'Todo')
      cannot('update', 'Password')
      break
  }

  ability.update(rules);
}

export default updateAbility
