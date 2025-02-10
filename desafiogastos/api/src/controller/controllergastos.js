const con = require('../connect');

function create(req, res) {
    const { data, valor, descricao } = req.body;
    const sql = `INSERT INTO gastos (data, valor, descricao) VALUES (?, ?, ?)`;
    
    con.query(sql, [data, valor, descricao], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json('Erro ao cadastrar gastos');
        } else {
            res.status(201).json('Gasto cadastrado com sucesso');
        }
    });
}

function read(req, res) {
    const sql = 'SELECT * FROM gastos';
    con.query(sql, (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json('Erro ao consultar gastos');
        } else {
            res.status(200).json(result);
        }
    });
}

function del(req, res) {
    const { id } = req.params;
    const sql = `DELETE FROM gastos WHERE gasto_id = ?`;

    con.query(sql, [id], (error, result) => {
        if (error) {
            console.error(error);
            res.status(500).json('Erro ao deletar gastos');
        } else {
            res.status(200).json('Gasto deletado com sucesso');
        }
    });
}

module.exports = {
    create,
    read,
    del
};
