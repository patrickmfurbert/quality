const pool = require("../persistence/db");

class QualityRecordClassification {

    id: number;
    classification: string;

    constructor(qualityRecordClassification: QualityRecordClassification){
        this.id = qualityRecordClassification.id;
        this.classification =qualityRecordClassification.classification;
    }

    static async findAll(){
        const client = await pool.connect();

        try{
            const query = 'select * from quality_record_classification';
            const { rows } = await client.query(query);
            const qualityRecordClassifications = rows.map((classification: QualityRecordClassification) => new QualityRecordClassification(classification))
            return qualityRecordClassifications;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }
    }

    static async findById(id: number){
        const client = await pool.connect();
        
        try{
            const query = 'select * from quality_record_classification where id =$1';
            const { rows } = await client.query(query, [id]);
            const qualityRecordClassifications = rows.map((classification: QualityRecordClassification) => new QualityRecordClassification(classification))
            return qualityRecordClassifications;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }

    }
}

module.exports = QualityRecordClassification;

export {};