import { Action } from '@ngrx/store';
import {UserEntity} from "./user.entity";
import {BaseReadQuery} from "../base-read-query";

export enum UserActionTypes {
    //for async calls
    CREATE_USER = '[User] CREATE_USER',
    CREATE_USER_SUCCESS = '[User] CREATE_USER_SUCCESS',
    CREATE_USER_FAILURE = '[User] CREATE_USER_FAILURE',

    READ_USER = '[User] READ_USER',
    READ_USER_SUCCESS = '[User] READ_USER_SUCCESS',
    READ_USER_FAILURE = '[User] READ_USER_FAILURE',

    UPDATE_USER = '[User] UPDATE_USER',
    UPDATE_USER_SUCCESS = '[User] UPDATE_USER_SUCCESS',
    UPDATE_USER_FAILURE = '[User] UPDATE_USER_FAILURE',

    DELETE_USER = '[User] DELETE_USER',
    DELETE_USER_SUCCESS = '[User] DELETE_USER_SUCCESS',
    DELETE_USER_FAILURE = '[User] DELETE_USER_FAILURE',

    //for managing users client-side
    UPSERT_USERS = '[User] UPSERT_USERS',
    MODIFY_USER = '[User] MODIFY_USER',
    REMOVE_USER = '[User] REMOVE_USER'

}

export class CreateUser implements Action {
    readonly type = UserActionTypes.CREATE_USER;

    constructor(public payload: { user: UserEntity }) {

    }
}

export class CreateUserSuccess implements Action {
    readonly type = UserActionTypes.CREATE_USER_SUCCESS;

    constructor(public payload: { user: UserEntity }) {

    }
}

export class CreateUserFailure implements Action {
    readonly type = UserActionTypes.CREATE_USER_FAILURE;

    constructor(public payload: { error: string }) {}
}

export class ReadUser implements Action {
    readonly type = UserActionTypes.READ_USER;

    constructor(public payload: { query: BaseReadQuery }){

    }
}

export class ReadUserSuccess implements Action {
    readonly type = UserActionTypes.READ_USER_SUCCESS;
}

export class ReadUserFailure implements Action {
    readonly type = UserActionTypes.READ_USER_FAILURE;

    constructor(public payload: { error: string }) {}
}

export class UpdateUser implements Action {
    readonly type = UserActionTypes.UPDATE_USER;

    constructor(public payload: { id: string, user: UserEntity }) {

    }
}

export class UpdateUserSuccess implements Action {
    readonly type = UserActionTypes.UPDATE_USER_SUCCESS;

    constructor(public payload: { id: string, user: UserEntity }){

    }
}

export class UpdateUserFailure implements Action {
    readonly type = UserActionTypes.UPDATE_USER_FAILURE;

    constructor(public payload: { error: string }) {}
}

export class DeleteUser implements Action {
    readonly type = UserActionTypes.DELETE_USER;

    constructor(public payload: { id: string }){

    }
}

export class DeleteUserSuccess implements Action {
    readonly type = UserActionTypes.DELETE_USER_SUCCESS;

    constructor(public payload: { id: string, user: UserEntity }) {

    }
}

export class DeleteUserFailure implements Action {
    readonly type = UserActionTypes.DELETE_USER_FAILURE;

    constructor(public payload: { error: string }) {}
}

export class UpsertUsers implements Action {
    readonly type = UserActionTypes.UPSERT_USERS;

    constructor(public payload: { users: UserEntity[] }) {

    }
}

export class ModifyUser implements Action {
    readonly type = UserActionTypes.MODIFY_USER;

    constructor(public payload: { id: string, user: UserEntity }){

    }
}

export class RemoveUser implements Action {
    readonly type = UserActionTypes.REMOVE_USER;

    constructor(public payload: { id: string }) {}
}

export type UserActionsUnion =
    CreateUser  | CreateUserSuccess     | CreateUserFailure
    ReadUser    | ReadUserSuccess       | ReadUserFailure
    UpdateUser  | UpdateUserSuccess     | UpdateUserFailure
    DeleteUser  | DeleteUserSuccess     | DeleteUserFailure
    AddUser     | SetUsers | ModifyUser | RemoveUser;