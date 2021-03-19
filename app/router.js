const skiController = require('./controllers/skiController');

const { Router } = require('express');

const skiSchema = require('./schemas/ski');
const { validateBody } = require('./services/validator');

const router = Router();

/* LES ROUTES GET*/
/** 
 * Afficher la liste des skis
 * @route GET /skis
 * @group ski - La route pour afficher tous les modèles de skis
 * @param {Object} ski.query - un tableau de skis
 * @returns {string} 200 - une liste complète des skis
*/
//  Récupérer toute la liste des skis
router.get('/skis', skiController.findAll);

/** 
 * Afficher un ski par son id
 * @route GET /ski/:id(\\d+)
 * @group ski - La route pour afficher tous les modèles de skis
 * @param {string} label.query - un label
 * @param {string} description.query - une description
 * @param {string} color.query - une couleur
 * @param {string} level.query - un niveau
 * @param {Number} height.query - une hauteur
 * @param {Boolean} condition.query - un état
 * @returns {string} 200 - un ski affiché par son id
*/
//  Récupérer un ski par son id
router.get('/ski/:id(\\d+)', skiController.findOne);

/** 
 * Afficher la liste des skis
 * @route GET /ski/color/:color
 * @group ski - La route pour afficher tous les modèles de skis par couleur
 * @param {string} label.query - un label
 * @param {string} description.query - une description
 * @param {string} color.query - une couleur
 * @param {string} level.query - un niveau
 * @param {Number} height.query - une hauteur
 * @param {Boolean} condition.query - un état
 * @returns {string} 200 - une liste des skis correspondant à la couleur recherchée
*/
// Chercher un ski par couleur
router.get('/ski/color/:color', skiController.findByColor);


/* LES ROUTES POST*/
/** 
 * Afficher la liste des skis
 * @route POST /ski
 * @group ski - La route pour générer un nouveau modèle de ski
 * @param {string} label.body - un nouveau label
 * @param {string} description.body - une nouvelle description
 * @param {string} color.body - une nouvelle couleur
 * @param {string} level.body - un nouveau level
 * @param {Number} height.body - une nouvelle hauteur
 * @param {Boolean} condition.body - un nouvel état
 * @returns {string} 200 - un ski fraîchement créé
*/
// Ajouter un nouveau ski
router.post('/ski', validateBody(skiSchema), skiController.addSki);


// Afficher une erreur 404
router.use(skiController.error404);

module.exports = router;