/** 
 * @module models 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc Model  
 */
const mysql = require('mysql');
const auth = {
    host: '127.0.0.1',
    user: 'root',
    database: 'test'
};

exports.getAlarms = (posteId, initDate, endDate) =>
    new Promise((resolve, reject) => {
        try {
            const connection = mysql.createConnection(auth);
            const query = ` SELECT 
                               id, name, description, 
                            from 
                                log
                            where 
                                initDate >= '${initDate}' 
                                and endDate <= '${endDate}' 
                            order by 
                                initDate DESC`;
            connection.query(query, (err, rows, fields) => err ? reject(err) : resolve(rows));
        } catch (err) {
            reject(err);
        }
    });
