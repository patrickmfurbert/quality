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

    //find by before date
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

    //find by before date
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

    //find by before date
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