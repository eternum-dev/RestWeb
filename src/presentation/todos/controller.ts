import { Request, Response } from "express"

const todos = [
    { id: 1, text: 'buy milk', createAt: new Date() },
    { id: 2, text: 'buy bread', createAt: null },
    { id: 3, text: 'buy butter', createAt: new Date() },
];

export class TodosController {


    //* DI
    constructor() { }

    public getTodos = (req: Request, res: Response) => {

        return res.json(todos);
    }

    public getTodosById = (req: Request, res: Response) => {
        const id = +req.params.id;

        if (isNaN(id)) return res.status(400).json({ error: `ID is not a number, id:n ${id}` })
        const todo = todos.find(todo => todo.id === id);

        // 
        (todo)
            ? res.json(todo)
            : res.status(404).json({ error: `TODO with id: ${id} no found` })
    }
}