const rotas = require('express').Router()

const conexao = require('./config/conexao')

rotas.get('/', (req, res) => {
    let sql = `select * from tb_tarefas order by descricao asc`
    conexao.query(sql,(erro,rows,fields) => {
        if(erro) throw erro
        res.json(rows)
    })
})

//rota para mostrar apenas uma tarefa de acordo com o seu id

rotas.get('/:id', (req, res) => {
    const {id} = req.params
    let sql = 'select * from tb_tarefas where id_tarefa = ?'
    conexao.query(sql, [id], (erro, rows, fields) => {
        if (erro)throw erro
        res.json(rows[0])
    })
})

rotas.delete('/:id', (req, res) => {
    const {id} = req.params
    let sql = `delete from tb_tarefas where id_tarefa = '${id}'`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro)throw erro
        res.json({status:'tarefa excluida com sucesso'})
    })
})

rotas.post('/', (req, res) => {
    const {descricao, obs} = req.body
    let sql =  `insert into tb_tarefas(descricao,obs) values('${descricao}','${obs}')`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({status:'tarefa incluída com sucesso'})
    })
})
//criamos uma rota com método put, usado para edição e modificação de um dado do banco
rotas.put('/:id', (req, res) => { //Aqui especificamos que elemento da tabela estaremos editando
    const {id} = req.params // Estamos pegando o que foi passado por parâmetro na rota e colocamos dentro do objeto.
    const{descricao,obs} = req.body //O que for editado no body será adicionado dentro dos campos descricao e obs
    let sql = `update tb_tarefas set
                descricao = '${descricao}',
                obs = '${obs}'
                where id_tarefa = '${id}'`
                // udptade = modifique!
                // where = isso vai acontecer para a tarefa que tiver o id que foi passado no parâmetro
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({status: '✍️(◔◡◔)'})
    })
})

module.exports = rotas