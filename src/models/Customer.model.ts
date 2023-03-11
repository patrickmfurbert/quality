const pool = require("../persistence/db");

class Customer {

    id: number;
    type: string;
    contractor_builder_name: string;
    customer_first_name: string;
    customer_last_name: string;


    constructor(customer: Customer) {
        this.id = customer.id;
        this.type = customer.type;
        this.contractor_builder_name = customer.contractor_builder_name;
        this.customer_first_name = customer.customer_first_name;
        this.customer_last_name = customer.customer_last_name;
    }

    //find all
    static async findAll() {
        const client = await pool.connect();

        try {
            const query = `
            select c.id, c.type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name from customers c
            `;
            const { rows } = await client.query(query);
            const customers = rows.map((customer: Customer) => new Customer(customer));
            return customers;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }
    }

    //find by id
    static async findById(id: number) {
        const client = await pool.connect()

        try {
            const query = `
            select c.id, c.type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name from customers c
            where c.id = $1
            `;
            const { rows } = await client.query(query, [id]);
            const customers = rows.map((customer: Customer) => new Customer(customer));
            return customers;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }
    }

    //find by name (case insensitive) 
    //dynamically constructs query based on get request parameters
    static async findByName(names: any) {
        const client = await pool.connect()

        let query = `
        select c.id, c.type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name from customers c where
        `;
        let queryParams = Object.values(names);

        // build the query based on req.params
        let previousNamePresent = false;
        let counter = 1; 
        for (const name in names){
            if(previousNamePresent){
                query += ` and`;
            }
            query += ` c.${name} ILIKE \$${counter}`;
            previousNamePresent = true;
            counter++;
        }

        try {
            if(queryParams.length < 1 || queryParams.length > 3){
                throw new Error('Incorrect Number of Query Parameters');
            }
            const { rows } = await client.query(query, queryParams);
            const customers = rows.map((customer: Customer) => new Customer(customer));
            return customers;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }
    }

}

module.exports = Customer;
export {}