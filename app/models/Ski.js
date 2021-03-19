const db = require('../database');

class Ski {
    constructor(data) {
        for (const prop in data) {
            this[prop] = data[prop];
        }
    }

    // model Active Record :
    static async findOne(id) {
        const oneSki = await db.query('SELECT * FROM ski WHERE id = $1',[id]);

        return oneSki.rows[0];
    }

    static async findAll() {
         const allSkis = await db.query('SELECT * FROM ski');
         return allSkis;
    }

    static async findByColor(color) {
        // puisqu'on a une fonction SQL, il nous suffit de l'appeler et de retourner ce qu'elle retourne
        const skisResult = await db.query('SELECT * FROM ski_by_color($1);', [color]);
        return skisResult.rows;
    }
    async save() {
        //  pour différencier un INSERT d'un UPDATE, on va vérifier la présence d'un id
        if(this.id) { // il y a un id, on UPDATE

        } else {
            const theSkiResult = await db.query('SELECT * FROM new_ski($1);', [this]); // nouvelle façon d'écrire grâce à json, plus propre
            this.id = theSkiResult.rows[0].id;
        }
    }
};

module.exports = Ski;