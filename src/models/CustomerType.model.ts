const pool = require("../persistence/db");

class CustomerType{
    id: number;
    type: string;

    constructor(customerType: CustomerType){
        this.id = customerType.id;
        this.type = customerType.type;
    }

    static async findAll(){
        const client = await pool.connect();

        try{
            const query = `
                select * from customer_type
            `
            const { rows } = await client.query(query);
            const customerTypes = rows.map((customerType: CustomerType) => new CustomerType(customerType));
            return customerTypes
        }catch(err) {
            console.error(err);
        }finally{
            client.release();
        }
    }

    static async findById(id: number){
        const client = await pool.connect();

        try{
            const query = `
                select * from customer_type ct
                where ct.id = $1
            `
            const { rows } = await client.query(query, [id]);
            const customerType = rows.map((customerType: CustomerType) => new CustomerType(customerType));
            return customerType
        }catch(err) {
            console.error(err);
        }finally{
            client.release();
        }
    }
}

module.exports = CustomerType;

export {};