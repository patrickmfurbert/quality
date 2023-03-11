const pool = require("../persistence/db");
const contractor_builder = 'contractor_builder'

class QualityRecord {

    id: number;
    date: string;
    customer_id: number;
    customer_type: string;
    contractor_builder_name: string;
    customer_first_name: string;
    customer_last_name: string;
    issue: string;
    cost: number;
    category: number;
    classification: number;
    visit: number;

    constructor(qualityRecord: QualityRecord) {
        this.id = qualityRecord.id;
        this.date = qualityRecord.date;
        this.customer_id = qualityRecord.customer_id;
        this.customer_type = qualityRecord.customer_type;
        this.contractor_builder_name = qualityRecord.contractor_builder_name;
        this.customer_first_name = qualityRecord.customer_first_name;
        this.customer_last_name = qualityRecord.customer_last_name;
        this.issue = qualityRecord.issue;
        this.cost = qualityRecord.cost;
        this.category = qualityRecord.category;
        this.classification = qualityRecord.classification;
        this.visit = qualityRecord.visit;
    }


    //find all
    static async findAll() {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer as customer_id, ct.type as customer_type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on (qr.category = qro.id)
            join quality_record_classifications qrc on (qr.classification = qrc.id)
            join customers c on (qr.customer = c.id)
            join customer_type ct on (c.type = ct.id) 
            `;

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
    static async findById(id: number) {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer as customer_id, ct.type as customer_type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on (qr.category = qro.id)
            join quality_record_classifications qrc on (qr.classification = qrc.id)
            join customers c on (qr.customer = c.id)
            join customer_type ct on (c.type = ct.id) 
            where qr.id =$1
            `;

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
    static async findByDate(date: string) {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer as customer_id, ct.type as customer_type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on (qr.category = qro.id)
            join quality_record_classifications qrc on (qr.classification = qrc.id)
            join customers c on (qr.customer = c.id)
            join customer_type ct on (c.type = ct.id) 
            where qr.date = $1
            `;

            const { rows } = await client.query(query, [date]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by before date inclusive
    static async findByBeforeDate(date: string) {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer as customer_id, ct.type as customer_type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on (qr.category = qro.id)
            join quality_record_classifications qrc on (qr.classification = qrc.id)
            join customers c on (qr.customer = c.id)
            join customer_type ct on (c.type = ct.id) 
            where qr.date <= $1
            `;

            const { rows } = await client.query(query, [date]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by after date inclusive
    static async findByAfterDate(date: string) {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer as customer_id, ct.type as customer_type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on (qr.category = qro.id)
            join quality_record_classifications qrc on (qr.classification = qrc.id)
            join customers c on (qr.customer = c.id)
            join customer_type ct on (c.type = ct.id) 
            where qr.date >= $1
            `;

            const { rows } = await client.query(query, [date]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by after specified date and before specified date inclusive
    static async findByBetweenDates(createdAfter: string, createdBefore: string) {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer as customer_id, ct.type as customer_type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on (qr.category = qro.id)
            join quality_record_classifications qrc on (qr.classification = qrc.id)
            join customers c on (qr.customer = c.id)
            join customer_type ct on (c.type = ct.id) 
            where qr.date between $1 and $2
            `;

            const { rows } = await client.query(query, [createdAfter, createdBefore]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //TODO - update for new tables
    //find by customer
    static async findByCustomer(customer: string) {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
            where qr.customer = $1
            `;

            const { rows } = await client.query(query, [customer]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //TODO - update for new tables
    //find by month & year
    static async findByMonthAndYear(date: string) {
        const client = await pool.connect();

        try {

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //TODO - update for new tables
    //find by year
    static async findByYear(year: string) {
        const client = await pool.connect();

        try {

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by category
    static async findByCategory(category: number) {
        const client = await pool.connect();
            
        try {
            const query = `
            select qr.id, qr.date, qr.customer as customer_id, ct.type as customer_type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on (qr.category = qro.id)
            join quality_record_classifications qrc on (qr.classification = qrc.id)
            join customers c on (qr.customer = c.id)
            join customer_type ct on (c.type = ct.id) 
            where qr.category =$1
            `;

            const { rows } = await client.query(query, [category]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;
        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by classification
    static async findByClassification(classification: number) {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer as customer_id, ct.type as customer_type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on (qr.category = qro.id)
            join quality_record_classifications qrc on (qr.classification = qrc.id)
            join customers c on (qr.customer = c.id)
            join customer_type ct on (c.type = ct.id) 
            where qr.classification =$1
            `;

            const { rows } = await client.query(query, [classification]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //TODO - update for new tables
    //find by visits
    static async findByVisits(visits: number) {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer as customer_id, ct.type as customer_type, c.contractor_builder_name, c.first_name as customer_first_name, c.last_name as customer_last_name, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on (qr.category = qro.id)
            join quality_record_classifications qrc on (qr.classification = qrc.id)
            join customers c on (qr.customer = c.id)
            join customer_type ct on (c.type = ct.id) 
            where qr.visit = $1
            `;

            const { rows } = await client.query(query, [visits]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //find by cost (gt, lt, between)
    //WIP
    static async findByCost(visits: number) {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
            where qr.visit = $1
            `;

            const { rows } = await client.query(query, [visits]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }

    //TODO: The insert and logic needs to be updated for the new table
    static async createQualityRecord(qualityRecord: QualityRecord){
        const client = await pool.connect();

        try {

            const check_customers = `
            SELECT c.id from customers c
            WHERE c.id = $1
            `;

            let { rows } = await client.query(check_customers, [qualityRecord.customer_id])
            let qualityRecords;

            if(rows.length > 0){
                const query = `
                INSERT INTO quality_records (date, customer, issue, cost, category, classification, visit)
                VALUES ($1, $2, $3, $4, $5, $6, $7)
                RETURNING *
                `;            

              let { rows } = await client.query(query, 
                    [qualityRecord.date, qualityRecord.customer_id, qualityRecord.issue, qualityRecord.cost, qualityRecord.category, qualityRecord.classification, qualityRecord.visit]);
                qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            }else{
                qualityRecords = {
                    "Error":"CustomerNotFound"
                }
            }
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }
}

module.exports = QualityRecord;

export {}