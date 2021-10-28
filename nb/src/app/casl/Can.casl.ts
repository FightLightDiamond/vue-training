import { createContext } from 'react';
import { createContextualCan } from '@casl/react';
import ability from './ability.casl'
// export const AbilityContext = createContext<AnyMongoAbility>(ability);
export const AbilityContext = createContext(ability);
export const Can = createContextualCan(AbilityContext.Consumer);
