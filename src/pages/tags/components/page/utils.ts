import {User} from '_api/usersTestApi';
import {EntityStore} from '_utils/entity-store';

export const userEntityStore = new EntityStore<Error, User>();
