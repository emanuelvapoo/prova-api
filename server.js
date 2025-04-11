import express from 'express';
import {v4 as uuidv4} from 'uuid';
const PORT = 3333

const app = express()
//Obrigatorio para RECEBER  requisição JSON
app.use(express.json())

const pessoas = []

//Buscar as pessoas cadastradas
app.get('/pessoas', (request, response)=>{
    response.status(200).json(pessoas)
})

//Cadastrar uma pessoa
app.post('/pessoas', (request, response)=>{
    const {nome, cargo} = request.body
    
    if(!nome){
        response.status(400).json({menssagem: 'Nome é obrigatório'})
        return
    }

    if(!cargo){
        response.status(400).json({menssagem: 'Cargo é obrigatório'})
        return
    }

    const pessoa = {
        id:1,
        nome,
        cargo
    }

    pessoas.push(pessoa)
    response.status(201).json({menssagem: "Cadastro realizado com sucesso", pessoa});
});

//Buscar uma única pessoa
app.get('/pessoas/:id', (request, response)=>{
    response.status(200).json({rota: 'GET /pessoas/:id'})
})

//Atualizar uma única pessoa 
app.put('/pessoas/:id', (request, response)=>{
    response.status(200).json({rota: 'PUT /pessoas/:id'})
})

//Deletar uma única pessoa
app.delete('/pessoas/:id', (request, response)=>{
    response.status(200).json({rota: 'DELETE /pessoas/:id'})
})

app.listen(PORT, ()=>{
    console.log('Servidor iniciado na PORTA:', PORT)
})