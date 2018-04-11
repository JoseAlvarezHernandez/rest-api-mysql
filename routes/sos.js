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
 * definitions:
 *   PosteAPI:
 *     type: object
 *     discriminator: type
 *     properties: 
 *       idEvento:
 *         type: integer
 *       iTipoEvento:
 *         type: integer
 *       idItem:
 *         type: integer  
 *       iTipoItem:
 *         type: integer  
 *       cDescripcion:
 *         type: string  
 *       dFechaHora:
 *         type: date  
 *       idUsuario:
 *         type: integer
 *       iStatus:
 *         type: integer
 *       estado:
 *         type: integer   
 */
/**
 * @swagger
 * definitions:
 *   PosteResponse:
 *     type: array
 *     items:
 *       $ref: '#/definitions/PosteAPI'
 */
 /** 
 * @swagger
 * /api/sos/{posteId}/alerts/{initDate}/{endDate}:
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
 *       - name: initDate
 *         description: Initial date for search
 *         in: path
 *         required: true
 *         type: string
 *       - name: endDate
 *         description: End date for search
 *         in: path
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Sucessful request
 *         schema:
 *           $ref: '#/definitions/PosteResponse'
 *       401:
 *         description: Unauthorized access 
 *         schema:
 *           $ref: '#/definitions/error'
 *       400:
 *         description: Bad request 
 *         schema:
 *           $ref: '#/definitions/error'
 */
router.get('/api/sos/:posteId/alerts/:initDate/:endDate', sos.alerts);

module.exports = router;