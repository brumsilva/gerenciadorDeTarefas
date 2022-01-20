require('./config/conexao')

const express = require('express')
const app = express()
const porta = 3000
app.use(express.json())
// const cors = require('cors')

// app.use(cors())

app.get('/teste', (req, res) => {
    res.send('Olá, mundo')
})

const rotasTarefas = require('./rotas')
app.use('/tarefas', rotasTarefas)

app.listen(porta, () => {
    console.log('༼ つ ◕_◕ ༽つ')
})