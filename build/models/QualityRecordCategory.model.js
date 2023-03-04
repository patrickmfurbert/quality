"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pool = require("../persistence/db");
class QualityRecordCategory {
    constructor(qualityRecordCategory) {
        this.id = qualityRecordCategory.id;
        this.category = qualityRecordCategory.category;
    }
    static findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const client = yield pool.connect();
            try {
                const query = 'select * from quality_record_category';
                const { rows } = yield client.query(query);
                const qualityRecordCategorys = rows.map((category) => new QualityRecordCategory(category));
                return qualityRecordCategorys;
            }
            catch (err) {
                console.error(err);
            }
            finally {
                client.release();
            }
        });
    }
}
