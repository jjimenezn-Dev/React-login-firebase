export interface IUser {
    id: Number,
    name: string,
    last_name: string,
    document_id: string,
    available: boolean,
    isAdmin: boolean,
    courses: []   
}