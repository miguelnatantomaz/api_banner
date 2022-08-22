import { Types } from "mongoose";

export interface ICustomer {
    name: string;
    phone: string
    email: string;
    password: string;
    _id?: Types.ObjectId;
}

export interface ICustomerRequest {
    name: string;
    phone: string
    email: string;
    password: string;
}