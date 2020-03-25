const connection = require('../database/connection');

module.exports = {
    async create(request,response){
        const { id }= request.body;

        const dentista = await connection('dentista')
            .where('id', id)
            .select('nome')
            .first();

            if (!dentista){
                return response.status(400).json({ error: 'Dentista not found.'});
            }

        return response.json(dentista);
    }
}