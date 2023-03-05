const pool = require("../persistence/db");

class QualityRecordCategory {

    id: number;
    category: string;

    constructor(qualityRecordCategory: QualityRecordCategory){
        this.id = qualityRecordCategory.id;
        this.category =qualityRecordCategory.category;
    }

    static async findAll(){
        const client = await pool.connect();

        try{
            const query = 'select * from quality_record_category';
            const { rows } = await client.query(query);
            const qualityRecordCategorys = rows.map((category: QualityRecordCategory) => new QualityRecordCategory(category))
            return qualityRecordCategorys;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }
    }

    static async findById(id: number){
        const client = await pool.connect();
        
        try{
            const query = 'select * from quality_record_category where id =$1';
            const { rows } = await client.query(query, [id]);
            const qualityRecordCategorys = rows.map((category: QualityRecordCategory) => new QualityRecordCategory(category))
            return qualityRecordCategorys;
        } catch (err) {
            console.error(err);
        } finally {
            client.release();
        }

    }
}

module.exports = QualityRecordCategory;

export {};