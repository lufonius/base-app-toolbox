import {initialState, reducer} from './user.reducer';
import { UpsertUsers } from "./user.action";
import { UserEntity } from "./user.entity";
import * as _ from 'lodash';

describe('user-reducer', () => {
    it('should set the users', () => {
        let user0: UserEntity = {
            id: 0,
            roleId: 0,
            permissions: [0, 1, 2]
        };

        let user1: UserEntity = {
            id: 1,
            roleId: 0,
            permissions: [0, 1, 2]
        };

        let user2: UserEntity = {
            id: 2,
            roleId: 0,
            permissions: [0, 1, 2]
        };

        const users = [user0, user1, user2];

        const readUserAction = new UpsertUsers({ users: users });

        const state = reducer(initialState, readUserAction);

        expect(state.ids.length).toBe(3);
        expect(state.ids[0]).toBe(0);
        expect(_.isEqual(state.entities[1], user1)).toBeTruthy();
    });
});