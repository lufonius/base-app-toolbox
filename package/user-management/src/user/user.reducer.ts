import {EntityState, EntityAdapter, createEntityAdapter, Update} from '@ngrx/entity';
import { UserEntity } from "./user.entity";
import {AddUser, ModifyUser, RemoveUser, SetUsers, UpsertUsers, UserActionsUnion, UserActionTypes} from "./user.action";

export interface State extends EntityState<UserEntity> {}

export const adapter: EntityAdapter<UserEntity> = createEntityAdapter<UserEntity>();

export const initialState: State = adapter.getInitialState();

export function reducer(state = initialState, action): State {
    switch (action.type) {
        case UserActionTypes.UPSERT_USERS:
            const users = (<UpsertUsers>action).payload.users;

            return {
                ...adapter.upsertMany(users, state)
            };

        case UserActionTypes.REMOVE_USER:
            const id = (<RemoveUser>action).payload.id;

            return {
                ...adapter.removeOne(id, state)
            };

        case UserActionTypes.MODIFY_USER:
            const id = (<ModifyUser>action).payload.id;
            const user = (<ModifyUser>action).payload.user;

            return {
                ...adapter.updateOne({ id: id, changes: user }, state)
            };

        default: {
            return state;
        }
    }
}