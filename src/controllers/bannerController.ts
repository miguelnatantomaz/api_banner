import { Request, Response } from "express";
import BannerServices from "../services/banner";

class BannerControllers {
    //Criando banner
    static async create(req: Request, res: Response) {
        const BannerData = req.body
        
        const newBanner = await BannerServices.create(BannerData)
        res.status(201).json(newBanner)
    }

    //Listando todos os banners
    static async index(req: Request, res: Response) {
        const BannersList = await BannerServices.index()

        res.json(BannersList)
    }

    //Listar banners por Id
    static async show(req: Request, res: Response) {
        const { id } = req.params;
        const listBannerbyId = await BannerServices.show(id);
        return res.status(200).json(listBannerbyId);
    }

    //Atualizando um banners   
    static async update(req: Request, res: Response) {
        const { id } = req.params
        const customerUpdated = await BannerServices.update(id, req.body)


        res.json(customerUpdated)
    }

    //Deletando banners
    static async delete(req: Request, res: Response) {
        const { id } = req.params

        await BannerServices.delete(id)
        res.status(204).json()
    }
}

export default BannerControllers