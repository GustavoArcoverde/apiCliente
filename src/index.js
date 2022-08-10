import Express from "express";
import Cors from 'cors';
import { cliente } from "./Controllers/clientes-controller.js";
import { bdSQLite } from "./Infra/bdSQLite-clientes.js";

const app = Express()
app.use(Express.json())
app.use(Cors())

cliente(app, bdSQLite)

const port = process.env.PORT | 3030;
app.listen(port, ()=>console.log(`http://localhost:${port}`))