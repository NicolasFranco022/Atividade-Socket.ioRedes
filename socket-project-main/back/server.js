// Importa variáveis de ambiente do arquivo .env
import 'dotenv/config'

// Importa o app Express criado no app.js
import { app } from './src/app.js'

// Importa a função que cria o servidor Socket.IO
import { createSocket } from './src/socket.js';

// Define a porta do servidor (padrão 3333)
const port = process.env.PORT || 3333

// Cria o servidor HTTP usando o app Express
const httpServer = app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
)

// Cria e inicia o servidor WebSocket a partir do HTTP server
createSocket(httpServer);
