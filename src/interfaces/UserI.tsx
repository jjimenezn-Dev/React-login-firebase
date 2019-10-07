export interface IUser {
    id: Number,
    name: string,
    last_name: string,
    gender: Number,
    document_id: string,
    available: boolean,
    isAdmin: boolean,
    courses: []   
}