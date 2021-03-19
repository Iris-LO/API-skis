const Ski = require('../models/Ski');

const skiController = {
    findByColor: async (request, response) => {
        response.json(await Ski.findByColor(request.params.color));
    },

    addSki: async (request, response) => {
        const newSki = new Ski(request.body);
        await newSki.save();

        response.json(newSki);
    },

    findOne: async (request, response) => {
        const oneSki = await Ski.findOne(request.params.id);

        if (oneSki){
            response.json(oneSki);
        } else {
            response.status(404).json('Ce ski-là n\'existe pas ! Fais une nouvelle recherche ;)');
        }
    },

    findAll: async(request, response) => {
        response.json(await Ski.findAll(request.body))
    },

    error404: (_, res) => {
        res.status(404).json('Hop là ! Tu t\'es perdu ? Y\'a rien par ici ...');
    }
};

module.exports = skiController;