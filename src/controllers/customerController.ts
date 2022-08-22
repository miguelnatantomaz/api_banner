import CustomerServices from "../services/customer"
import { Request, Response } from "express";

class CustomerControllers {
    //Criando customer
    static async create(req: Request, res: Response) {
        const customerData = req.body
        
        const newCustomer = await CustomerServices.create(customerData)
        res.status(201).json(newCustomer)
    }

    //Listando todos os customers   
    static async index(req: Request, res: Response) {
        const customersList = await CustomerServices.index()

        res.json(customersList)
    }

    //Listar customer por Id
    static async show(req: Request, res: Response) {
        const { id } = req.params;
        const listCustomerbyId = await CustomerServices.show(id);
        return res.status(200).json(listCustomerbyId);
    }

    //Atualizando um customer    
    static async update(req: Request, res: Response) {
        const { id } = req.params
        const customerUpdated = await CustomerServices.update(id, req.body)

        res.json(customerUpdated)
    }

    //Deletando customer
    static async delete(req: Request, res: Response) {
        const { id } = req.params

        await CustomerServices.delete(id)
        res.status(204).json()
    }
  }
  
  export default CustomerControllers;