import { date } from "yup";
import AppError from "../errors/app-error";
import { IBannerRequest } from "../interfaces/banner";
import Banner from "../models/banner";
import Customer from "../models/customer";

class BannerServices {
    //Criando Banners
    static async create({name, image, status, endAt, customerId}: IBannerRequest){
        const newBanner: any = await Banner.create({
            name, image, customerId, status, endAt:new Date(endAt).getTime() 
        })
        await newBanner.save()

        const customerById = await Customer.findById(customerId);

        if (!customerById) {
            throw new AppError("Customer not found!", 404);
        }

        customerById.banners.push(newBanner)
        await customerById.save();

        return newBanner
        
    }
    //Listar Banners por Id
    static async show(idBanner: string) {
        const banner = await Banner.findById(idBanner)

        if (!banner) {
            throw new AppError("Banner not found!", 404);
        }

        return banner
    }

    //Listando todos os Banners
    static async index() {
        const banners = await Banner.find()
        return banners
    }

    //Atualizando um Banners    
    static async update(idBanner: string, data: IBannerRequest) {
        const bannerUpdated = await Banner.findByIdAndUpdate(idBanner, {...data, new: true}, { returnDocument: "after" })

        if (!bannerUpdated) {
            throw new AppError("Banner not found!", 404);
        }
        
        return bannerUpdated
    }
    //Deletando Banners
    static async delete(idBanner: string) {
        const banner = await Banner.findById(idBanner)

        if (!banner) {
            throw new AppError("Banner not found!", 404);
        }

        await Banner.findByIdAndRemove(idBanner)
    }
}

export default BannerServices