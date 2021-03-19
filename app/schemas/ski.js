const Joi = require('joi');

const skiSchema = Joi.object ({
    label: Joi.string().required(), // unique n'est pas vérifiée par Joi. Par contre si on a des checks on peut les apposer dans Joi.
    description: Joi.string().required(),
    color: Joi.string().required(),
    level: Joi.string().required(), // ici on peut caler une regex dans pattern() qu'on rajoute avant le required.
    height: Joi.number().integer().required(),
    // height: Joi.number().integer().default(170), // pas besoin de required ici
    // default UNIQUEMENT pour qqchose qu'on ne va JAMAIS utiliser 
    condition: Joi.boolean().required(),
});

module.exports = skiSchema;