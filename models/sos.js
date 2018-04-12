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

exports.getAlarms = (posteId) =>
    new Promise((resolve, reject) => {
        try {
            const connection = mysql.createConnection(auth);
            connection.query(`SELECT * from columns_priv`, (err, rows, fields) => err ? reject(err) :  resolve(rows));
        } catch (err) {
            reject(err);
        }
    });
