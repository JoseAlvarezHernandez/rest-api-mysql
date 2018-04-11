/** 
 * @module routes/sos 
 * @author Jose de Jesus Alvarez Hernandez
 * @desc SOS API routes  
 */

/** Express dependency */
const express = require('express');

/** Router dependency */
const router = express.Router();

const sos = require('../controllers/sos');

/**
 * @swagger
 * definitions:
 *   SuccessMessageResponse:
 *     properties: 
 *       message:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   errorObject:
 *     type: object
 *     discriminator: type
 *     properties: 
 *       code:
 *         type: integer
 *       message:
 *         type: string
 */
/**
 * @swagger
 * definitions:
 *   error:
 *     properties:
 *       error: 
 *         $ref: '#/definitions/errorObject'
 */

 /** 
 * @swagger
 * /api/sos/{posteId}/alerts:
 *   get:
 *     tags:
 *       - Alertas
 *     description: Returns array of SOS' alerts
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: posteId
 *         description: SOS' identifier
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/BooleanResult'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 */
router.get('/api/sos/:posteId/alerts', sos.alerts);

module.exports = router;