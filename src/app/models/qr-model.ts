export interface QrModelRequest {
    userName:string,
    userLastName:string,
    subscriptionActivated:boolean,
    idCupon:string,
    userId:string

}


export interface QrModelResponse {
    userName:string,
    userLastname:string,
    subscriptionActivated:boolean,
    idCupon:string,
    userId:string
    _id:string

}
