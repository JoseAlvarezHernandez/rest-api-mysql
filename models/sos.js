/** 
 * @module models/sos 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc SOS Model  
 */
const mysql = require('mysql');
const auth = {
    host: '127.0.0.1',
    user: 'root',
    database: 'MYSQL'
};

exports.getAlarms = (posteId, initDate, endDate) =>
    new Promise((resolve, reject) => {
        try {
            const connection = mysql.createConnection(auth);
            const query = `SELECT * from columns_priv where Timestamp >= '${initDate}' and Timestamp <= '${endDate}' order by Timestamp DESC`;
            connection.query(query, (err, rows, fields) => err ? reject(err) : resolve(rows));
        } catch (err) {
            reject(err);
        }
    });
