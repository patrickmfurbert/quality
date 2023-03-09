const pool = require("../persistence/db");

class QualityRecord {

    id: number;
    date: string;
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
    static async findAll() {
        const client = await pool.connect();

        try {
            const query = `
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
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
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
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
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
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
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
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
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
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
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
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
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
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
            select qr.id, qr.date, qr.customer, qr.issue, qr.cost, qro.category, qrc.classification, qr.visit
            from quality_records qr
            join quality_record_categories qro on qr.category = qro.id
            join quality_record_classifications qrc on qr.classification = qrc.id
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

    //find by visits
    static async findByVisits(visits: number) {
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

    static async createQualityRecord(qualityRecord: QualityRecord){
        const client = await pool.connect();

        try {
            const query = `
            INSERT INTO quality_records (date, customer, issue, cost, category, classification, visit)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
            RETURNING *
            `;

            const { rows } = await client.query(query, 
                [qualityRecord.date, qualityRecord.customer, qualityRecord.issue, qualityRecord.cost, qualityRecord.category, qualityRecord.classification, qualityRecord.visit]);
            const qualityRecords = rows.map((qualityRecord: QualityRecord) => new QualityRecord(qualityRecord))
            return qualityRecords;

        } catch (err) {
            console.error(err);
        } finally {
            client.release()
        }
    }
}

module.exports = QualityRecord;

export { }