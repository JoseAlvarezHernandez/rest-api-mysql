/** 
 * @module controllers/sos 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc SOS controller  
 */
const sosModel = require('../models/sos');

exports.alerts = async(req, res, next) => {
    const {posteId, initDate, endDate} = req.params;
    const results = await sosModel.getAlarms(posteId, initDate, endDate);
    //const results = [{posteId, initDate, endDate}];
    res.status(200).send(results);
}