export interface IChannel{
    id:number
    name:string
    participants:number
    messages?:IMessage[]
}
export interface IMessage{
    text:string
    sender:string
    receiver:string
}

export interface IMessageSocketMsg {
    // message_type: ChatMessageTypes,
    // message: string,
    // sender_id: string,
    // sender_reference: ChatReferenceType,
    // receiver_id: string,
    // receiver_reference: ChatReferenceType,
    // customer_phone?:string
    // basket_id?:string
    sender:string
    msg:string
    receiver:string
}