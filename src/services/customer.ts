import { hash } from "bcryptjs";
import AppError from "../errors/app-error";
import { ICustomer } from "../interfaces/customer";
import Customer from "../models/customer";

class CustomerServices {
    //Criando customer
    static async create({name, email, phone, password}: ICustomer){

        const existCustomer = await Customer.findOne({email: email})

        if(existCustomer){
            throw new AppError("This email already exists", 400);
        }

        const hashedPassword = await hash(password, 10);

        const newCustomer: ICustomer = await Customer.create({
            name, email, phone, password: hashedPassword
        })

        return newCustomer
    }
    //Listar customer por Id
    static async show(idCustomer: string) {
        const customer = await Customer.findById(idCustomer).populate('banners')

        if (!customer) {
            throw new AppError("Customer not found!", 404);
        }

        

        return customer
    }

    //Listando todos os customers
    static async index() {
        const customers = await Customer.find().populate('banners')
        return customers
    }

    //Atualizando um customer    
    static async update(idCustomer: string, data: ICustomer) {
        const existCustomer = await Customer.findOne({email: data.email})

        if(existCustomer){
            throw new AppError("This email already exists", 400);
        }


        if(data.password){
            const hashedPassword = await hash(data.password, 10); 
            data.password = hashedPassword
        }

        const customerUpdated = await Customer.findByIdAndUpdate(idCustomer, {...data, new: true}, { returnDocument: "after" })

        if (!customerUpdated) {
            throw new AppError("Customer not found!", 404);
        }
        
        return customerUpdated
    }

    //Deletando customer
    static async delete(idCustomer: string) {
        await Customer.findByIdAndRemove(idCustomer)
    }
}

export default CustomerServices