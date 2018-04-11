/** 
 * @module controllers/sos 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc SOS controller  
 */
const sosModel = require('../models/sos');
exports.alerts = async(req, res, next) => {
    const results = await sosModel.getAlarms(req.params.posteId);
    res.status(200).send(results);;
}