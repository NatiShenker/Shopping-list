const express = require('express');
const router = express.Router();

const sqlStr = {
    dbName: 'GROCERY_CATEGORIES',
    serverName: 'DESKTOP-RTS83TE\\SQLEXPRESS',
    categoiesTable: {
        tableName: 'dbo.CATEGORIES',
        columnName: '[CATEGORY_NAME]'
    }
};  
const msNodeDriver = 'msnodesqlv8';


router.get('/categories', (req, res) => {

    const sql = require('mssql/msnodesqlv8');

    const pool = new sql.ConnectionPool({
        database: sqlStr.dbName,
        server: sqlStr.serverName,
        driver: msNodeDriver,
        options: {
            trustedConnection: true
        }
    });

    pool.connect().then(() => {
        pool.request().query(`select ${sqlStr.categoiesTable.columnName} from ${sqlStr.categoiesTable.tableName}`, (err, result) => {
            if (err) console.log(err)
                res.send(result.recordset)
        })
    });

});

module.exports = router;