const connection = require('../database/connection');

module.exports = {

    async create(request, response){
        const { descricao } = request.body;
        const dentista_id = request.headers.authorization;

        const result = await connection('agenda').insert({
            descricao,
            dentista_id
        });

        const id = result[0];

        return response.json({ id });
    },

    async index(request,response){
        const { page = 1} = request.query;

        const [count] = await connection('agenda')
            .count();

        const agendas = await connection('agenda')
            .join('dentista', 'dentista.id', '=', 'agenda.dentista_id')
            .limit(5)
            .offset((page - 1 ) * 5)
            .select(['agenda.*', 'dentista.nome', 'dentista.cidade', 'dentista.uf']);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(agendas);
    },

    async delete(request,response){
        const { id } = request.params;
        const dentista_id = request.headers.authorization;

        const agenda = await connection('agenda')
            .where('id', id)
            .select('dentista_id')
            .first();

        if (agenda === undefined || dentista_id !== agenda.dentista_id){
            return response.status(401).json({error: 'Operation not permited.'});
        }

        await connection('agenda').where('id', id).delete();

        return response.status(204).send();
    }
};