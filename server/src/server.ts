import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar informações
// POST = Cadastrat informações
// PUT = Atualizar informações de uma entidade
// PATCH = Atualizar uma única informação de uma entidade
// DELETE = Deletar uma informação
app.use(cors());
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log('HTTP server running!!')
})