/** 
 * @module models/sos 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc SOS Model  
 */
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7'
});

exports.getAlarms = (posteId) =>
    new Promise((resolve, reject) => {
        try {
            connection.connect();

            connection.query(`SELECT ${posteId} AS solution`, function (err, rows, fields) {
                if (err)
                    reject(err);
                else
                    resolve(rows);
            });

            connection.end();
        } catch (err) {
            reject(err);
        }
    });
