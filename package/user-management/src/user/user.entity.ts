export interface UserEntity {
    id: string | number;
    roleId: string | number;
    permissions: string[] | number[];
}