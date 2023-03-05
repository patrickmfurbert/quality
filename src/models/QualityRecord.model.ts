const pool = require("../persistence/db");

class QualityRecord {

    id: number;
    date: Date;
    customer: string;
    issue: string;
    cost: number;
    category: number;
    classification: number;
    visit: number;

    constructor(qualityRecord: QualityRecord) {
        this.id = qualityRecord.id;
        this.date = qualityRecord.date;
        this.customer = qualityRecord.customer;
        this.issue = qualityRecord.issue;
        this.cost = qualityRecord.cost;
        this.category = qualityRecord.category;
        this.classification = qualityRecord.classification;
        this.visit = qualityRecord.visit;
    }


    //find all
    static async findAll(){
        const client = await pool.connect();

        try{
            const query = 'select * from quality_records';
            const { rows } = await client.query(query);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;
        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by id
    static async findById(id: number){
        const client = await pool.connect();

        try{
            const query = 'select * from quality_records where id =$1';
            const { rows } = await client.query(query, [id]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;
        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by date
    static async findByDate(date: string){
        const client = await pool.connect();

        try{

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by customer
    static async findByCustomer(customer: string){
        const client = await pool.connect();

        try{

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by month & year
    static async findByMonthAndYear(date: string){
        const client = await pool.connect();

        try{

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by year
    static async findByYear(year: string){
        const client = await pool.connect();

        try{

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by category
    static async findByCategory(category: number){
        const client = await pool.connect();

        try{

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by classification
    static async findByClassification(classification: number){
        const client = await pool.connect();

        try{

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by visits


    //find by cost (gt, lt, between)

}

module.exports = QualityRecord;

export { }