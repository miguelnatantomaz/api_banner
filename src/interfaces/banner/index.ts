import { Types } from 'mongoose';

export interface IBannerRequest {
    name: string;
    image: string;
    status?: boolean;
    customerId?: Types.ObjectId;
    _id?: Types.ObjectId;
    endAt: Date;
    startAt?: string;
}

export interface IBanner {
    name: string;
    image: string
    customerId: string;
    endAt: string;
}