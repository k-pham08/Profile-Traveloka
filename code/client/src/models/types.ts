export enum UserRole {
    USER = "USER",
    ADMIN = "ADMIN",
    PARTNER = "PARTNER"
}

export interface MenuItem{
    title: string,
    handle?: Function
}