import express from "express";
import cors from 'cors';
import { cliente } from "./Controllers/clientes-controller.js";
import { bdSQLite } from "./Infra/bdSQLite-clientes.js";

const app = express()
app.use(express.json())
app.use(cors())

cliente(app, bdSQLite)

const port = process.env.PORT || 3030;
app.listen(port, ()=>console.log(`http://localhost:${port}`))