const connection = require('../database/connection');
const crypto = require('crypto');

module.exports = {
    async create(request, response){
        const { nome, email, cidade, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        console.log(`Id: ${id} - Nome: ${nome} - Email ${email} - Cidade ${cidade} - UF ${uf}`);

        await connection('dentista').insert({
            id,
            nome,
            email,
            cidade,
            uf
        });

        return response.json({ id });
    },

    async index(request, response) {
        const dentistas = await connection('dentista').select('*');
    
        return response.json(dentistas);
    },

    async agendas(request, response) {
        const dentista_id = request.headers.authorization;

        if (dentista_id === undefined){
            return response.status(401).json({error: 'Operation not permited.'});
        }

        const agendas = await connection('agenda')
            .where('dentista_id', dentista_id)
            .select('*');

        return response.json(agendas);
    }
};